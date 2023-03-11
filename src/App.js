import {Routes, Route,} from "react-router-dom";
import Layout from "./components/Layout/Layout";

import About from './pages/About/About'
import Services from "./pages/Services/Services";
import Price from "./pages/Price/Price"
import Contacts from "./pages/Contacts/Contacts";
import './App.css';

function App() {

    return (
        <div className="App">
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<About/>}/>
              <Route path="/services" element={<Services/>}/>
              <Route path="/price" element={<Price/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
            </Route>
          </Routes>
        </div>
    );


}

export default App;
