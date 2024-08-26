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
  Post,
  PostContainer
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
  
    console.log("sorted",sortedCountries)
    return sortedCountries;

  }

  return (
    <Box>
      <ContainerCard height="180px" width='320px'>
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
                <Post>{item[0]}</Post>
                {item[1]}
              </PostContainer>
            )
          })}
        </BodyCard>
        <FooterCard>
          <a
            target="_blank"
            href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public#:~:text=Avoid%20crowds%20and%20close%20contact,when%20you%20cough%20or%20sneeze."
            rel="noreferrer"
          >
            Learn how to prevent infections
          </a>
          <ArrowFooter />
        </FooterCard>
      </ContainerCard>
      <Box></Box>
    </Box>
  )
}
