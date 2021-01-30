import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private menuService: MenuService,
  ) { }

  get items$() {
    return this.menuService.itemList;
  }

  handleChangeItem(item: string) {
    this.menuService.handleSelectItem(item);
  }

  ngOnInit(): void {
  }

}
