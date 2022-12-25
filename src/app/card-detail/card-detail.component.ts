import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../common/model/model';
import { CardService } from '../card.service';

@Component({
    selector: 'app-card-detail',
    templateUrl: './card-detail.component.html',
    styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
    @Input() data?: Data;
    totalExpenses: number = 0;

    constructor(private cardService: CardService) {

    }

    ngOnInit(): void {
        this.cardService.cardSelectedEvent.subscribe((data: Data) => {
            this.totalExpenses = Math.round(this.calculateTotalExpenses(data) * 100) / 100;
        });
    }

    calculateTotalExpenses(data: Data): number {
        var expenses = 0;
        data.expenses.forEach(expense => {
            if (expense.installments)
                expenses += expense.value / expense.installments;
            else
                expenses += expense.value;
        });
        return expenses;
    }

}
