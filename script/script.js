//current month and year that is displayed in the navbar
const month=["January","February","March","April","May","June","July","August","September","October","November","December"];
d = new Date();
document.getElementById("ourtime").innerHTML = month[d.getMonth()] + " " +d.getFullYear(); 

// variable used for fetching data from local storage and displaying information in the div in centertable are declared here
let firstnamepurpose;
let checkinpurpose;
let checkintimepurpose;
let checkoutpurpose;
let checkouttimepurpose;
let numberofnightspurpose;
let methodpurpose;
let roomnumberpurpose;
let firstnamediv;
let checkindiv;
let checkintimediv;
let checkoutdiv;
let checkouttimediv;
let numberofnightsdiv;
let methoddiv;
let roomnumberdiv;
let checkindate;




//storing data in local storage for assigning service
assignservice = document.getElementById("assignservice");
assignservice.addEventListener("click", function(){
    roomno=document.getElementById("roomno").value;
    servicetask=document.getElementById("servicetask").value;
    starttime=document.getElementById("starttime").value;
    endtime=document.getElementById("endtime").value;
    if(localStorage.getItem('itemAssignService')==null){
        itemAssignServiceArray=[];
        itemAssignServiceArray.push([roomno,servicetask,starttime,endtime]);
        localStorage.setItem('itemAssignService',JSON.stringify(itemAssignServiceArray));
    }
    else{
        itemAssignServiceStr = localStorage.getItem('itemAssignService');
        itemAssignServiceArray = JSON.parse(itemAssignServiceStr);
        itemAssignServiceArray.push([roomno,servicetask,starttime,endtime]);
        localStorage.setItem('itemAssignService',JSON.stringify(itemAssignServiceArray));
    }
    // jquery to hide bootstrap modal on clicking submit button
    $("#serviceModal").modal("hide");
    // We are not using form as we cannot refrest page. so to remove form details we use this jquery
    $(".modal-body input").val("");
});



