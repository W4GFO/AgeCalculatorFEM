type PromptProp = {
	prompt:string
}

export const Prompt = ({prompt}:PromptProp) => {
	return (
		<div>{prompt}</div>
	)
}
