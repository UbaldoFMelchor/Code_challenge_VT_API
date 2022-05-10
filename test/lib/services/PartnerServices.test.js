const PartnerService = require("./../../../lib/services/PartnerServices");
const Reader = require("./../../../lib/utils/Reader");

describe("Test para PartnerServices", () => {
    test("1) Filtrar todos los estudiantes que tenga certificación", () => {
        const Partners = Reader.readJsonFile("./VisualPartnersTest.json");
        const PartnerFilterByCertification = PartnerService.filterByCertification(Partners);
        expect(PartnerFilterByCertification.length).toBe(4);

    });

    test("2) Filtrar todos los estudiantes que tengan creditos mayores a 500", () => {
        const Partners = Reader.readJsonFile("./VisualPartnersTest.json");
        const PartnerWithCreditsUp500 = PartnerService.filterByCredits(Partners);
        expect(PartnerWithCreditsUp500.length).toBe(3);
    });
});