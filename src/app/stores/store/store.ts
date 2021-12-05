type PriceLevel = 1|2|3|4|5;

enum StoreCategory {
    CLOTHING
}

export interface Store {
    trackingURL?: string;
    logoURL: string;
    programId: number;
    description: string;
    programName: string;
    
    priceLevel?: PriceLevel;
    freeShippingAndReturns?: string;
    storeCategory?: StoreCategory;
}