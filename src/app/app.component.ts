import {Component, Inject} from '@angular/core';
import {SidebarItem} from '../UI/bulma/bulma.object';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'diengv-work';

  sidebarItems: Array<SidebarItem> = [
    {
      text: 'Tổng quan',
      toggle: false,
      url: 'top',
    },
  ]

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.loadStyle('dark')
  }

  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];

    let themeLink = this.document.getElementById(
      'client-theme',
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = styleName;
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `bulma-${styleName}.css`;

      head.appendChild(style);
    }
  }
}
