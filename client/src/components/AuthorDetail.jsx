import axios from "axios"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

const AuthorDetail = () => {
    const [author, setAuthor] = useState("")
    const {id} =useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + id)
            .then (res => {
                console.log(res.data)
                setAuthor(res.data)
            })
            .catch(err => console.log("Find one author promise error.", err))
        }, [])


    return (
        <div>
            <p>First name: {author.firstName}</p>
            <p>Last name: {author.lastName}</p>
        </div>
    )
}

export default AuthorDetail