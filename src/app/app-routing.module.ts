import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { DrinkComponent } from './blog/drink/drink.component';
import { FamilyComponent } from './blog/family/family.component';

const routes: Routes = [
{path: "family", component: FamilyComponent},
{path: "drink", component: DrinkComponent},
{path: "blog", component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
