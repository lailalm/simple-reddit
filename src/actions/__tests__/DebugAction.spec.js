import {
  GENERATE_TOPIC,
  CLEAR_TOPIC,
} from 'utils/ActionTypes';

import {
  generateTopic,
  clearTopic,
} from 'actions/DebugAction';

describe('>>> A C T I O N --- Test DebugAction', () => {
  it('+++ actionCreator generateTopic', () => {
    const upvote = generateTopic(5);
    expect(upvote).toEqual(expect.objectContaining({
      type: GENERATE_TOPIC,
      payload: {
        list: expect.anything(),
      },
    }));
    expect(upvote.payload.list.length).toEqual(5);
  });

  it('+++ actionCreator clearTopic', () => {
    const clear = clearTopic();
    expect(clear).toEqual({
      type: CLEAR_TOPIC,
    });
  });
});
