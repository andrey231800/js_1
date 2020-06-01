let btn1 = document.getElementById("button");
let btn2 = document.getElementById("temp");


var term = {
    Canada: 10,
    Germany: 13,
    Spain: 22
    }
var rez = (term.Canada + term.Germany + term.Spain)/3;
btn1.addEventListener('click', function averageDegree(){
    alert("среднее значение стран: " + rez + " градусов");
});





btn2.addEventListener('click', function clickBtn2(){

        var max = 1;
        for(var key in term){
            if(term[key] > max){
                max = term[key];
            }
     }
     alert('максимальная температура: '+ key + " " + max);
});

  
