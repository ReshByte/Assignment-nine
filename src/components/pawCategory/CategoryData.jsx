import React, { use } from 'react';
import Card from '../card/Card';


const categoryPromise = fetch("/service.json").then((res) => res.json());
const CategoryData = () => {

    const categories = use(categoryPromise);
    
    


    return (
        <div className=' max-sm:grid-cols-1  lg:w-11/12 mx-auto grid grid-cols-3 gap-10 my-5'>
            {
                categories.map(category => <Card category={category}></Card>)
            }
        </div>
    );
};

export default CategoryData;