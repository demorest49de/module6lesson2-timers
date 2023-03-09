import {createSection} from './create.js';


export const renderApp = (app) => {
  const section = createSection();
  app.append(section);
};