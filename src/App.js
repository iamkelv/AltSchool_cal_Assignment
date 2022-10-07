import { useState } from 'react';
import classes from './app.module.css'

function App() {
  const [val, setVal] = useState("")  

  const [dark, setDark] = useState(false)
   
  const x = []

  const prevHandler = ()=>{
     setVal(x[0])  
  
  }
  const darkHandler = ()=>{
    setDark(prevMode => !prevMode)
  }
  const inputHandler = (event)  =>{  
    setVal(val +  event.target.value)    

  }

  const evalHandler = ()=>{
    let evaluate = eval(val)
    x.push(evaluate)
  try {
    
    setVal(evaluate)
      
  } catch (error) {
    setVal("invalid input")
  }
}

const clearHandler = ()=>{  
  setVal(el => {
    if(el.length>0) return el.slice(0,-1)
    return ""
  })
}
  return (

    <div className={`${classes.container}  `}>    
    <div className={dark ? `${classes.wrapper} ${classes.dark_body}` : `${classes.wrapper}` }>
      <div className={classes.header}> </div>
      <div className={classes.top}>
      <input type="text" value={val}/>
    </div>
    <div className={classes.body}>           
      <div>
        <button onClick={inputHandler} value='7'>7</button>
        <button onClick={inputHandler} value='8'>8</button>
        <button onClick={inputHandler} value='9'>9</button>
        <button onClick={inputHandler} value='/'>/</button>
      </div> 
      <div>
        <button onClick={inputHandler} value='4'>4</button>
        <button onClick={inputHandler} value='5'>5</button>
        <button onClick={inputHandler} value='6'>6</button>
        <button onClick={inputHandler} value='-'>-</button>
      </div>            
      <div>
        <button onClick={inputHandler} value='1'>1</button>
        <button onClick={inputHandler} value='2'>2</button>
        <button onClick={inputHandler} value='3'>3</button>
        <button onClick={inputHandler} value='+'>+</button>
      </div>            
      <div>
        <button onClick={inputHandler} value='7'>0</button>
        <button onClick={inputHandler} value='.'>.</button>
        <button onClick={inputHandler} value='*'>*</button>
        <button onClick={clearHandler} >CE</button>
      </div>  
       <div>
        <button className={classes.prev} onClick={prevHandler} >Prev</button>
        <button onClick={()=>setVal("")} >Clear</button>                        
        <button onClick={darkHandler} >{dark ? '☀' : '🌙'}</button>
        <button onClick={evalHandler} >=</button>
        
      </div>                      
    </div>

    </div>
    </div>
  );
}

export default App;
