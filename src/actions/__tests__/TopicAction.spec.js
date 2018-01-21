import {
  CREATE_NEW_TOPIC,
  UPVOTE_TOPIC,
  DOWNVOTE_TOPIC,
} from 'utils/ActionTypes';

import {
  createNewTopic,
  upvoteTopic,
  downvoteTopic,
} from 'actions/TopicAction';

describe('>>> A C T I O N --- Test TopicAction', () => {
  it('+++ actionCreator upvoteTopic', () => {
    const upvote = upvoteTopic('1');
    expect(upvote).toEqual({
      type: UPVOTE_TOPIC,
      payload: { id: '1' },
    });
  });

  it('+++ actionCreator downvoteTopic', () => {
    const downvote = downvoteTopic('1');
    expect(downvote).toEqual({
      type: DOWNVOTE_TOPIC,
      payload: { id: '1' },
    });
  });

  it('+++ actionCreator createNewTopic', () => {
    const createNew = createNewTopic('title');
    expect(createNew).toEqual(expect.objectContaining({
      type: CREATE_NEW_TOPIC,
      payload: {
        new_post: {
          id: expect.any(String),
          title: 'title',
          downvotes: 0,
          upvotes: 0,
        },
      },
    }));
  });
});
