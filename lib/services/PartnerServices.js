class PartnerService {
    static filterByCertification(Partners) {
        const partnersByCertification = Partners.filter((partner) => partner.haveCertification === true);
        const partnersEmail = partnersByCertification.map((partner) => partner.email);
        return partnersEmail;
    }

    static filterByCredits(Partners) {
        const PartnerWithCreditsUp500 = Partners.filter((partner) => partner.credits > 500);
        const partnersListUp500Credits = PartnerWithCreditsUp500;
        return partnersListUp500Credits;
    }
}

module.exports = PartnerService;