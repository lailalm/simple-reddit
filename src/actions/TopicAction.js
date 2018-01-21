import {
  CREATE_NEW_TOPIC,
  UPVOTE_TOPIC,
  DOWNVOTE_TOPIC,
} from 'utils/ActionTypes';

import {
  generetaId,
} from 'utils/Generator';

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

const createNewTopic = topic => (
  {
    type: CREATE_NEW_TOPIC,
    payload: {
      new_post: {
        id: generetaId(),
        title: topic,
        downvote: 0,
        upvotes: 0,
      },
    },
  });

export {
  createNewTopic,
  upvoteTopic,
  downvoteTopic,
};
