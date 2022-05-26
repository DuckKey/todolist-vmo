import React from 'react'
import WithUseState from './useState/WithUseState'
import WithUseReducer from './useReducer/WithUseReducer'
import Todos from './WithClassComponents/todos'
import WithImmer from './useReducerImmerJs/immerJs'
const App = () => {
  return (
    <div className='main'>
      <WithUseState />
      <WithUseReducer />
      <Todos/>  
      <WithImmer />
    </div>
  )
}

export default App