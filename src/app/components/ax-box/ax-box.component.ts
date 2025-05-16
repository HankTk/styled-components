import { Component, Input, inject } from '@angular/core';
import { NgStyle } from '@angular/common';
import { StylesService, VariantType } from '../../services/styles.service';
import { WIDTH_TOKENS, HEIGHT_TOKENS } from '../../constants/dimensions';

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
  @Input() width: string = WIDTH_TOKENS.MD;
  @Input() height: string = HEIGHT_TOKENS.MD;

  private stylesService = inject(StylesService);

  getStyles()
  {
    return {
      ...this.stylesService.getVariantStyles(this.variant),
      width: this.width,
      height: this.height
    };
  }

}
