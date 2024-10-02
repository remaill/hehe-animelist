import { getAnimeResponse } from "@/app/libs/api-libs"
import Image from "next/image"
import VideoPlayer from "@/app/components/utilits/VideoPlayer"
import CollectionButton from "@/app/components/Animelist/CollectionButton"
import { authUsersession } from "@/app/libs/auth-libs"
import prisma from "@/app/libs/prisma"
import CommentInput from "@/app/components/Animelist/CommentInput"
import CommentBox from "@/app/components/Animelist/CommentBox"

const Page = async ({ params: { id } }) => {
   const anime = await getAnimeResponse(`anime/${id}`)
   const user = await authUsersession()
   const collection = await prisma.collection.findFirst({
        where: { user_email: user?.email, anime_mal_id: id }
   })
    return (
        <>
        <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">{anime.data.title} - {anime.data.year}</h3>
        {!collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title}/>}
        </div>
        <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
            <div className="text-sm w-36 p-1 flex flex-col justify-center items-center rounded border border-color-primary">
                <h3>RANKING</h3>
                <p>#{anime.data.rank}</p>
            </div>
            <div className="text-sm w-36 p-1 flex flex-col justify-center items-center rounded border border-color-primary">
                <h3>SCORE</h3>
                <p>{anime.data.score}</p>
            </div>
            <div className="text-sm w-36 p-1 flex flex-col justify-center items-center rounded border border-color-primary">
                <h3>EPISODES</h3>
                <p>{anime.data.episodes}</p>
            </div>
            <div className="text-xs w-36 p-1 flex flex-col justify-center items-center rounded border border-color-primary">
                <h3>STATUS</h3>
                <p>{anime.data.status}</p>
            </div>

        </div>
        <div className="pt-4 px-4 flex sm:flex-nowrap md:flex-nowrap flex-wrap gap-2 text-color-primary">
            <Image
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_url}
            width={250}
            height={250}
            className="w-full rounded object-cover pt-2 px-2"
            />
            <p className="text-justify text-md">{anime.data.synopsis}</p>

        </div>
        <div className="px-4 py-2 mb-2">
            <h3 className="text-color-primary text-xl mt-3">Visitor comments :</h3>
            <CommentBox anime_mal_id={id}/>
            { user && <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.data.title}/> } 
        </div>
        <div>
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
        </div>
        
        </>
    )
}

export default Page