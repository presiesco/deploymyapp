import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../appareil/service/appareil.service';


@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;
  @Input() appareilName!: string;
  @Input() appareilStatus!: string;
  @Input() index!: number;
  @Input() id!: number;


  appareils!: any[];

  lastUpdate = new Date();

  constructor(private appareilService: AppareilService) {
  }

  ngOnInit(): void {
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    }
    return null;
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else (this.appareilStatus === 'eteint')
    {
      return 'red';
    }
    return "";
  }

  onSwitch() {
    if (this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if (this.appareilStatus === 'eteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }

}
