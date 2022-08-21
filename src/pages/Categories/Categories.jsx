import {Link} from "react-router-dom";
import {connect} from "react-redux";


function Categories({categoryList}) {
    return (
        <>
            <section className="tags-wrapper">
                {
                    categoryList.map(category => {
                        return (
                            <Link to={`/tag-template/${category.title}`} className="tag" key={category.id}>
                                <h5>{category.title}</h5>
                                <p>{category.count} recipe</p>
                            </Link>
                        )
                    })
                }
            </section>
        </>
    );
}

const mapStateToProps = state => {
    return {
        categoryList: state.categoryReducer
    }
}
export default connect(mapStateToProps, {})(Categories);
