import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Modal from './Modal.jsx'
import Child_3 from './Child_3.jsx'
import Accordion from './Accodion.jsx'
import Pagination from './Pagination.jsx'
import Slider from './Slider.jsx'
import DebouncedSearch from './DebouncedSearch.jsx'
// import InfiniteScroll from './InfiniteScroll.jsx'
// import InfiniteNoCSS from './InfiniteNoCSS.jsx'
// import InfiScroll from './InfiScroll.jsx'
import InfiniteScrollFinal from './InfiniteScrollFinal.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Child_3 /> */}
    {
    // <Accordion /> 
    // <Slider />
    // <DebouncedSearch />
    // <InfiniteScroll />
    // <InfiniteNoCSS />
    // <InfiScroll />
    <InfiniteScrollFinal />  

    // <Pagination />
    }
    
  </StrictMode>,
)
