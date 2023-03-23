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

    liElems.forEach((li, iLi) => {
        btns.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                if (iLi === i) {
                    li.classList.toggle('li-question-active');
                    console.log(' : ', li);
                    txtWrps[i].style.height = li.classList.contains('li-question-active') ?
                        `${wrpHeight}px` : `0px`;
                } else {
                    li.classList.remove('li-question-active');
                }
            });
        });
    });
};