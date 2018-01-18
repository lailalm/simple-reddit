import {
  GENERATE_TOPIC,
  CLEAR_TOPIC,
} from 'utils/ActionTypes';

const generateTopic = function (number) {
  return {
    type: GENERATE_TOPIC,
    payload: {
      number,
    },
  };
};

export {
  generateTopic,
};
