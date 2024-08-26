import { Api } from '../axios-config'

const getAll = async (): Promise<
  { label: string; iso: string }[] | Error
> => {
  try {
    const urlString = `/countries`
    const { data } = await Api.get(urlString)

    if (data) {
      return data
    }
    return new Error('Error in getAll countries')
  } catch (error) {
    console.error(error)
    return new Error(
      (error as { message: string }).message || 'Error in getAll countries'
    )
  }
}

export const CountriesService = { getAll }
