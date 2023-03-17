const setDelayText = callback => {
  setTimeout(() => {
    callback();
  }, 300);
};

export  const delayOutput = () => {
  const timerOutput = document.querySelector('.timer__input');
  const p = document.querySelector('.timer__paragraph');

  timerOutput.addEventListener('keyup', (e) => {
    setDelayText(() => {
      const target = e.target;
      p.textContent = target.value;
    });
  });
};