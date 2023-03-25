export const handleAcc = () => {
    const list = document.querySelector('.list');
    const activeQuestion = document.getElementsByClassName('li-question-active');

    list.addEventListener("click", ({target}) => {
        if (activeQuestion[0] && activeQuestion[0] !== target.closest('.li-question')) {
            activeQuestion[0].classList.remove('li-question-active');
        }

        if (target.closest('.button')) {
            target.closest('.li-question').classList.toggle('li-question-active');
        }
    });
};