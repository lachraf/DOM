//============================== inc & dec: 

let p1price=document.getElementById('product1price')
let pqtn=document.getElementById('product-qtn')
let total=document.getElementById('total')
let part1=document.getElementById('part1')

function inc(){
    pqtn.innerHTML=+pqtn.innerHTML+1;
    p1price.innerHTML=+p1price.innerHTML+1149;
    total.innerHTML=+total.innerHTML+1149;
  }
  
  function dec(){
    if(pqtn.innerHTML==0){
      pqtn.innerHTML=pqtn.innerHTML;
      total.innerHTML=+total.innerHTML;
      p1price.innerHTML=p1price.innerHTML;
    }
    else{  pqtn.innerHTML=+pqtn.innerHTML-1;
      total.innerHTML=+total.innerHTML-1149;
      p1price.innerHTML=+p1price.innerHTML-1149;}
  }


let p1price2=document.getElementById('product1price2')
let pqtn2=document.getElementById('product-qtn2')
let part2=document.getElementById('part2')

function inc2(){
    pqtn2.innerHTML=+pqtn2.innerHTML+1;
    p1price2.innerHTML=+p1price2.innerHTML+1299;
    total.innerHTML=+total.innerHTML+1299;
  }
  
  function dec2(){
    if(pqtn2.innerHTML==0){
      pqtn2.innerHTML=pqtn2.innerHTML;
      total.innerHTML=+total.innerHTML;
      p1price2.innerHTML=p1price2.innerHTML;
    }
    else{  pqtn2.innerHTML=+pqtn2.innerHTML-1;
      total.innerHTML=+total.innerHTML-1299;
      p1price2.innerHTML=+p1price2.innerHTML-1299;}
  }


let p1price3=document.getElementById('product1price3')
let pqtn3=document.getElementById('product-qtn3')
let part3=document.getElementById('part3')

function inc3(){
  pqtn3.innerHTML=+pqtn3.innerHTML+1;
  p1price3.innerHTML=+p1price3.innerHTML+174;
  total.innerHTML=+total.innerHTML+174;
}

function dec3(){
  if(pqtn3.innerHTML==0){
    pqtn3.innerHTML=pqtn3.innerHTML;
    total.innerHTML=+total.innerHTML;
    p1price3.innerHTML=p1price3.innerHTML;
  }
  else{  pqtn3.innerHTML=+pqtn3.innerHTML-1;
    total.innerHTML=+total.innerHTML-174;
    p1price3.innerHTML=+p1price3.innerHTML-174;}
}




//============================== remove: junk

function remove(){
    part1.style.display='none';
    total.innerHTML=+total.innerHTML-p1price.innerHTML;
}
function remove2 (){
    part2.style.display='none';
    total.innerHTML=total.innerHTML-p1price2.innerHTML;
}
function remove3(){
    part3.style.display='none';
    total.innerHTML=total.innerHTML-p1price3.innerHTML;
}




//============================== like: heart

let heart=document.getElementById('heart')

function heart1(){
  if(heart.style.color=='red'){
    heart.style.color='black'
  }
  else{
    heart.style.color='red'
  }
}

let heart11=document.getElementById('heart11')

function heart2(){
  if(heart11.style.color=='red'){
    heart11.style.color='black'
  }
  else{
    heart11.style.color='red'
  }
}

let heart12=document.getElementById('heart12')

function heart3(){
  if(heart12.style.color=='red'){
    heart12.style.color='black'
  }
  else{
    heart12.style.color='red'
  }
}

