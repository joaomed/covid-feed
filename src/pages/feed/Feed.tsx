import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import axios from 'axios'
import { CountryData, iPostData, TotalData } from '../../shared/types'
import { AllPosts, ConfirmedCases, Deaths, Recovered, TopPosts } from '../../shared/components'
import { PostsService } from '../../shared/services/api/Posts/PostsService'

export const Feed = () => {
  const [posts, setPosts] = useState([] as iPostData[])

  useEffect(()=> {
    PostsService.getAll().then((result) => {
      if (result instanceof Error) {
        alert(result.message)
      }
      else{
        setPosts(result)
      }
    })
  },[]);

  return (
    <Box display='flex' flexDirection='column' position='relative' bottom='20px' alignItems='center' justifyContent='center' gap='20px' >
      {/* <TopPosts/> */}
      <AllPosts posts={posts}/>
    </Box>
  )
}
