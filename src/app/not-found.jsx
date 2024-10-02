"use client"
import { FileSearch } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Page = () => {
    const router = useRouter()
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-5 flex-col">
                <FileSearch size={50} className="text-color-accent" />
                <h3 className="text-color-accent text-5xl font-bold">NOT FOUND</h3>
                    <button onClick={() => router.back()} className=" flex justify-center item-center text-color-primary hover:text-color-accent underline text-2xl">
                        Back</button>
            </div>
        </div>
    )
}

export default Page