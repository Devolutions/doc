#######################################################################################################################
# The writer of the script that came with the PowerCLI assumed it would run in the context with a UI
# Since we run this programmatically, we need to adapt it and since it was signed which makes it impossible to modify,
# we need to have our own copy.  Other versions of the PowerCLI may break this script...
#######################################################################################################################
Param(
	[Parameter(Mandatory=$true)]
	[string]$viServer,
	[Parameter(Mandatory=$true)]
	[string]$userName,
	[Parameter(Mandatory=$true)]
	[string]$password
) #end param

#Script scoped variables (Global is the whole profile, remember?)
$VMHost = $null;

####################################################################
#
#  <Region> with content from VmWare's script 
#
####################################################################

	# Returns the path (with trailing backslash) to the directory where PowerCLI is installed.
	function Get-InstallPath {
	   $regKeys = Get-ItemProperty "hklm:\software\VMware, Inc.\VMware vSphere PowerCLI" -ErrorAction SilentlyContinue
	   
	   #64bit os fix
	   if($regKeys -eq $null){
		  $regKeys = Get-ItemProperty "hklm:\software\wow6432node\VMware, Inc.\VMware vSphere PowerCLI"  -ErrorAction SilentlyContinue
	   }

	   return $regKeys.InstallPath
	}

	# List of modules to be loaded
	$moduleList = @(
		"VMware.VimAutomation.Core",
#		"VMware.VimAutomation.Vds",
#		"VMware.VimAutomation.Cloud",
#		"VMware.VimAutomation.PCloud",
#		"VMware.VimAutomation.Cis.Core",
#		"VMware.VimAutomation.Storage",
#		"VMware.VimAutomation.HA",
#		"VMware.VimAutomation.vROps",
		"VMware.VumAutomation",
		"VMware.VimAutomation.License"
		)

	# Load modules
	function LoadModules(){
	   $loaded = Get-Module -Name $moduleList -ErrorAction Ignore | % {$_.Name}
	   $registered = Get-Module -Name $moduleList -ListAvailable -ErrorAction Ignore | % {$_.Name}
	   $notLoaded = $registered | ? {$loaded -notcontains $_}
		  
	   foreach ($module in $registered) {
		  if ($loaded -notcontains $module) {
			 Import-Module $module		 
		  }
	   }
	}

	# Loads additional snapins and their init scripts
	function LoadSnapins(){
	   
	   [xml]$xml = Get-Content ("{0}\vim.psc1" -f (Get-InstallPath))
	   $snapinList = Select-Xml  "//PSSnapIn" $xml |%{$_.Node.Name }

	   $loaded = Get-PSSnapin -Name $snapinList -ErrorAction Ignore | % {$_.Name}
	   $registered = Get-PSSnapin -Name $snapinList -Registered -ErrorAction Ignore  | % {$_.Name}
	   $notLoaded = $registered | ? {$loaded -notcontains $_}
	   
	   foreach ($snapin in $registered) {
		  if ($loaded -notcontains $snapin) {		
			 Add-PSSnapin $snapin		 
		  }

		  # Load the Intitialize-<snapin_name_with_underscores>.ps1 file
		  # File lookup is based on install path instead of script folder because the PowerCLI
		  # shortuts load this script through dot-sourcing and script path is not available.
		  $filePath = "{0}Scripts\Initialize-{1}.ps1" -f (Get-InstallPath), $snapin.ToString().Replace(".", "_")
		  if (Test-Path $filePath) {
			 & $filePath
		  }
	   }
	}

####################################################################
#
#  </Region> with content from VmWare's script 
#
####################################################################

function ThrowIfMissing()
{
	Param(
		[Parameter(Mandatory=$true)]
		[string]$strValue,
		[Parameter(Mandatory=$true)]
		[string]$errorMsg
	) #end param

	$strCheck = [bool]$strValue;
	if (!$strCheck)
	{
		throw $errorMsg
	}
}

function DoServerConnect()
{
	##$temp = [System.Runtime.InteropServices.marshal]::PtrToStringAuto([System.Runtime.InteropServices.marshal]::SecureStringToBSTR($password))
	$script:VMHost = Connect-VIServer $viServer -User $userName -Password $password;
	if ($script:VMHost -eq $null ) { throw "Connection to server failed!";}     
}

function DoServerDisconnect()
{
	if ($script:VMHost) 
	{
		Disconnect-VIServer $script:VMHost -Force -Confirm:$false | Out-Null;
		$script:VMHost
	}
}

