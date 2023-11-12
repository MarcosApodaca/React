import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Prueba en Firsapp', () => { 
    
    test('Debe de hacer ,match con el snapshot ', () => { 

        const tittle = 'Hola , soy goku'
        render( <FirstApp title={tittle}/> )

     })

 })