export class Account {
    accountNumber: number;
    typeId :number;
    balance: number;
    region :string;
}

export class AccountType {
    typeId: number;
    name: string;
    interstRate: number;
    sections :number;
}
