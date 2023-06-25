import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import MainJSX from "../components/JSX/Main";
import ListConditionalRendering from "../components/ListConditionalRendering/Main";
import Components from "../components/Components/Main";
import Props from "../components/Props/Main";
import State from "../components/State/Main";
import EventsForms from "../components/EventsForms/Main";
import useState from "../components/hooks/UseState";
import UseEffectHook from "../components/hooks/useEffect/Main";
import useLayoutEffect from "../components/hooks/UseLayoutEffect";
import UseRef from "../components/hooks/UseRef";
import useMemoHook from "../components/hooks/UseMemo";
import useCallback from "../components/hooks/useCallback/UseCallback";
import useReducer from "../components/hooks/UseReducer";
import useContext from "../components/hooks/UseContext";
import useDebugValue from "../components/hooks/UseDebugValue";
import useImperativeHandle from "../components/hooks/UseImperativeHandle";
// The Main component renders one of the three provided
// Routes (provided that one matches)
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/jsx" component={MainJSX} />
      <Route path="/components" component={Components} />
      <Route path="/state" component={State} />
      <Route path="/props" component={Props} />
      <Route path="/eventsForms" component={EventsForms} />
      <Route
        path="/listConditionRendering"
        component={ListConditionalRendering}
      />
      <Route path="/useState" component={useState} />
      <Route path="/useEffect" component={UseEffectHook} />
      <Route path="/useRef" component={UseRef} />
      <Route path="/useLayoutEffect" component={useLayoutEffect} />
      <Route path="/useMemo" component={useMemoHook} />
      <Route path="/useCallback" component={useCallback} />
      <Route path="/useReducer" component={useReducer} />
      <Route path="/useContext" component={useContext} />
      <Route path="/imperativeHandler" component={useImperativeHandle} />
      <Route path="/useDebugValue" component={useDebugValue} />
    </Switch>
  </main>
);

export default Main;
