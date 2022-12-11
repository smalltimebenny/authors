import {useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"

const AuthorList = (props) => {
    const {authors, setAuthors} = props

    useEffect(()=> {
        axios.get("http://localhost:8000/api/authors/")
            .then(res => {
                console.log(res.data)
                setAuthors(res.data)
            })
            .catch(err => {console.log("Author list didn't load.", err)})
    }, [])

    const deleteAuthor = (authorId) => {
        axios.delete("http://localhost:8000/api/author/" + authorId)
            .then(res => {
                console.log(res.data)
                const newList = authors.filter((item,index) => item._id !== authorId)
                setAuthors(newList)
            })
            .catch(err => console.log("Delete promise failed.", err))
    }

    return (
        <div>
            {
                authors.map((author, _id)=>{
                    return (
                        <div key={_id}>
                        {author.lastName}, {author.firstName} |
                        <Link to={`/author/${author._id}`}>Info</Link> 
                        <Link to={`/author/edit/${author._id}`}>Edit</Link>
                        <button className='buttn' onClick={()=>{deleteAuthor(author._id)}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AuthorList