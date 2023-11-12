import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"


describe('prueba en 08-imp-exp', () => { 
    
    test('getHeroeById debe de retornar un heroe ', () => { 

        const id = 1
        const hero = getHeroeById(id)
        console.log(hero);

        expect(hero).toEqual( { id: 1, name: 'Batman', owner: 'DC' })
     })

     test('Debe de retornar un arreglo con los heroes de DC', () => { 

        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)

        console.log(heroes);

        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])

        

      })
 })