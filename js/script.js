const counters=document.querySelectorAll('.counter');
const speed = 20;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const inc = target / speed;
    if(count < target){
      counter.innerText = count + inc;
      setTimeout(updateCount , 25);
    } else {
      count.innerText = target ;
    }

  }

  updateCount();
});


ScrollReveal({
  reset: true,
  distance: '50px',
  duration: 1500,
  delay:400 
  
  });

  ScrollReveal().reveal('.tag , .tag1  , .tag3', { delay: 500, origin:'bottom' });
  ScrollReveal().reveal('.immg', { delay: 500, origin:'right' });
  ScrollReveal().reveal('.par', { delay: 600, origin:'bottom' });
  ScrollReveal().reveal('.bot', { delay: 700, origin:'bottom' });
  ScrollReveal().reveal('.icons img', { delay: 500, origin:'bottom' , interval:200 });
  ScrollReveal().reveal('.all1', { delay: 400, origin:'up' });

  ScrollReveal().reveal('.undertag1', { delay: 350, origin:'bottom' });
  ScrollReveal().reveal('.undertag11', { delay: 500, origin:'bottom' });

  ScrollReveal().reveal('.imgTag1', { delay: 500, origin:'left' });
  ScrollReveal().reveal('.div1Tag1 , .div2Tag1', { delay: 500, origin:'right' });

  ScrollReveal().reveal('.par10', { delay: 500, origin:'bottom' });

  ScrollReveal().reveal('.undertag2 div', { delay: 500, origin:'bottom' , interval:200 });
  ScrollReveal().reveal('.undertag3 ', { delay: 600, origin:'bottom' });

  ScrollReveal().reveal('.serve .one11', { delay: 400, origin:'bottom' , interval:200 });
  ScrollReveal().reveal('.serve2 .one1', { delay: 500, origin:'bottom' , interval:200 });

  ScrollReveal().reveal('.slider', { delay: 700, origin:'bottom'});

  ScrollReveal().reveal('.here', { delay: 600, origin:'bottom'});
  ScrollReveal().reveal('.port', { delay: 700, origin:'bottom'});


  ScrollReveal().reveal('.sectionSeven', { delay: 700, origin:'bottom'});

  ScrollReveal().reveal('.freq1', { delay: 600, origin:'bottom'});
 
  //Portfolio
var all2=document.getElementById('all');
var app1=document.getElementById('app');
var web1=document.getElementById('web');
var card1=document.getElementById('card');

var num1=document.getElementById('image1');
var num2=document.getElementById('image2');
var num3=document.getElementById('image3');
var num4=document.getElementById('image4');
var num5=document.getElementById('image5');
var num6=document.getElementById('image6');
var num7=document.getElementById('image7');
var num8=document.getElementById('image8');
var num9=document.getElementById('image9');

all2.addEventListener("click",function(){
  num1.classList.remove("port")
  num2.classList.remove("port")
  num3.classList.remove("port")
  num4.classList.remove("port")
  num5.classList.remove("port")
  num6.classList.remove("port")
  num7.classList.remove("port")
  num8.classList.remove("port")
  num9.classList.remove("port")
})

app1.addEventListener("click" , function(){
  num1.classList.remove("port")
  num2.classList.add("port")
  num3.classList.remove("port")
  num4.classList.add("port")
  num5.classList.add("port")
  num6.classList.remove("port")
  num7.classList.add("port")
  num8.classList.add("port")
  num9.classList.add("port")
})

web1.addEventListener("click" , function(){
  num1.classList.add("port")
  num2.classList.remove("port")
  num3.classList.add("port")
  num4.classList.add("port")
  num5.classList.remove("port")
  num6.classList.add("port")
  num7.classList.add("port")
  num8.classList.add("port")
  num9.classList.remove("port")
})

card1.addEventListener("click" , function(){
  num1.classList.add("port")
  num2.classList.add("port")
  num3.classList.add("port")
  num4.classList.remove("port")
  num5.classList.add("port")
  num6.classList.add("port")
  num7.classList.remove("port")
  num8.classList.remove("port")
  num9.classList.add("port")
})