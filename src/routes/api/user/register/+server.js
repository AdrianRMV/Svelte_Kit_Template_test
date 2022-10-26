// let myHeaders = new Headers();
// import { BEARER_TOKEN } from '$env/static/private';
// console.log(BEARER_TOKEN);

// myHeaders.append(
//     'Authorization',
//     `Bearer ${BEARER_TOKEN}`
// );

export const POST = async ({ request, fetch }) => {
    const body = await request.json();
    console.log(body);

    var requestOptions = {
        method: 'POST',
        // headers: myHeaders,
        body: JSON.stringify({
            name: body. name,
            lastname: body. lastname,
            email: body. email,
            phone_number: body. phone_number,
            created_by: body.created_by,
            role: body.role,
            password: body.password,
            profile_photo_file: body.profile_photo_file,
        }),
    };

    const res = await fetch("https://crud.jonathansoto.mx/api/register", requestOptions);
    const des = await res.json();
    console.log(des)

    return new Response(JSON.stringify({ message: 'Sucess' }), { status: 200 });
};
