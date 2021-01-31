import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../services/menu.service';
import {UsersService} from '../../api/users.service';
import {SubscriberComponent} from '../subscriber/subscriber.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent extends SubscriberComponent implements OnInit {
  public userList: string[] = [];

  constructor(
    private menuService: MenuService,
    private usersApi: UsersService,
  ) {
    super();
  }

  get selectedItem$() {
    return this.menuService.selectedItem;
  }

  ngOnInit(): void {
    this.addSubscribe(
      this.usersApi.request().subscribe(userList => {
        this.userList = userList.map(user => user.email);
      })
    );
  }

}
