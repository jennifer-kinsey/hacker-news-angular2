import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewStoryComponent } from './new-story/new-story.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'new-story',
    component: NewStoryComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
