import {Link} from "react-router-dom";


function Recipe({recipeList}) {
    return (
        <div className="recipes-list">
            {
                recipeList.map(recipe => {
                    return (
                        <Link to={`/single-recipe/${recipe.id}`} className="recipe" key={recipe.id}>
                            <img src={recipe.img} alt={recipe.name+" image"} className="img recipe-img"/>
                            <h5>{recipe.name}</h5>
                            <p>Prep : {recipe.time.prep}min | Cook : {recipe.time.cook}min</p>
                        </Link>
                    )
                })
            }
        </div>
    );
}



export default Recipe;
