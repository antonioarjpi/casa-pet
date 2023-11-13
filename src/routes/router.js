import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';
import Navbar from '../components/navbar/navbar';
import QuemSomos from '../pages/quem-somos/quem-somos';
import Footer from '../components/footer/footer';

function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/inicio' element={<Home />} />
                <Route path='/quem-somos' element={<QuemSomos />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router;