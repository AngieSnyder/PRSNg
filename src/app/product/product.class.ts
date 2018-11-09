import {Vendor} from '../vendor/vendor.class';
import { CurrencyIndex } from '@angular/common/src/i18n/locale_data';

export class Product {
    id: number;
    vendor: Vendor;
    partNumber: string;
    name: string;
    price: number;
    unit: string;
    photoPath: string;

    constructor() {
        this.id = 0;
        this.price = 0;
    }
}
