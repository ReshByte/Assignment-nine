import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            
            </header>
            <main className='min-h-screen'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
          
        </div>
    );
};

export default HomeLayout;