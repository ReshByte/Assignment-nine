import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';
import ImageSlider from '../imageSlider/ImgSlider';
import ImgSlider from '../imageSlider/ImgSlider';
import { ToastContainer } from 'react-toastify';

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
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default HomeLayout;