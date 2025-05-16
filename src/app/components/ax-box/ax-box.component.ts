import { Component, Input, inject } from '@angular/core';
import { NgStyle } from '@angular/common';
import { StylesService, VariantType } from '../../services/styles.service';
import { WIDTHS, HEIGHTS, Width, Height } from '../../constants/dimensions';

@Component({
  selector: 'ax-box',
  templateUrl: './ax-box.component.html',
  styleUrls: ['./ax-box.component.scss'],
  imports: [NgStyle],
  standalone: true
})
export class AxBoxComponent
{

  @Input() variant: VariantType = 'primary';
  @Input() width: Width = 'md';
  @Input() height: Height = 'md';

  private stylesService = inject(StylesService);

  getStyles()
  {
    return {
      ...this.stylesService.getVariantStyles(this.variant),
      width: WIDTHS[this.width],
      height: HEIGHTS[this.height]
    };
  }

}
