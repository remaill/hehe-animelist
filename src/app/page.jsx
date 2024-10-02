import AnimeList from "./components/Animelist";
import Header from "./components/Animelist/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "./libs/api-libs";

const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=10")
  const seasonNow = await getAnimeResponse("seasons/now", "limit=10")
  let recomendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recomendedAnime = reproduce(recomendedAnime, 5)
  
  return (
    // Anime terpopuler!!!
    <>
    <section>
      <Header title="Most Popular" linktitle="See more" linkhref="/populer"/>
      <AnimeList api={topAnime}/>
    </section>
    <section>
      <Header title="Season Now" linktitle="See more" linkhref="/seasons_now"/>
      <AnimeList api={seasonNow}/>
    </section>
    <section>
      <Header title="Recommendation" />
      <AnimeList api={recomendedAnime}/>
    </section>

    </>
  );
}

export default Page