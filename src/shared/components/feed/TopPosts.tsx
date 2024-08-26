import { useEffect, useState } from 'react'
import {  Box } from '@mui/material'
import {  iPostData } from '../../types'
import ListIcon from '@mui/icons-material/List'
import {
  ArrowFooter,
  BodyCard,
  ContainerCard,
  FooterCard,
  HeaderCard,
  PostContainer,
  PostTop
} from './styles'

export const TopPosts = (props: { posts: iPostData[] }) => {
  const [topPosts, setTopPosts] = useState([] as [string, number][])

  useEffect(() => {
    setTopPosts(handleTopCountriesWithPosts())
  }, [props.posts])

  function handleTopCountriesWithPosts(): [string, number][] {
    const countryCounts: { [country: string]: number } = {};
    props.posts.forEach(post => {
      const country = post.country;
      if (countryCounts[country]) {
        countryCounts[country]++;
      } else {
        countryCounts[country] = 1;
      }
    });
  
    const sortedCountries: [string, number][] = Object.entries(countryCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3); 
  
    return sortedCountries;
  }

  return (
    <Box>
      <ContainerCard height="180px" width='600px'>
        <HeaderCard>
          <div>
            <ListIcon />
            Top posts
          </div>

        </HeaderCard>
        <BodyCard>
          {topPosts.map(item => {
            return (
              <PostContainer>
                <PostTop>{item[0]}</PostTop>
                <Box fontSize="14px">{item[1]}</Box>
              </PostContainer>
            )
          })}
        </BodyCard>
        <FooterCard>
          <a
            target="_blank"
            href="https://silsistemas.com.br/"
            rel="noreferrer"
          >
            Do you want more visits? Contact us!
          </a>
        </FooterCard>
      </ContainerCard>
      <Box></Box>
    </Box>
  )
}
