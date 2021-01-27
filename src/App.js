import Navbar from './components/Navbar/Navbar'
import Carous from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Products from './components/Cards/Productos'
import './App.css';


function App() {
  return (
    <div className="App">
   <Navbar/> 
   <Carous/>
   <Products/>
   <Footer/>
   </div>
  )
}

export default App;
