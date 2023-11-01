



export default function Button({
    children,
    type = 'button',
    className = '',
    textColor = 'text-white',
    bgColor = '',
    ...props
}){
    return (
        <button
        type={type}
        className={`${className} ${textColor} ${bgColor} transition-all py-1 z-10 px-4 border-2 rounded-md border-lightP hover:shadow-violet btn`}
        {...props}
        >
            {children}
        </button>
    )
}