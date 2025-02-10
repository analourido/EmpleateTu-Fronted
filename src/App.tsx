import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import UserList from './pages/UserList'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register'
import OfferList from './pages/OfferList'
import OfferForm from './pages/OfferForm'
import OfferDetail from './pages/OfferDetail'
import { Toaster } from 'react-hot-toast'
import CategoriesList from './pages/CategoriesList'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Toaster position='top-center' reverseOrder={false} />
        < div className='container mx-auto px-8 py-30'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/userList' element={<UserList />}></Route>
            <Route path='/offers' element={<OfferList />}></Route>
            <Route path='/offers/:id' element={<OfferDetail />}></Route>
            <Route path='/offers/new' element={<OfferForm />}></Route>
            <Route path='/offers/edit/:id' element={<OfferForm />}></Route>
            <Route path='/categories' element={<CategoriesList />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
