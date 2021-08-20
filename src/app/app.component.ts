import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppareilService } from './appareil/service/appareil.service';
import { AuthService } from './appareil/service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  authStatus!: boolean;

  constructor(private appareilSerice: AppareilService, private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }


}


