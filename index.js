import control from './modules/control.js';
const {delayOutput} = control;
{
  const init = (appSelector) => {
    const app = document.querySelector(appSelector);

    //functionality
    delayOutput();

  };
  window.AppInit = init;
}