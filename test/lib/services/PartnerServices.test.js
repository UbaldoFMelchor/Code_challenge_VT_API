const PartnerService = require('./../../../lib/services/PartnerServices')
const Reader = require('./../../../lib/utils/Reader')

describe("Test para PartnerServices", () => {
    test("Filtrar todos los estudiantes que tenga certificación", () => {
        const Partners = Reader.readJsonFile("./VisualPartnersTest.json");
        const PartnerFilterByCertification = PartnerService.filterByCertification(Partners);
        expect(PartnerFilterByCertification.length).toBe(4);

    })
})