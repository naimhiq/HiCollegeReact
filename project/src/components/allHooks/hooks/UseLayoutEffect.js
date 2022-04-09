import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const UseLayoutEffectHook = () => {
  const inputRef = useRef(0)
  const button = useRef()
  const divWrapper = useRef()

  useLayoutEffect(() => {
    console.log('Layout effect')
    console.log('value:', inputRef.current.value)
  }, [])

  useEffect(() => {
    console.log('rendered')
    inputRef.current.value = 'hello'
  }, [])

  useEffect(() => {
    console.log('==== USE FIRST EFFECT RENDERED ==== ')
  })
  useEffect(() => {
    console.log('==== USE SECOND EFFECT RENDERED ==== ')
  })

  useEffect(() => {
    console.log('==== USE EFFECT RENDERED === ')
  })

  // IT IS TRIGGERED SYNCHRONOUSLY BEFORE DOM IS ON PLACE COMPARED TO USEFFECT IT IS CALLED AFTER DOM IS ON PLACE
  useLayoutEffect(() => {
    console.log('=== USE LAYOUT EFFECT RENDERED === ')
  })

  // example with useEffect and useLayoutEffect
  const [toggle, setToggle] = useState(false)
  const handleClick = () => {
    setToggle((prev) => !prev)
  }
  // useEffect(() => {
  //   if (button == null || divWrapper == null) return
  //   const { bottom } = button.current.getBoundingClientRect()
  //   if (divWrapper.current) {
  //     divWrapper.current.style.top = `${bottom + 100}px`
  //   }
  // }, [toggle])

  // with useLayout the div will not jump as with the useEffect since useLayout is synchronoused and where the DOM is painted. UseEffect is asynchronous and it is called after DOM is painted

  useLayoutEffect(() => {
    if (button == null || divWrapper == null) return
    const { bottom } = button.current.getBoundingClientRect()
    if (divWrapper.current) {
      divWrapper.current.style.top = `${bottom + 100}px`
    }
  }, [toggle])
  return (
    <>
      <input type="text" value="Naim" ref={inputRef} />
      <br />
      <br />
      <button type="text" onClick={handleClick} ref={button}>
        Show modal
      </button>
      {toggle && (
        <div
          style={{ position: 'absolute', width: '100%', background: 'red' }}
          ref={divWrapper}
        >
          This is my div to toggle
        </div>
      )}
      <br />
      <br />
      <br />
      <br />
      <div>hasdfhasdhfadsfasdf</div>
    </>
  )
}

export default UseLayoutEffectHook
