import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { LayoutModule } from '../layout/layout.module';
import { AsideComponent } from './components/aside/aside.component';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BlogComponent,
    HomeComponent,
    DetailsComponent,
    AsideComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    LayoutModule,
    RouterModule,
  ]
})
export class BlogModule { }
