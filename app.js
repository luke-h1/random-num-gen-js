const btn2 = document.getElementById('random').addEventListener('click', genRanNum);



function genRanNum(){
  let i = Math.floor((Math.random() * 20) + 1); 
  const a = document.querySelector('.res1'); 
  a.innerHTML = i;   
  console.log(i);
}

// for (let i = 0; i < arr.length, i++){}