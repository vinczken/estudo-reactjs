import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './pages/app';
import Contact from './pages/contact';
import NotFound from './pages/not-found';
import Events from './pages/events';

export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/eventos' element={<Events />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}