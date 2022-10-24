import { redirect } from '@sveltejs/kit';
/** @type {import('./$types').PageLoad} */
/** @type {import('./$types').LayoutServerLoad} */

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

export async function load({ fetch, params, locals }) {
    if (!locals.user) {
        console.log(locals)
        throw redirect(307, '/');
    }
    const res = await fetch(
        `https://crud.jonathansoto.mx/api/users/${params.id}`,
        requestOptions
    );
    const user = await res.json();
    if (user.data != null) {
        console.log(user);
        console.log(locals);
        return { user };
    } else {
        throw redirect(307, '/');
    }
}
