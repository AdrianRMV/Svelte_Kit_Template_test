export const actions = {
    register: async ({ request }) => {

        // Optiene los datos del formulario
        const formData = await request.formData();

        // Convierte el arreglo de objetos a un solo objeto con las propiedades mandadas en el formulario
        // const dataUser = Object.fromEntries([...formData]);

        const name = formData.get('name');
        const lastname = formData.get('lastname');
        const email = formData.get('email');
        const phone_number = formData.get('phone_number');
        const password = formData.get('password');
        const profile_photo_file = formData.get('cover');

        const dataForm = new FormData();

        dataForm.append('name', name);
        dataForm.append('lastname', lastname);
        dataForm.append('email', email);
        dataForm.append('phone_number', phone_number);
        dataForm.append('password', password);
        dataForm.append('profile_photo_file', profile_photo_file);

        const res = await fetch('http://localhost:5173/api/user/register',{
            method: 'POST',
            body: dataForm
        });
        const data = await res.json();
        console.log(data);
    },
};
