export const POST = async ({ request, fetch }) => {
    const body = await request.text();
    console.log(body)

    return new Response(JSON.stringify({ message: 'Sucess' }), { status: 200 });
};