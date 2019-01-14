    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { FormsModule } from '@angular/forms';
    import { HttpModule } from '@angular/http';

    import { AppComponent } from './app.component';
    import { ActionsComponent } from './actions/actions.component';
    import { RouterModule, Routes } from '@angular/router';
    import { DataComponent } from './data/data.component';
    import {UsersService} from './users.service';


    const appRoutes: Routes = [
      { path: '', redirectTo: '/actions', pathMatch: 'full' },
      { path: 'actions', component: ActionsComponent },
      { path: 'data', component: DataComponent, },
    ];

    @NgModule({
      declarations: [
        AppComponent,
        ActionsComponent,
        DataComponent
      ],

      imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        HttpModule
      ],
      providers: [UsersService],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
