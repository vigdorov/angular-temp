import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './components/menu/menu.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {MenuService} from './services/menu.service';
import {UsersService} from './api/users.service';
import {HttpClientModule} from '@angular/common/http';
import {SubscriberComponent} from './components/subscriber/subscriber.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserFormComponent} from './components/user-form/user-form.component';
import { CitiesSelectComponent } from './components/cities-select/cities-select.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainPageComponent,
    SubscriberComponent,
    UserFormComponent,
    CitiesSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [MenuService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
