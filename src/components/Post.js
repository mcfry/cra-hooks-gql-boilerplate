import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id)
  }
`

const Post = ({ post, refresh }) => {
  const [deletePost] = useMutation(DELETE_POST, {
    variables: {
      id: post.id
    }
  })

  const handleDelete = () => {
    deletePost().then(() => {
      refresh()
    })
  }

  return (
    <div className="pa3 bg-black-05 ma3">
      <div
        className="w-100"
        style={{
          backgroundImage: `url(${post.imageUrl})`,
          backgroundSize: 'cover',
          paddingBottom: '100%',
        }}
      />
      <div className="pt3">
        {post.description}&nbsp;
        <span className="red f6 pointer dim" onClick={handleDelete}>
          Delete
        </span>
      </div>
    </div>
  )
}

export default Post