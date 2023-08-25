import React, { useEffect, useState } from 'react'
import Button from '../../components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import Card from '../../components/UI/Card';
import { useStore } from '../../zustand/userStore';
import axios from 'axios';
import CreateRecipeModal from '../../components/UI/CreateRecipe';

const Feed = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const getAllRecipes = useStore((store)=>store.fetchRecipes);
    const recipes = useStore((store)=>store.recipes);
    const auth = useStore((store)=>store.auth);

    const openRecipeModal = () => {
        setIsModalOpen(true);
    } 

    const closeRecipeModal = () => {
        setIsModalOpen(false);
    }

    useEffect(()=>{
        const fetchAllRecipes = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/all-recipes',{
                headers: {
                    Authorization: `Bearer ${auth.accessToken}`
                }
              });
            const fetchedRecipes = response.data.recipe;
            getAllRecipes(fetchedRecipes);
        }
        fetchAllRecipes();
    },[]);

    useEffect(() => {
        const handleBeforeUnload = (event) => {
          event.preventDefault();
          event.returnValue = '';
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, []);
  return (
    <div className='w-full h-full p-6 bg-white overflow-y-scroll'>
        <div className='h-8 flex flex-row justify-end items-center'>
            <Button 
                text={'Create'}
                icon={<FontAwesomeIcon icon={faAdd} color='white' size='1x' />}
                style={'flex flex-row justify-center items-center gap-1 w-20 h-8 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold rounded-md'}
                action={()=>openRecipeModal()}
            />
            <CreateRecipeModal isOpen={isModalOpen} onRequestClose={closeRecipeModal} />
        </div>
        <div className=' py-3 flex flex-row flex-wrap justify-between gap-6 gap-y-9 h-auto w-full'>

            {
                recipes.map((recipe, index) => (
                    <Card 
                    key={index} 
                    name={recipe.name}
                    cuisine={recipe.cuisine}
                    likesCount={recipe.likes}
                    commentsCount={5}
                    rating={recipe.average_rating}
                    image={recipe.images[0].pic_url}
                    />
                ))
            }

        </div>
    </div>
  )
}

export default Feed;