export interface Coupon {
    parameterUrl?: string;
    trackingURL?: string;
    logoURL: string;
    market: string;
    offerCoupon: string;
    offerDescription: string;
    offerId: number;
    offerPage: string;
    offerTerms?: string;
    offerType: number;
    programId: number;
    programName: string;
    programUrl: string;
    validFrom: string;
    validTo: string;
    lastUpdated: string;
    createdDate: string;
}