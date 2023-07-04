import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {MaterialModule} from "./app.material";
import {SidebarComponent} from './sidebar/sidebar.component';
import {HomeComponent} from './pages/home/home.component';
import {GonButtonComponent} from './gon-button/gon-button.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GonCardComponent} from './gon-card/gon-card.component';
import {ChangelogComponent} from './pages/changelog/changelog.component';
import {ChangeComponent} from './pages/changelog/change/change.component';
import {HeaderComponent} from './pages/changelog/header/header.component';
import {PatchesComponent} from './pages/patches/patches.component';
import {FaqComponent} from './pages/faq/faq.component';
import {GonFooterComponent} from './gon-footer/gon-footer.component';
import {ToTopComponent} from './to-top/to-top.component';
import {ArmoryComponent} from './pages/armory/armory.component';
import {ArmoryService} from "./pages/armory/armory.service";
import {FormsModule} from "@angular/forms";


@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		HomeComponent,
		GonButtonComponent,
		GonCardComponent,
		ChangelogComponent,
		ChangeComponent,
		HeaderComponent,
		PatchesComponent,
		FaqComponent,
		GonFooterComponent,
		ToTopComponent,
		ArmoryComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MaterialModule,
		FormsModule
	],
	providers: [ArmoryService],
	bootstrap: [AppComponent],
})
export class AppModule {
}

export interface Button {
	text: string;
	path: string;
	active: boolean;
}

