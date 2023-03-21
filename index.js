import create from './modules/create.js';
{
  const init = (appSelector) => {
    const app = document.querySelector(appSelector);
    renderApp(app);

    //functionality
    delayOutput();
  };
  window.AppInit = init;
}