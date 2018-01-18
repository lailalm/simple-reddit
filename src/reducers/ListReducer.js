import {
  GENERATE_TOPIC,
  CLEAR_TOPIC,
} from 'utils/ActionTypes';

const initialState = [
  'hehehehe',
];

export default (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_TOPIC:
      return ['GENERATE_TOPIC'];
    default:
      return state;
  }
};
