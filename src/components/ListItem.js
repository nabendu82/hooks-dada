import React from 'react'
import './ListItem.css'
import styled from 'styled-components'

const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px'
}

const StyledPara = styled.p`
    color: darkblue;
    font-size: 1.2rem;
    font-weight: bold;
`

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const ListItem = ({ post }) => {
    return (
        <div className='container'>
            <h1 style={headerStyle}>ID: {post.id}</h1>
            <h3 style={{ color: 'darkred', textTransform: 'uppercase' }}>Title: {post.title}</h3>
            <StyledPara>{post.body}</StyledPara>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </div>
    )
}

export default ListItem