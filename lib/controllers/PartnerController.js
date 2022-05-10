const PartnerServices = require('./../services/PartnerServices')
const Reader = require('./../utils/Reader')

class PartnerController {
    static getPartnersWithCertification(haveCertification) {
        const partners = Reader.readJsonFile("./data/visualpartners.json");
        return PartnerServices.filterByCertification(partners, haveCertification);
    }
}

module.exports = PartnerController;