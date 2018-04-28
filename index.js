var toInp = document.getElementById("toInp"),
    msgInp = document.getElementById("msgInp"),
    fromInp = document.getElementById("fromInp"),
    toDiv = document.getElementById("to"),
    msgDiv = document.getElementById("message"),
    fromDiv = document.getElementById("from");

//LVL 2a
toInp.addEventListener("keyup",function(){
        toDiv.innerText = "To: "+ toInp.value;
 });
    
msgInp.addEventListener("keyup",function(){
        msgDiv.innerText = msgInp.value;
})
fromInp.addEventListener("keyup",function(){
        fromDiv.innerText = "From: " +fromInp.value;
})

//LVL 2b
var pcDiv = document.getElementById("postcard"),
    bgInp = document.getElementById("bgInp");
 var num = 0;

bgInp.addEventListener("keyup",function(ev){
    if(ev.keyCode == 13){

     num++
    if(bgInp.value == "auto"){ 
    pcDiv.style.backgroundImage = "url(imgs/auto"+num+".jpg)";
    }else if (bgInp.value == ""){
         pcDiv.style.backgroundImage = "url(imgs/default.png)";
    } else{
		pcDiv.style.backgroundImage = "url("+bgInp.value+")";
	}
      
     if (num >= 3){
       num = 0; }
    }
    
   
})

//LVL 4a


function createPostcard(to,bgImg){
    
    var minipostcard = document.createElement("div");
    var mpcTo =  document.createElement("div");

    
    minipostcard.className = "minipostcard";
    mpcTo.className="mpcTo";
    
    mpcTo.innerText = to; 
    minipostcard.style.backgroundImage = bgImg;
    
    
    
    prevDiv.appendChild(minipostcard);
    minipostcard.appendChild(mpcTo);
    
    
}
//LVL 3

var addGal = document.getElementById("addGal"),
    prevDiv = document.getElementById("preview");
    pcArr = [];
  

addGal.addEventListener("click",function(){
    
       //LEVEL4b
    var pcDetails = { 
        bgImg: pcDiv.style.backgroundImage,
        to: toInp.value,
        message: msgInp.value,
        from: fromInp.value
    }
	
	createPostcard(pcDetails.to,pcDetails.bgImg);
    

    pcArr.push(pcDetails);
    console.log(pcArr);
    });
  
    
//LVL 4c

var saveArr = document.getElementById("saveArray"),
    loadArr = document.getElementById("loadArray");


saveArr.addEventListener("click",function(){
    localStorage.setItem("savedArray",JSON.stringify(pcArr));
    console.log(localStorage.getItem("savedArray"));
});

loadArr.addEventListener("click",function(){
    pcArr = localStorage.getItem("savedArray");
    pcArr =JSON.parse(pcArr);
    prevDiv.innerHTML= " ";
    
     for( var i = 0; i<pcArr.length; i++){
         createPostcard(pcArr[i].to,pcArr[i].bgImg);
    }
})
