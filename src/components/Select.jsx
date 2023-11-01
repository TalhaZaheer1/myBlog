import React,{useId} from 'react'

const Select =  React.forwardRef(function Select({
    label,
    className = '',
    options,
    ...props
},ref){
    const id = useId()

    return (
    <div className='w-full'>
        {label && <label htmlFor={id}>
            {label}
        </label>}
        <select  
            id={id}
            className=''
            {...props}
            ref={ref}
            >
            {options.map(option => {
                return (
                    <option key={option} value={option}>
                    </option>
                )   
        })} 
        </select>    
    </div>
    )
})

export default Select