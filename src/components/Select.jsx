import React,{userId} from 'react'

function Select({
    options,
    label,
    className = "",
    ...props
},ref) {
    const id = userId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} class></label>}
        <select 
        {...props}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white
             text-black outline-none
             focus:bg-gray-200 w-full ${className}`} 
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}

            </select>
        </div>
  )
}

export default React.forwardRef(Select)