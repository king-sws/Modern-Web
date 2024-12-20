import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const Av = (props: HTMLAttributes<HTMLDivElement>) => {
    const {className, children, ...rest} = props
  return (
    <div className={twMerge("size-20 rounded-full p-1 border-4 border-blue-500 bg-neutral-900 overflow-hidden ", className)} {...rest}  >
        {children}
    </div>
  )
}

export default Av