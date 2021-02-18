import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-not-found',
    template: `<p-messages severity="error">
        <ng-template pTemplate>
            <span class="custom-message">Page not found</span>
        </ng-template>
    </p-messages>`
})
export class PageNotFoundComponent {
    constructor() { }
}
