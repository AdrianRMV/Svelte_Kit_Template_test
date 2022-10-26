import { SECRET_API_KEY } from '$env/static/private';

console.log(SECRET_API_KEY);

export const actions = {
    default: async ({ request, fetch }) => {
        const formData = await request.formData();

        const email = formData.get('email');
        const password = formData.get('password');


        // const res = await fetch('/api/users');
        // const data = await res.json();

        // return {
        //     users: data.data
        // }

        let requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                email : email,
                password : password
            })
        };
        fetch('/api/users',requestOptions);
    },
};
