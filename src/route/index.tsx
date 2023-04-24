import About from 'pages/About';
import Contact from 'pages/Contact';
import Courses from 'pages/Courses';
import { Routes, Route } from 'react-router'
import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import Member from 'pages/Member';
import AdminPanel from 'pages/AdminPanel';

const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/dashboard' element={<Member />} />
            <Route path='/admin' element={<AdminPanel />} />
        </Routes>
    )
}

export default Routing;
