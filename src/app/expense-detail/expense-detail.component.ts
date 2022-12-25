import { Component, Input, OnInit } from '@angular/core';
import { Expense } from '../common/model/model';

@Component({
    selector: 'app-expense-detail',
    templateUrl: './expense-detail.component.html',
    styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {
    @Input() expense!: Expense;

    constructor() { }

    ngOnInit(): void {
        
    }

}
