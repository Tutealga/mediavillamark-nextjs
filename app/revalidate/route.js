import { revalidatePath } from "next/cache";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;

    if(searchParams.get("secret") !== process.env.SECRET){
        return Response.json({revalidate: false});
    }

    revalidatePath(`/`);

    return Response.json({revalidate: true});

}