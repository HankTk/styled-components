import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AxBoxComponent } from './components/ax-box/ax-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AxBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'styled-components';

}
