import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../appareil/service/appareil.service';
import { AuthService } from '../appareil/service/auth.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'Appareil';
  status: string = 'Eteint';

  constructor(private appareilService: AppareilService, private authService: AuthService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+id)?.name as string;
    this.status = this.appareilService.getAppareilById(+id)?.status as string;
  }

}
