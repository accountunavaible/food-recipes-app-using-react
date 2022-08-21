import {connect} from 'react-redux';
import Featured from '../../components/Featured/Featured';
import {useState} from 'react';
function Contact({recipeList}) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [sent, setSent] = useState(false)

    const handleInput = (type, e) => {
        switch(type) {
            case 'username':
                setUsername(e.target.value)
                break;
            case 'email' :
                setEmail(e.target.value)
                break;
            case 'text':
                setMessage(e.target.value)
                break;
            default:
                return null;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            username,
            email,
            message
        }
        fetch("http://localhost:8000/message", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                setSent(true)
                setUsername('')
                setEmail('')
                setMessage('')
            })
    }
    return (
        <>
            <section className="contact-container">
                <article className="contact-info">
                    <h3>Want to Share Recipes?</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout.</p>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                    <p>now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many
                        web sites still in their infancy. Various versions have evolved over the years, sometimes by
                        accident, sometimes on purpose (injected humour and the like).</p>
                </article>
                <article>
                    <form className="contact-form form" onSubmit={e => handleSubmit(e)}>
                        { sent && <h5 style={{ color: 'red' }}>Message Sent. Thank you!</h5> }
                        <div className="form-row">
                            <label htmlFor="name" className="form-label">your name</label>
                            <input type="text" name="name" id="name" className="form-input" value={username} onChange={(e) => handleInput('username', e)}/>
                        </div>
                        <div className="form-row">
                            <label htmlFor="email" className="form-label">your email</label>
                            <input type="email" name="email" id="email" className="form-input" value={email} onChange={(e) => handleInput('email', e)}/>
                        </div>
                        <div className="form-row">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea name="name" id="message" className="form-textarea" value={message} onChange={(e) => handleInput('text', e)}/>
                        </div>
                        <button type="submit" className="btn btn-block">submit</button>
                    </form>
                </article>
            </section>
            <Featured recipeList={recipeList}/>
        </>
    );
}

const mapStateToProps = state => {
    return {
        recipeList: state.recipeReducer
    }
}

export default connect(mapStateToProps, {})(Contact);
