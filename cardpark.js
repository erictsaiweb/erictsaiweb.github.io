

function $(id) {return document.getElementById(id);}

window.onload = function(){

// load record
    var getArray = localStorage.getItem("saveArray");
    var parkArray = JSON.parse(getArray);

if (parkArray == null) {
    var check1 = "Free";
    var check2 = "Free";
    var check3 = "Free";
    var check4 = "Free";
    var check5 = "Free";
    var parkArray = [check1,check2,check3,check4,check5];
    // Show original result
   

 } else {
    
    var check1 = parkArray[0];
    var check2 = parkArray[1];
    var check3 = parkArray[2];
    var check4 = parkArray[3];
    var check5 = parkArray[4];
 } 


// 整理頁面文字 

    var dt = new Date();
    $("thismonth").innerHTML = dt.getMonth()+1+"月份使用";
    $("1st").innerHTML = check1;
    $("2nd").innerHTML = check2;
    $("3rd").innerHTML = check3;
    $("4th").innerHTML = check4;
    $("5th").innerHTML = check5;

// 整理頁面CSS
    
    if (check1 !== "Free") {
        document.getElementById("1st").className = "parked";
    };
    if (check2 !== "Free") {
        document.getElementById("2nd").className = "parked";
    };
    if (check3 !== "Free") {
        document.getElementById("3rd").className = "parked";
    };   
    if (check4 !== "Free") {
        document.getElementById("4th").className = "parked";
    };
    if (check5 !== "Free") {
        document.getElementById("5th").className = "parked";
    };
// active click action

    $("1st").onclick = function(){ 
        if (check1== "Free"){ 
        displayDate("1st");
        changeClass("1st");
        check1 = x; 
        }
        else {
        reverseClass("1st");
        check1= "Free";
        $("1st").innerHTML = check1;
        };
    };

    $("2nd").onclick = function(){ 
        if (check2== "Free"){ 
        displayDate("2nd");
        changeClass("2nd");
        check2 = x; 
        }
        else {
        reverseClass("2nd");
        check2= "Free";
        $("2nd").innerHTML = check2;
        };
    };
    
    $("3rd").onclick = function(){ 
        if (check3== "Free"){ 
        displayDate("3rd");
        changeClass("3rd");
        check3= x;
        }
        else {
        reverseClass("3rd");
        check3= "Free";
        $("3rd").innerHTML = check3;
        };
    };

    $("4th").onclick = function(){ 
        if (check4== "Free"){ 
        displayDate("4th");
        changeClass("4th");
        check4= x ;
        }
        else {
        reverseClass("4th");
        check4 = "Free";
        $("4th").innerHTML = check4;
        };
    };

    $("5th").onclick = function(){ 
        if (check5 == "Free"){ 
        displayDate("5th");
        changeClass("5th");
        check5= x ;
        }
        else {
        reverseClass("5th");
        check5= "Free";
        $("5th").innerHTML = check5;
        };
    };
    
    
    $("check").onclick = function(){
            parkArray = [check1,check2,check3,check4,check5];
           // parkArray.onchange = function () {    // --> quesion
            localStorage.removeItem ("saveArray");     
            localStorage.setItem("saveArray",JSON.stringify(parkArray));
                      
    };

  };
    

// function List

function displayDate(idName) {
        var dt = new Date();
        x= dt.getMonth()+1+"/"+dt.getDate()+"  "+dt.getHours()+":"+dt.getMinutes();
        document.getElementById(idName).innerHTML = x;
        }  

function changeClass(idName) {
        document.getElementById(idName).className = "parked";
        }

function reverseClass(idName) {
        document.getElementById(idName).className = "div";
        }



