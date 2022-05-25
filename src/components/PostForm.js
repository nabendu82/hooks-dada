import React, { useState } from 'react'
import axios from 'axios'

const PostForm = () => {
    const [userId, setUserId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleChange = e => {
        const { name, value } = e.target
        switch (name) {
            case 'userId':
                setUserId(value)
                break
            case 'title':
                setTitle(value)
                break
            case 'body':
                setBody(value)
                break
            default:
                break
        }
    }

    // const handleSubmit = async e => {
    //     e.preventDefault()
    //     const res = await axios.post('https://jsonplaceholder.typicode.com/posts', { userId, title, body })
    //     console.log(res.data)
    // }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', { userId, title, body })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userId">UserId </label>
                <input type="text" name="userId" id="userId" value={userId} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="title">Title </label>
                <input type="text" name="title" id="title" value={title} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="body">Body </label>
                <input type="text" name="body" id="body" value={body} onChange={handleChange} />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default PostForm