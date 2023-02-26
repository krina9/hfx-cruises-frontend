import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CruiseCareersComponent } from './cruise-careers/cruise-careers.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { JobDetailsService } from './job-details.service';
import { FooterComponent } from './footer/footer.component';
import { JobFormComponent } from './job-form/job-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HomepageComponent } from './homepage/homepage.component';
import { CrusieListComponent } from './crusie-list/crusie-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule,NativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule} from '@angular/material/grid-list';
import { DetailsComponent } from './details/details.component';
import {LayoutModule} from '@angular/cdk/layout';









@NgModule({
  declarations: [
    AppComponent,
    CruiseCareersComponent,
    JobDetailsComponent,
    FooterComponent,
    JobFormComponent,
    HomepageComponent,
    CrusieListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatAutocompleteModule,
    FormsModule,
    MatGridListModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatPaginatorModule,
    MatDialogModule,
    NativeDateModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule  ],
  providers: [JobDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
