import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement,increment,reset } from '../redux/counterSlice';

function Count() {
  // to take initial value of the state we use a hook
  //components can access the state by useSelector hook
  const counterValue=useSelector((state)=>state.counter.value)
 const [range,setRange]=useState('')
  //useDispatch() is a hook to call a method in action to updat e the state
  const dispatch=useDispatch()
    console.log(counterValue);
    console.log(range);
    
 
  return (
    <div className='d-flex flex-column align-items-center justify-content-center w-100 mt-3'>
        <h1 style={{fontSize:'85px',color:'black'}}>{counterValue}</h1>
        <div className='mt-5'>
            <button className='btn btn-warning p-2' onClick={()=>dispatch(decrement(Number(range)))}>DECREMENT</button>
            <button className='btn btn-success p-2 ms-3' onClick={()=>dispatch(increment(Number(range)))}>INCREMENT</button>
            <button className='btn btn-danger p-2 ms-3' onClick={()=>dispatch(reset())} style={{width:'117px'}}>RESET</button>

        </div>
<div>
  {/* form-control default bootstrap class */}
  <input type="text" placeholder='Enter the range' className='form-control mt-3 w-100' style={{borderColor:'blue'}}
  onChange={(e)=>setRange(e.target.value)}/>
  {/* value stored to setRange */}
</div>
    </div>
  )
}

export default Count