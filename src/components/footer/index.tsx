const Footer = () => {
	return (
		<div className="container mt-8 mb-11 sm:mb-10 text-primary-600 dark:text-primary-400">
			<div className="items-center block px-4.5 py-1.7 sm:py-3.2 text-center bg-white/80 dark:bg-transparent sm:flex sm:justify-between border-t-2 border-primary-400">
				<p className="mb-0">
					<small>
						{'{'}Developed by <span className="font-bold">Abraham Calsin{'}'}</span>
					</small>
				</p>

				<p className="mb-0 -mt-0.5 sm:mt-0">
					<small>With Next.js, Tailwind and Vercel</small>
				</p>
			</div>
		</div>
	)
}
export default Footer
