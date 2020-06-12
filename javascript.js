var playing=false;
var score;
var action;
var timeRem;
var correct;
document.getElementById("start").onclick=function(){
    if(playing==true){
        location.reload();
    }
    else{
        playing=true;
        score=0;
        timeRem=60;
   
         document.getElementById("scoreValue").innerHTML=score;
        document.getElementById("start").innerHTML="Reset Game";
        
        show("trbox")
        startCountdown();
        hide("gOver");
        generateQues();
    }
}

function startCountdown(){
    action= setInterval(function(){
        timeRem-=1;
        document.getElementById("trvalue").innerHTML=timeRem;
        if(timeRem==0){
            clearInterval(action);
            show("gOver");
            hide("trbox");
        document.getElementById("gOver").innerHTML="<p>Oops! Game Over<p><p>Your score is="+ score +".<p>";
        hide("right");
        hide("wrong");
        playing=false;
        document.getElementById("start").innerHTML="Start Game";
        }
    },1000)
}
function show(id){
    document.getElementById(id).style.display="block";
}
function hide(id){
    document.getElementById(id).style.display="none";
}
function generateQues(){
    var x= 1+Math.round(9*Math.random());
    var y= 1+Math.round(9*Math.random());
     correct=x*y;
    document.getElementById("question").innerHTML= x +"x"+ y;
    var rightpos=1+Math.round(3*Math.random());
    document.getElementById("option"+rightpos).innerHTML=correct;
    var wrong;
    var ans;
    var ans=[correct];
    for(var i=1;i<5;i++){
        if(i!=rightpos){
           do{
               wrong=(1+Math.round(9*Math.random())) * (1+Math.round(9*Math.random())) ;
           }while(ans.indexOf(wrong)>-1)      
           document.getElementById("option"+i).innerHTML=wrong;
            ans.push(wrong);
            
        }
    }
    
}

for(var i=1;i<5;i++){
    document.getElementById("option" +i).onclick=function(){
    if(playing==true){
        if(this.innerHTML==correct){
            score++;
            document.getElementById("scoreValue").innerHTML=score;
            show("right");
            hide("wrong");
            setTimeout(function(){hide("right")},1000);
            generateQues();
        }
        else{
            show("wrong");
            hide("right");
            setTimeout(function(){hide("wrong")},1000);
        }
    }
}
}