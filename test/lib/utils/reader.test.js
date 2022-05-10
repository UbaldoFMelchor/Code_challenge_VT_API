const Reader = require('./../../../lib/utils/Reader')

describe("test para carpeta Reader", () => {
    test("1) Probar Reader de datos desde data VisualPartnersTest.json", () =>{
        const students = Reader.readJsonFile('./test/data/VisualPartnersTest.json')
        expect(students).toBe(students)
    })
})