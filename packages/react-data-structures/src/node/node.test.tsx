import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';

import { NodeUI } from "./node";

test('Node prints value given', () => {
    render(<NodeUI value="Sample Value" />);
    expect(screen.getByText("Sample Value")).toBeTruthy();
});

test('When Head specified, Node should contain extra styles', () => {
    const { container } = render(<NodeUI isHead value="Sample Value" />);
    expect(container.querySelector("div.node-ui-triangle")).toBeTruthy();
});