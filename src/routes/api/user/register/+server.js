export const POST = async ({ request, fetch }) => {
    const body = await request.json();

    console.log(body);

    // let requestOptions = {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(body),
    // };

    // const res = await fetch(
    //     'https://crud.jonathansoto.mx/api/register',
    //     requestOptions
    // );
    // const data = await res.json();
    // console.log(data);

    return new Response(JSON.stringify({ message: 'Sucess' }), { status: 200 });
};
