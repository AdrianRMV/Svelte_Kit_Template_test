export const actions = {
    default: async ({ request, fetch }) => {
        const formData = await request.formData();

        const name = formData.get('name');
        const email = formData.get('email');
        const lastname = formData.get('lastname');
        const phone_number = formData.get('phone_number');
        const password = formData.get('password');


        let requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                name: name,
                lastname: lastname,
                phone_number: phone_number,
                password: password,
            }),
        };
        fetch('/api/user/register', requestOptions);
    },
};
