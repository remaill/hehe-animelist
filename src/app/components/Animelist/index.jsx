import Image from "next/image"
import Link from "next/link"
import { Star } from "@phosphor-icons/react"

const AnimeList = ({ api }) => {
    return (
        <div className="grid grid-cols-3 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4 px-4 mb-4">
            {api.data?.map((anime) => {
               return (
                   <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`} className="cursor-pointer shadow-xl rounded  text-color-primary hover:text-color-accent transition-all pb-3">
                      <Image src={anime.images.webp.image_url} 
                      alt="" width={350} height={350} 
                      className="w-ful max-h-64 object-cover rounded flex justify-center items-center" />
                      <h3 className="flex justify-center items-center font-bold md:text-xl text-sm p-4">
                      {anime.title.length > 18 ? anime.title.slice(0, 18) + '...' : anime.title}</h3>
                      <p className=" flex justify-center items-center md:text-xl text-xs text-col" style={{ color: '#AFF36C' }}> {anime.score ? `☆ ${anime.score}` : null}</p>
                  </Link>
            )
            })}
        </div>
           
    )
}
export default AnimeList