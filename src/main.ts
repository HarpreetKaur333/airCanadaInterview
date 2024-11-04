import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Route } from '@angular/router';
import { SimpleComponentComponent } from './app/simple-component/simple-component.component';
import { MyComponentComponent } from './app/my-component/my-component.component';
import { UserComponent} from './app/user-component/user-component.component';
import { ProfileComponent } from './app/profile/profile.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { SettingsComponent } from './app/settings/settings.component';
import { QuestionsComponent } from './app/questions/questions.component';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http'; // Import provideHttpClient
import { ChildComponent } from './app/child/child.component';
import { ParentComponent } from './app/parent/parent.component';
import { PipeComponent } from './app/pipe/pipe.component';

const routes: Route[] = [
  { path: 'mycomponent', component: MyComponentComponent }, // Route for /my-component
  { path: 'simplecomponent', component: SimpleComponentComponent }, // Route for /simple-component
  { path: '', redirectTo: 'mycomponent', pathMatch: 'full' }, // Default route

  { path: 'user/:id', component: UserComponent } ,// passing parameters

  //Child Routes (Nested Routes) +  //  Route Guards
  {
    path: 'dashboard',
    component: DashboardComponent,/// usigng for binding concepts
    children: [
      { path: 'profile', component: ProfileComponent , canActivate: [true]}, //ste value
      { path: 'settings', component: SettingsComponent }
    ]
  },

  { path: 'questions', component: QuestionsComponent } ,//
  { path: 'parent', component: ParentComponent },//communcation
  { path: 'child', component: ChildComponent }, // Define path for 'child'


  { path: 'pipe', component: PipeComponent }, // Define path for 'child'
  //lazy loadin gin angular
 // { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
  //  Route Guards
];

// Bootstrap the application with routing
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()] // Provide HttpClientModule here
}).catch(err => console.error(err));




//provideHttpClient(): In standalone applications, this function enables HttpClient without needing HttpClientModule in a traditional NgModule setup.
//Adding provideHttpClient() to the providers array makes HttpClient available throughout the application.
