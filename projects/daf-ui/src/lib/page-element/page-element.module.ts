import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatTabsModule, MatProgressSpinnerModule, MatFormFieldModule, MatListModule, MatSlideToggleModule, MatSelectModule, MatInputModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FathymSharedModule } from '@lcu/hosting';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { PageElementComponent } from './page-element.component';
import { PageSettingsDialog } from './page-settings/page-settings.dialog';
import { PageElementSettingsDialog } from './page-element-settings/page-element-settings.dialog';
import { PageElementHeadingComponent } from './page-element-heading/page-element-heading.component';
import { DisplayComponentModule } from '../display-component/display-component.module';

var comps = [
	PageElementComponent,
	PageSettingsDialog,
	PageElementSettingsDialog,
	PageElementHeadingComponent,
];

@NgModule({
	imports: [
		FathymSharedModule,
		DisplayComponentModule,
		MonacoEditorModule,
		FlexLayoutModule,
		MatButtonModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatMenuModule,
		MatProgressSpinnerModule,
		MatSelectModule,
		MatSlideToggleModule,
		MatTabsModule,
		MatToolbarModule,
	],
	declarations: [
		...comps,
	],
	exports: [
		...comps,
	],
	entryComponents: [
		...comps,
	]
})
export class PageElementModule { }