const Reader = require("./../../../lib/utils/Reader");

describe("test para carpeta Reader", () => {
    test("1) Probar Reader de datos desde data VisualPartnersTest.json", () =>{
       
        const reader = Reader.readJsonFile("./visualPartnersTest.json");
        expect(reader).toBe(reader);
    });
});