const PartnerServices = require("./../services/PartnerServices");
const Reader = require("./../utils/Reader");

class PartnerController {

    static getPartnersList() {
        const partners = Reader.readJsonFile("./data/visualpartners.json");
        return partners;
    }

    static getPartnersWithCertification(haveCertification) {
        const partners = Reader.readJsonFile("./data/visualpartners.json");
        return PartnerServices.filterByCertification(partners, haveCertification);
    }

    static getPartnersUpto500Credits(credits) {
        const partners = Reader.readJsonFile("./data/visualpartners.json");
        return PartnerServices.filterByCredits(partners, credits);
    }

}

module.exports = PartnerController;