import {
  GENERATE_TOPIC,
  UPVOTE_TOPIC,
  DOWNVOTE_TOPIC,
} from 'utils/ActionTypes';

const initialState = {
  data: [
    {
      id: '1',
      title: 'First Post',
      upvotes: 5,
      downvotes: 3,
    },
    {
      id: '2',
      title: 'Second Post',
      upvotes: 3,
      downvotes: 3,
    },
    {
      id: '3',
      title: 'Third Post',
      upvotes: 0,
      downvotes: 1,
    },
  ],
  sortOptions: 'DECREASING_UPVOTE',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  let data;
  switch (type) {
    case UPVOTE_TOPIC:
      data = state.data.map((item) => {
        if (item.id !== payload.id) {
          return item;
        }
        return {
          ...item,
          upvotes: item.upvotes + 1,
        };
      });
      return {
        ...state,
        data,
      };
    case DOWNVOTE_TOPIC:
      data = state.data.map((item) => {
        if (item.id !== payload.id) {
          return item;
        }
        return {
          ...item,
          downvotes: item.downvotes + 1,
        };
      });
      return {
        ...state,
        data,
      };
    case GENERATE_TOPIC:
      return {
        ...state,
        data: {
          ...state.data,
          payload,
        },
      };
    default:
      return state;
  }
};
