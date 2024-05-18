import { useState } from 'react'
import './App.css'
import Photos from './pages/photos/photos'
import Users from './pages/users/Users'
import Posts from './pages/posts/posts'
import Todos from './pages/todos/todos'
import Coments from './pages/coments/coments'
import Albums from './pages/albums/album'
import { Routes, Route , Link} from 'react-router-dom' 
import Notfound from './notfound.jsx'

function App() {
 return <div className='App'>

   <>
   <div >
   <ul className='ul'>
      <li >
            <Link to={'./'}>Home</Link>
          </li>
      
          <li >
            <Link to={'./coments'}>comment</Link>
          </li>
          <li >
            <Link to={'./posts'}>posts</Link>
          </li>
          <li >
            <Link to={'./todos'}>todos</Link>
          </li>
          <li >
            <Link to={'./users'}>users</Link>
          </li>
          <li >
            <Link to={'./albums'}>albums</Link>
          </li>
          <li >
            <Link to={'./photos'}>photos</Link>
          </li>
       
      </ul>
   </div>
   <Routes >
   <Route path='/' element = {<Todos />}/>
   <Route path='/coments' element = {<Coments />}/>
   <Route path='/posts' element = {<Posts />}/>
   <Route path='/photos' element = {<Photos />}/>
   <Route path='/todos' element = {<Todos />}/>
   <Route path='/users' element = {<Users />}/>
   <Route path='/albums' element = {<Albums />}/>
   <Route path='*' element = {<Notfound />}/>
    </Routes >
   </>

    
  
  
 </div>
}

export default App
