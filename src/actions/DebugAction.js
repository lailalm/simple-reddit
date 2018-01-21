import {
  CLEAR_TOPIC,
  GENERATE_TOPIC,
} from 'utils/ActionTypes';

import {
  getGeneratedTopic,
} from 'utils/Generator';

const generateTopic = number => ({
  type: GENERATE_TOPIC,
  payload: {
    list: getGeneratedTopic(number),
  },
});

const clearTopic = () => ({
  type: CLEAR_TOPIC,
});

export {
  clearTopic,
  generateTopic,
};
