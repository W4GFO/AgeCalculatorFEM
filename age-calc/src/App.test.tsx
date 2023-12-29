import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
	//Create a virtual DOM
	render(<App />)

	//Simply test if the link is present. Screen uses methods to access/query objects/elements in the virtual DOM
	const linkElement = screen.getByText(/learn react/i)

	expect(linkElement).toBeInTheDocument()
});
