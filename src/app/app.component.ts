import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AxBoxComponent } from './components/ax-box/ax-box.component';
import { WIDTH_TOKENS, HEIGHT_TOKENS } from './constants/dimensions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AxBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'styled-components';
  protected readonly WIDTH_TOKENS = WIDTH_TOKENS;
  protected readonly HEIGHT_TOKENS = HEIGHT_TOKENS;
}
