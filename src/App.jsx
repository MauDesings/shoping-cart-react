import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './compontes/navbar/navbar'
import AppProduct from './pages/product-store/AppProduct'
import AppHome from './pages/home/AppHome'
import AppContact from './pages/contact/AppContact'
import AppAbout from './pages/about/AppAbout'
import Footer from './compontes/footer/Footer'

function App() {
    const greeting = 'Welcome';

  return (
    <>
        <header className='header'>
            <Navbar />
        </header>

        <main>
            <section className='section'>
                <h1 className='title'>Shoping Cart</h1>

                <div className='container'>
                    <Routes>
                        <Route path="/" element={<AppHome />} />
                        <Route path="/product" element={<AppProduct greeting={greeting} />} />
                        <Route path="/about" element={<AppAbout />} />
                        <Route path="/contact" element={<AppContact />} />
                    </Routes>
                </div>

            </section>
        </main>
        <Footer />
    </>
  )
}

export default App
