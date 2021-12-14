const Footer = () => {
  return (
    <div className="mb-11.2 mx-auto w-full max-w-65 px-2.5 sm:px-5.5">
      <div className="block sm:flex px-3.7 sm:px-3.7 sm:justify-between text-center items-center border-t-px border-primary-500 pb-0 pt-2.5 text-xs sm:text-sm sm:pt-3.7">
        <p>
          {"{"}Developed by
          <span className="font-bold"> ©Abraham Calsin{"}"}</span>
        </p>

        <p className="mt-0.5 flex justify-center">
          With Next.js and Tailwind.{" "}
          <img src="/icons/heart_icon.svg" alt="❤" className="w-2 ml-0.5 block" />
        </p>
      </div>
    </div>
  )
}
export default Footer
