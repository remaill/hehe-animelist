"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const DeleteComment = ({ commentId }) => {
    const [isDeleted, setIsDeleted] = useState(false)
    const router = useRouter()

    const handleDelete = async () => {
        try {
            const response = await fetch("/api/v1/comment", {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: commentId }),  // Kirim ID komentar
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
            className='rounded p-5 bg-color-primary hover:bg-color-accent'>
            Delete
        </button>
    )
}

export default DeleteComment