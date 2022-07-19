const container = document.querySelector("#container");

const para = document.createElement("p");

para.classList.add("newPara");
para.textContent = "Hey I'm red!";
para.style.color = "red";

container.appendChild(para);

const h3 = document.createElement("h3");

h3.classList.add("newH3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

container.appendChild(h3);

const div = document.createElement("div");

div.classList.add("newDiv");
div.style.backgroundColor = "pink";
div.style.border = "black";

container.appendChild(div);

const h1 = document.createElement("h1");

h1.classList.add("newH1");
h1.textContent = "I'm in a div."

const newPara = document.createElement("p");

newPara.textContent = "Me too!";

div.appendChild(h1);
div.appendChild(newPara);