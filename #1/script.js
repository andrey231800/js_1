var bode = document.getElementById("body");


function clickBtn2(){
    if(bode.style.backgroundColor === "brown"){
        bode.style.backgroundColor = "red"; 
    }
    else{
        bode.style.backgroundColor = "brown"; 
    }
};

function clickBtn3(){
    if(bode.style.display === "flex" ){
    
        bode.style.display = "none";
    }
    else{
        bode.style.display = "flex"; 
    }
};