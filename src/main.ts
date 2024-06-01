import 'zone.js';

import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, provideRouter } from '@angular/router';

import { TokenViewerComponent } from './components/token-viewer/token-viewer.component';
import { TokenJSONViewerComponent } from './components/token-json-viewer/token-json-viewer.component';

const routes: any = [
  { path: '', component: TokenViewerComponent },
  { path: 'json-view', component: TokenJSONViewerComponent }
];

@Component({
  selector: 'app-root',
  template: `
  <nav>
    <a routerLink="/">Token Studio</a>
    <a routerLink="/json-view">Json Viewer</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterModule]
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));