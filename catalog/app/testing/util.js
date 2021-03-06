import id from 'lodash/identity';
import pick from 'lodash/pick';
import React from 'react';

export const getLocation = ({ location: l }) =>
  `${l.pathname}${l.search}${l.hash}`;

const mapProps = (props, mapper = id) =>
  mapper instanceof Array ? pick(props, mapper) : mapper(props);

export const mockComponent = (name, mapper) => (props) =>
  <div __name={name} {...mapProps(props, mapper)} />;

export const findMockComponent = (html, name) =>
  html.find(`[__name="${name}"]`);

export const flushPromises = () => new Promise((resolve) => setImmediate(resolve));
