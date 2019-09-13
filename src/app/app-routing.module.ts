import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadDelayed } from './routing-misc/preload-delayed.class';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    loadChildren: () =>
      import('./features/books/books.module').then(bm => bm.BooksModule),
    data: {
      preload: true,
      delay: 4000
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadDelayed })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
