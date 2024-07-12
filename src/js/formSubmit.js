
export const formSubmit = (formId,cb) => {
    const formElement = document.getElementById(formId);

    formElement.addEventListener('submit', (e) => {
        e.preventDefault();

        // Generar un UUID único
        const newUUID = Date.now();

        // Capturar los valores del formulario
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const img = document.getElementById('img').value;

        // Crear el objeto newProduct con los datos del formulario y el UUID generado
        const newProduct = {
            id: newUUID,
            name,
            price,
            img
        };

        // Devolver el objeto newProduct
        //console.log('Nuevo producto:', newProduct);
        cb(newProduct);
    });

}