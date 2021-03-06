export interface Transaction {
    categoryCode: string;
    valueDate: string;
    amount: number;
    currencyCode: string;
    transactionType: string;
    creditDebitIndicator: string;
    merchantName1: string;
    accountNumber: string;
}
