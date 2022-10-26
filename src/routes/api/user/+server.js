let myHeaders = new Headers();
import { BEARER_TOKEN } from '$env/static/private';
console.log(BEARER_TOKEN);

myHeaders.append(
    'Authorization',
    `Bearer ${BEARER_TOKEN}`
);

export const GET = async ({ request, url, fetch }) => {
    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    const res = await fetch(
        'https://crud.jonathansoto.mx/api/users',
        requestOptions
    );
    const data = await res.json();

    // Pregunta si la variable data tiene contenido, si es asi response con el contenido y un status 200
    if (data) {
        return new Response(JSON.stringify(data), { status: 200 });
    }
    // Si la data no contiene nada retorna un error
    return new Response(JSON.stringify({ message: 'Peticion invalida' }), {
        status: 401,
    });
};

export const POST = async ({ request, url, fetch }) => {
    const body = await request.json();
    console.log(body.email);
    console.log(body.password);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: body,
    };

    fetch("https://crud.jonathansoto.mx/api/users", requestOptions)

    return new Response(JSON.stringify({ message: 'Sucess' }), { status: 200 });
};
