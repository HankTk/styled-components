import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { TOKENS } from '../../constants/colors';

@Component({
  selector: 'ax-box',
  templateUrl: './ax-box.component.html',
  styleUrls: ['./ax-box.component.scss'],
  imports: [NgStyle],
  standalone: true
})
export class AxBoxComponent
{

  @Input() backgroundColor: string = TOKENS.color.background.PRIMARY;
  @Input() color: string = TOKENS.color.text.PRIMARY;
  @Input() padding: string = TOKENS.spacing.MD;
  @Input() fontSize: string = TOKENS.typography.size.BASE;
  @Input() fontWeight: string = TOKENS.typography.weight.NORMAL;
  @Input() borderRadius: string = TOKENS.radius.MD;
  @Input() lineHeight: string = TOKENS.typography.lineHeight.NORMAL;

  getStyles() {
    return {
      'background-color': this.backgroundColor,
      'color': this.color,
      'padding': this.padding,
      'font-size': this.fontSize,
      'font-weight': this.fontWeight,
      'border-radius': this.borderRadius,
      'line-height': this.lineHeight
    };
  }

}
