import {useState} from 'react'

const VideoEditor=()=>{

    const [count,setCount]=useState(0)
    

    const onDec=()=>{
        setCount((pre)=>(pre-1))
    }

    const onInc=()=>{
        setCount((pre)=>(pre+1))
    }
    return (
    <div>
        <p>{count}</p>
        <button type='button' onClick={onDec}>-</button>
        <button type="button" onClick={onInc}>+</button>
    </div>
)
    }


export default VideoEditor