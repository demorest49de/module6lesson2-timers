const n1 = setTimeout((message) => {
  console.log(message);
}, 1400, 'yahoo!');
console.log(': ', n1);

const n2 = setTimeout(() => {
  console.log(': hey!');
}, 1000);
console.log(': ', n2);

setInterval(() => {

}, 1500,
  'hi');

