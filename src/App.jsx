import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  //state to hold values from input field
  const[Principle , setPrinciple] = useState(0)
  const[rate , setRate] = useState(0)
  const[year , setYear] = useState(0)
  const[interest , setInterest] = useState(0)
  /* for conditional rendering */
  const [isPrinciple , setIsPrinciple] = useState(true)
  const [isRate , setIsRate] = useState(true)
  const [isYear , setIsYear] = useState(true)

  const validate = (e)=>{
    /* console.log(e.target.name);
    console.log(e.target.value); */
    let name = e.target.name
    let value = e.target.value
    console.log(!!value.match(/^[0-9]*$/));
    if(!!value.match(/^[0-9]*$/)){
      if(name == 'Principle'){
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if(name == 'rate'){
        setRate(value)
        setIsRate(true)
      }
      else{
        setYear(value)
        setIsYear(true)
      }
    }
    else{
      if(name == 'Principle'){
        setPrinciple(value)
        setIsPrinciple(false)
      }
      else if(name == 'rate'){
        setRate(value)
        setIsRate(false)
      }
      else{
        setYear(value)
        setIsYear(false)
      }
    }
  }
  const handleReset = ()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
  }
  const calculate = ()=>{
    setInterest((Principle*rate*year)/100)
  }
  /* console.log('Principle',Principle);
  console.log('rate',rate);
  console.log('year',year); */
  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{width:'100%' , height:'100vh'}}>
        <div className='bg-light p-5 rounded' style={{width:'500px'}}>
          <h1>Simple Interest App</h1>
          <p>Calculate your simple interest Easily</p>
          <div className='mt-5 flex-column rounded shadow bg-warning d-flex justify-content-center align-items-center p-4'>
            <h2 className='fs-1 fw-bolder'>₹ {interest}</h2>
            <p>Total simple interest</p>
          </div>
          <form className='mt-5'>
            <div className="mb-3">
              <TextField id="outlined-basic" value={Principle || ""} label="₹ Principle amount" name='Principle' onChange={(e)=>validate(e)} variant="outlined" className='w-100' />
              {!isPrinciple &&
                <p className='text-danger'>*Invalid Input</p>
              }
            </div>
            <div className="mb-3">
              <TextField id="outlined-basic" value={rate || ""}  label="Rate of Interest (p.a)%" name='rate'  onChange={(e)=>validate(e)} variant="outlined" className='w-100' />
              {!isRate &&
                <p className='text-danger'>*Invalid Input</p>
              }
            </div>
            <div className="mb-3">
              <TextField id="outlined-basic" value={year || ""} label="Year (Yr)" name='year'  onChange={(e)=>validate(e)} variant="outlined" className='w-100' /> 
              {!isYear &&
                <p className='text-danger'>*Invalid Input</p>
              }
            </div>
            <div className="d-flex justify-content-between w-100 mt-4">
              <Button variant="contained" color="success" style={{width:'190px' , height:'60px'}} disabled={isPrinciple && isRate && isYear ?false:true} onClick={calculate}>Calculate</Button>
              <Button variant="outlined" style={{width:'190px' , height:'60px'}} onClick={handleReset}>Reset</Button>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default App
