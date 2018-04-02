let screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
console.log('screenWidth:' + screenWidth)
let htmlDom = document.getElementsByTagName('html')[0];
console.log('fontSize:' + screenWidth / 10)
htmlDom.style.fontSize = screenWidth / 10 + 'px';

window.addEventListener("resize", (e) => {
  let screenWidth = document.documentElement.clientWidth || document.body.clientWidth;
  htmlDom.style.fontSize = screenWidth / 10 + 'px';
  console.log('fontSize:' + screenWidth / 10)
});