function DoGet()
{
	Get-View -ViewType VirtualMachine | %{$t = new-object Devolutions.RemoteDesktopManager.Managers.VMImageWrapper;
		$t.Name = $_.name;
		$t.VMid = $_.moref.Value;
		$t.ToolsVersionStatus = $_.Guest.toolsVersionStatus;
		$t.ToolsRunningStatus = $_.Guest.toolsRunningStatus;
		$t.PowerState = $_.runtime.powerState;
		$t.Annotation = $_.config.annotation;
		$t.GuestMemoryUsage = $_.summary.quickStats.guestMemoryUsage;
		$t.HostMemoryUsage = $_.summary.quickStats.hostMemoryUsage;
		$t.OverallCpuUsage = $_.summary.quickStats.overallCpuUsage;
		$t.VmPathName = $_.summary.config.VmPathName;
		$t;	
	}
}

function DoVmStart()
{
	Param(
		[Parameter(Mandatory=$true)]
		[string]$vmName = ""
	) #end param
	Start-VM -VM "$vmName" -RunAsync:$true -Confirm:$false;
}

function DoVmStop()
{
	Param(
		[Parameter(Mandatory=$true)]
		[string]$vmName = ""
	) #end param
	Stop-VM -VM "$vmName" -RunAsync:$true -Confirm:$false;
}

function DoVmSuspend()
{
	Param(
		[Parameter(Mandatory=$true)]
		[string]$vmName = ""
	) #end param	
	Suspend-VM -VM "$vmName" -RunAsync:$true -Confirm:$false;
}

function DoVmRestart()
{
	Param(
		[Parameter(Mandatory=$true)]
		[string]$vmName = ""
	) #end param
	Restart-VM -VM "$vmName" -RunAsync:$true -Confirm:$false;
}

function DoVmShutdown()
{
	Param(
		[Parameter(Mandatory=$true)]
		[string]$vmName = ""
	) #end param
	#Async by nature
	Shutdown-VMGuest -VM "$vmName" -Confirm:$false;
}

function DoVmConnect()
{
	Param(
		[Parameter(Mandatory=$true)]
		[string]$viServer = "",
		[Parameter(Mandatory=$true)]
		[string]$morefId = "",
		[Parameter(Mandatory=$true)]
		[string]$vmrcPath = ""

	) #end param
	$si = Get-View ServiceInstance;
	$sm = Get-View $si.Content.SessionManager;      
	$ticket = $sm.AcquireCloneTicket();
	try
	{
		Start-Process -FilePath "$($vmrcPath)" -ArgumentList "vmrc://clone:$($ticket)@$($viServer)/?moid=$($morefId)" 
		#we must sleep to allow time for the process to be started, the token would be invalid if we're already disconnected!
		Start-Sleep -s 10
	}
	catch {write-error $ErrorMessage}   
}

############################
#  Main body
############################

LoadModules
#LoadSnapins

DoServerConnect

function DoVmCommand()
{
	Param(
		[Parameter(Mandatory=$true)]
		[string]$commandName,
		[string]$vmName = "",
		[string]$morefId = "",
		[string]$vmrcPath = ""
	) #end param

	switch  ($commandName) 
	{ 
		"GET" 
		{
			DoGet
		} 
		"START" 
		{
			ThrowIfMissing $vmName "You must provide the vmName";
			DoVmStart $vmName;
		}
		"STOP" 
		{
			ThrowIfMissing $vmName "You must provide the vmName";
			DoVmStop $vmName;
		} 
		"SUSPEND" 
		{
			ThrowIfMissing $vmName "You must provide the vmName";
			DoVmSuspend $vmName;
		} 
		"RESTART"  
		{
			ThrowIfMissing $vmName "You must provide the vmName";
			DoVmRestart $vmName;
		} 
		"SHUTDOWN" 
		{
			ThrowIfMissing $vmName "You must provide the vmName";
			DoVmShutdown $vmName;
		} 
		"CONNECT" 
		{
			ThrowIfMissing $morefId "You must provide the vm reference ID";
			ThrowIfMissing $vmrcPath "You must provide the path to VMRC";
			DoVmConnect $script:vmHost.Name $morefId $vmrcPath
		}
		"DISCONNECT-VI" 
		{
			DoServerDisconnect;
		}
		default 
		{
			throw "invalid command"
		}
	}  
}	
