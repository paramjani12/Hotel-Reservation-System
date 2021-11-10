# Hotel Reservation System


### **Project Description**

A Hotel Reservation System having scheduling calendar component and room statuses bar. System has three components. First component has list of all rooms and their types and icons. Second component is scheduler where guest details will appear on check-in. Third component has all rooms’ status information. Major features are guest check-in and assigning services. Guest check-in leads to reservation of room according to check-in check-out dates and room numbers with key details like guest name, their stay information, payment details in form of a slot (div) in the scheduler. The admin can add, edit or move slots according to the need. Another feature is assigning services. Here details like room number and service details like room service, luggage pickup, laundry, etc can be assigned using the system. Both these features make the management of all rooms their clean up and related service hassle free. Other less essentials details are stored in local storage.  


### **How to run the project**

#### 1.	Using extension based live server

-  If you are using vs code editor you can install ritwickdey.liveserver extension using which you can start live server. 
-  Default live server address will be http://127.0.0.1:5500/ which open automatically in default browser.
-  If it doesn’t open implicitly start localhost:5500 in your browser.
#### 2. Using node.js live server 

- 	Verify that node.js is installed in your system
- 	Open terminal if using vs code we have terminal menu at the top select new terminal in it
- 	Install live server using: npm install -g live-server
- 	This command is using for installing live server, so every time it is not required to run this command.
- 	To start live server command is: live-server
- 	Every time you need to start a live server simply write above command in new terminal.
- 	Default live server address will be http://127.0.0.1:8080/ which open automatically in default browser.
- 	If it doesn’t open implicitly start localhost:8080 in your browser.


### **Project implementation**

#### - This is the home page with has navbar with both features guest check-in and assign service. The three can be easily visualised. First component has room numbers and its types, second component is the scheduler and third component has all rooms’ status information. 

![1](/uploads/cfea3c6f3d92a5c6c998ebba1b6b5221/1.png)


#### - This is the check-in modal created using bootstap. It takes personal, stay, payment and tariff information of guests and stores it into local storage of web browser.

![2](/uploads/265efb025ebb3ef89300206b117271ec/2.png)


#### - We can access details of check-in modal in local storage. It is in form of an array. Steps to local storage:
1. Open inspect element or press ctrl+shft+i
2.  Go to application bar
3.  You will find storage section in left panel 

![3](/uploads/84afca1c1a3491af8aa20e27bc7dc52c/3.png)


#### - This is the assign service modal which is also created using bootstrap. It takes service information and stores into local storage.

![4](/uploads/53043038114ab59bb976363519e17e5e/4.png)


#### - We can access details of check-in modal in local storage. It is in form of an array. Steps to local storage is aready shown above.

![5](/uploads/93740af00a2da27de5cfd2bc0f860780/5.png)


#### - This type of slots with information like guest name, their check-in check-out dates and times , payment details is shown in scheduler. 

![6](/uploads/9235ee5abba5d315e8983c1ba21db2d0/6.png)

![7](/uploads/22768b30841d4b259fba44b25855a89d/7.png)


#### - Edge cases: If check-in date is last date of the month than a small slot with smaller font size with maximum information possible is made.

![8](/uploads/74a9ac58e2649a45a89351b6feb58ad6/8.png)


#### - Drag and Drop Feature

Before

![9](/uploads/9fd11b33fb362cb9c60f72d5081e4ee9/9.png)

After

![10](/uploads/d253039764a7d56ec1722746da9f6152/10.png)




