/* eslint-disable */

const generetaId = () => {
  let d = new Date().getTime();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now(); // use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
};

const getGeneratedTopic = (size) => {
  let arr = [];
  for (let i = 0; i < size; i++) {
    const topic = {
      id: generetaId(),
      title: generetaId() + ' Generated Topic',
      upvotes: Math.floor(Math.random() * 10),
      downvotes: Math.floor(Math.random() * 10),
    }
    arr.push(topic);
  }
  return arr;
}

export {
  generetaId,
  getGeneratedTopic,
}
