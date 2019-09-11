import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNavComponent } from './shared/my-nav/my-nav.component';
import { BooksModule } from './features/books/books.module';
import { AboutModule } from './features/about/about.module';

@NgModule({
  declarations: [AppComponent, MyNavComponent],
  imports: [BrowserModule, AppRoutingModule, BooksModule, AboutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
