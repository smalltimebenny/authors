import {useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'



const AuthorForm = (props) => {
    const {authors, setAuthors} = props
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [errors, setErrors] = useState({})

    const navigate = useNavigate();

    const authorAdd = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/createAuthor", {
            firstName,
            lastName
        })
        .then(res => {
            console.log(res)
            setAuthors([...authors, res.data])
            navigate("/home")
        })
        .catch(err => {
            console.log ("Error with form submission.", err)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div>
            <h1>Add an author:</h1>
            <form onSubmit = {authorAdd}>
                <label>First Name:</label>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)} />
                {errors.firstName && <span>{errors.firstName.message}</span>}
                <label>Last Name:</label>
                <input type="text" onChange={(e)=>setLastName(e.target.value)} />
                {errors.lastName && <span>{errors.lastName.message}</span>}
                <input className='buttn' type="submit" value="Add an Author" />
            </form>
        </div>
    )
}

export default AuthorForm