

import Recipe from '../Recipe/Recipe';
function Featured({recipeList}) {
    return (
        <section className="featured-recipes">
            <h5 className="featured-title">Look At this Awesomesouce!</h5>
            <Recipe recipeList={recipeList}/>
        </section>
    );
}

export default Featured;
