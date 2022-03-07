interface CoffeeStrokeIconProps {
  className: string
}

export const CoffeeStrokeIcon = (props: CoffeeStrokeIconProps) => {
  const { className } = props

  return (
    <svg className={className} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.25 6.33334H14.0417C14.8815 6.33334 15.687 6.66697 16.2808 7.26084C16.8747 7.8547 17.2083 8.66016 17.2083 9.50001C17.2083 10.3399 16.8747 11.1453 16.2808 11.7392C15.687 12.333 14.8815 12.6667 14.0417 12.6667H13.25"
        stroke="currentColor"
      />
      <path
        d="M0.583374 6.33334H13.25V13.4583C13.25 14.2982 12.9164 15.1036 12.3225 15.6975C11.7287 16.2914 10.9232 16.625 10.0834 16.625H3.75004C2.91019 16.625 2.10473 16.2914 1.51087 15.6975C0.917004 15.1036 0.583374 14.2982 0.583374 13.4583V6.33334Z"
        stroke="currentColor"
      />
      <path d="M10.0834 0.791656V3.16666" stroke="currentColor" />
      <path d="M6.91663 0.791656V3.16666" stroke="currentColor" />
      <path d="M3.75 0.791656V3.16666" stroke="currentColor" />
    </svg>
  )
}
