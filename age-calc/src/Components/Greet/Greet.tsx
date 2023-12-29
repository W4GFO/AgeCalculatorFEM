type GreetProps = {
	name?:string
}

export const Greet = ({name}: GreetProps) => {
	return (
		<div>Greetings - {name}</div>
	)
}

// rafc
// The above is another shortcut to create a functional component