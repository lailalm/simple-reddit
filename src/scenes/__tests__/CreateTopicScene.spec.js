/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';

import ConnectedCreateTopicScene, { CreateTopicScene } from 'scenes/CreateTopicScene';

import {
  createNewTopic,
} from 'actions/TopicAction';

import {
  CREATE_NEW_TOPIC,
} from 'utils/ActionTypes';

const mockNavigation = {
  navigate: jest.fn(),
  setParams: jest.fn(),
};

// Snapshot for CreateTopicScene React Component
describe('>>> CreateTopicScene --- Snapshot', () => {
  it('+++ capturing Snapshot of CreateTopicScene', () => {
    const renderedValue = renderer.create(<CreateTopicScene navigation={mockNavigation} />)
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe('>>> CreateTopicScene --- Shallow Render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CreateTopicScene navigation={mockNavigation} />);
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
      <ConnectedCreateTopicScene navigation={mockNavigation} />
    </Provider>);
  });

  // HACK: There isn't any react native adapter, so I'm using the react adapter.
  //       This will temporarily silence propType warnings
  afterEach(() => {
    console.error = origConsole;
  });

  it('+++ render the connected component', () => {
    expect(wrapper.find(ConnectedCreateTopicScene).length).toEqual(1);
  });

  it('+++ check action on dispatching ', () => {
    store.dispatch(createNewTopic('title of the topic'));
    const action = store.getActions();
    expect(action[0].type).toBe(CREATE_NEW_TOPIC);
  });
});
