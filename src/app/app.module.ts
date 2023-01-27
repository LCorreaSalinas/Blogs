import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { FamilyComponent } from './blog/family/family.component';
import { DrinkComponent } from './blog/drink/drink.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    FamilyComponent,
    DrinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
