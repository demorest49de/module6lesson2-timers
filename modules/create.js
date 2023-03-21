export const createSection = () => {
  const section = document.createElement('section');
  section.classList.add('timer');
  section.insertAdjacentHTML("beforeend", `
    <div class="container">
      
    </div>
  `);

  return section;
};