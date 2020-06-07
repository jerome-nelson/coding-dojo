import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import { LinkedList } from "./linkedlist";
import { NodeUI } from "../node/node";

test('It must accept <NodeUI /> children only', () => {
  expect(() => render(<LinkedList><div>This will throw an error</div></LinkedList>))
    .toThrowError('Should contain only Nodes');

    const { container } = render(
      <LinkedList>
        <NodeUI isHead value="Sample Value" />
      </LinkedList>
    );
    expect(container.querySelector("div.node-ui-triangle")).toBeTruthy();
});

test('The NodeUI must contain at least one head reference', () => {
  expect(() =>  render(
    <LinkedList>
      <NodeUI value="Sample Value" />
    </LinkedList>
  )).toThrowError('Should contain a isHead prop');
});

