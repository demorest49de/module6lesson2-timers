// const n1 = setTimeout((message) => {
//   console.log(message);
// }, 1400, 'yahoo!');
// console.log(': ', n1);
//
// const n2 = setTimeout(() => {
//   console.log(': hey!');
// }, 1000);
// console.log(': ', n2);
//
// const n3 = setInterval((str) => {
//     console.log(': ',str);
//   }, 1500,
//   'hi');

// let count = 0;
// let timerId = setTimeout(function tick() {
//   count++;
//   console.log(`yahoo: `, count);
//   if (count < 3) {
//     setTimeout(tick, 1000);
//   } else {
//     console.log('timer stop at: ', count);
//     clearInterval(timerId);
//   }
// });

const p = document.querySelector('.timer__paragraph');
p.textContent += '';

const delayText = callback => {
  setTimeout(() => {
    callback();
  }, 300);
};

const timerInput = document.querySelector('.timer__input');
timerInput.addEventListener('input', (e) => {
  delayText( () => {
    const target = e.target;
    p.textContent = target.value;
  });
});