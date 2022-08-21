import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import {useEffect} from 'react';
import {connect} from "react-redux";
import {addCategoryAction, clearCategoryAction} from '../../redux/actions/category';
import {addRecipeAction, clearRecipeAction} from '../../redux/actions/recipe';

const Layout = ({addRecipe, clearRecipe, children, addCategory, clearCategory}) => {
    useEffect( () => {
        fetch("http://localhost:8000/categories")
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    addCategory(item)
                })
            })

        fetch("http://localhost:8000/recipes")
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    addRecipe(item)
                })
            })
        return () => {
            clearRecipe()
            clearCategory()
        }
    }, []);
    return (
        <div>
            <Navigation />
            <main className="page">
                {children}
            </main>
            <Footer />
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addCategory: recipeObj => dispatch(addCategoryAction(recipeObj)),
        clearCategory: () => dispatch(clearCategoryAction()),
        addRecipe: categoryObj => dispatch(addRecipeAction(categoryObj)),
        clearRecipe: () => dispatch(clearRecipeAction())
    }
}

export default connect(() => ({}), mapDispatchToProps)(Layout);
