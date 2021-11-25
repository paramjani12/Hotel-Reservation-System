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

#### - This is the home page which has navbar with both features guest check-in and assign service. The three can be easily visualised. First component has room numbers and its types, second component is the scheduler and third component has all rooms’ status information. 

![1](https://user-images.githubusercontent.com/69115040/141167533-956b8857-5938-4431-a18d-bb9516ab08a5.png)



#### - This is the check-in modal created using bootstap. It takes personal, stay, payment and tariff information of guests and stores it into local storage of web browser.

![2](https://user-images.githubusercontent.com/69115040/141167975-e4cba7b6-6bf8-47de-9f6e-046e7fdd2fa2.png)



#### - We can access details of check-in modal in local storage. It is in form of an array. Steps to local storage:
1. Open inspect element or press ctrl+shft+i
2.  Go to application bar
3.  You will find storage section in left panel 

![3](https://user-images.githubusercontent.com/69115040/141168135-90c047ad-d6a3-45d4-ab62-6aba3e08b029.png)


#### - This is the assign service modal which is also created using bootstrap. It takes service information and stores into local storage.

![4](https://user-images.githubusercontent.com/69115040/141168199-50784603-65af-4a97-81e7-4d77bd00c4b1.png)


#### - We can access details of check-in modal in local storage. It is in form of an array. Steps to local storage is aready shown above.

![5](https://user-images.githubusercontent.com/69115040/141168262-f4891f87-6b56-4761-9cb7-9119183ac0bf.png)


#### - This type of slots with information like guest name, their check-in check-out dates and times , payment details is shown in scheduler. 

![6](https://user-images.githubusercontent.com/69115040/141168312-6db0d4b4-c5f3-4a58-af74-d8f466acda9a.png)

![7](https://user-images.githubusercontent.com/69115040/141168346-38ad4328-9aad-46cf-8201-8120d9b705a8.png)


#### - Edge cases: If check-in date is last date of the month than a small slot with smaller font size with maximum information possible is made.

![8](https://user-images.githubusercontent.com/69115040/141168410-46e8e527-5b3b-4463-90de-15317ffdfbdd.png)


#### - Drag and Drop Feature

Before

![9](https://user-images.githubusercontent.com/69115040/141168444-e6657485-d39d-4538-b348-14ca1c96971a.png)

After

![10](https://user-images.githubusercontent.com/69115040/141168489-0548510b-3276-4e49-825b-ddf634650be2.png)




