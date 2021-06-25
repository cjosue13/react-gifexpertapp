import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {
    //const categorias = ['One Punch', 'Samurari X', 'Dragon Ball'];

    const [categories, setcategories] = useState(['Dragon Ball']);


    /*const handleAdd = () =>{
        setcategories([...categories,'HunterXHunter']);
    };*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setcategories} />
            <hr />

            <ol>
                {
                    categories.map(category =>
                        <GifGrid key={category}
                            category={category} />
                    )

                }
            </ol>


        </>
    );
};

export default GifExpertApp;