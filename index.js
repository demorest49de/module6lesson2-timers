import control from './modules/control.js';
const {delayOutput} = control;
{
  const init = (appSelector) => {
    const app = document.querySelector(appSelector);
    // renderApp();

    //functionality
    delayOutput();

  };
  window.AppInit = init;
}