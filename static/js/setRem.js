let screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlDom = document.getElementsByTagName('html')[0];
htmlDom.style.fontSize = screenWidth / 10 + 'px';

window.addEventListener("resize", (e) => {
  let screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
  htmlDom.style.fontSize = screenWidth / 10 + 'px';
});
