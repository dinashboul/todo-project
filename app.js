var myArry=[];
var myName;
function  Names(){
 myName=prompt("Please enter your name");
 if(myName === ""){
   alert("your Name is invalid");
 }
 myArry.push(myName);
}

var txt;
function Gender(){
   txt=prompt("Please  enter Your Gender"); 
   myArry.push(txt);  
   switch(txt) {
      case "male":
       alert("your Gender is Male");
        break;
      case "female":
         alert("your Gender is FeMale");
        break;
      case "":
         alert("your Gender is invalid");
         break;
        default :
        prompt("Please renter Your Gender");
        break;
      }
      
                  }

       function Ages(){         
      var Age = prompt("Please enter your age");
      myArry.push(Age);
      if(Age ==0){
         alert("your age equal zero");
      }
      else if( Age<0)
      {
         alert("your Age is less than 0");
         
         
      }
     
     
   }
   
   function welcomeMsg(){
      var skip = confirm("do you want to skip the welcoming message");
      if(skip == false){
      
         if(txt === "male"){
            alert("Welcome to our ToDo Website Mr  "+ myName);
                           }
      else if(txt === "female"){
         alert("Welcome to our ToDo Website Ms  "+ myName);

      }
      else{
         alert("Welcome to our ToDo Website  "+myName);

      }
             }
      }

      function Work(){
         if(txt === "female"){
            confirm("Are you a housewife?");
         }
         else {
            confirm("Are you unemployed?");
         }
      }

      function Favourite(){
         if(txt === "female"){
            confirm("Do you like cooking?");
         }
         else {
            confirm("Do you like to drive cars?");
         }
      }


      function yourStatus(){
        
            confirm("Are you married?");
      }

      Names();
      Gender();
      Ages();
      welcomeMsg();
      Work();
      Favourite();
      yourStatus();
      console.log(myArry);