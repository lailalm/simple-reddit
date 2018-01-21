import {
  CREATE_NEW_TOPIC,
  UPVOTE_TOPIC,
  DOWNVOTE_TOPIC,
  CLEAR_TOPIC,
  GENERATE_TOPIC,
} from 'utils/ActionTypes';

import {
  getGeneratedTopic,
} from 'utils/Generator';

import listReducer from 'reducers/ListReducer';

const initialState = {
  data: [
    {
      id: '1',
      title: 'First Dummy Post',
      upvotes: 5,
      downvotes: 3,
    },
  ],
  sortOptions: 'DECREASING_UPVOTE',
};

describe('>>> R E D U C E R --- Test TopicReducer', () => {
  it('+++ reducer for UPVOTE_TOPIC (5 -> 6)', () => {
    let state = initialState;
    state = listReducer(state, {
      type: UPVOTE_TOPIC,
      payload: {
        id: '1',
      },
    });
    expect(state.data).toContainEqual(expect.objectContaining({
      id: '1',
      upvotes: 6,
    }));
  });

  it('+++ reducer for DOWNVOTE_TOPIC (3 -> 4)', () => {
    let state = initialState;
    state = listReducer(state, {
      type: DOWNVOTE_TOPIC,
      payload: {
        id: '1',
      },
    });
    expect(state.data).toContainEqual(expect.objectContaining({
      id: '1',
      downvotes: 4,
    }));
  });

  it('+++ reducer for CREATE_NEW_TOPIC', () => {
    let state = initialState;
    state = listReducer(state, {
      type: CREATE_NEW_TOPIC,
      payload: {
        new_post: {
          id: 'new',
          title: 'test title',
          upvotes: 0,
          downvotes: 0,
        },
      },
    });
    expect(state.data).toContainEqual(expect.objectContaining({
      id: 'new',
      title: 'test title',
      upvotes: 0,
      downvotes: 0,
    }));
  });

  it('+++ reducer for GENERATE_TOPIC', () => {
    const initialLength = initialState.data.length;
    let state = initialState;
    state = listReducer(state, {
      type: GENERATE_TOPIC,
      payload: {
        list: getGeneratedTopic(5),
      },
    });
    expect(state.data.length).toEqual(initialLength + 5);
  });

  it('+++ reducer for CLEAR_TOPIC', () => {
    let state = initialState;
    state = listReducer(state, {
      type: CLEAR_TOPIC,
    });
    expect(state.data).toEqual([]);
  });
});
