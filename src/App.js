import {Routes, Route} from "react-router-dom";
import "./assets/css/style.css";
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Tags from './pages/Categories/Categories';
import Contact from './pages/Contact/Contact';
import TagTemplate from './pages/TagTemplate/TagTemplate';
import SingleRecipe from './pages/SingleRecipe/SingleRecipe';
import NotFound from './pages/NotFound/NotFound';

function App() {
    return (
        <Layout>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/tags" element={<Tags/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/tag-template/:tag" element={<TagTemplate/>} />
                <Route path="/single-recipe/:id" element={<SingleRecipe/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    )
}

export default App;
