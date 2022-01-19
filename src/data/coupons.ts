import { Coupon } from "./models/coupon.model";


export const coupons: Coupon[] = [
    {
        code: "valentines2022",
        description: "14% rabatt på alla hjärtans dag presenter.",
        startDate: "2022-01-17",
        endDate: "2022-02-15",
        link: "https://click.adrecord.com?c=50447&p=1107",
        logo: "https://www.adrecord.com/img/logos/1107.gif",
        title: "14% rabatt"
    },
    {
        code: "0122",
        title: "10% rabatt",
        description: "10% rabatt på hela sortimentet när du beställer valfria varor för minst 199 kr",
        startDate: "2022-01-12",
        endDate: "2022-02-28",
        link: "https://click.adrecord.com?c=50447&p=954",
        logo: "https://www.adrecord.com/img/logos/954.gif",
    },
    {
        code: "himmelriketx",
        title: "10% rabatt",
        description: "10% rabatt på hela sortimentet",
        startDate: "2021-11-04",
        endDate: "2022-05-31",
        link: "https://click.adrecord.com?c=50447&p=467",
        logo: "https://www.adrecord.com/img/logos/467.gif?1434614070",
    },
    {
        code: "nätrullare",
        title: "12% rabatt",
        description: "12% rabatt på hela sortimentet (gäller ej redan nedsatta produkter)",
        startDate: "2021-12-16",
        endDate: "2022-12-31",
        link: "https://click.adrecord.com?c=50447&p=1129",
        logo: "https://www.adrecord.com/img/logos/1129.gif",
    },
]