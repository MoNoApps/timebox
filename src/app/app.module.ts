import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonBoxComponent } from './person-box/person-box.component';
import { TimeWeekComponent } from './time-week/time-week.component';
import { TimeMonthComponent } from './time-month/time-month.component';
import { TimeYearComponent } from './time-year/time-year.component';
import { TimeFrameComponent } from './time-frame/time-frame.component';
import { BarTopComponent } from './bar-top/bar-top.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { RangeRowComponent } from './range-row/range-row.component';
import { CollectorWeekComponent } from './collector-week/collector-week.component';
import { CollectorYearComponent } from './collector-year/collector-year.component';
import { CollectorMonthComponent } from './collector-month/collector-month.component';
import { PeriodBoxComponent } from './period-box/period-box.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonBoxComponent,
    TimeWeekComponent,
    TimeMonthComponent,
    TimeYearComponent,
    TimeFrameComponent,
    BarTopComponent,
    SearchBoxComponent,
    RangeRowComponent,
    CollectorWeekComponent,
    CollectorYearComponent,
    CollectorMonthComponent,
    PeriodBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
