export const actions = {
    register: async ({ request, fetch }) => {

        // Optiene los datos del formulario
        const formData = await request.formData();

        // Convierte el arreglo de objetos a un solo objeto con las propiedades mandadas en el formulario
        const dataUser = Object.fromEntries([...formData]);

        console.log(dataUser.cover)

        // let requestOptions = {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         name: dataUser.name,
        //         lastname: dataUser.lastname,
        //         email: dataUser.email,
        //         phone_number: dataUser.phone_number,
        //         created_by: 'crackokein',
        //         role: 'Administrador',
        //         password: dataUser.password,
        //         profile_photo_file: dataUser.cover
        //     })
        // };
        // const res = await fetch('/api/user/register',requestOptions);
        // const data = await res.json();
        console.log(data);
    },
};
