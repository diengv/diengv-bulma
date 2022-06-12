import {Component, OnInit} from '@angular/core';
import BulmaSidebarAnimate from './bulma-sidebar.animate';

@Component({
  selector: 'app-bulma-sidebar',
  templateUrl: './bulma-sidebar.component.html',
  styleUrls: ['./bulma-sidebar.component.scss'],
  animations: BulmaSidebarAnimate,
})
export class BulmaSidebarComponent implements OnInit {
  isOpen = true

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen
  }
}
