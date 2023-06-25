import React, { useRef, useImperativeHandle, forwardRef } from 'react'

const CustomInput = (props, ref) => {
  const customInput = useRef(null)
  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        customInput.current.style.backgroundColor = 'rgb(193 192 192)'
        customInput.current.style.color = '#fff'
      },
    }),
    [],
  )
  return <input ref={customInput} {...props} placeholder="type here..." />
}
export default forwardRef(CustomInput)
