import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserServiceLibraryService } from 'kavya-myuser-service-library';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'account-management';
  constructor(private service: UserServiceLibraryService){}

  isLoggedIn?: boolean;

  ngOnInit() {
    this.service.loggedIn$.subscribe(res => {
      this.isLoggedIn = res;
      console.log("from account-mgmt",this.service.isLoggedIn, res)
    })
  }
}
