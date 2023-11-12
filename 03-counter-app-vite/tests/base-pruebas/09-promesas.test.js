
import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesa', () => { 
    
    test('getHeroesByIdAsync debe de retornar un heroe', (done) => { 

        const id = 1;
        getHeroeByIdAsync(id)
            .then( hero => {
                expect(hero).toEqual( {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });

                done()
            })

     })

         
    test('getHeroesByIdAsync debe de obtener un error si heroe no existe', (done) => { 

        const id = 100;
        getHeroeByIdAsync(id)
            .catch( error => {
                console.log(error);

                done()
            })

     })


 })