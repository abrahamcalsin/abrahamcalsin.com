import * as dayjs from "dayjs"

const Timline = (props) => {
  const projectFormatDate = "D MMM, YYYY"
  const { dateProject = new Date() } = props
  return (
    <div>
      <div className="relative text-xs-1.1 sm:text-xs text-white italic bg-primary h-3 w-8 sm:w-12 px-0 py-0.7 sm:py-2 flex items-center justify-center rounded-rds-0.1 after:[' '] after:absolute after:-right-2.5 after:bg-transparent after:border-l-transparent after:border-r-transparent after:border-t-primary after:border-b-transparent after:border-l-9 after:border-r-9 after:border-t-12 after:border-b-12 after:transform after:-rotate-90">
        <span>{dayjs(dateProject).format(projectFormatDate)}</span>
      </div>
    </div>
  )
}

export default Timline
