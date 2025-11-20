
import type { JSX } from 'react'
import './App.css'
import { ProductsList } from './features/products/ProductsList'
import GitHubIcon from '@mui/icons-material/GitHub';

function App(): JSX.Element{

  return (
    <div className="p-4"> 
    
    <div className="flex justify-center">
      <a
        className="
          inline-block 
          py-2 px-4            
          text-white           
          bg-gray-800          
          border-2 border-gray-800 
          rounded-lg           
          font-bold            
          text-base            
          cursor-pointer       
          mt-4                 
          transition duration-300 
          hover:bg-gray-700    
          hover:border-gray-700
        "
        target="_blank"
        href="https://github.com/dmitrined/toolkit/tree/main/my-app/src/features/products"
      >
        Посмотреть код этой страницы  <GitHubIcon/>
      </a>
    </div>

    <div className="App">
        <ProductsList/>

    </div>
      
  </div>
  )
}

export default App
