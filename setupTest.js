import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('react-native-mock-render/mock');

configure({ adapter: new Adapter() });

const jsdom = require('jsdom').jsdom;

global.document = jsdom('');
global.window = document.defaultView;
