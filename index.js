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