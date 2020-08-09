/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
// import App from './src/routes';
// import Draw from './src/routes/draw';
// import Stack from './src/routes/stack';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
