import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Data } from '../common/model/model';

@Component({
    selector: 'app-cards-list',
    templateUrl: './cards-list.component.html',
    styleUrls: ['./cards-list.component.css']
})

export class CardsComponent implements OnInit {
    datas: Data[] = [];
    selectedData?: Data;
    isCardSelected: boolean = false;

    constructor(private cardService: CardService) { }

    ngOnInit(): void {
        this.getCards();
    }

    getCards(): void {
        this.cardService.getCards().subscribe(datas => this.datas = datas);
    }

    onSelectData(data: Data): void {
        if (this.selectedData == data) {
            this.selectedData = undefined;
            return;
        }

        this.selectedData = data;
        this.cardService.cardSelectedEvent.emit(data);
    }

}
