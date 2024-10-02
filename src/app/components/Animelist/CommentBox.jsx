import prisma from '@/app/libs/prisma'
import React from 'react'

const CommentBox = async ({ anime_mal_id }) => {
    const comment = await prisma.comment.findMany({where: { anime_mal_id }});

  return (
    <div className=''>
        {comment.map(comment => {
            return (
                <div key={comment.id} className='text-color-dark bg-color-primary p-2 mt-2 w-72 rounded-2xl'>
                <p className='text-color-accent bg-color-secondary text-center rounded-xl'>{comment.username}</p>
                <p className='p-1'>{comment.comment}</p>
                </div>
            )
        })}
        <div></div>
    </div>
  )
}

export default CommentBox