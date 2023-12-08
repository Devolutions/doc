---
eleventyComputed:
  title: Background services
  description: When experiencing a performance degradation with {{ en.RDM }}, you will be able to verify if a synchronizer is running in the background causing the system to slow down.  
---
The Synchronizers feature centralizes all your synchronizers entry in one place.  

When experiencing a performance degradation with {{ en.RDM }}, you will be able to verify if a synchronizer is running in the background causing the system to slow down.  
![Synchronizers](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip11280.png) 

## Is Online 

***Is Online*** allows you to verify and change the settings of your server's online availability.  
![Is Online](https://webdevolutions.azureedge.net/docs/en/rdm/windows/clip10033.png) 


| OPTION                      | DESCRIPTION                                                            |
|-----------------------------|------------------------------------------------------------------------|
| Enable check for server availability | Server is pinged to determine if they are available. Server will be displayed in "red" in the tree view if not available.    |
| Execute automatic check every    | Execute the online check automatically each determined amount of minutes.                                                |
| Check is online                  | If the option is ***On*** the application will verify if the server is online.                                          |
| Online detection                 | If the ***Check is online*** option is enabled, select the detection method between: <br><br> <ul><li>Ping</li><li>Port scan</li></ul>|
