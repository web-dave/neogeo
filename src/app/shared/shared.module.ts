import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyNavComponent } from './my-nav/my-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MyNavComponent],
  exports: [MyNavComponent],
  imports: [CommonModule, RouterModule]
})
export class SharedModule {}
