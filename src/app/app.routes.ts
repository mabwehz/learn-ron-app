import { Routes } from '@angular/router';
import { Home } from './layouts/home/home';

export const routes: Routes = [
    { path: '', component: Home, },

    {
        path: 'about',
        loadComponent: () => import('./layouts/about-ron/about-ron')
            .then(mod => mod.AboutRon)
    },

    {
        path: 'full-word-list',
        loadComponent: () => import('./layouts/full-word-list/full-word-list')
            .then(mod => mod.FullWordList)
    }
];
