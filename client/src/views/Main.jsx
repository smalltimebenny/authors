import {useState} from 'react'
import AuthorForm from "../components/AuthorForm"
import AuthorList from "../components/AuthorList"

const Main = (props) => {
    
    return (
        <div>
            <AuthorForm authors={authors} setAuthors={setAuthors} />
            <hr />
            <AuthorList authors={authors} setAuthors={setAuthors} />
        </div>
    )
}

export default Main