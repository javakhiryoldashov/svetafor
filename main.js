let item1= document.querySelector(".item1")
let item2= document.querySelector(".item2")
let item3= document.querySelector(".item3")
let count=0;
setInterval(()=>{
    count++;
    console.log(count);
    if(count<=5){
        item1.style.backgroundColor="red";
        item3.style.backgroundColor="";
    } else if(count>5 && count<=9){
        item2.style.backgroundColor="yellow";
    } else if(count>9 && count<15){
        item1.style.backgroundColor="";
        item2.style.backgroundColor="";
        item3.style.backgroundColor="green";
    }else if(count==15){
        count=0
    }
},1000)