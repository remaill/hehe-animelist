import DeleteComment from '@/app/components/Animelist/DeleteComment'
import Header from '@/app/components/Dashboard/Header'
import { authUsersession } from '@/app/libs/auth-libs'
import prisma from '@/app/libs/prisma'
import Link from 'next/link'
import React from 'react'

const page = async () => {
    const user = await authUsersession()
    const comment = await prisma.comment.findMany({ where: {user_email: user.email} })
  return (
    <>
    <Header title={"My Comment"}/>
    <div className='grid grid-cols-1 px-4 py-2 gap-4'>
    {comment.length === 0 ? (  // Jika tidak ada komentar
        <p className='text-color-primary text-xl'>There are no comments you posted...</p>  // Tampilkan pesan
    ) : (
        comment.map(comment => (
            <div key={comment.id} className='flex gap-2'>
                <Link href={`/anime/${comment.anime_mal_id}`}
                    className='bg-color-primary p-3 w-2/3 rounded-md '>
                    <p className='text-sm text-color-secondary'>{comment.anime_title} :</p>
                    <p className='text-color-dark text-xl'>{comment.comment}</p>
                </Link>
                <DeleteComment commentId={comment.id} />
            </div>
        ))
    )}
    </div>
    </>
    
  )
}

export default page