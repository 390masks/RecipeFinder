import React from 'react'

const RecipeCard = ({recipe}) => {
  return (
    <div className='border rounded-lg shadow-lg overflow-hidden'>
      <img src={recipe.image}  alt={recipe.title} className='w-full h-48 object-cover' />
      <div className='p-4'>
        <h3 className='fount-bold text-lg'>{recipe.title}</h3>
      </div>
    </div>
  );
}

export default RecipeCard;