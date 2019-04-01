import React from 'react';
import renderer from 'react-test-renderer';
import Article from '../lib/simple_card.jsx';

test('Article should produce the right HTML', () => {
  const simplecard = renderer.create(
    <SimpleCard title="My fancy new product" body="Test it now!"/>
  );

  let tree = article.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onClick();
  tree = article.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onClick();
  tree = article.toJSON();
  expect(tree).toMatchSnapshot();
});
