import { revalidatePath } from 'next/cache';

export default async function handler() {
    revalidatePath('/')
  
    return Response.json({ revalidated: true })
  }