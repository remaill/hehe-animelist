"use client"
import { useEffect, useState } from "react"
import HeaderMenu from "../components/utilits/HeaderMenu"
import Pagination from "../components/utilits/Pagination"
import AnimeList from "../components/Animelist"
import { getAnimeResponse } from "../libs/api-libs"

const Page = () => {
    const [page, setPage] = useState(1)
    const [seasonsNow, setSeasonsNow] = useState([])
    
    const fetchData = async() => {
    const animeNow = await getAnimeResponse("seasons/now", `page=${page}`)
    setSeasonsNow(animeNow)
    }
    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <>
        <HeaderMenu title={`SEASON NOW PAGE ${page}`}/>
        <AnimeList api={seasonsNow}/>
        <Pagination page={page} 
        lastPage={seasonsNow.pagination?.last_visible_page}
        setPage={setPage}/>
        </>
    )
} 

export default Page