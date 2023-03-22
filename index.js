import {createSection} from './modules/create.js';
import {handleAcc} from './modules/acc.js';

{
    const init = () => {
        // createSection();
        handleAcc();
    };

    window.AppInit = init;
}