//check-in function
checkedin = document.getElementById("checkedin");
checkedin.addEventListener("click", function(){
    //storing data in local storage for check-in details
    firstname=document.getElementById("firstname").value;
    localStorage.setItem("firstnamepurpose",firstname);
    lastname=document.getElementById("lastname").value;
    roomnumber=document.getElementById("roomnumber").value;
    localStorage.setItem("roomnumberpurpose",roomnumber);
    contactnumber=document.getElementById("contactnumber").value;
    checkin=document.getElementById("checkin").value;
    localStorage.setItem("checkinpurpose",checkin);
    checkintime=document.getElementById("checkintime").value;
    localStorage.setItem("checkintimepurpose",checkintime);
    checkout=document.getElementById("checkout").value;
    localStorage.setItem("checkoutpurpose",checkout);
    checkouttime=document.getElementById("checkouttime").value;
    localStorage.setItem("checkouttimepurpose",checkouttime);
    numberofnights=document.getElementById("numberofnights").value;
    localStorage.setItem("numberofnightspurpose",numberofnights);
    adults=document.getElementById("adults").value;
    children=document.getElementById("children").value;
    paymentmethod=document.getElementById("paymentmethod").value;
    localStorage.setItem("methodpurpose",paymentmethod);
    card=document.getElementById("card").value;
    cardtype=document.getElementById("cardtype").value;
    expiry=document.getElementById("expiry").value;
    totalcharges=document.getElementById("totalcharges").value;
    discount=document.getElementById("discount").value;
    totaltax=document.getElementById("totaltax").value;
    totalrate=document.getElementById("totalrate").value;
    extracharges=document.getElementById("extracharges").value;
    total=document.getElementById("total").value;
    flatdiscount=document.getElementById("flatdiscount").value;
    amountpaid=document.getElementById("amountpaid").value;
    deposit=document.getElementById("deposit").value;
    roundoff=document.getElementById("roundoff").value;
    balance=document.getElementById("balance").value;
    if(localStorage.getItem('itemCheckIn')==null){
        itemCheckInArray=[];
        itemCheckInArray.push([firstname,lastname,roomnumber,contactnumber,checkin,checkout,numberofnights,adults,children,paymentmethod,card,cardtype,expiry,totalcharges,discount,totaltax,totalrate,extracharges,total,flatdiscount,amountpaid,deposit,roundoff,balance]);
        localStorage.setItem('itemCheckIn',JSON.stringify(itemCheckInArray));
    }
    else{
        itemCheckInStr = localStorage.getItem('itemCheckIn');
        itemCheckInArray = JSON.parse(itemCheckInStr);
        itemCheckInArray.push([firstname,lastname,roomnumber,contactnumber,checkin,checkout,numberofnights,adults,children,paymentmethod,card,cardtype,expiry,totalcharges,discount,totaltax,totalrate,extracharges,total,flatdiscount,amountpaid,deposit,roundoff,balance]);
        localStorage.setItem('itemCheckIn',JSON.stringify(itemCheckInArray));
    }
    // jquery to hide bootstrap modal on clicking submit button
    $("#roomModal").modal("hide");
    // We are not using form as we cannot refrest page. so to remove form details we use this jquery
    $(".modal-body input").val("");
    // dropdown menu does reset using upper jquery so we use this method to reset it's default value
    let cardremove = document.getElementById("cardtype");
    cardremove.selectedIndex = 0;
    let payremove = document.getElementById("paymentmethod");
    payremove.selectedIndex = 0;


 
    // fetching details from local storage for displaying in div in center table
    firstnamediv = localStorage.getItem("firstnamepurpose");
    checkindiv = localStorage.getItem("checkinpurpose");
    checkintimediv = localStorage.getItem("checkintimepurpose");
    checkoutdiv = localStorage.getItem("checkoutpurpose");
    checkouttimediv = localStorage.getItem("checkouttimepurpose");
    methoddiv = localStorage.getItem("methodpurpose");
    numberofnightsdiv = localStorage.getItem("numberofnightspurpose");
    roomnumberdiv = localStorage.getItem("roomnumberpurpose");
    // getting check-in date for comparing purpose
    d = new Date(checkindiv);
    checkindate = d.getDate();
    // compare check-in date and roomnumber to adjust div in center table according to room number vartically and check-in date horizontally
    if(checkindate == "1" && roomnumberdiv == "101"){
        fieldroom("1room1");
    } 
    else if(checkindate == "2" && roomnumberdiv == "101"){
        fieldroom("2room1");
    }
    else if(checkindate == "3" && roomnumberdiv == "101"){
        fieldroom("3room1");
    } 
    else if(checkindate == "4" && roomnumberdiv == "101"){
        fieldroom("4room1");
    }
    else if(checkindate == "5" && roomnumberdiv == "101"){
        fieldroom("5room1");
    }
    else if(checkindate == "6" && roomnumberdiv == "101"){
        fieldroom("6room1");
    }
    else if(checkindate == "7" && roomnumberdiv == "101"){
        fieldroom("7room1");
    }
    else if(checkindate == "8" && roomnumberdiv == "101"){
        fieldroom("8room1");
    }
    else if(checkindate == "9" && roomnumberdiv == "101"){
        fieldroom("9room1");
    }
    else if(checkindate == "10" && roomnumberdiv == "101"){
        fieldroom("10room1");
    }
    else if(checkindate == "11" && roomnumberdiv == "101"){
        fieldroom("11room1");
    }
    else if(checkindate == "12" && roomnumberdiv == "101"){
        fieldroom("12room1");
    }
    else if(checkindate == "13" && roomnumberdiv == "101"){
        fieldroom("13room1");
    }
    else if(checkindate == "14" && roomnumberdiv == "101"){
        fieldroom("14room1");
    }
    else if(checkindate == "15" && roomnumberdiv == "101"){
        fieldroom("15room1");
    }
    else if(checkindate == "16" && roomnumberdiv == "101"){
        fieldroom("16room1");
    }
    else if(checkindate == "17" && roomnumberdiv == "101"){
        fieldroom("17room1");
    }
    else if(checkindate == "18" && roomnumberdiv == "101"){
        fieldroom("18room1");
    }
    else if(checkindate == "19" && roomnumberdiv == "101"){
        fieldroom("19room1");
    }
    else if(checkindate == "20" && roomnumberdiv == "101"){
        fieldroom("20room1");
    }
    else if(checkindate == "21" && roomnumberdiv == "101"){
        fieldroom("21room1");
    }
    else if(checkindate == "22" && roomnumberdiv == "101"){
        fieldroom("22room1");
    }
    else if(checkindate == "23" && roomnumberdiv == "101"){
        fieldroom("23room1");
    }
    else if(checkindate == "24" && roomnumberdiv == "101"){
        fieldroom("24room1");
    }
    else if(checkindate == "25" && roomnumberdiv == "101"){
        fieldroom("25room1");
    }
    else if(checkindate == "26" && roomnumberdiv == "101"){
        fieldroom("26room1");
    }
    else if(checkindate == "27" && roomnumberdiv == "101"){
        fieldroom("27room1");
    }
    else if(checkindate == "28" && roomnumberdiv == "101"){
        fieldroom("28room1");
    }
    else if(checkindate == "29" && roomnumberdiv == "101"){
        fieldroom("29room1");
    }
    else if(checkindate == "30" && roomnumberdiv == "101"){
        fieldroom("30room1");
    }
    else if(checkindate == "31" && roomnumberdiv == "101"){
        fieldroom("31room1");
    }
    else if(checkindate == "1" && roomnumberdiv == "102"){
        fieldroom("1room2");
    } 
    else if(checkindate == "2" && roomnumberdiv == "102"){
        fieldroom("2room2");
    }
    else if(checkindate == "3" && roomnumberdiv == "102"){
        fieldroom("3room2");
    } 
    else if(checkindate == "4" && roomnumberdiv == "102"){
        fieldroom("4room2");
    }
    else if(checkindate == "5" && roomnumberdiv == "102"){
        fieldroom("5room2");
    }
    else if(checkindate == "6" && roomnumberdiv == "102"){
        fieldroom("6room2");
    }
    else if(checkindate == "7" && roomnumberdiv == "102"){
        fieldroom("7room2");
    }
    else if(checkindate == "8" && roomnumberdiv == "102"){
        fieldroom("8room2");
    }
    else if(checkindate == "9" && roomnumberdiv == "102"){
        fieldroom("9room2");
    }
    else if(checkindate == "10" && roomnumberdiv == "102"){
        fieldroom("10room2");
    }
    else if(checkindate == "11" && roomnumberdiv == "102"){
        fieldroom("11room2");
    }
    else if(checkindate == "12" && roomnumberdiv == "102"){
        fieldroom("12room2");
    }
    else if(checkindate == "13" && roomnumberdiv == "102"){
        fieldroom("13room2");
    }
    else if(checkindate == "14" && roomnumberdiv == "102"){
        fieldroom("14room2");
    }
    else if(checkindate == "15" && roomnumberdiv == "102"){
        fieldroom("15room2");
    }
    else if(checkindate == "16" && roomnumberdiv == "102"){
        fieldroom("16room2");
    }
    else if(checkindate == "17" && roomnumberdiv == "102"){
        fieldroom("17room2");
    }
    else if(checkindate == "18" && roomnumberdiv == "102"){
        fieldroom("18room2");
    }
    else if(checkindate == "19" && roomnumberdiv == "102"){
        fieldroom("19room2");
    }
    else if(checkindate == "20" && roomnumberdiv == "102"){
        fieldroom("20room2");
    }
    else if(checkindate == "21" && roomnumberdiv == "102"){
        fieldroom("21room2");
    }
    else if(checkindate == "22" && roomnumberdiv == "102"){
        fieldroom("22room2");
    }
    else if(checkindate == "23" && roomnumberdiv == "102"){
        fieldroom("23room2");
    }
    else if(checkindate == "24" && roomnumberdiv == "102"){
        fieldroom("24room2");
    }
    else if(checkindate == "25" && roomnumberdiv == "102"){
        fieldroom("25room2");
    }
    else if(checkindate == "26" && roomnumberdiv == "102"){
        fieldroom("26room2");
    }
    else if(checkindate == "27" && roomnumberdiv == "102"){
        fieldroom("27room2");
    }
    else if(checkindate == "28" && roomnumberdiv == "102"){
        fieldroom("28room2");
    }
    else if(checkindate == "29" && roomnumberdiv == "102"){
        fieldroom("29room2");
    }
    else if(checkindate == "30" && roomnumberdiv == "102"){
        fieldroom("30room2");
    }
    else if(checkindate == "31" && roomnumberdiv == "102"){
        fieldroom("31room2");
    }
    else if(checkindate == "1" && roomnumberdiv == "103"){
        fieldroom("1room3");
    } 
    else if(checkindate == "2" && roomnumberdiv == "103"){
        fieldroom("2room3");
    }
    else if(checkindate == "3" && roomnumberdiv == "103"){
        fieldroom("3room3");
    } 
    else if(checkindate == "4" && roomnumberdiv == "103"){
        fieldroom("4room3");
    }
    else if(checkindate == "5" && roomnumberdiv == "103"){
        fieldroom("5room3");
    }
    else if(checkindate == "6" && roomnumberdiv == "103"){
        fieldroom("6room3");
    }
    else if(checkindate == "7" && roomnumberdiv == "103"){
        fieldroom("7room3");
    }
    else if(checkindate == "8" && roomnumberdiv == "103"){
        fieldroom("8room3");
    }
    else if(checkindate == "9" && roomnumberdiv == "103"){
        fieldroom("9room3");
    }
    else if(checkindate == "10" && roomnumberdiv == "103"){
        fieldroom("10room3");
    }
    else if(checkindate == "11" && roomnumberdiv == "103"){
        fieldroom("11room3");
    }
    else if(checkindate == "12" && roomnumberdiv == "103"){
        fieldroom("12room3");
    }
    else if(checkindate == "13" && roomnumberdiv == "103"){
        fieldroom("13room3");
    }
    else if(checkindate == "14" && roomnumberdiv == "103"){
        fieldroom("14room3");
    }
    else if(checkindate == "15" && roomnumberdiv == "103"){
        fieldroom("15room3");
    }
    else if(checkindate == "16" && roomnumberdiv == "103"){
        fieldroom("16room3");
    }
    else if(checkindate == "17" && roomnumberdiv == "103"){
        fieldroom("17room3");
    }
    else if(checkindate == "18" && roomnumberdiv == "103"){
        fieldroom("18room3");
    }
    else if(checkindate == "19" && roomnumberdiv == "103"){
        fieldroom("19room3");
    }
    else if(checkindate == "20" && roomnumberdiv == "103"){
        fieldroom("20room3");
    }
    else if(checkindate == "21" && roomnumberdiv == "103"){
        fieldroom("21room3");
    }
    else if(checkindate == "22" && roomnumberdiv == "103"){
        fieldroom("22room3");
    }
    else if(checkindate == "23" && roomnumberdiv == "103"){
        fieldroom("23room3");
    }
    else if(checkindate == "24" && roomnumberdiv == "103"){
        fieldroom("24room3");
    }
    else if(checkindate == "25" && roomnumberdiv == "103"){
        fieldroom("25room3");
    }
    else if(checkindate == "26" && roomnumberdiv == "103"){
        fieldroom("26room3");
    }
    else if(checkindate == "27" && roomnumberdiv == "103"){
        fieldroom("27room3");
    }
    else if(checkindate == "28" && roomnumberdiv == "103"){
        fieldroom("28room3");
    }
    else if(checkindate == "29" && roomnumberdiv == "103"){
        fieldroom("29room3");
    }
    else if(checkindate == "30" && roomnumberdiv == "103"){
        fieldroom("30room3");
    }
    else if(checkindate == "31" && roomnumberdiv == "103"){
        fieldroom("31room3");
    }
    else if(checkindate == "1" && roomnumberdiv == "201"){
        fieldroom("1room4");
    } 
    else if(checkindate == "2" && roomnumberdiv == "201"){
        fieldroom("2room4");
    }
    else if(checkindate == "3" && roomnumberdiv == "201"){
        fieldroom("3room4");
    } 
    else if(checkindate == "4" && roomnumberdiv == "201"){
        fieldroom("4room4");
    }
    else if(checkindate == "5" && roomnumberdiv == "201"){
        fieldroom("5room4");
    }
    else if(checkindate == "6" && roomnumberdiv == "201"){
        fieldroom("6room4");
    }
    else if(checkindate == "7" && roomnumberdiv == "201"){
        fieldroom("7room4");
    }
    else if(checkindate == "8" && roomnumberdiv == "201"){
        fieldroom("8room4");
    }
    else if(checkindate == "9" && roomnumberdiv == "201"){
        fieldroom("9room4");
    }
    else if(checkindate == "10" && roomnumberdiv == "201"){
        fieldroom("10room4");
    }
    else if(checkindate == "11" && roomnumberdiv == "201"){
        fieldroom("11room4");
    }
    else if(checkindate == "12" && roomnumberdiv == "201"){
        fieldroom("12room4");
    }
    else if(checkindate == "13" && roomnumberdiv == "201"){
        fieldroom("13room4");
    }
    else if(checkindate == "14" && roomnumberdiv == "201"){
        fieldroom("14room4");
    }
    else if(checkindate == "15" && roomnumberdiv == "201"){
        fieldroom("15room4");
    }
    else if(checkindate == "16" && roomnumberdiv == "201"){
        fieldroom("16room4");
    }
    else if(checkindate == "17" && roomnumberdiv == "201"){
        fieldroom("17room4");
    }
    else if(checkindate == "18" && roomnumberdiv == "201"){
        fieldroom("18room4");
    }
    else if(checkindate == "19" && roomnumberdiv == "201"){
        fieldroom("19room4");
    }
    else if(checkindate == "20" && roomnumberdiv == "201"){
        fieldroom("20room4");
    }
    else if(checkindate == "21" && roomnumberdiv == "201"){
        fieldroom("21room4");
    }
    else if(checkindate == "22" && roomnumberdiv == "201"){
        fieldroom("22room4");
    }
    else if(checkindate == "23" && roomnumberdiv == "201"){
        fieldroom("23room4");
    }
    else if(checkindate == "24" && roomnumberdiv == "201"){
        fieldroom("24room4");
    }
    else if(checkindate == "25" && roomnumberdiv == "201"){
        fieldroom("25room4");
    }
    else if(checkindate == "26" && roomnumberdiv == "201"){
        fieldroom("26room4");
    }
    else if(checkindate == "27" && roomnumberdiv == "201"){
        fieldroom("27room4");
    }
    else if(checkindate == "28" && roomnumberdiv == "201"){
        fieldroom("28room4");
    }
    else if(checkindate == "29" && roomnumberdiv == "201"){
        fieldroom("29room4");
    }
    else if(checkindate == "30" && roomnumberdiv == "201"){
        fieldroom("30room4");
    }
    else if(checkindate == "31" && roomnumberdiv == "201"){
        fieldroom("31room4");
    }
    else if(checkindate == "1" && roomnumberdiv == "202"){
        fieldroom("1room5");
    } 
    else if(checkindate == "2" && roomnumberdiv == "202"){
        fieldroom("2room5");
    }
    else if(checkindate == "3" && roomnumberdiv == "202"){
        fieldroom("3room5");
    } 
    else if(checkindate == "4" && roomnumberdiv == "202"){
        fieldroom("4room5");
    }
    else if(checkindate == "5" && roomnumberdiv == "202"){
        fieldroom("5room5");
    }
    else if(checkindate == "6" && roomnumberdiv == "202"){
        fieldroom("6room5");
    }
    else if(checkindate == "7" && roomnumberdiv == "202"){
        fieldroom("7room5");
    }
    else if(checkindate == "8" && roomnumberdiv == "202"){
        fieldroom("8room5");
    }
    else if(checkindate == "9" && roomnumberdiv == "202"){
        fieldroom("9room5");
    }
    else if(checkindate == "10" && roomnumberdiv == "202"){
        fieldroom("10room5");
    }
    else if(checkindate == "11" && roomnumberdiv == "202"){
        fieldroom("11room5");
    }
    else if(checkindate == "12" && roomnumberdiv == "201"){
        fieldroom("12room5");
    }
    else if(checkindate == "13" && roomnumberdiv == "202"){
        fieldroom("13room5");
    }
    else if(checkindate == "14" && roomnumberdiv == "202"){
        fieldroom("14room5");
    }
    else if(checkindate == "15" && roomnumberdiv == "202"){
        fieldroom("15room5");
    }
    else if(checkindate == "16" && roomnumberdiv == "202"){
        fieldroom("16room5");
    }
    else if(checkindate == "17" && roomnumberdiv == "202"){
        fieldroom("17room5");
    }
    else if(checkindate == "18" && roomnumberdiv == "202"){
        fieldroom("18room5");
    }
    else if(checkindate == "19" && roomnumberdiv == "202"){
        fieldroom("19room5");
    }
    else if(checkindate == "20" && roomnumberdiv == "202"){
        fieldroom("20room5");
    }
    else if(checkindate == "21" && roomnumberdiv == "202"){
        fieldroom("21room5");
    }
    else if(checkindate == "22" && roomnumberdiv == "202"){
        fieldroom("22room5");
    }
    else if(checkindate == "23" && roomnumberdiv == "202"){
        fieldroom("23room5");
    }
    else if(checkindate == "24" && roomnumberdiv == "202"){
        fieldroom("24room5");
    }
    else if(checkindate == "25" && roomnumberdiv == "202"){
        fieldroom("25room5");
    }
    else if(checkindate == "26" && roomnumberdiv == "202"){
        fieldroom("26room5");
    }
    else if(checkindate == "27" && roomnumberdiv == "202"){
        fieldroom("27room5");
    }
    else if(checkindate == "28" && roomnumberdiv == "202"){
        fieldroom("28room5");
    }
    else if(checkindate == "29" && roomnumberdiv == "202"){
        fieldroom("29room5");
    }
    else if(checkindate == "30" && roomnumberdiv == "202"){
        fieldroom("30room5");
    }
    else if(checkindate == "31" && roomnumberdiv == "202"){
        fieldroom("31room5");
    }
    else if(checkindate == "1" && roomnumberdiv == "301"){
        fieldroom("1room6");
    } 
    else if(checkindate == "2" && roomnumberdiv == "301"){
        fieldroom("2room6");
    }
    else if(checkindate == "3" && roomnumberdiv == "301"){
        fieldroom("3room6");
    } 
    else if(checkindate == "4" && roomnumberdiv == "301"){
        fieldroom("4room6");
    }
    else if(checkindate == "5" && roomnumberdiv == "301"){
        fieldroom("5room6");
    }
    else if(checkindate == "6" && roomnumberdiv == "301"){
        fieldroom("6room6");
    }
    else if(checkindate == "7" && roomnumberdiv == "301"){
        fieldroom("7room6");
    }
    else if(checkindate == "8" && roomnumberdiv == "301"){
        fieldroom("8room6");
    }
    else if(checkindate == "9" && roomnumberdiv == "301"){
        fieldroom("9room6");
    }
    else if(checkindate == "10" && roomnumberdiv == "301"){
        fieldroom("10room6");
    }
    else if(checkindate == "11" && roomnumberdiv == "301"){
        fieldroom("11room6");
    }
    else if(checkindate == "12" && roomnumberdiv == "301"){
        fieldroom("12room6");
    }
    else if(checkindate == "13" && roomnumberdiv == "301"){
        fieldroom("13room6");
    }
    else if(checkindate == "14" && roomnumberdiv == "301"){
        fieldroom("14room6");
    }
    else if(checkindate == "15" && roomnumberdiv == "301"){
        fieldroom("15room6");
    }
    else if(checkindate == "16" && roomnumberdiv == "301"){
        fieldroom("16room6");
    }
    else if(checkindate == "17" && roomnumberdiv == "301"){
        fieldroom("17room6");
    }
    else if(checkindate == "18" && roomnumberdiv == "301"){
        fieldroom("18room6");
    }
    else if(checkindate == "19" && roomnumberdiv == "301"){
        fieldroom("19room6");
    }
    else if(checkindate == "20" && roomnumberdiv == "301"){
        fieldroom("20room6");
    }
    else if(checkindate == "21" && roomnumberdiv == "301"){
        fieldroom("21room6");
    }
    else if(checkindate == "22" && roomnumberdiv == "301"){
        fieldroom("22room6");
    }
    else if(checkindate == "23" && roomnumberdiv == "301"){
        fieldroom("23room6");
    }
    else if(checkindate == "24" && roomnumberdiv == "301"){
        fieldroom("24room6");
    }
    else if(checkindate == "25" && roomnumberdiv == "301"){
        fieldroom("25room6");
    }
    else if(checkindate == "26" && roomnumberdiv == "301"){
        fieldroom("26room6");
    }
    else if(checkindate == "27" && roomnumberdiv == "301"){
        fieldroom("27room6");
    }
    else if(checkindate == "28" && roomnumberdiv == "301"){
        fieldroom("28room6");
    }
    else if(checkindate == "29" && roomnumberdiv == "301"){
        fieldroom("29room6");
    }
    else if(checkindate == "30" && roomnumberdiv == "301"){
        fieldroom("30room6");
    }
    else if(checkindate == "31" && roomnumberdiv == "301"){
        fieldroom("31room6");
    }
    else if(checkindate == "1" && roomnumberdiv == "302"){
        fieldroom("1room7");
    } 
    else if(checkindate == "2" && roomnumberdiv == "302"){
        fieldroom("2room7");
    }
    else if(checkindate == "3" && roomnumberdiv == "302"){
        fieldroom("3room7");
    } 
    else if(checkindate == "4" && roomnumberdiv == "302"){
        fieldroom("4room7");
    }
    else if(checkindate == "5" && roomnumberdiv == "302"){
        fieldroom("5room7");
    }
    else if(checkindate == "6" && roomnumberdiv == "302"){
        fieldroom("6room7");
    }
    else if(checkindate == "7" && roomnumberdiv == "302"){
        fieldroom("7room7");
    }
    else if(checkindate == "8" && roomnumberdiv == "302"){
        fieldroom("8room7");
    }
    else if(checkindate == "9" && roomnumberdiv == "302"){
        fieldroom("9room7");
    }
    else if(checkindate == "10" && roomnumberdiv == "302"){
        fieldroom("10room7");
    }
    else if(checkindate == "11" && roomnumberdiv == "302"){
        fieldroom("11room7");
    }
    else if(checkindate == "12" && roomnumberdiv == "302"){
        fieldroom("12room7");
    }
    else if(checkindate == "13" && roomnumberdiv == "302"){
        fieldroom("13room7");
    }
    else if(checkindate == "14" && roomnumberdiv == "302"){
        fieldroom("14room7");
    }
    else if(checkindate == "15" && roomnumberdiv == "302"){
        fieldroom("15room7");
    }
    else if(checkindate == "16" && roomnumberdiv == "302"){
        fieldroom("16room7");
    }
    else if(checkindate == "17" && roomnumberdiv == "302"){
        fieldroom("17room7");
    }
    else if(checkindate == "18" && roomnumberdiv == "302"){
        fieldroom("18room7");
    }
    else if(checkindate == "19" && roomnumberdiv == "302"){
        fieldroom("19room7");
    }
    else if(checkindate == "20" && roomnumberdiv == "302"){
        fieldroom("20room7");
    }
    else if(checkindate == "21" && roomnumberdiv == "302"){
        fieldroom("21room7");
    }
    else if(checkindate == "22" && roomnumberdiv == "302"){
        fieldroom("22room7");
    }
    else if(checkindate == "23" && roomnumberdiv == "302"){
        fieldroom("23room7");
    }
    else if(checkindate == "24" && roomnumberdiv == "302"){
        fieldroom("24room7");
    }
    else if(checkindate == "25" && roomnumberdiv == "302"){
        fieldroom("25room7");
    }
    else if(checkindate == "26" && roomnumberdiv == "302"){
        fieldroom("26room7");
    }
    else if(checkindate == "27" && roomnumberdiv == "302"){
        fieldroom("27room7");
    }
    else if(checkindate == "28" && roomnumberdiv == "302"){
        fieldroom("28room7");
    }
    else if(checkindate == "29" && roomnumberdiv == "302"){
        fieldroom("29room7");
    }
    else if(checkindate == "30" && roomnumberdiv == "302"){
        fieldroom("30room7");
    }
    else if(checkindate == "31" && roomnumberdiv == "302"){
        fieldroom("31room7");
    }
    else if(checkindate == "1" && roomnumberdiv == "303"){
        fieldroom("1room8");
    } 
    else if(checkindate == "2" && roomnumberdiv == "303"){
        fieldroom("2room8");
    }
    else if(checkindate == "3" && roomnumberdiv == "303"){
        fieldroom("3room8");
    } 
    else if(checkindate == "4" && roomnumberdiv == "303"){
        fieldroom("4room8");
    }
    else if(checkindate == "5" && roomnumberdiv == "303"){
        fieldroom("5room8");
    }
    else if(checkindate == "6" && roomnumberdiv == "303"){
        fieldroom("6room8");
    }
    else if(checkindate == "7" && roomnumberdiv == "303"){
        fieldroom("7room8");
    }
    else if(checkindate == "8" && roomnumberdiv == "303"){
        fieldroom("8room8");
    }
    else if(checkindate == "9" && roomnumberdiv == "303"){
        fieldroom("9room8");
    }
    else if(checkindate == "10" && roomnumberdiv == "303"){
        fieldroom("10room8");
    }
    else if(checkindate == "11" && roomnumberdiv == "303"){
        fieldroom("11room8");
    }
    else if(checkindate == "12" && roomnumberdiv == "303"){
        fieldroom("12room8");
    }
    else if(checkindate == "13" && roomnumberdiv == "303"){
        fieldroom("13room8");
    }
    else if(checkindate == "14" && roomnumberdiv == "303"){
        fieldroom("14room8");
    }
    else if(checkindate == "15" && roomnumberdiv == "303"){
        fieldroom("15room8");
    }
    else if(checkindate == "16" && roomnumberdiv == "303"){
        fieldroom("16room8");
    }
    else if(checkindate == "17" && roomnumberdiv == "303"){
        fieldroom("17room8");
    }
    else if(checkindate == "18" && roomnumberdiv == "303"){
        fieldroom("18room8");
    }
    else if(checkindate == "19" && roomnumberdiv == "303"){
        fieldroom("19room8");
    }
    else if(checkindate == "20" && roomnumberdiv == "303"){
        fieldroom("20room8");
    }
    else if(checkindate == "21" && roomnumberdiv == "303"){
        fieldroom("21room8");
    }
    else if(checkindate == "22" && roomnumberdiv == "303"){
        fieldroom("22room8");
    }
    else if(checkindate == "23" && roomnumberdiv == "303"){
        fieldroom("23room8");
    }
    else if(checkindate == "24" && roomnumberdiv == "303"){
        fieldroom("24room8");
    }
    else if(checkindate == "25" && roomnumberdiv == "303"){
        fieldroom("25room8");
    }
    else if(checkindate == "26" && roomnumberdiv == "303"){
        fieldroom("26room8");
    }
    else if(checkindate == "27" && roomnumberdiv == "303"){
        fieldroom("27room8");
    }
    else if(checkindate == "28" && roomnumberdiv == "303"){
        fieldroom("28room8");
    }
    else if(checkindate == "29" && roomnumberdiv == "303"){
        fieldroom("29room8");
    }
    else if(checkindate == "30" && roomnumberdiv == "303"){
        fieldroom("30room8");
    }
    else if(checkindate == "31" && roomnumberdiv == "303"){
        fieldroom("31room8");
    }
    else if(checkindate == "1" && roomnumberdiv == "401"){
        fieldroom("1room9");
    } 
    else if(checkindate == "2" && roomnumberdiv == "401"){
        fieldroom("2room9");
    }
    else if(checkindate == "3" && roomnumberdiv == "401"){
        fieldroom("3room9");
    } 
    else if(checkindate == "4" && roomnumberdiv == "401"){
        fieldroom("4room9");
    }
    else if(checkindate == "5" && roomnumberdiv == "401"){
        fieldroom("5room9");
    }
    else if(checkindate == "6" && roomnumberdiv == "401"){
        fieldroom("6room9");
    }
    else if(checkindate == "7" && roomnumberdiv == "401"){
        fieldroom("7room9");
    }
    else if(checkindate == "8" && roomnumberdiv == "401"){
        fieldroom("8room9");
    }
    else if(checkindate == "9" && roomnumberdiv == "401"){
        fieldroom("9room9");
    }
    else if(checkindate == "10" && roomnumberdiv == "401"){
        fieldroom("10room9");
    }
    else if(checkindate == "11" && roomnumberdiv == "401"){
        fieldroom("11room9");
    }
    else if(checkindate == "12" && roomnumberdiv == "401"){
        fieldroom("12room9");
    }
    else if(checkindate == "13" && roomnumberdiv == "401"){
        fieldroom("13room9");
    }
    else if(checkindate == "14" && roomnumberdiv == "401"){
        fieldroom("14room9");
    }
    else if(checkindate == "15" && roomnumberdiv == "401"){
        fieldroom("15room9");
    }
    else if(checkindate == "16" && roomnumberdiv == "401"){
        fieldroom("16room9");
    }
    else if(checkindate == "17" && roomnumberdiv == "401"){
        fieldroom("17room9");
    }
    else if(checkindate == "18" && roomnumberdiv == "401"){
        fieldroom("18room9");
    }
    else if(checkindate == "19" && roomnumberdiv == "401"){
        fieldroom("19room9");
    }
    else if(checkindate == "20" && roomnumberdiv == "401"){
        fieldroom("20room9");
    }
    else if(checkindate == "21" && roomnumberdiv == "401"){
        fieldroom("21room9");
    }
    else if(checkindate == "22" && roomnumberdiv == "401"){
        fieldroom("22room9");
    }
    else if(checkindate == "23" && roomnumberdiv == "401"){
        fieldroom("23room9");
    }
    else if(checkindate == "24" && roomnumberdiv == "401"){
        fieldroom("24room9");
    }
    else if(checkindate == "25" && roomnumberdiv == "401"){
        fieldroom("25room9");
    }
    else if(checkindate == "26" && roomnumberdiv == "401"){
        fieldroom("26room9");
    }
    else if(checkindate == "27" && roomnumberdiv == "401"){
        fieldroom("27room9");
    }
    else if(checkindate == "28" && roomnumberdiv == "401"){
        fieldroom("28room9");
    }
    else if(checkindate == "29" && roomnumberdiv == "401"){
        fieldroom("29room9");
    }
    else if(checkindate == "30" && roomnumberdiv == "401"){
        fieldroom("30room9");
    }
    else if(checkindate == "31" && roomnumberdiv == "401"){
        fieldroom("31room9");
    }
    else if(checkindate == "1" && roomnumberdiv == "402"){
        fieldroom("1room10");
    } 
    else if(checkindate == "2" && roomnumberdiv == "402"){
        fieldroom("2room10");
    }
    else if(checkindate == "3" && roomnumberdiv == "402"){
        fieldroom("3room10");
    } 
    else if(checkindate == "4" && roomnumberdiv == "402"){
        fieldroom("4room10");
    }
    else if(checkindate == "5" && roomnumberdiv == "402"){
        fieldroom("5room10");
    }
    else if(checkindate == "6" && roomnumberdiv == "402"){
        fieldroom("6room10");
    }
    else if(checkindate == "7" && roomnumberdiv == "402"){
        fieldroom("7room10");
    }
    else if(checkindate == "8" && roomnumberdiv == "402"){
        fieldroom("8room10");
    }
    else if(checkindate == "9" && roomnumberdiv == "402"){
        fieldroom("9room10");
    }
    else if(checkindate == "10" && roomnumberdiv == "402"){
        fieldroom("10room10");
    }
    else if(checkindate == "11" && roomnumberdiv == "402"){
        fieldroom("11room10");
    }
    else if(checkindate == "12" && roomnumberdiv == "402"){
        fieldroom("12room10");
    }
    else if(checkindate == "13" && roomnumberdiv == "402"){
        fieldroom("13room10");
    }
    else if(checkindate == "14" && roomnumberdiv == "402"){
        fieldroom("14room10");
    }
    else if(checkindate == "15" && roomnumberdiv == "402"){
        fieldroom("15room10");
    }
    else if(checkindate == "16" && roomnumberdiv == "402"){
        fieldroom("16room10");
    }
    else if(checkindate == "17" && roomnumberdiv == "402"){
        fieldroom("17room10");
    }
    else if(checkindate == "18" && roomnumberdiv == "402"){
        fieldroom("18room10");
    }
    else if(checkindate == "19" && roomnumberdiv == "402"){
        fieldroom("19room10");
    }
    else if(checkindate == "20" && roomnumberdiv == "402"){
        fieldroom("20room10");
    }
    else if(checkindate == "21" && roomnumberdiv == "402"){
        fieldroom("21room10");
    }
    else if(checkindate == "22" && roomnumberdiv == "402"){
        fieldroom("22room10");
    }
    else if(checkindate == "23" && roomnumberdiv == "402"){
        fieldroom("23room10");
    }
    else if(checkindate == "24" && roomnumberdiv == "402"){
        fieldroom("24room10");
    }
    else if(checkindate == "25" && roomnumberdiv == "402"){
        fieldroom("25room10");
    }
    else if(checkindate == "26" && roomnumberdiv == "402"){
        fieldroom("26room10");
    }
    else if(checkindate == "27" && roomnumberdiv == "402"){
        fieldroom("27room10");
    }
    else if(checkindate == "28" && roomnumberdiv == "402"){
        fieldroom("28room10");
    }
    else if(checkindate == "29" && roomnumberdiv == "402"){
        fieldroom("29room10");
    }
    else if(checkindate == "30" && roomnumberdiv == "402"){
        fieldroom("30room10");
    }
    else if(checkindate == "31" && roomnumberdiv == "402"){
        fieldroom("31room10");
    }
    else if(checkindate == "1" && roomnumberdiv == "403"){
        fieldroom("1room11");
    } 
    else if(checkindate == "2" && roomnumberdiv == "403"){
        fieldroom("2room11");
    }
    else if(checkindate == "3" && roomnumberdiv == "403"){
        fieldroom("3room11");
    } 
    else if(checkindate == "4" && roomnumberdiv == "403"){
        fieldroom("4room11");
    }
    else if(checkindate == "5" && roomnumberdiv == "403"){
        fieldroom("5room11");
    }
    else if(checkindate == "6" && roomnumberdiv == "403"){
        fieldroom("6room11");
    }
    else if(checkindate == "7" && roomnumberdiv == "403"){
        fieldroom("7room11");
    }
    else if(checkindate == "8" && roomnumberdiv == "403"){
        fieldroom("8room11");
    }
    else if(checkindate == "9" && roomnumberdiv == "403"){
        fieldroom("9room11");
    }
    else if(checkindate == "10" && roomnumberdiv == "403"){
        fieldroom("10room11");
    }
    else if(checkindate == "11" && roomnumberdiv == "403"){
        fieldroom("11room11");
    }
    else if(checkindate == "12" && roomnumberdiv == "403"){
        fieldroom("12room11");
    }
    else if(checkindate == "13" && roomnumberdiv == "403"){
        fieldroom("13room11");
    }
    else if(checkindate == "14" && roomnumberdiv == "403"){
        fieldroom("14room11");
    }
    else if(checkindate == "15" && roomnumberdiv == "403"){
        fieldroom("15room11");
    }
    else if(checkindate == "16" && roomnumberdiv == "403"){
        fieldroom("16room11");
    }
    else if(checkindate == "17" && roomnumberdiv == "403"){
        fieldroom("17room11");
    }
    else if(checkindate == "18" && roomnumberdiv == "403"){
        fieldroom("18room11");
    }
    else if(checkindate == "19" && roomnumberdiv == "403"){
        fieldroom("19room11");
    }
    else if(checkindate == "20" && roomnumberdiv == "403"){
        fieldroom("20room11");
    }
    else if(checkindate == "21" && roomnumberdiv == "403"){
        fieldroom("21room11");
    }
    else if(checkindate == "22" && roomnumberdiv == "403"){
        fieldroom("22room11");
    }
    else if(checkindate == "23" && roomnumberdiv == "403"){
        fieldroom("23room11");
    }
    else if(checkindate == "24" && roomnumberdiv == "403"){
        fieldroom("24room11");
    }
    else if(checkindate == "25" && roomnumberdiv == "403"){
        fieldroom("25room11");
    }
    else if(checkindate == "26" && roomnumberdiv == "403"){
        fieldroom("26room11");
    }
    else if(checkindate == "27" && roomnumberdiv == "403"){
        fieldroom("27room11");
    }
    else if(checkindate == "28" && roomnumberdiv == "403"){
        fieldroom("28room11");
    }
    else if(checkindate == "29" && roomnumberdiv == "403"){
        fieldroom("29room11");
    }
    else if(checkindate == "30" && roomnumberdiv == "403"){
        fieldroom("30room11");
    }
    else if(checkindate == "31" && roomnumberdiv == "403"){
        fieldroom("31room11");
    }
    else if(checkindate == "1" && roomnumberdiv == "404"){
        fieldroom("1room12");
    } 
    else if(checkindate == "2" && roomnumberdiv == "404"){
        fieldroom("2room12");
    }
    else if(checkindate == "3" && roomnumberdiv == "404"){
        fieldroom("3room12");
    } 
    else if(checkindate == "4" && roomnumberdiv == "404"){
        fieldroom("4room12");
    }
    else if(checkindate == "5" && roomnumberdiv == "404"){
        fieldroom("5room12");
    }
    else if(checkindate == "6" && roomnumberdiv == "404"){
        fieldroom("6room12");
    }
    else if(checkindate == "7" && roomnumberdiv == "404"){
        fieldroom("7room12");
    }
    else if(checkindate == "8" && roomnumberdiv == "404"){
        fieldroom("8room12");
    }
    else if(checkindate == "9" && roomnumberdiv == "404"){
        fieldroom("9room12");
    }
    else if(checkindate == "10" && roomnumberdiv == "404"){
        fieldroom("10room12");
    }
    else if(checkindate == "11" && roomnumberdiv == "404"){
        fieldroom("11room12");
    }
    else if(checkindate == "12" && roomnumberdiv == "404"){
        fieldroom("12room12");
    }
    else if(checkindate == "13" && roomnumberdiv == "404"){
        fieldroom("13room12");
    }
    else if(checkindate == "14" && roomnumberdiv == "404"){
        fieldroom("14room12");
    }
    else if(checkindate == "15" && roomnumberdiv == "404"){
        fieldroom("15room12");
    }
    else if(checkindate == "16" && roomnumberdiv == "404"){
        fieldroom("16room12");
    }
    else if(checkindate == "17" && roomnumberdiv == "404"){
        fieldroom("17room12");
    }
    else if(checkindate == "18" && roomnumberdiv == "404"){
        fieldroom("18room12");
    }
    else if(checkindate == "19" && roomnumberdiv == "404"){
        fieldroom("19room12");
    }
    else if(checkindate == "20" && roomnumberdiv == "404"){
        fieldroom("20room12");
    }
    else if(checkindate == "21" && roomnumberdiv == "404"){
        fieldroom("21room12");
    }
    else if(checkindate == "22" && roomnumberdiv == "404"){
        fieldroom("22room12");
    }
    else if(checkindate == "23" && roomnumberdiv == "404"){
        fieldroom("23room12");
    }
    else if(checkindate == "24" && roomnumberdiv == "404"){
        fieldroom("24room12");
    }
    else if(checkindate == "25" && roomnumberdiv == "404"){
        fieldroom("25room12");
    }
    else if(checkindate == "26" && roomnumberdiv == "404"){
        fieldroom("26room12");
    }
    else if(checkindate == "27" && roomnumberdiv == "404"){
        fieldroom("27room12");
    }
    else if(checkindate == "28" && roomnumberdiv == "404"){
        fieldroom("28room12");
    }
    else if(checkindate == "29" && roomnumberdiv == "404"){
        fieldroom("29room12");
    }
    else if(checkindate == "30" && roomnumberdiv == "404"){
        fieldroom("30room12");
    }
    else if(checkindate == "31" && roomnumberdiv == "404"){
        fieldroom("31room12");
    }
    else if(checkindate == "1" && roomnumberdiv == "501"){
        fieldroom("1room13");
    } 
    else if(checkindate == "2" && roomnumberdiv == "501"){
        fieldroom("2room13");
    }
    else if(checkindate == "3" && roomnumberdiv == "501"){
        fieldroom("3room13");
    } 
    else if(checkindate == "4" && roomnumberdiv == "501"){
        fieldroom("4room13");
    }
    else if(checkindate == "5" && roomnumberdiv == "501"){
        fieldroom("5room13");
    }
    else if(checkindate == "6" && roomnumberdiv == "501"){
        fieldroom("6room13");
    }
    else if(checkindate == "7" && roomnumberdiv == "501"){
        fieldroom("7room13");
    }
    else if(checkindate == "8" && roomnumberdiv == "501"){
        fieldroom("8room13");
    }
    else if(checkindate == "9" && roomnumberdiv == "501"){
        fieldroom("9room13");
    }
    else if(checkindate == "10" && roomnumberdiv == "501"){
        fieldroom("10room13");
    }
    else if(checkindate == "11" && roomnumberdiv == "501"){
        fieldroom("11room13");
    }
    else if(checkindate == "12" && roomnumberdiv == "501"){
        fieldroom("12room13");
    }
    else if(checkindate == "13" && roomnumberdiv == "501"){
        fieldroom("13room13");
    }
    else if(checkindate == "14" && roomnumberdiv == "501"){
        fieldroom("14room13");
    }
    else if(checkindate == "15" && roomnumberdiv == "501"){
        fieldroom("15room13");
    }
    else if(checkindate == "16" && roomnumberdiv == "501"){
        fieldroom("16room13");
    }
    else if(checkindate == "17" && roomnumberdiv == "501"){
        fieldroom("17room13");
    }
    else if(checkindate == "18" && roomnumberdiv == "501"){
        fieldroom("18room13");
    }
    else if(checkindate == "19" && roomnumberdiv == "501"){
        fieldroom("19room13");
    }
    else if(checkindate == "20" && roomnumberdiv == "501"){
        fieldroom("20room13");
    }
    else if(checkindate == "21" && roomnumberdiv == "501"){
        fieldroom("21room13");
    }
    else if(checkindate == "22" && roomnumberdiv == "501"){
        fieldroom("22room13");
    }
    else if(checkindate == "23" && roomnumberdiv == "501"){
        fieldroom("23room13");
    }
    else if(checkindate == "24" && roomnumberdiv == "501"){
        fieldroom("24room13");
    }
    else if(checkindate == "25" && roomnumberdiv == "501"){
        fieldroom("25room13");
    }
    else if(checkindate == "26" && roomnumberdiv == "501"){
        fieldroom("26room13");
    }
    else if(checkindate == "27" && roomnumberdiv == "501"){
        fieldroom("27room13");
    }
    else if(checkindate == "28" && roomnumberdiv == "501"){
        fieldroom("28room13");
    }
    else if(checkindate == "29" && roomnumberdiv == "501"){
        fieldroom("29room13");
    }
    else if(checkindate == "30" && roomnumberdiv == "501"){
        fieldroom("30room13");
    }
    else if(checkindate == "31" && roomnumberdiv == "501"){
        fieldroom("31room13");
    }
    else if(checkindate == "1" && roomnumberdiv == "502"){
        fieldroom("1room14");
    } 
    else if(checkindate == "2" && roomnumberdiv == "502"){
        fieldroom("2room14");
    }
    else if(checkindate == "3" && roomnumberdiv == "502"){
        fieldroom("3room14");
    } 
    else if(checkindate == "4" && roomnumberdiv == "502"){
        fieldroom("4room14");
    }
    else if(checkindate == "5" && roomnumberdiv == "502"){
        fieldroom("5room14");
    }
    else if(checkindate == "6" && roomnumberdiv == "502"){
        fieldroom("6room14");
    }
    else if(checkindate == "7" && roomnumberdiv == "502"){
        fieldroom("7room14");
    }
    else if(checkindate == "8" && roomnumberdiv == "502"){
        fieldroom("8room14");
    }
    else if(checkindate == "9" && roomnumberdiv == "502"){
        fieldroom("9room14");
    }
    else if(checkindate == "10" && roomnumberdiv == "502"){
        fieldroom("10room14");
    }
    else if(checkindate == "11" && roomnumberdiv == "502"){
        fieldroom("11room14");
    }
    else if(checkindate == "12" && roomnumberdiv == "502"){
        fieldroom("12room14");
    }
    else if(checkindate == "13" && roomnumberdiv == "502"){
        fieldroom("13room14");
    }
    else if(checkindate == "14" && roomnumberdiv == "502"){
        fieldroom("14room14");
    }
    else if(checkindate == "15" && roomnumberdiv == "502"){
        fieldroom("15room14");
    }
    else if(checkindate == "16" && roomnumberdiv == "502"){
        fieldroom("16room14");
    }
    else if(checkindate == "17" && roomnumberdiv == "502"){
        fieldroom("17room14");
    }
    else if(checkindate == "18" && roomnumberdiv == "502"){
        fieldroom("18room14");
    }
    else if(checkindate == "19" && roomnumberdiv == "502"){
        fieldroom("19room14");
    }
    else if(checkindate == "20" && roomnumberdiv == "502"){
        fieldroom("20room14");
    }
    else if(checkindate == "21" && roomnumberdiv == "502"){
        fieldroom("21room14");
    }
    else if(checkindate == "22" && roomnumberdiv == "502"){
        fieldroom("22room14");
    }
    else if(checkindate == "23" && roomnumberdiv == "502"){
        fieldroom("23room14");
    }
    else if(checkindate == "24" && roomnumberdiv == "502"){
        fieldroom("24room14");
    }
    else if(checkindate == "25" && roomnumberdiv == "502"){
        fieldroom("25room14");
    }
    else if(checkindate == "26" && roomnumberdiv == "502"){
        fieldroom("26room14");
    }
    else if(checkindate == "27" && roomnumberdiv == "502"){
        fieldroom("27room14");
    }
    else if(checkindate == "28" && roomnumberdiv == "502"){
        fieldroom("28room14");
    }
    else if(checkindate == "29" && roomnumberdiv == "502"){
        fieldroom("29room14");
    }
    else if(checkindate == "30" && roomnumberdiv == "502"){
        fieldroom("30room14");
    }
    else if(checkindate == "31" && roomnumberdiv == "502"){
        fieldroom("31room14");
    }
    // function that creates and displays div in center table 
    function fieldroom(idimp){
        myId = document.getElementById(idimp);
        x = document.createElement("div");
        br = document.createElement("br");
        x.style.backgroundColor = "#dbd8d8";
        x.style.border = "1px solid black";
        x.style.borderRadius = "5px";
        x.style.boxSizing = "border-box";
        x.style.padding = "2px";
        x.style.height = "65px";
        d1 = new Date(checkindiv);
        m = Number(d1.getMonth());
        m++;
        d2 = new Date(checkoutdiv);
        m2 = Number(d2.getMonth());
        m2++;
        t = document.createTextNode(firstnamediv + " ("+ d1.getDate()+"/"+m+"/"+d1.getFullYear() +" "+checkintimediv +" - "+d2.getDate()+"/"+m2+"/"+d2.getFullYear()+" "+checkouttimediv+")");
        x.style.font = "bold";
        x.appendChild(t);
        x.appendChild(br);
        // if the check-in date is 31st than smaller div box is created with smaller font size
        if(checkindate == 31){
            x.style.fontSize = "0.5rem";
            numberofnightsdiv = 0;
        }
        else{
            x.style.fontSize = "0.9rem";
            x.appendChild(br);
        }
        t2 = document.createTextNode("Payment : " + methoddiv);
        x.appendChild(t2);

        myId.appendChild(x);
        spanning = numberofnightsdiv;
        spanning++;
        myId.colSpan = spanning;
        myId.classList.remove("empty");
        myId.classList.add("fill");
        // drag and drop function calls
        // fill = document.querySelector(".fill");
        // empty = document.querySelectorAll(".empty");
        // fill.addEventListener('dragstart', dragStart);
        // fill.addEventListener('dragend', dragEnd);
        // for (let i of empty) {
        //     i.addEventListener('dragover', dragOver);
        //     i.addEventListener('dragenter', dragEnter);
        //     i.addEventListener('dragleave', dragLeave);
        //     i.addEventListener('drop', dragDrop);
        //   }




        // deletion of extra rows generated by creation of div 
        let z = checkindate++;
        if(roomnumberdiv == "101"){
            let row1 = document.getElementById("row1");
            for(let i=0;i<numberofnightsdiv;i++)
            {
                row1.deleteCell(z);
                z++;
            }
        }
        else if(roomnumberdiv == "102"){
            let row1 = document.getElementById("row2");
            for(let i=0;i<numberofnightsdiv;i++)
            {
                row1.deleteCell(z);
                z++;
            }
        }
        else if(roomnumberdiv == "103"){
            let row1 = document.getElementById("row3");
            for(let i=0;i<numberofnightsdiv;i++)
            {
                row1.deleteCell(z);
                z++;
            }
        }
        else if(roomnumberdiv == "201"){
            let row1 = document.getElementById("row4");
            for(let i=0;i<numberofnightsdiv;i++)
            {
                row1.deleteCell(z);
                z++;
            }
        }  
        else if(roomnumberdiv == "202"){
            let row1 = document.getElementById("row5");
            for(let i=0;i<numberofnightsdiv;i++)
            {
                row1.deleteCell(z);
                z++;
            }
        }  
        else if(roomnumberdiv == "301"){
            let row1 = document.getElementById("row6");
            for(let i=0;i<numberofnightsdiv;i++)
            {
                row1.deleteCell(z);
                z++;
            }
        }  
        else if(roomnumberdiv == "302"){
            let row1 = document.getElementById("row7");
            for(let i=0;i<numberofnightsdiv;i++)
            {
                row1.deleteCell(z);
                z++;
            }
        }  
        else if(roomnumberdiv == "303"){
            let row1 = document.getElementById("row8");
            for(let i=0;i<numberofnightsdiv;i++)
            {
                row1.deleteCell(z);
                z++;
            }
        }  
        else if(roomnumberdiv == "401"){
            let row1 = document.getElementById("row9");
            for(let i=0;i<numberofnightsdiv;i++)
            {
                row1.deleteCell(z);
                z++;
            }
        }  
        else if(roomnumberdiv == "402"){
            let row1 = document.getElementById("row10");
            for(let i=0;i<numberofnightsdiv;i++)
            {
                row1.deleteCell(z);
                z++;
            }
        }  
        else if(roomnumberdiv == "403"){
            let row1 = document.getElementById("row11");
            for(let i=0;i<numberofnightsdiv;i++)
            {
                row1.deleteCell(z);
                z++;
            }
        }  
        else if(roomnumberdiv == "404"){
            let row1 = document.getElementById("row12");
            for(let i=0;i<numberofnightsdiv;i++)
            {
                row1.deleteCell(z);
                z++;
            }
        }  
        else if(roomnumberdiv == "501"){
            let row1 = document.getElementById("row13");
            for(let i=0;i<numberofnightsdiv;i++)
            {
                row1.deleteCell(z);
                z++;
            }
        }  
        else if(roomnumberdiv == "502"){
            let row1 = document.getElementById("row14");
            for(let i=0;i<numberofnightsdiv;i++)
            {
                row1.deleteCell(z);
                z++;
            }
        }       
        
    }

});



// Drag and drop Functions

// function dragStart() {
//     this.className += ' hold';
//     setTimeout(() => (this.className = 'invisible'), 0);
//   }
  
//   function dragEnd() {
//     this.className = 'fill';
//   }
  
//   function dragOver(e) {
//     e.preventDefault();
//   }
  
//   function dragEnter(e) {
//     e.preventDefault();
//     this.className += ' hovered';
//   }
  
//   function dragLeave() {
//     this.className = 'empty';
//   }
  
//   function dragDrop() {
//     this.className = 'empty';
//     this.append(fill);
//     this.colSpan = spanning;
//   }