import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private _itemList = new BehaviorSubject<string[]>(['home', 'settings', 'info']);
  private _selectedItem = new BehaviorSubject<string>('');

  constructor() {
  }

  get itemList() {
    return this._itemList;
  }

  get selectedItem() {
    return this._selectedItem;
  }

  handleSelectItem(item: string) {
    this.selectedItem.next(item);
  }
}
