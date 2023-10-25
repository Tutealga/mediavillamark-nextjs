import { revalidatePath } from 'next/cache'
 
export async function GET(request) {
  const path = request.nextUrl.searchParams.get('path')
  const secret = request.nextUrl.searchParams.get('secret')

  if(secret !== process.env.SECRET_TOKEN){
    return Response.json({ message: 'Invalid token' }, { status: 401 })
  }

  if (!path) {
    return Response.json({ message: 'Missing path param' }, { status: 400 })
  }
 
  revalidatePath(path)
 
  return Response.json({ revalidated: true })
}