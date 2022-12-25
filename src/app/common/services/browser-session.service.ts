import { Injectable } from "@angular/core";
import { SessionStorageService } from "angular-web-storage";

@Injectable({
    providedIn: 'root'
})
export class BrowserSessionService {

    private CURRENT_MONTH_VIEW: string = 'currentMonthView';

    constructor(private sessionStorageService: SessionStorageService) { }

    setCurrentMonthView(date: Date) {
        this.sessionStorageService.set(this.CURRENT_MONTH_VIEW, date);
    }

    getCurrentMonthView(): Date {
        return this.sessionStorageService.get(this.CURRENT_MONTH_VIEW);
    }

}