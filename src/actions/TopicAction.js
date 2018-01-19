import {
  UPVOTE_TOPIC,
  DOWNVOTE_TOPIC,
} from 'utils/ActionTypes';

const upvoteTopic = id => (
  {
    type: UPVOTE_TOPIC,
    payload: {
      id,
    },
  });

const downvoteTopic = id => (
  {
    type: DOWNVOTE_TOPIC,
    payload: {
      id,
    },
  });

export {
  upvoteTopic,
  downvoteTopic,
};
