import {
  GENERATE_TOPIC,
} from 'utils/ActionTypes';

const generateTopic = number => ({
  type: GENERATE_TOPIC,
  payload: {
    number,
  },
});

export {
  generateTopic,
};
