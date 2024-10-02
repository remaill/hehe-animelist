"use client"
import { ArrowCircleLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Header = ({ title }) => {

    const router = useRouter()
    const handleBack = (event) => {
        event.preventDefault()
        router.back()
    }

    return (
        <div className="flex justify-between items-center mb-4 mt-4 mx-2">
            <h3 className="text-2xl font-semibold text-color-primary">{title}</h3>
            <button className="text-color-primary" onClick={handleBack}>
                <ArrowCircleLeft size={32} color="#ffffff"/>
            </button>
        </div>
    )
}

export default Header