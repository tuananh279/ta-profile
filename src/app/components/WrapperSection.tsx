import React from 'react'

const WrapperSection = ({children, id, className}:{children?: React.ReactNode, id?: string, className?: string}) => {

    const defaultClass = 'flex container px-[5%] xl:px-[10%] py-10'
    const _className = className ? `${defaultClass} ${className}` : defaultClass

    return (
        <div id={id} className={_className}>{children}</div>
    )
}

export default WrapperSection