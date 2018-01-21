import React from 'react';
import renderer from 'react-test-renderer';
import App from './../App';

it('App renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

// it('renders correctly', () => {
//   consttree = renderer.create(
//     <App />
//   ).toJSON();
//   expect(tree).toMatchSnapshot();
// })
