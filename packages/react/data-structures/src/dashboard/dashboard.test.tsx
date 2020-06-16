import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';

import { Dashboard } from "./Dashboard";

test('Components renders children', () => {
    render(<Dashboard><p>TEST</p></Dashboard>);
    expect(screen.getByText("TEST")).toBeTruthy();
});
