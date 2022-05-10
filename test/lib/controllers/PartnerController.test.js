const PartnerController = require('./../../../lib/controllers/PartnerController')

describe("Test para PartnerController", () => {
    test("1) obten lista de Partners con certificación", () => {
        const Partners = PartnerController.getPartnersWithCertification();
        expect(Partners.length).toBe(29);

    })

    test("2) obten lista de Partners con creditos mayores a 500", () => {
        const Partners = PartnerController.getPartnersUpto500Credits();
        expect(Partners.length).toBe(27);
    })
})

