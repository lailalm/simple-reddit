/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';

import ConnectedDebugScene, { DebugScene } from 'scenes/DebugScene';

import {
  generateTopic,
  clearTopic,
} from 'actions/DebugAction';

import {
  GENERATE_TOPIC,
  CLEAR_TOPIC,
} from 'utils/ActionTypes';


// Snapshot for CreateTopicScene React Component
describe('>>> DebugScene --- Snapshot', () => {
  it('+++ capturing Snapshot of DebugScene', () => {
    const renderedValue = renderer.create(<DebugScene />)
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe('>>> DebugScene --- Shallow Render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DebugScene />);
  });

  it('+++ render the dummy component', () => {
    expect(wrapper.length).toEqual(1);
  });
});

describe('>>> CreateTopicScene --- React-Redux (Mount + wrapping in <Provider>)', () => {
  const origConsole = console.error;
  const initialState = {};
  const mockStore = configureStore();
  let store;
  let wrapper;

  beforeEach(() => {
    console.error = () => {};
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store} >
      <ConnectedDebugScene />
    </Provider>);
  });

  // HACK: There isn't any react native adapter, so I'm using the react adapter.
  //       This will temporarily silence propType warnings
  afterEach(() => {
    console.error = origConsole;
  });

  it('+++ render the connected component', () => {
    expect(wrapper.find(ConnectedDebugScene).length).toEqual(1);
  });

  it('+++ check action on dispatching ', () => {
    store.dispatch(generateTopic(10));
    store.dispatch(clearTopic());
    const action = store.getActions();
    expect(action[0].type).toBe(GENERATE_TOPIC);
    expect(action[1].type).toBe(CLEAR_TOPIC);
  });
});
