import { Component, Input, OnInit } from '@angular/core';
import { Expense } from '../common/model/model';

@Component({
    selector: 'app-expense',
    templateUrl: './expense.component.html',
    styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
    @Input() expense!: Expense;
    isExpenseSelected: boolean = false;
    valueThisMonth: number = 0;
    currentInstallment: number = 0;

    constructor() { }

    ngOnInit(): void {
        this.valueThisMonth = this.getExpenseValue(this.expense);
        this.currentInstallment = this.monthDiff(this.expense?.date, new Date);
    }

    getExpenseValue(expense: Expense): number {
        return this.expense?.installments ? Math.round((this.expense.value / this.expense.installments) * 100) / 100 : expense.value;
    }

    onSelectExpense(): void {
        this.isExpenseSelected = !this.isExpenseSelected;
    }

    monthDiff(dateFrom: Date, dateTo: Date): number {
        return (dateTo.getMonth() - dateFrom.getMonth() +
            (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))) + 2;
    }

}
