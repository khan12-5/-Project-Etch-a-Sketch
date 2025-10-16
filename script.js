let container = document.querySelector(".container");
let size = 16;
for (let i = 0; i < size * size; i++) {
  let div = document.createElement("div");
  div.style.width = `${800 / size}px`;
  div.style.height = `${800 / size}px`;
  div.style.border = "1px solid black";
  div.style.backgroundColor="red";
  container.appendChild(div);

  div.addEventListener("mouseenter", () => {
    let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    div.style.backgroundColor = randomColor;
  });

}
let btn = document.querySelector("button");
btn.addEventListener("click",()=>{
let newSize= Number(prompt("Enter grid size (max 100):"));
if(newSize > 0 && newSize <= 100){
    container.innerHTML = "";
    for (let i = 0; i < newSize * newSize; i++) {
  let div = document.createElement("div");
  div.style.width = `${800 / size}px`;
  div.style.height = `${800 / size}px`;
  div.style.border = "1px solid black";
  div.style.backgroundColor="red";
  container.appendChild(div);

   div.addEventListener("mouseenter", () => {
    let randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    div.style.backgroundColor = randomColor;
  });
}
}else{
 alert("Please enter a number between 1 and 100.");   
}
}
)