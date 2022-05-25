import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListItem from './ListItem'

const PostList = () => {
    const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    //         setPosts(res.data)
    //     }
    //     fetchPosts()
    // },[]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    },[])

    return posts.map(item => <ListItem key={item.id} post={item} />)
}

export default PostList