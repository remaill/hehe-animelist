import Link from "next/link"
import Image from "next/image"
import Header from "@/app/components/Dashboard/Header"
import { authUsersession } from "@/app/libs/auth-libs"
import prisma from "@/app/libs/prisma"
import DeleteCollection from "@/app/components/Animelist/DeleteCollection"

const Page = async () => {
    const user = await authUsersession()
    const collection = await prisma.collection.findMany({where: {user_email: user.email}})

    return (
        <section>
            <Header title={"My Collection"}/>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 px-2">
                {collection.map((collect, index) => {
                    return (
                        <section key={index} className="relative border-color-accent">
                            <Link href={`/anime/${collect.anime_mal_id}`} className="">
                            <Image src={collect.anime_image} alt="" width={350} height={350}
                            className="w-full"/>
                           
                            </Link>
                            <div className="absolute flex flex-col items-center justify-center bottom-0 w-full bg-color-accent h-16">
                            <h5 className="text-xl text-center">{collect.anime_title.length > 18 ? collect.anime_title.slice(0, 18) + '...' : collect.anime_title}</h5>
                            <DeleteCollection collectiontId={collect.id}/>
                            </div>
                            
                        </section>
                   
                    )
                })}
            </div>
        </section>
    )

}

export default Page