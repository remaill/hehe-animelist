import prisma from "@/app/libs/prisma"

export async function POST(request) {
    const { anime_mal_id, user_email, anime_image, anime_title } = await request.json()
    const data = { anime_mal_id, user_email, anime_image, anime_title }

    const createCollection = await prisma.collection.create({ data })
    if(!createCollection) return Response.json({ status: 500, isCreated: false })
    else return Response.json({ status: 200, isCreated: true })
    
}
export async function DELETE(request) {
    try {
        const { id } = await request.json()  // Dapatkan ID dari body
        const deleteCollection = await prisma.collection.delete({
            where: {
                id: parseInt(id),  // Pastikan ID adalah integer
            },
        })

        return new Response(JSON.stringify({ status: 200, isDeleted: true }), { status: 200 })
    } catch (error) {
        console.error("Error deleting collection:", error)
        return new Response(JSON.stringify({ status: 500, isDeleted: false, error: 'Failed to delete comment' }), { status: 500 })
    }
}