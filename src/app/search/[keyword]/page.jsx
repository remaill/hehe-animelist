import Header from "@/app/components/Animelist/Header"
import AnimeList from "@/app/components/Animelist"
import { getAnimeResponse } from "@/app/libs/api-libs"

const Page = async ({ params }) => {
    const { keyword } = params
    const decodeKeyword = decodeURI(keyword)

    const searchAnime = await getAnimeResponse(`anime?q=${decodeKeyword}`)

  return (
    // Anime terpopuler!!!
    <>
    <section>
      <Header title={`Pencarian untuk ${decodeKeyword}...`}/>
      <AnimeList api={searchAnime}/>
    </section>
    </>
  );
}

export default Page