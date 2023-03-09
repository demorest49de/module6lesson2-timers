import {
  delayOutput,
} from './modules/control.js';
import {
  renderApp,
} from './modules/render.js';

{
  const init = (appSelector) => {
    const app = document.querySelector(appSelector);
    renderApp(app);

    //functionality
    delayOutput();

  };
  window.AppInit = init;
}