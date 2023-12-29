import {render,screen} from "@testing-library/react"
import {Greet } from "./Greet"

test('Greet renders', () => {
	render(<Greet />)
	const greeting = screen.getByText(/greetings/i) //Ignore case regex
	expect(greeting).toBeInTheDocument()
})

test ('Greet renders with a name', () => {
	render(<Greet name='John'/>)
	const greetName = screen.getByText(/Greetings - john/i)
	expect(greetName).toBeInTheDocument()

})