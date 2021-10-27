import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { StructuralComponent } from './components/structural/structural.component';
import { AttributeComponent } from './components/attribute/attribute.component';
import { ChildComponent } from './components/child/child.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { FormatDataPipe } from './pipes/format-data.pipe';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { FilterPipe } from './pipes/filter.pipe';
import { LifecycleHookComponent } from './components/lifecycle-hook/lifecycle-hook.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
// Service
import { LoggingService } from './services/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    StructuralComponent,
    AttributeComponent,
    ChildComponent,
    UserListComponent,
    PipeComponent,
    FormatDataPipe,
    CustomPipeComponent,
    FilterPipe,
    LifecycleHookComponent,
    FirstComponent,
    SecondComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [LoggingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
