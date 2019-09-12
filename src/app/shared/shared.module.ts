import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyNavComponent } from './my-nav/my-nav.component';
import { RouterModule } from '@angular/router';
import { PagePipe } from './pipes/page.pipe';
import { OrderBtnDirective } from './directives/order-btn.directive';

@NgModule({
  declarations: [MyNavComponent, PagePipe, OrderBtnDirective],
  exports: [MyNavComponent, PagePipe, OrderBtnDirective],
  imports: [CommonModule, RouterModule]
})
export class SharedModule {}
