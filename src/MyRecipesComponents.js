function MyRecipesComponents({image, label, ingredients}) {
    return(
        <div>
        <div className="container">
            <img className="new" src={image} alt=""/>
        </div>
        <div className="container">
            <h2>{label}</h2>
        </div>
        <ol className="container list">
            {ingredients.map(ingredient => (
                <li>{ingredient}</li>
            ))}
        </ol>
        </div>
    )
}

export default MyRecipesComponents;