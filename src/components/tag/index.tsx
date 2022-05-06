export function Tag(props: any) {
  const { label } = props

  return (
    <div className="flex items-center font-robotoMono">
      <p className="mb-1 text-sm sm:text-base text-primary-400 dark:text-secondary">{label}</p>
    </div>
  )
}
