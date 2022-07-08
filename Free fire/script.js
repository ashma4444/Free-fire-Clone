window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

function set_time(){
    setInterval(image_show, 4000);
}

function image_show(){
    let div1=document.querySelector(".div1");
    let div2=document.querySelector(".div2");
    let div3=document.querySelector(".div3");
    let div4=document.querySelector(".div4");
    let div5=document.querySelector(".div5");
    let div6=document.querySelector(".div6");
    let div7=document.querySelector(".div7");
    let div8=document.querySelector(".div8");
    let div9=document.querySelector(".div9");
    let div10=document.querySelector(".div10");

    let div_array =[div1, div2, div3, div4, div5, div6, div7, div8, div9, div10];

    let image=document.getElementById('image');
    let image_array=['s1.jfif', 's2.jfif','s3.jfif','s4.jfif','s5.jfif', 's6.jfif', 's7.jfif','s8.jfif','s9.jfif','s10.jpg'];
    let random = Math.floor(Math.random() *10);
    

    for(let i=0;i<div_array.length;i++){
        if(div_array[i].display="block"){
            div_array[i].style.display="none";
        }
    }

    div_array[random].style.display="block";

    image.src=image_array[random];
}


