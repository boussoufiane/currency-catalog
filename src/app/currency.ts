export class Currency {
    id: number;
    attributes : CurrencyAttribute[] = [];
}

export class CurrencyAttribute {
    code : string ;
    name : string ;
}