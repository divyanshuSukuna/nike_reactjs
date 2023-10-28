

const Button = ({label,iconURL}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg bg-coral-red rounded-full text-white">
    {label}
    <img src={iconURL} alt="" className="ml-2 rounded-full w-5 r-5"/>
    </button>
  )
}

export default Button