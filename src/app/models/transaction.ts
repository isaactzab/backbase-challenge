export class Transaction {
    constructor(
        public categoryCode: string,
        public valueDate: number,
        public amount: number,
        public currencyCode: string,
        public type: string,
        public creditDebitIndicator: string,
        public name: string,
        public accountNumber: string,
    ){ }
}

// export interface Transaction {
//     categoryCode: string;
//       dates: {
//         valueDate: number
//       };
//       transaction: {
//         amountCurrency: {
//           amount: number,
//           currencyCode: string
//         },
//         type: string,
//         creditDebitIndicator: string
//       };
//       merchant: {
//         name: string,
//         accountNumber: string
//       };
// }
