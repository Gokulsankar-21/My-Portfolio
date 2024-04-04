import React from 'react'

type sectionHeadingProps = {
    children:React.ReactNode
}
export default function SectionHeading({
    children
}:sectionHeadingProps) {
  return (
    <h2 className='capitalize text-3xl font-medium text-center mb-8'>
        {children}
    </h2>
  )
}
