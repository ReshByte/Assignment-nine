import React from 'react';
import CategoryData from '../pawCategory/CategoryData';
import ImgSlider from '../imageSlider/ImgSlider';
import WinterTipsCards from '../WinterTipsCards/WinterTipsCards';
import ExpertVetSection from '../expert/ExpertVetSection';
import WinterTipsSection from '../WinterTipsSection/WinterTipsSection';

const Home = () => {
    return (
        <div className='my-10 space-y-10'>
            <ImgSlider></ImgSlider>
           <h1 className='text-3xl font-semibold text-center'> Winter Care Services </h1>
            <CategoryData></CategoryData>
            <WinterTipsCards></WinterTipsCards>
            <WinterTipsSection></WinterTipsSection>
            <ExpertVetSection></ExpertVetSection>
        </div>
    );
};

export default Home;