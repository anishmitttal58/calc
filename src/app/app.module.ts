import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogViewComponent } from './blog-view/blog-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    BlogCreateComponent,
    BlogEditComponent,
    BlogViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'create',component:BlogCreateComponent},
      {path:'view/:blogId',component:HomeComponent},
      {path:'edit/:blogId',component:HomeComponent},
      {path:'**',component:NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
