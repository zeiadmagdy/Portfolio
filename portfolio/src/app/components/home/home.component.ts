import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from "../about/about.component";
import { ProjectsComponent } from '../projects/projects.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AboutComponent ,ProjectsComponent ,ServicesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/cv/cv.Zeiad-Magdy.pdf'; // Path to your CV in the assets folder
    link.download = 'cv.Zeiad_Magdy.pdf'; // The name for the downloaded file
    link.click(); // Simulate a click to trigger the download
  }
}
