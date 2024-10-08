import { useEffect, useState } from 'react'
import  { SelectChangeEvent } from '@mui/material/Select'
import {  Box } from '@mui/material'
import {  iPostData } from '../../types'
import ListIcon from '@mui/icons-material/List'
import {
  BodyCard,
  ContainerCard,
  HeaderCard,
  Post,
  PostContainer
} from './styles'
import { SelectCountries } from '../SelectCountries'

export const AllPosts = (props: { posts: iPostData[] }) => {
  const [postsFiltered, setPostsFiltered] = useState([] as iPostData[])
  const [country, setCountry] = useState('Global')

  useEffect(() => {
    setPostsFiltered(props.posts)
  }, [props.posts])

  const handleChangeCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value)
    if (event.target.value === 'Global') {
      clearSelect()
    } else {
      const countryInfo = props.posts.filter(
        item => item.country.toLowerCase() === event.target.value.toLowerCase()
      )
      setPostsFiltered(countryInfo)
    }
  }

  const clearSelect = () => {
    setPostsFiltered(props.posts)
    setCountry('Global')
  }

  return (
    <Box>
      <ContainerCard width="600px">
        <HeaderCard>
          <div>
            <ListIcon />
            All posts
          </div>
          <SelectCountries
            handleChangeCountry={handleChangeCountry}
            clearSelect={clearSelect}
            country={country}
          />
        </HeaderCard>
        <BodyCard>
          {postsFiltered.map(item => {
            return (
              <PostContainer>
                <Post>{item.content}</Post>
                <img
                  loading="lazy"
                  width="20"
                  srcSet={`https://flagcdn.com/w40/${item.iso.toLowerCase()}.png 2x`}
                  src={`https://flagcdn.com/w20/${item.iso.toLowerCase()}.png`}
                  alt=""
                />
              </PostContainer>
            )
          })}
        </BodyCard>
     
      </ContainerCard>
    </Box>
  )
}
