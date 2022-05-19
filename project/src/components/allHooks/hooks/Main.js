import React from 'react'
import UseStateHook from './UseState'
import UseEffect from './UseEffect'
import UseRefHook from './UseRef'
import UseLayoutEffect from './UseLayoutEffect'
import UseImperativeHandle from './UseImperativeHandle'
import UseMemo from './UseMemo'
import UseReducer from './UseReducer'
import UseDebugValue from './UseDebugValue'
export default function Main() {
  return (
    <div>
      <br />
      <h2>Use state hook</h2>
      <br />
      <UseStateHook />
      <br />
      <h2>Use effect hook</h2>
      <UseEffect />
      <h2>Use ref hook</h2>
      <UseRefHook />
      <h2>Use Layout effect hook</h2>
      <UseLayoutEffect />
      <h2>Use Imperative Handle hook</h2>
      <UseImperativeHandle />
      <h2>Use Memo hook</h2>
      <UseMemo />
      <h2>Use reducer hook</h2>
      <UseReducer />
      <h2>Use debug value hook</h2>
      <UseDebugValue />
    </div>
  )
}

// Similar to componentDidMount and componentDidUpdate:
// useEffect(() => {
//   document.title = name
// })
// re-trigger only once with empty []

// retrigger whenever property has changed
//   useEffect(() => {
//   document.title = name
// }, [name])
