class PartnerService {
    static filterByCertification(Partners) {
        const partnersByCertification = Partners.filter((partner) => partner.haveCertification === true);
        const partnersEmail = partnersByCertification.map((partner) => partner.email);
        return partnersEmail;
    }
}

module.exports = PartnerService;