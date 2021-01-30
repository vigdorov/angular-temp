import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../services/menu.service';
import {UsersService} from '../../api/users.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public userList: string[] = [];

  constructor(
    private menuService: MenuService,
    private usersApi: UsersService,
  ) {
  }

  get selectedItem$() {
    return this.menuService.selectedItem;
  }

  ngOnInit(): void {
    this.usersApi.request().subscribe(userList => {
        this.userList = userList.map(user => user.email);
    });
  }

}
