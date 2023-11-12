import { getImagen } from "../../src/base-pruebas/11-async-await"


describe('Pruebas en 11_Async-await', () => { 
    
    test('getImagen debe de retornar un URL de la imagen', () => { 
        
        const url = await getImagen()
        
        expect( typeof url).toBe('string')
     })


 })