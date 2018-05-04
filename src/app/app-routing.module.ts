import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ChangelogComponent} from "./pages/changelog/changelog.component";
import {PatchesComponent} from "./pages/patches/patches.component";
import {FaqComponent} from "./pages/faq/faq.component";

const routes: Routes = [
	{path: "home", component: HomeComponent},
	{path: "changelog", component: ChangelogComponent},
    {path: "changelog/:id", component: ChangelogComponent},
	{path: "patches", component: PatchesComponent},
	{path: "faq", component: FaqComponent},
	{path: "", component: HomeComponent},
	{path: "", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
