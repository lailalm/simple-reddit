import {
  UPVOTE_TOPIC,
  DOWNVOTE_TOPIC,
} from 'utils/ActionTypes';

import listReducer from 'reducers/ListReducer'

const initialState = {
  data: [
    {
      id: '1',
      title: 'First Dummy Post',
      upvotes: 5,
      downvotes: 3,
    }
  ],
  sortOptions: 'DECREASING_UPVOTE',
}

describe('>>> R E D U C E R --- Test TopicReducer', () => {
  it('+++ reducer for UPVOTE_TOPIC (5 -> 6)', () => {
    let state = initialState;
    state = listReducer(state, {
      type: UPVOTE_TOPIC,
      payload: {
        id: '1'
      }
    })
    expect(state.data).toContainEqual(
      expect.objectContaining({
        id: '1',
        upvotes: 6,
      })
    )
  });

  it('+++ reducer for DOWNVOTE_TOPIC (3 -> 4)', () => {
    let state = initialState;
    state = listReducer(state, {
      type: DOWNVOTE_TOPIC,
      payload: {
        id: '1'
      }
    })
    expect(state.data).toContainEqual(
      expect.objectContaining({
        id: '1',
        downvotes: 4,
      })
    )
  });
});