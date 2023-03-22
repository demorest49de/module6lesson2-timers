export const createSection = () => {
    const section = document.createElement('section');
    section.classList.add('accordion');
    section.insertAdjacentHTML("beforeend", `
      <div class="container">
          <ul class="list">
              <li class="question">
                  <div class="block">
                      <button class="button" type="button">item 1?</button>
                      <div class="wrapper">
                          <span class="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          </span>
                      </div>
                  </div>
              </li>
              <li class="question">
                  <div class="block">
                      <button class="button" type="button">item 2</button>
                      <div class="wrapper">
                          <span class="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          </span>
                      </div>
                  </div>
              </li>
              <li class="question">
                  <div class="block">
                      <button class="button" type="button">item 3</button>
                      <div class="wrapper">
                          <span class="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          </span>
                      </div>
                  </div>
              </li>
              <li class="question">
                  <div class="block">
                      <button class="button" type="button">item 3</button>
                      <div class="wrapper">
                          <span class="text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, sunt?
                          </span>
                      </div>
                  </div>
              </li>
          </ul>
      </div>
  `);
    document.body.appendChild(section);
};