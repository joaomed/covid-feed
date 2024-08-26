export type TotalData = {
  active: number
  activePerOneMillion: number
  affectedCountries: number
  cases: number
  casesPerOneMillion: number
  critical: number
  criticalPerOneMillion: number
  deaths: number
  deathsPerOneMillion: number
  oneCasePerPeople: number
  oneDeathPerPeople: number
  oneTestPerPeople: number
  population: number
  recovered: number
  recoveredPerOneMillion: number
  tests: number
  testsPerOneMillion: number
  todayCases: number
  todayDeaths: number
  todayRecovered: number
  updated: number
}

export type CountryData = {
  active: number
  activePerOneMillion: number
  cases: number
  casesPerOneMillion: number
  continent: string
  country: string
  countryInfo: {
    iso2: string
  }
  critical: number
  criticalPerOneMillion: number
  deaths: number
  deathsPerOneMillion: number
  oneCasePerPeople: number
  oneDeathPerPeople: number
  oneTestPerPeople: number
  population: number
  recovered: number
  recoveredPerOneMillion: number
  tests: number
  testsPerOneMillion: number
  todayCases: number
  todayDeaths: number
  todayRecovered: number
  updated: number
}

export interface iPostData {
  id: number
  content: string
  country: string
  iso: string
}

export interface iPostDataPost {
  content: string
  country: string
  iso: string
}

export type ResponsePostsPage = {
  data: iPostData[]
  totalCount: number
}

