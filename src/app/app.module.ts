import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ExtractTemplateComponent } from './components/extract-template/extract-template.component';
import { TrainModelComponent } from './components/train-model/train-model.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        ExtractTemplateComponent,
        TrainModelComponent,
        MainComponent,
        NotFoundComponent,
        FileUploadComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [provideHttpClient()],
    bootstrap: [AppComponent]
})
export class AppModule { }
