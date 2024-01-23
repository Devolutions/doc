---
eleventyComputed:
  title: Enable debug WebView for embedded Safari in {{ en.RDMMAC }}
  description: Follow these steps to enable  debug WebView for embedded Safari in {{ en.RDMMAC }}
---
Debugging a web page rendered within a WebView can be an invaluable exercise, especially when it comes to meticulously examining its layout, diving into the intricacies of its design, or addressing confusing JavaScript complications. Follow these steps to enable  debug WebView for embedded Safari in {{ en.RDMMAC }}.

## Enable Safari Developer Tools
1. Open ***Safari***.
1. Select ***Safari – Preferences***.  
![Safari – Preferences](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6065.png)
1. Go to ***Advanced***.
1. Check ***Show Develop menu in menu bar***.  
![Advanced – Show Develop menu in menu bar](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6066.png)
The ***Safari Developer Tools*** are now available from the ***Develop menu in the menu bar***.

## Enable debug WebView for embedded Safari
1. Close {{ en.RDM }}.
1. From the Terminal (Terminal.app), run the following command:
`defaults write com.devolutions.remotedesktopmanager WebKitDeveloperExtras -bool true`
1. Open {{ en.RDM }} and navigate to the website in the embedded browser.
1. Back in Safari, go to ***Develop – Name of your local machine***.  
![Develop – Name of your local machine](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6071.png)
The website is now listed under the local machine.  
![Website under the local machine](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6067.png)
1. Click the website name to open the ***Safari Developer tools***.  
![Safari Developer tools](https://webdevolutions.blob.core.windows.net/docs/en/kb/KB6069.png)
