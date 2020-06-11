import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';

import { LinkedList } from "./LinkedList";
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

test('Nodes can be added onClick', async () => {
  const utils = render(
    <LinkedList>
      <NodeUI isHead value="Sample Value" />
    </LinkedList>
  );

  const addButton = utils.container.querySelector("button.add-node");
  const input = utils.getByLabelText("add-node-input");

  if(addButton) {
    await fireEvent.change(input, { target: { value: 'Test Node Addition' } })
    await fireEvent.click(addButton);
  }

  expect(screen.queryAllByText('Sample Value')).toHaveLength(1);
  expect(screen.queryAllByText('Test Node Addition')[0]).toBeTruthy();
});

