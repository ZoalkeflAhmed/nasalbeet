let MyForm = document.querySelector(".myform");
let MyApp = document.querySelector(".myApp");
let NotAllaw = document.querySelector(".notAllaw");
let myspan = document.querySelector("span");


 MyForm.addEventListener("submit", function(e){
    e.preventDefault();
    
    let UserName = document.querySelector(".uname").value;
    if(UserName ===  "ماهر"){
        MyApp.style.display = "flex";
        MyForm.style.display = "none";
    }
    else if(UserName ===  "ذوالكفل"){
      MyApp.style.display = "flex";
      MyForm.style.display = "none";
  }
  else if(UserName ===  "عبدالباقي"){
   MyApp.style.display = "flex";
   MyForm.style.display = "none";
}
else if(UserName ===  "شاذلي"){
   MyApp.style.display = "flex";
   MyForm.style.display = "none";
}
else if(UserName ===  "شازلي"){
   myspan.style.display = "inline-block";
   MyForm.style.display = "none";
}
else if(UserName ===  "مجاهد"){
   MyApp.style.display = "flex";
   MyForm.style.display = "none";
}
else if(UserName ===  ""){
   MyForm.style.display = "block";
}
else{
  NotAllaw.style.display = "block";
}
});

let day1 = document.querySelector(".day1");
day1.onclick = function(){
   document.querySelector(".msg1").style.display = "block";
}
let day2 = document.querySelector(".day2");
day2.onclick = function(){
   document.querySelector(".msg2").style.display = "block";
}
let day3 = document.querySelector(".day3");
day3.onclick = function(){
   document.querySelector(".msg3").style.display = "block";
}
let day4 = document.querySelector(".day4");
day4.onclick = function(){
   document.querySelector(".msg4").style.display = "block";
}
let day5 = document.querySelector(".day5");
day5.onclick = function(){
   document.querySelector(".msg5").style.display = "block";
}
let day6 = document.querySelector(".day6");
day6.onclick = function(){
   document.querySelector(".msg6").style.display = "block";
}
let day7 = document.querySelector(".day7");
day7.onclick = function(){
   document.querySelector(".msg7").style.display = "block";
}