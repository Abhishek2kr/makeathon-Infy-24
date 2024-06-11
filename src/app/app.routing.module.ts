import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { TrainModelComponent } from './components/train-model/train-model.component';
import { ExtractTemplateComponent } from './components/extract-template/extract-template.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    {
        path: 'main', component: MainComponent, children: [
            { path: 'train-model', component: TrainModelComponent },
            { path: 'extract-template', component: ExtractTemplateComponent },
        ]
    },
    { path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
