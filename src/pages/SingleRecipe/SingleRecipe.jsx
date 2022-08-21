import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from 'react';

function SingleRecipe() {
    const {id} = useParams()
    const [recipe, setRecipe] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8000/recipes?id=${id}`)
            .then(res => res.json())
            .then(data => setRecipe(data))
    }, [])



    return (
        <>
            {
                recipe.map(item => {
                    return (
                        <section className="recipe-hero" key={item.id}>
                            <img src={item.img} alt="banana pancakes" className="img recipe-hero-img"/>
                            <article className="recipe-info">
                                <h2>{item.name}</h2>
                                <p>{item.content}</p>
                                <div className="recipe-icons">
                                    <article>
                                        <i className="fas fa-clock" />
                                        <h5>Prep Time</h5>
                                        <p>{item.time.prep} min.</p>
                                    </article>
                                    <article>
                                        <i className="far fa-clock" />
                                        <h5>Cook Time</h5>
                                        <p>{item.time.cook} min.</p>
                                    </article>
                                    <article>
                                        <i className="fas fa-user" />
                                        <h5>Serving</h5>
                                        <p>6 servings.</p>
                                    </article>
                                </div>
                                <div className="recipe-tags">
                                    Category : <Link to={`/tag-template/${item.category_title}`}>{item.category_title}</Link>
                                </div>
                            </article>
                        </section>
                    )
                })
            }
            <section className="recipe-content">
                <article>
                    <h4>instructions</h4>
                    <div className="single-instruction">
                        <header>
                            <p>step 1</p>
                            <div />
                        </header>
                        <p>I'm baby mustache man braid fingerstache small batch venmo succulents shoreditch.</p>
                    </div>
                    <div className="single-instruction">
                        <header>
                            <p>step 2</p>
                            <div />
                        </header>
                        <p>Pabst pitchfork you probably haven't heard of them, asymmetrical seitan tousled succulents
                            wolf banh mi man bun bespoke selfies freegan ethical hexagon.</p>
                    </div>
                    <div className="single-instruction">
                        <header>
                            <p>step 3</p>
                            <div />
                        </header>
                        <p>Polaroid iPhone bitters chambray. Cornhole swag kombucha live-edge.</p>
                    </div>
                </article>
                <article className="second-column">
                    <div>
                        <h4>Ingredients</h4>
                        <p className="single-ingredient">
                            1 1/2 cups dry pancake mix
                        </p>
                        <p className="single-ingredient">
                            1/2 cup flax seed meal
                        </p>
                        <p className="single-ingredient">
                            1 cup skim milk
                        </p>
                    </div>
                    <div>
                        <h4>tools</h4>
                        <p className="single-tool">Hand Blender</p>
                        <p className="single-tool">Large Heavy Pot With Lid</p>
                        <p className="single-tool">Measuring Spoons</p>
                        <p className="single-tool">Measuring Cups</p>
                    </div>
                </article>
            </section>
        </>
    );
}

export default SingleRecipe;
