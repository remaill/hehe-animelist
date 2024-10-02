"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
    const [comment, setComment] = useState("")
    const [isCreated, setIsCreated] = useState(false)

    const router = useRouter()

    const handleInput = (event) => {
        setComment(event.target.value)
    }

    const handlePosting = async (event) => {
        event.preventDefault()
        if (comment.length < 3) {
            alert("Comment must be at least 3 characters long.")
            return
        }

        const data = { anime_mal_id, user_email, comment, username, anime_title }

        const response = await fetch("/api/v1/comment", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const postComment = await response.json()
        if(postComment.isCreated) {
            setIsCreated(true)
            setComment("")
            router.refresh()
        }
        return
    }

  return (
    <div className='flex flex-col gap-2 mt-3'>
        {isCreated && <p className='text-color-primary'>Comment has been submitted...</p>}
        <textarea placeholder='Comment column... (requires login)' value={comment} onChange={handleInput} className='w-96 h-24 rounded p-3'/>
        <button onClick={handlePosting} className='rounded w-32 py-2 px-3 bg-color-accent'>Post comment</button>
    </div>
  )
}

export default CommentInput
