
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import './App.css'
import store from './redux/store'
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserInfo from './pages/UserInfo';


function App() {
  return (
    <ChakraProvider>
       <Provider store={store}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user-info/:userName" element={<UserInfo />} />
            </Routes>
        </BrowserRouter>
      </Provider>
      <Toaster position="bottom-right" />
    </ChakraProvider>
  )
}

export default App
