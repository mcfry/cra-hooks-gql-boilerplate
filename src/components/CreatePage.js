import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const ADD_POST = gql`
  mutation addPost($description: String!, $imageUrl: String!) {
    createPost(description: $description, imageUrl: $imageUrl) {
      id
      description
      imageUrl
    }
  }
`

const CreatePage = () => {
    const history = useHistory()

    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const [addPost, { loading }] = useMutation(ADD_POST, { 
        variables: {
            description,
            imageUrl
        }
    })

    const handlePost = () => {
        addPost().then(() => 
            history.push('/')
        )
    }

    if (loading) {
        return (<div>Loading</div>)
    }

    return (
        <div className='w-100 pa4 flex justify-center'>
            <div style={{ maxWidth: 400 }} className=''>
            <input
                className='w-100 pa3 mv2'
                value={description}
                placeholder='Description'
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                className='w-100 pa3 mv2'
                value={imageUrl}
                placeholder='Image Url'
                onChange={(e) => setImageUrl(e.target.value)}
            />
            {imageUrl &&
                <img src={imageUrl} alt="" className='w-100 mv3' />
            }
            {description && imageUrl &&
                <button className='pa3 bg-black-10 bn dim ttu pointer' onClick={handlePost}>Post</button>
            }
            </div>
        </div>
    )
}

export default CreatePage