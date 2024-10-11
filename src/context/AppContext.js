import React, { createContext, useState } from 'react'
// import { baseUrl } from '../baseUrl';
// import { baseUrl } from '../baseUrl';
const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs"

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)

    // fetch blog data

    const fetchBlogData = async (page = 1) => {
        setLoading(true)
        let url = `${baseUrl}?page=${page}`

        try {
            const res = await fetch(url);
            const data = await res.json()
            console.log(data, "Blog Post")
            if (!data.posts || data.posts.length === 0) {
                throw new Error("Post not available")
            }
            setPage(data.page)
            setPosts(data.posts)
            setTotalPages(data.totalPages)
        } catch (error) {
            console.log("Error occured while fetching blog post")
            setPage(1)
            setPosts([])
            setTotalPages(null)
        }
        setLoading(false)
    }


    // handle next and previous button click in pagination component
    const handlePageChange = (page) => {
        setPage(page)
        fetchBlogData(page)
    }

    const value = {
        page,
        setPage,
        loading,
        setLoading,
        totalPages,
        setTotalPages,
        posts,
        setPosts,
        fetchBlogData,
        handlePageChange
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

