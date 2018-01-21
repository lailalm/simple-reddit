import {
  UPVOTE_TOPIC,
  DOWNVOTE_TOPIC,
} from 'utils/ActionTypes';

import {
  upvoteTopic,
  downvoteTopic,
} from 'actions/TopicAction';

describe('>>> A C T I O N --- Test TopicAction', () => {
  it('+++ actionCreator upvoteTopic', () => {
    const upvote = upvoteTopic(1);
    expect(upvote).toEqual({
      type: UPVOTE_TOPIC,
      payload: { id: 1 },
    });
  });

  it('+++ actionCreator downvoteTopic', () => {
    const downvote = downvoteTopic(1);
    expect(downvote).toEqual({
      type: DOWNVOTE_TOPIC,
      payload: { id: 1 },
    });
  });
});
