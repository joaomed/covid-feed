import { iPostData, iPostDataPost, ResponsePostsPage } from '../../../types'
import { Api } from '../axios-config'

const getAll = async (
  page = 1,
  filter = ''
): Promise<iPostData[] | Error> => {
  try {
    const urlString = `/posts`
    const { data } = await Api.get(urlString)

    if (data) {
      return data
      
    }
    return new Error('Error in getTop posts')
  } catch (error) {
    console.error(error)
    return new Error(
      (error as { message: string }).message || 'Error in getTop posts'
    )
  }
}
const getTop = async (
  page = 1,
  filter = ''
): Promise<ResponsePostsPage | Error> => {
  try {
    const urlString = `/posts?_page=1&_limit=3&countryId_like=${filter}`
    const { data, headers } = await Api.get(urlString)

    if (data) {
      return {
        data,
        totalCount: Number(headers['x-total-count']) || 0
      }
    }
    return new Error('Error in getTop posts')
  } catch (error) {
    console.error(error)
    return new Error(
      (error as { message: string }).message || 'Error in getTop posts'
    )
  }
}
const getById = async (id: number): Promise<iPostData | Error> => {
  try {
    const urlString = `/posts/${id}`
    const { data } = await Api.get(urlString)

    if (data) {
      return data
    }
    return new Error('Error in getById posts')
  } catch (error) {
    console.error(error)
    return new Error(
      (error as { message: string }).message || 'Error in getById posts'
    )
  }
}

const create = async (reqParams: iPostDataPost): Promise<number | Error> => {
  try {
    const { data } = await Api.post<iPostData>('/posts', reqParams)
    if (data) {
      return data.id
    }
    return new Error('Error in create post')
  } catch (error) {
    console.error(error)
    return new Error(
      (error as { message: string }).message || 'Error in create post'
    )
  }
}
const updateById = async (id: number, reqParams: iPostDataPost): Promise<void | Error> => {
  try {
     await Api.put<iPostData>(`/posts/${id}`, reqParams)
  } catch (error) {
    console.error(error)
    return new Error(
      (error as { message: string }).message || 'Error in updateById post'
    )
  }
}
const deleteById = async (id:number): Promise<void | Error> => {
  try {
    await Api.delete<iPostData>(`/posts/${id}`)
 } catch (error) {
   console.error(error)
   return new Error(
     (error as { message: string }).message || 'Error in deleteById post'
   )
 }
}

export const PostsService = { getAll, getTop, getById, create, updateById, deleteById }
