jest.mock('react-dom', () => ({render: jest.fn()}))

import React from 'react';
import { Tweet } from './index';
import renderer from 'react-test-renderer';

it('renders', () => {
  const tree = renderer.create(
    <Tweet/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
