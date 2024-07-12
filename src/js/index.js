import { get, post, put, remove } from './httpClient.js';
import { renderCard } from './renderCard.js';
import { formSubmit } from './formSubmit.js';
const url='http://localhost:3000/productos'

document.addEventListener('DOMContentLoaded',async()=>{
try {
    console.log('iniciando')

    const getData=await get(url)
    
    
    
    renderCard(getData,'.container')

    /* formulario */


const handleNewProduct=async(newProduct)=>{
    try {
        response=await post(url,newProduct)
        console.log(response.data)
        
    } catch (error) {
        console.error('Error al añadir el producto:', error);
    }

}
formSubmit('product-form',handleNewProduct)
    


} catch (error) {
    

console.log(error)

}

})