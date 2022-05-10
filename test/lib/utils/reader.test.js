const fs = require('fs');

describe("test para carpeta Reader", () => {
    test("1) Probar Reader de datos desde data VisualPartnersTest.json", () =>{
        class Reader {
            static readJsonFile(path) {
                const rawdata = fs.readFileSync(path);
                return JSON.parse(rawdata);
            }
        
        }

        const reader = Reader.readJsonFile('./test/data/visualPartnersTest.json')
        expect(reader).toBe(reader)
    })
})