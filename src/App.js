
import './App.css';
import BreadCrumb from './components/BreadCrumb';
import Images from './components/Images';
import NavBar from './components/NavBar';

import { useState ,useEffect } from 'react';
import { getImages } from './services/api';

function App() {
const [ text , setText]= useState('')
const [count , setCount ]= useState(9);
const [ meta , setMeta ]=useState([])
useEffect(()=>{
     if(count<3 || count >200){
      return;
     }

     const getData=async()=>{
       let res =  await getImages(text ,count)
       setMeta(res.data.hits)
     }
     getData();
},[text,count])

  return (
    <div className="App">
     <NavBar/>
     <BreadCrumb setText={setText} setCount={setCount} />
     <Images meta={meta}/>
    </div>
  );
}

export default App;
