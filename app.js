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
    while(1){
         if(txt!=="male" && txt!=="female"){
            txt=prompt("Please  renter Your Gender"); 
         } 
         else if(txt ==="male")
               {
                  alert("your Gender is Male");
                  myArry.push(txt);
                  break;
               }
               else{
                  alert("your Gender is feMale");
                  myArry.push(txt);
                  break;
               }
            
         }

      }
                  

       function Ages(){         
      var Age = prompt("Please enter your age");
      while(1){
     
      if(Age<=0){
         alert("your age is less than or equal zero");
         Age = prompt("Please renter your age");

      }
      else if(Age>0)
      {
         myArry.push(Age);
         break;
         
         } 
         else{ Age = prompt("Please renter your age");
      }
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
        var myWork=prompt("Are you unemployed?");
         if(myWork!=="yes"&& myWork!=="no"){
            alert("your Answer is invalid");
            myArry.push("Invalid Input");
         } else{ 
            myArry.push("Are you unemployed?   "+myWork);
         }
      }

      function Favourite(){
         var myFavourite =prompt("Do you like food?");
         if(myFavourite!=="yes"&& myFavourite!=="no"){
            alert("your Answer is invalid");
            myArry.push("Invalid Input");
         } else{ 
            myArry.push("Do you like food?  "+myFavourite);
         }


      }


      function yourStatus(){
        
       var Status = prompt("Are you married?");
         
       if(Status!=="yes"&& Status!=="no"){
            alert("your Answer is invalid");
            myArry.push("Invalid Input");
         } else{ 
            myArry.push("Are you married?   "+Status);
         }

      }

      function Print(){
         for(let i=0 ;i<myArry.length;i++){
            console.log(myArry[i]);
         }
      }

      Names();
      Gender();
      Ages();
      welcomeMsg();
      Work();
      Favourite();
      yourStatus();
      Print();