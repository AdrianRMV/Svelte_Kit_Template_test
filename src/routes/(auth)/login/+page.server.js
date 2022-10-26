export const actions = {
    login: async ({ request, fetch }) => {
        // Optiene los datos del formulario
        const formData = await request.formData();

        // Convierte el arreglo de objetos a un solo objeto con las propiedades mandadas en el formulario
        const dataUser = Object.fromEntries([...formData]);

        let requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                email: dataUser.email,
                password: dataUser.password
            })
        };
        const res = await fetch('/api/user/login',requestOptions);
        const data = await res.json();
        console.log(data);
    },
};
