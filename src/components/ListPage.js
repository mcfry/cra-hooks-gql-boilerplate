import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Post from './Post.js'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
  query allPosts {
    allPosts {
      id
      imageUrl
      description
    }
  }
`

const ListPage = () => {
  const location = useLocation()
  const { loading, data, refetch } = useQuery(FEED_QUERY)

  useEffect(() => {
    refetch()
  }, [location])

  if (loading) {
    return (<div>Loading</div>)
  }
  
  return (
    <div className='w-100 flex justify-center'>
      <Link to='/create' className='fixed bg-white top-0 right-0 pa4 ttu dim black no-underline'>
        + New Post
      </Link>
      <div className='w-100' style={{ maxWidth: 400 }}>
        {data.allPosts.map((post) =>
          <Post key={post.id} post={post} refresh={() => refetch()} />
        )}
      </div>
    </div>
  )
}

export default ListPage