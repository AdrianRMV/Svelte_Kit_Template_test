export const actions = {
    default: async ({request}) => {
        const formData = await request.formData();
        
        const email = formData.get('email');
        const password = formData.get('password');

        let formdata = new FormData();
        formdata.append("email", email);
        formdata.append("password", password);

    }
}