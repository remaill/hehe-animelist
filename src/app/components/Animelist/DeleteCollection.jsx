"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const DeleteCollection = ({ collectiontId }) => {
    const [isDeleted, setIsDeleted] = useState(false)
    const router = useRouter()

    const handleDelete = async () => {
        try {
            const response = await fetch("/api/v1/collection", {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: collectiontId }),  // Kirim ID komentar
            })

            if (response.ok) {
                setIsDeleted(true)
                router.refresh()  // Refresh halaman setelah penghapusan
            } else {
                console.error('Failed to delete comment')
            }
        } catch (error) {
            console.error("Error:", error)
        }
    }

    return (
        <button 
            onClick={handleDelete} 
            className='rounded px-1 text-sm hover:bg-color-primary bg-color-secondary text-color-accent hover:text-color-dark'>
            Remove
        </button>
    )
}

export default DeleteCollection