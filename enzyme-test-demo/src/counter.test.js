import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test ('increment counter when button is clicked', () => {
    render(<Counter/>);
    const button = screen.getAllByText(/Increment/i);
    const countDisplay = screen.getAllByTestId('count');

    expect (countDisplay.textContent).tobe('0');
    fireEvent.click(button);
    expect(countDisplay.textContent).tobe('1');
});