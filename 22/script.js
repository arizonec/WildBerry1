const documentWrite = () => {
    document.write(document.querySelector(".count-area").innerHTML);
  };
  
const counter = () => {
    const number = document.querySelectorAll(".number").length;
    const countNum = document.querySelector(".count-num");
  
    countNum.textContent = number;
};