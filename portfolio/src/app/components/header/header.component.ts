import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {
    if (this.isBrowser()) {
      const savedTheme = localStorage.getItem('darkMode');
      if (savedTheme === 'enabled') {
        document.body.classList.add('dark');
      }
    }
  }

  toggleDarkMode() {
    if (this.isBrowser()) {
      const darkModeEnabled = document.body.classList.toggle('dark');
      localStorage.setItem(
        'darkMode',
        darkModeEnabled ? 'enabled' : 'disabled'
      );
    }
  }

  // Function to check if the code is running in the browser
  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
