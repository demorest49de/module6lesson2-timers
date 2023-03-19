export const delayOutput = () => {
    const timerInput = document.querySelector('.timer__input');
    const p = document.querySelector('.timer__paragraph');
    timerInput.focus();
    let timeoutId = 0;
    timerInput.addEventListener('keyup', () => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            p.textContent = timerInput.value;
        }, 300);
    });
};