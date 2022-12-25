import { Component, Input, OnInit } from '@angular/core';
import { Data, Expense } from '../common/model/model';
import { CardService } from '../card.service';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    @Input() data!: Data;
    totalExpenses: number = 0;

    constructor() {

    }

    ngOnInit(): void {
        this.totalExpenses = Math.round(this.getTotalExpenses() * 100) / 100;
    }

    getTotalExpenses(): number {
        var expenses = 0;
        this.data.expenses.forEach((expense: Expense) => {
            if (expense.installments)
                expenses += expense.value / expense.installments;
            else
                expenses += expense.value;
        });
        return expenses;
    }

}
