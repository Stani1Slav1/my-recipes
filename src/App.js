import './App.css';
import food from './food.mp4';
import button from './button.png';
import { useEffect, useState } from 'react';
import MyRecipesComponents from './MyRecipesComponents';

function App() {

  const MY_ID = '92c1351f';
  const MY_KEY = 'e8ba565bed67c67920a052651ac29606';

  const[mySearch, setMySearch] = useState("");
  const[myRecipes, setMyRecipes] = useState([]);
  const[wordSumbitted, setWordSumbitted] = useState("banana");


  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSumbitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      console.log(data.hits);
      setMyRecipes(data.hits);
    }
    getRecipe()
  }, [wordSumbitted])
  
  const myRecipeSearch = (e) => {
    console.log(e.target.value);
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSumbitted(mySearch);
  }

  return (
    <div className="App">

      <div className="container">
        <video autoPlay muted loop>
          <source src={food} type="video/mp4"/>
        </video>
        <h1>RECIPES</h1>
      </div>

      <div className="container">
        <form onSubmit={finalSearch}>
          <input className='search' onChange={myRecipeSearch} value={mySearch}/>
        </form>
      </div>

      <div className="container">
        <button>
          <img src={button} alt='btn' width={50}/>
        </button>
      </div>
      {myRecipes.map(element => (
        <MyRecipesComponents
        image={element.recipe.image}
        label={element.recipe.label}
        ingredients={element.recipe.ingredientLines}/>
      ))}
      

    </div>
  );
}

export default App;
