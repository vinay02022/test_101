import { useState } from 'react'
import Modal from './Modal'
import OTP from './OTP'
import Carousel from './Carousel'



function App() {
  const [open,setOpen] = useState(false)

  return (
    <>

      {/* <button onClick={() => setOpen(!open)} className='m-4 border border-black rounded-md px-4 py-2 text-black hover:bg-black/10'>Open</button> */}
      {/* <button onClick={() => setOpen(false)} className='m-4 border border-black rounded-md px-4 py-2 text-black hover:bg-black/10'>Close</button> */}
      {/* {open && <Modal open={open} setOpen={setOpen}/>} */}
      <OTP />
      <Carousel/>
      


    </>
  )
}

export default App
