export const actions = {
    register: async ({ request, fetch }) => {
        // Optiene los datos del formulario
        const formData = await request.formData();

        let requestOptions = {
            method: 'POST',
            body: formData
        };
        const res = await fetch('https://crud.jonathansoto.mx/api/register',requestOptions);
        const data = await res.json();
        console.log(data);
    },
};