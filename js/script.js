function getOutput(output){
  document.getElementById("output").innerHTML = output;
}
function getOrignalString(Ostring){
  document.getElementById("statement").innerHTML = Ostring;
}

function inputvalue(){
   return document.getElementById("inputText").value;
   
}
let olderDate = new Date();

function getTodayDay(){
  let todayIndex = olderDate.getDay();
  let week = ["sunday","Monday","Tuesday","wednesday","Thursday","friday","saturday"];
  let TodayDay = week[todayIndex];
  getOutput(TodayDay);
}
getOrignalString(olderDate);

function dayPassedYouBorn(){
    let dob = inputvalue();
    if(!dob){
      toassityError("please enter your birthday date in inputField");
      return;
    }
    console.log("dateofBirth",dob)
    let today = new Date();
    
    let dobIN = new Date(dob);
    
    let todayTime = today.getTime();
    console.log("todayINTIme ", todayTime)
    let dobTime = dobIN.getTime();
    console.log("birthday",dobTime)

    let diff = todayTime - dobTime;
    let inDay = diff/(1000 *3600 * 24);
    let roundValue = Math.round(inDay);
    let html = `day passad you born ${roundValue}`;
    getOutput(html);
}
function yourNextBirthDay(){

  let dob = inputvalue();
  if(!dob){
    toassityError("please enter your birthday date");
    return;
  }
    console.log("dateofBirth",dob)
    let today = new Date();
    
    let dobIN = new Date(dob);
    
    let todayTime = today.getTime();
    console.log("todayINTIme ", todayTime)
    let dobTime = dobIN.getTime();
    console.log("birthday",dobTime)

    let diff =  dobTime - todayTime;
    let inDay = diff/(1000 *3600 * 24);
    let roundValue = Math.round(inDay);
    let html = ` ${roundValue} days left in your next birthday`;
    getOutput(html);
}

// greeting hours
function greeting(){
  let username = prompt("please enter your name");
  if(!username){
    toassityError("please enter your name");
    return;
  }
  
  let hour = olderDate.getHours();
  let greetingMessage = "Good";
  if(hour >=3 && hour < 12){
    greetingMessage += " Morning";

  } else if(hour >=12 && hour < 17){
    greetingMessage += " After Noon";
  }
  else if(hour >=17 && hour < 20){
    greetingMessage += " Evening";
  }else{
    greetingMessage += " Night";
  }

  let msg = greetingMessage + " " + username;
  getOutput(msg);
  tellTime();
}

function toassityError(newStr){
  let str = newStr;
  Toastify({
    
    text: str,
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #d00000, #dc2f02)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}

// button clicked time 
function tellTime(){
  let olderDate = new Date();
  let hours = olderDate.getHours();
  let mints = olderDate.getMinutes();
  let second = olderDate.getSeconds();
  let output = `<br> you click the button at @ ${hours} : ${mints} : ${second} <br>`;
   document.getElementById("output").innerHTML += output;
}
function calcutateTex(){
  let val = +prompt("enter you billing price");
  if(!val){
    toassityError("please enter any value in inputField");
    return;
  }
  let texRate = 17;
  
  let tex = texCount(val,texRate);
  let html = `your tex is ${tex}`;
  getOutput(html);

}

function texCount(val ,texRate){
   let tex = (val * texRate)/100;
   return tex;
}
function calTexAndTotal(){
  let val = +prompt("enter your billing price");
  if(!val){
    toassityError("please enter your billing price");
    return;
  }
   if(val <1000){
     var tex = 10;
   }else{
    var tex = 17;
   }
   let acTex = texCount(val , tex);
   totalValue = val+acTex;
   let roundValue = Math.round(totalValue)
   html = `you total cost including tex is ${roundValue}`;
   getOutput(html);
}
function tellTime1(){
  tellTime();
}
function tellTime2(){
  tellTime()
}
function tellTime3(){
  tellTime();
}
function clearInput(){
  document.getElementById("inputText").value = "";

}
function clearOutput(){
  document.getElementById("output").innerHTML = "";

}
