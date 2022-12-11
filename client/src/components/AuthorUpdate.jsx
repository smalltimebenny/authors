import {useState, useEffect} from 'react'
import axios from "axios"
import {useNavigate, useParams} from "react-router-dom"

const AuthorUpdate = (props) => {
    const {id} =useParams();
    const [firstName, setFirstName] =useState("")
    const [lastName, setLastName] =useState("")

    const navigate = useNavigate();

    const [errors, setErrors] =useState("");

    useEffect(()=> {
        axios.get("http://localhost:8000/api/author/" + id)
            .then (res =>{
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
            })
            .catch(err => console.log("Author update get error.", err))
    }, [])

    const updateAuthorInfo = (e) =>{
        e.preventDefault();
        axios.put("http://localhost:8000/api/author/" + id, {
            firstName,
            lastName,
        })
        .then(res => {
            console.log(res)
            navigate("/home")
        })
        .catch(err => {
            console.log("updateAuthorInfo error", err)
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div>
            <h1>Update an author:</h1>
            <form onSubmit={updateAuthorInfo}>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} /><br />
                {errors.firstName && <span>{errors.firstName.message}</span>}<br />
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} /><br />
                {errors.lastName && <span>{errors.lastName.message}</span>}<br />
                <button className='buttn' type="submit">Update entry</button>
            </form>
        </div>
    )
}

export default AuthorUpdate