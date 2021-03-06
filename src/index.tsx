import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {appService} from './helpers/appService'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

appService.init();

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
