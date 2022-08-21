import {connect} from 'react-redux';
import Banner from '../../components/Banner/Banner';
import SideMenu from '../../components/SideMenu/SideMenu';
import Recipe from '../../components/Recipe/Recipe';


function Home({recipeList}) {
    return (
        <>
            <Banner/>
            <section className="recipes-container">
                <SideMenu />
                <Recipe recipeList={recipeList}/>
            </section>
        </>
    );
}

const mapStateToProps = state => {
    return {
        recipeList: state.recipeReducer
    }
}

export default connect(mapStateToProps, {})(Home);
