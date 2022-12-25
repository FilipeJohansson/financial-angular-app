export interface Data {
    id: number;
    name: string;
    color: string;
    expenses: Array<Expense>;
    card?: Card;
}

export interface Card {
    number: number;
    maxCredit: number;
}

export interface Expense {
    id: number;
    date: Date;
    name: string;
    value: number;
    installments?: number;
    label?: Label;
}

export interface Label {
    id: number;
    name: string;
}