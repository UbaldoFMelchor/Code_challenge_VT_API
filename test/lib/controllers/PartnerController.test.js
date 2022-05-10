const PartnerController = require('./../../../lib/controllers/PartnerController')

describe("Test para PartnerController", () => {
    test("1) obten lista de Partners con certificación", () => {
        const Partners = PartnerController.getPartnersWithCertification();
        expect(Partners.length).toBe(29);

    })
})

