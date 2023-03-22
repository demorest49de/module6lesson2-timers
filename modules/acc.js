export const handleAcc = () => {
    const liElems = document.querySelectorAll(".li-question");
    const btns = document.querySelectorAll(".button");
    const txtWrps = document.querySelectorAll(".text-wrapper");

    let wrpHeight = 0;

    txtWrps.forEach(elem => {
        if (elem.scrollHeight > wrpHeight) {
            wrpHeight = elem.scrollHeight;
        }
    });
    console.log(' : ', wrpHeight);
    liElems.forEach((li, iLi) => {
        btns.forEach((btn, iBtn) => {
            btn.addEventListener("click", () => {
                if (iLi === iBtn) {
                    txtWrps[iBtn].style.height =
                        li.classList.contains('li-question-active') ?
                            '' : `${wrpHeight}px`;
                    li.classList.toggle('li-question-active');
                } else {
                    li.classList.remove('li-question-active');
                    txtWrps[iBtn].style.height = '';
                }
            });
        });
    });
};