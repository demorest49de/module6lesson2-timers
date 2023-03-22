export const createSection = () => {
    const section = document.createElement('section');
    section.classList.add('accordion');
    section.insertAdjacentHTML("beforeend", `
        
    `);
    document.body.appendChild(section);
};