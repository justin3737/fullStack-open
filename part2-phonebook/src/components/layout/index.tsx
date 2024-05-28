import { Outlet } from 'react-router-dom';
import Header from '@/components/header';
import NavBar from '@/components/navBar';
import Footer from '@/components/footer';

const Layout = () => (
    <div>
        <Header />
        <NavBar />
        <Outlet />
        <Footer />
    </div>
);

export default Layout;
