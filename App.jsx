import React, { useState } from 'react';
import { searchRecipes } from './api';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchRecipes(query);
    setRecipes(results);
  };

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold text-center mb-6'>🍳 Recipe Finder</h1>
      <SearchBar onSearch={handleSearch} />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default App;
