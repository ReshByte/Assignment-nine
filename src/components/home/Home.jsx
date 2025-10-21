import React from 'react';
import CategoryData from '../pawCategory/CategoryData';

const Home = () => {
    return (
        <div className='my-10'>
           <h1 className='text-3xl font-semibold text-center'> Winter Care Services </h1>
            <CategoryData></CategoryData>
        </div>
    );
};

export default Home;