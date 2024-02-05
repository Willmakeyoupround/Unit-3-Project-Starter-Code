/* Declare variables below to save the different sections (divs) of your story*/



 
/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
};
*/
  let Title = document.querySelector (".title");
  let Text2 = document.querySelector (".Text2");
  let Text1 = document.querySelector (".Text1");
  let End = document.querySelector (".option-one-end");
 let storyOpening = document.querySelector (".zombie");
let buttonOne = document.querySelector (".option-one");
let opening = document.querySelector (".story-opening");
let youDied = document.querySelector  (".you-died");
 let option2 = document.querySelector (".option-two-screen");
let End2 = document.querySelector (".option-two-end");
let Button2 = document.querySelector (".option-two");
 let body = document.querySelector (".body");
let optionOneScreen = document.querySelector (".option-one-screen");

buttonOne.onclick = function(){
    optionOneScreen.style.display = "block";
    buttonOne.style.display = "none";
  storyOpening.style.display = "none";
  youDied.style.display = "block";
  option2.style.display = "none";
   End.style.display = "none";
   End2.style.display = "none"; 
    Button2.style.display = "none";
     } ;
   Button2.onclick = function (){
    option2.style.display = "block";
       End.style.display = "block";
       End2.style.display = "block";
   storyOpening.style.display = "none";
   youDied.style.display = "none";
   Text1.style.display = "none";
   Text2.style.display = "none";
   Title.style.display = "none";
   buttonOne.style.display = "none";
   Button2.style.display = "none";
   };




       
   
   
    
    
    






















