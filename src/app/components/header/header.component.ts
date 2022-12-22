import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showMenu = false;

  constructor(public nav: NavigationService) { }

  ngOnInit(): void {
  }

  showMediaMenu() {
    this.showMenu = !this.showMenu;
  }
}
