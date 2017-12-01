export interface FixerCurrencyModel {
    base: string;
    date: string;
    rates: Set<string>;
}
