import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTags } from "@fortawesome/free-solid-svg-icons"

interface TagProps {
  label: string
}

const Tag = (props: TagProps) => {
  const { label } = props

  return (
    <div className="flex items-center text-secondary-600 text-xs sm:text-sm my-0.5">
      <span className="transform -scale-x-1 mr-1 text-xs-1.3 sm:text-xs">
        <FontAwesomeIcon icon={faTags} />
      </span>{" "}
      <p className="font-extraBold">{label}</p>
    </div>
  )
}

export default Tag
