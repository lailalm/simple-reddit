import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';

import ConnectedLandingScene, { LandingScene } from 'scenes/LandingScene';

import {
  upvoteTopic,
  downvoteTopic,
} from 'actions/TopicAction';

import {
  UPVOTE_TOPIC,
  DOWNVOTE_TOPIC,
} from 'utils/ActionTypes';

import reducers from 'reducers/';

const dummyOneData = {
  data: [{
    id: '1',
    title: 'First Post',
    upvotes: 5,
    downvotes: 3,
  }],
  sortOptions: 'DECREASING_UPVOTE',
};

// Snapshot for LandingScene React Component
describe('>>> LandingScene --- Snapshot', () => {
  it('+++ capturing Snapshot of LandingScene', () => {
    const renderedValue = renderer.create(<LandingScene list={dummyOneData} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe('>>> LandingScene --- Shallow Render', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LandingScene list={dummyOneData} />);
  });

  it('+++ render the dummy component', () => {
    expect(wrapper.length).toEqual(1);
  });
});

describe('>>> LandingScene --- React-Redux (Shallow + passing the {store} directly)', () => {
  const initialState = {
    listReducer: dummyOneData,
  };
  const mockStore = configureStore();
  let store;
  let container;

  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<ConnectedLandingScene store={store} />);
  });

  it('+++ render the connected component', () => {
    expect(container.length).toEqual(1);
  });

  it('+++ check the props match with initialState', () => {
    expect(container.prop('list')).toEqual(initialState.listReducer);
  });
});

describe('>>> LandingScene --- React-Redux (Mount + wrapping in <Provider>)', () => {
  const origConsole = console.error;
  const initialState = {
    listReducer: dummyOneData,
  };
  const mockStore = configureStore();
  let store;
  let wrapper;

  beforeEach(() => {
    console.error = () => {};
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store} ><ConnectedLandingScene /></Provider>);
  });

  // HACK: There isn't any react native adapter, so I'm using the react adapter.
  //       This will temporarily silence propType warnings
  afterEach(() => {
    console.error = origConsole;
  });

  it('+++ render the connected component', () => {
    expect(wrapper.find(ConnectedLandingScene).length).toEqual(1);
  });

  it('+++ check prop matches with initialState', () => {
    expect(wrapper.find(LandingScene).prop('list')).toEqual(initialState.listReducer);
  });

  it('+++ check action on dispatching ', () => {
    let action;
    store.dispatch(upvoteTopic(1));
    store.dispatch(downvoteTopic(1));
    action = store.getActions();
    expect(action[0].type).toBe(UPVOTE_TOPIC);
    expect(action[1].type).toBe(DOWNVOTE_TOPIC);
  });
});

describe('>>> LandingScene --- React-Redux (actual Store + reducers)', () => {
  const origConsole = console.error;
  let store;
  let wrapper;

  beforeEach(() => {
    console.error = () => {};
    store = createStore(reducers);
    wrapper = mount(<Provider store={store}><ConnectedLandingScene /></Provider>);
  });

  // HACK: There isn't any react native adapter, so I'm using the react adapter.
  //       This will temporarily silence propType warnings
  afterEach(() => {
    console.error = origConsole;
  });

  it('+++ check Prop matches with initialState', () => {
    expect(wrapper.find(LandingScene).prop('list')).toEqual(expect.objectContaining({
      data: expect.arrayContaining(dummyOneData.data),
      sortOptions: expect.any(String),
    }));
  });
});
