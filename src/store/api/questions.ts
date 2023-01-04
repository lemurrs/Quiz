import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const BASE_URL = 'https://quizapi.io/api/v1'

export const quizApi = createApi({
    reducerPath: 'quizApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        headers: {
            'X-API-Key': '1C0QNqKvvqQ58BqNORPDkBbkPa9uEop674Xi2wrT'
        }
    }),
    endpoints: (builder) => ({
        getAllQuestions: builder.query<any,any>({
            query: () => ({
                url: `/questions`,
                params: {
                }
            }),
        }),
    })
})
export const {useGetAllQuestionsQuery} = quizApi