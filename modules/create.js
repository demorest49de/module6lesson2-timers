export const createSection = () => {
  const section = document.createElement('section');
  section.classList.add('timer');
  section.insertAdjacentHTML("beforeend", `
    <div class="container">
      <div class="timer__title-block">
        <h1 class="timer__title">Project for testing and edicational purposes</h1>
        <label class="timer__label"> <span class="timer__text-label">Put some text:</span>
          <input class="form-control timer__input" type="text" name="timer__input">
        </label>
      </div>
      <div class="timer__subblock">
        <label class="timer__label-block">Output text here:</label>
        <p class="timer__paragraph">
        </p>
      </div>
    </div>
  `);

  return section;
};