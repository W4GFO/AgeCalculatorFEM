import {render, screen} from "@testing-library/react"
import {Prompt} from "./Prompt"
import exp from "constants"

test('good prompt', () => {
	render(<Prompt prompt="Please set your name" />)
	const promptDisplay = screen.getByText(/Please set your name/i) //Ignore case regex
	expect(promptDisplay).toBeInTheDocument()
})