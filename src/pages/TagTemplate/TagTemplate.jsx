import {useParams} from "react-router-dom";

import Recipe from '../../components/Recipe/Recipe';
import {useEffect, useState} from 'react';
function TagTemplate() {
    const {tag} = useParams();
    const [recipeList, setRecipeList] = useState([]);
    useEffect(()=> {
        fetch(`http://localhost:8000/recipes?category_title=${tag}`)
            .then(res => res.json())
            .then(data => {
                setRecipeList(data)
            })
    }, [])
    return (
        <>
            <h4>{tag}</h4>
            <Recipe recipeList={recipeList}/>
        </>
    );
}

export default TagTemplate;
