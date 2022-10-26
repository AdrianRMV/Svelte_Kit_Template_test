export const actions = {
    default: async ({ request, fetch }) => {
        const formData = await request.formData();

        const email = formData.get('email');
        const password = formData.get('password');
        

        let requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        };
        fetch('/api/users', requestOptions);
    },
};
