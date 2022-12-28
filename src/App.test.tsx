import React from 'react';
import { logRoles, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';

test('renders learn react link', () => {
  const { container } = render(
		<Router>
			<App />
		</Router>
  )
  logRoles(container)
  const linkElement = screen.getByText(/steve han/i);
  expect(linkElement).toBeInTheDocument();
});

