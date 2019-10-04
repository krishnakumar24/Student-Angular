import { ApiFetchService } from './service/api-fetch.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { TestComponent } from './test/test.component';
// import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';
import { PreviewComponent } from './preview/preview.component';
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ShowAllComponent,
    SearchComponent,
    DeleteComponent,
    AddStudentComponent,
    TestComponent,
    PreviewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PdfJsViewerModule
    // NgxDocViewerModule
  ],
  providers: [ApiFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
