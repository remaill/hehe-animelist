import Link from "next/link"
import { authUsersession } from "@/app/libs/auth-libs"

const UserActionButton = async() => {
    const user = await authUsersession();

    const actionLabel = user ? "Sign Out" : "Sign in"
    const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex justify-between gap-2 pt-2">
            {
                user ?
                <Link href="/user/dashboard" className="py-1">Dashboard</Link>
                : null
            }
            <Link href={actionUrl} className="bg-color-secondary text-color-accent py-1 px-10 rounded hover:text-color-primary">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton