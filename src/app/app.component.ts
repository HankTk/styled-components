import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AxBoxComponent } from './components/ax-box/ax-box.component';
import { AxButtonComponent } from './components/ax-button/ax-button.component';
import { ThemeService } from './services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AxBoxComponent, AxButtonComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'styled-components';

  constructor(private themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  getCurrentTheme(): string {
    return this.themeService.getCurrentTheme();
  }

}
