import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaSidebarComponent } from './components/bulma-sidebar/bulma-sidebar.component';



@NgModule({
  declarations: [
    BulmaSidebarComponent,
  ],
  exports: [
    BulmaSidebarComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class BulmaModule { }
