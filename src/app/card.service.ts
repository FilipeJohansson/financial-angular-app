import { EventEmitter, Injectable, Output } from '@angular/core';
import { MOCK_DATA } from './mock-cards';
import { Observable, of } from 'rxjs';
import { Data, Card } from './common/model/model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  @Output() cardSelectedEvent = new EventEmitter<Data>();

  constructor() { }

  getCards(): Observable<Data[]> {
    const cards = of(MOCK_DATA);
    return cards;
  }

}
