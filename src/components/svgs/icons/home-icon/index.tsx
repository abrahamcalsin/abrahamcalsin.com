import * as React from 'react'

interface SvgIconProps {
	className?: string
}

export const HomeIcon = (props: SvgIconProps) => {
	const { className } = props

	return (
		<svg
			className={className}
			viewBox="0 0 19 20"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M6.644 18.782v-3.067c0-.777.632-1.408 1.414-1.413h2.875c.786 0 1.423.633 1.423 1.413v3.058c0 .674.548 1.222 1.227 1.227h1.96a3.46 3.46 0 0 0 2.444-1A3.41 3.41 0 0 0 19 16.579V7.866c0-.735-.328-1.431-.895-1.902L11.443.673a3.115 3.115 0 0 0-3.958.071L.967 5.964A2.474 2.474 0 0 0 0 7.865v8.703C0 18.464 1.547 20 3.456 20h1.916c.327.002.641-.125.873-.354.232-.228.363-.54.363-.864h.036Z" />
		</svg>
	)
}
