import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import VocationsGuide from './pages/VocationsGuide/VocationsGuide'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='guia-vocacoes' element={<VocationsGuide />} />
          <Route path='*' element={<div>Página não encontrada</div>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
