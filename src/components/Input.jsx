import React,{useId} from 'react'


const Input = React.forwardRef(function Input({
    type = 'text',
    label,
    placeholder = 'input...',
    className = '',
    ...props   
},ref) {
    const id = useId()
    return (
    <div className='w-full'>
    {label && <label
    htmlFor={id}
    className='inline-block mb-1 pl-1'
    >
        {label}
    </label>}
    <input
    placeholder={placeholder} 
    type={type} 
    className={` ${className}`}
    ref={ref}
    id={id}
    {...props}
    />
    </div>)
})

export default Input