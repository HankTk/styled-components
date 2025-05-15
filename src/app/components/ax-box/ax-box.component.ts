import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'ax-box',
  templateUrl: './ax-box.component.html',
  styleUrls: ['./ax-box.component.scss'],
  imports: [NgStyle],
  standalone: true
})
export class AxBoxComponent
{

  @Input() backgroundColor: string = 'lightgray';
  @Input() color: string = 'white';
  @Input() padding: string = '1rem';

  getStyles() {
    return {
      'background-color': this.backgroundColor,
      'color': this.color,
      'padding': this.padding
    };
  }

}
