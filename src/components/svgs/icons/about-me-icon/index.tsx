import * as React from 'react'

interface SvgIconProps {
	className?: string
}

export const AboutMeIcon = (props: SvgIconProps) => {
	const { className } = props

	return (
		<svg
			className={className}
			viewBox="0 0 16 20"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M13.294 5.291A5.274 5.274 0 0 1 8 10.583a5.275 5.275 0 0 1-5.294-5.292A5.274 5.274 0 0 1 8 0a5.273 5.273 0 0 1 5.294 5.291ZM8 20c-4.338 0-8-.705-8-3.425 0-2.721 3.685-3.401 8-3.401 4.339 0 8 .705 8 3.425C16 19.32 12.315 20 8 20Z"
			/>
		</svg>
	)
}
