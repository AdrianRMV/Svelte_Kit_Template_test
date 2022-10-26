export const actions = {
    default: async ({ request, fetch }) => {


        const formData = await request.formData();

        const name = formData.get('name');
        const email = formData.get('email');
        const lastname = formData.get('lastname');
        const phone_number = formData.get('phone_number');
        const password = formData.get('password');
        // const image = formData.get('cover');


        let requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                lastname: lastname,
                email: email,
                phone_number: phone_number,
                created_by: 'jonathan soto',
                role: 'Administrador',
                password: password,
                profile_photo_file: null,
            }),
        };
        const data = await fetch('/api/user/register', requestOptions);
        const res = await data.json();
        console.log(res);
    },
};
