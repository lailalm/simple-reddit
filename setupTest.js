/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import { jsdom } from 'jsdom';
import Adapter from 'enzyme-adapter-react-16';

require('react-native-mock-render/mock');

configure({ adapter: new Adapter() });

global.document = jsdom('');
global.window = document.defaultView;
