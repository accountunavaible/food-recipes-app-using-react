import {Link} from "react-router-dom";
import {connect} from "react-redux";


function SideMenu({categoryList}) {


    return (
        <div className="tags-container">
            <h4>categories</h4>
            <div className="tags-list">
                {
                    categoryList.map(categoy => {
                        return <Link to={`/tag-template/${categoy.title}`} key={categoy.id}> {categoy.title} ({categoy.count})</Link>
                    })
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        categoryList: state.categoryReducer
    }
}

export default connect(mapStateToProps, {})(SideMenu);
