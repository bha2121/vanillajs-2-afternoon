const mousePosition = { x: 0, y: 0 };
let drawId;

const getRandomNumber = function(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
};

window.addEventListener('mousemove', function(e) {
  mousePosition.x = e.pageX;
  mousePosition.y = e.pageY;
});

function draw() {
  return setInterval(function() {
    const container = document.getElementById('wrap');
    const color = `background:rgb(${getRandomNumber(0, 255)},${getRandomNumber(
      0,
      255
    )}, ${getRandomNumber(0, 255)});`;
    const ballSize = getRandomNumber(10, 30);
    const size = `height:${ballSize}px; width:${ballSize}px;`;
    const left = `left:${getRandomNumber(
      mousePosition.x - ballSize,
      mousePosition.x
    )}px;`;
    const top = `top:${getRandomNumber(
      mousePosition.y - ballSize,
      mousePosition.y
    )}px; `;
    const style = `${left}${top}${color}${size}`;

    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style = style;

    ball.addEventListener('animationend', function(e) {
      e.target.remove();
    });

    container.appendChild(ball);
  }, .1);
}
window.addEventListener('mouseover', function() {
  drawId = draw();
});
window.addEventListener('mouseout', function() {
  clearInterval(drawId);
});












// let mousePosition = {
//     x: 0,
//     y: 0
// }

// let drawId

// const getRandomNumber = (min, max) => {
//     return Math.round(Math.random() * (max - min +1)) + min
// }

// window.addEventListener('mousemove', e =>{
//     mousePosition.x = e.pageX
//     mousePosition.y = e.pageY
//     console.log(e.value)
// })

// function draw(){
//     return setInterval(function(){
//         let container = document.getElementById('wrap')
//         const color = `background:rgb(${getRandomNumber(
//             0,
//             255
//           )},${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)});`;
//           const ballSize = getRandomNumber(10, 30);
//           const size = `height:${ballSize}px; width:${ballSize}px;`;
//           const left = `left:${getRandomNumber(
//             mousePosition.x - ballSize,
//             mousePosition.x
//           )}px;`;
//           const top = `top:${getRandomNumber(
//             mousePosition.y - ballSize,
//             mousePosition.y
//           )}px; `;
//           const style = `${left}${top}${color}${size}`;

//           let ball = document.createElement('div')
//           ball.classList.add("ball")
//           ball.style = ball

//           ball.addEventListener('animationend', e=>{
//               e.target.remove()
//           })

//           container.appendChild(ball)
        
//     },1)
// }

// window.addEventListener('mouseover', () => {
//     let drawId = draw()
// })

// window.addEventListener('mouseout', () => {
//     clearInterval(drawId)
// })















