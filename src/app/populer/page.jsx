"use client"
import { useEffect, useState } from "react"
import HeaderMenu from "../components/utilits/HeaderMenu"
import Pagination from "../components/utilits/Pagination"
import AnimeList from "../components/Animelist"
import { getAnimeResponse } from "../libs/api-libs"

const Page = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])
    
    const fetchData = async() => {
    const popularAnime = await getAnimeResponse("top/anime", `page=${page}`)
    setTopAnime(popularAnime)
    }
    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <>
        <HeaderMenu title={`MOST POPULAR PAGE ${page}`}/>
        <AnimeList api={topAnime}/>
        <Pagination page={page} 
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}/>
        </>
    )
} 

export default Page