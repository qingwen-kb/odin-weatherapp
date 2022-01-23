import "./style.css";

const body = document.querySelector("body");
const h1 = document.createElement("h1");
h1.textContent = "hello";
body.append(h1);
console.log(process.env.API_KEY);
console.log(process.env.SECRET);
