import { useState } from 'react'
import Home from './contents/Home'
import Navbar from './contents/Navbar'
import Article from './contents/Article'
import Projects from './contents/Projects'



function App() {
  const [theme,setTheme]=useState("light")
const changeTheme=()=>{
setTheme(theme==="light" ? "dark" : "light")
if(theme==="dark"){
  document.documentElement.classList.remove("dark")
}
else{
  document.documentElement.classList.add("dark")
}
}


  return (
    <div className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
 <Navbar  />
 <Home />
 <Projects />
 <Article />
 
 


    </div>
  )
}

export default App
