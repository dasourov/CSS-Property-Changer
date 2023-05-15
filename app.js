const blockEl = document.querySelector(".block");
const rangey = document.querySelector("#position-y");
const rangex = document.querySelector("#position-x");
const button = document.querySelector("#okay-btn");
const happy = document.querySelector("#happy");
const sizeChange = document.querySelector("#sizeChange");
const red = document.querySelector("#r");
const green = document.querySelector("#g");
const blue = document.querySelector("#b");
const opacity = document.querySelector("#a");
const rgbaAll = document.querySelectorAll(".rgba input");

rangey.addEventListener("change", () => {
  blockEl.style.top = rangey.value + "px";
});
rangex.addEventListener("change", () => {
  blockEl.style.left = rangex.value + "px";
});

button.addEventListener("click", () => {
  if (happy.value === "1") {
    blockEl.style.borderRadius = "0";
  }
  if (happy.value === "2") {
    blockEl.style.borderRadius = "50%";
  }
});

sizeChange.addEventListener("change", () => {
  blockEl.style.transform = "scale(" + sizeChange.value + ")";
});

red.addEventListener("change", () => {
  blockEl.style.backgroundColor = `rgba(${red.value}, 0,0,1)`;
});

green.addEventListener("change", () => {
  blockEl.style.backgroundColor = `rgba(${red.value}, ${green.value},0,1)`;
});

opacity.addEventListener("change", () => {
  blockEl.style.opacity = opacity.value;
});

for (let i = 0; i < rgbaAll.length; i++) {
  rgbaAll[i].addEventListener("change", () => {
    blockEl.style.backgroundColor =
      "rgba(" +
      red.value +
      "," +
      green.value +
      "," +
      blue.value +
      "," +
      opacity.value +
      ")";
  });
}
