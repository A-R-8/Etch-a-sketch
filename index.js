//Creating container for divs
const container=document.createElement('div'); 
container.classList.add('container');


//Appending container to body
const body=document.querySelector('.setGrid');
body.appendChild(container); 



function creatingGrid(num1,num2,grid)
{
for (let j=0;j<num1;j++)
{
for (let i=0;i<num1;i++)
{
    const box=document.createElement('div')
    box.classList.add('box');
    box.style.height=num2+"cm";
    box.style.width=num2+"cm";
    container.appendChild(box);

}
}

for(let i=0;i<container.childNodes.length;i++)
{
  grid[i]=container.childNodes[i];
}


}

let grid=[];

//Function to change color
function colorChange()
{
    let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
}



const buttons=document.querySelector('button');
document.querySelector('input').focus();
buttons.addEventListener('click', ()=>{
  container.replaceChildren();
  rgb_button.style.backgroundColor="#2a2f48";
  rgb_button.style.color="white";
  white_button.style.backgroundColor="#2a2f48";
  white_button.style.color="white";

  
  const input= document.querySelector('input').value;

  console.log(typeof(input));
  var num1= parseInt(input);
  console.log(num1);
  let num2=10/num1;
  creatingGrid(num1,num2,grid);
  
})

const rgb_button=document.querySelector('.RGB');
rgb_button.addEventListener('click', ()=>{
  white_button.style.backgroundColor="#2a2f48";
  white_button.style.color="white";

  rgb_button.style.backgroundColor="#66fcf1";
  rgb_button.style.color="#2a2f48";



  grid.forEach((div)=>{
    
    div.addEventListener('mouseover',()=>{
      div.style.backgroundColor=colorChange();
      
  });
  });
})

const white_button=document.querySelector('.White');


white_button.addEventListener('click', ()=>{
 


  white_button.style.backgroundColor="#66fcf1";
  white_button.style.color="#2a2f48";
  rgb_button.style.backgroundColor="#2a2f48";
  rgb_button.style.color="white";
  

  grid.forEach((div)=>{
    div.addEventListener('mouseover',()=>{
    div.style.backgroundColor='white';
  });
  });








})











