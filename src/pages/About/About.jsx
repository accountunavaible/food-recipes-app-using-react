import {Link} from "react-router-dom";
import aboutImage from "../../assets/about.jpeg";
import {connect} from 'react-redux';


import Featured from '../../components/Featured/Featured';
function About({recipeList}) {
    return (
        <div>
            <section className="about-page">
                <article>
                    <h2>What is up with this site?</h2>
                    <p>Simply Recipes website was created by Rui Zhu 1001, in order to let everyone spend a small amount of time looking for reliable recipes</p>
                    <p>This site contains breakfast, lunch, dinner, and healthy recipes. Each recipe is personally screened by site creator Rui Zhu</p>
                    <Link to="/contact" className="btn">contact</Link>
                </article>
                <img src={aboutImage} alt="pouring slat" className="img about-img" />
            </section>

            <Featured recipeList={recipeList}/>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        recipeList: state.recipeReducer
    }
}

export default connect(mapStateToProps, {})(About);
