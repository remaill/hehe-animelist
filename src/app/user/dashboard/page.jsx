const { authUsersession } = require("@/app/libs/auth-libs")
import Image from "next/image"
import Link from "next/link"

const Page = async() => {
    const user = await authUsersession()

    return (
        <div className="mt-8 text-color-primary flex flex-col justify-center items-center">
            <h2 className="text-2xl bg-color-primary text-color-dark p-1 px-3 rounded-md font-semibold mb-4">User Dasboard</h2>
            <h5 className="text-2xl font-bold mb-4">Welcome, {user.name}</h5>
            <Image src={user.image} alt="..." width={250} height={250}
            className="rounded-full border-4 border-color-accent"/> 
            <div className="flex gap-3 py-8">
                <Link 
                href="/user/dashboard/collection"
                className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl rounded"
                >My Collection
                </Link>
                <Link 
                href="/user/dashboard/comment"
                className="bg-color-accent text-color-dark font-bold px-4 py-3 text-xl rounded"
                >My Comment
                </Link>
            </div>
        </div>
    )
}

export default Page