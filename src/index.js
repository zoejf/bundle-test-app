import {boot} from './js/app';

const applicationRoot = document.createElement('div');
document.body.appendChild(applicationRoot);

boot({container: applicationRoot});