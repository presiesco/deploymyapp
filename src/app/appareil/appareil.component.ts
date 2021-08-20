import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from './service/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName!: string;
  @Input() appareilStatus!: string;
  @Input() index!: number;
  @Input() id!: number;
  constructor(private appareilSerice: AppareilService) { }

  ngOnInit(): void {
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
      this.appareilSerice.switchOffOne(this.index);
    } else if (this.appareilStatus === 'eteint') {
      this.appareilSerice.switchOnOne(this.index);
    }
  }
}

