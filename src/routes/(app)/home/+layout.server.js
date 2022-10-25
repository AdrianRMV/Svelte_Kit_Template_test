/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({ fetch }) => {
    var myHeaders = new Headers();
    myHeaders.append(
        'Authorization',
        'Bearer 1339|bd3kWyyQivkWl4r7QpRY6MzoiJB82LAdAIALTEac'
    );

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    const productRes = await fetch(
        'https://crud.jonathansoto.mx/api/products',
        requestOptions
    );
    const productData = productRes.json();
    const products = productData;
    return {
        products,
    };
};
