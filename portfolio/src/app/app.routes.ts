import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

export const routes: Routes = [
    {path : 'home', component: HomeComponent},
    {path : 'header', component: HeaderComponent},
    {path:'footer' , component: FooterComponent},
];
