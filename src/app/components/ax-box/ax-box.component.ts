import { Component, Input, inject } from '@angular/core';
import { NgStyle, CommonModule } from '@angular/common';
import { StylesService, VariantType } from '../../services/styles.service';
import { WIDTHS, HEIGHTS, Width, Height } from '../../constants/dimensions';
import { SPACING_TOKENS } from '../../constants/spacing';
import { TYPOGRAPHY_TOKENS } from '../../constants/typography';

@Component({
  selector: 'ax-box',
  templateUrl: './ax-box.component.html',
  styleUrls: ['./ax-box.component.scss'],
  imports: [CommonModule, NgStyle],
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
    const baseStyles = this.stylesService.getVariantStyles(this.variant);
    const sizeStyles = this.stylesService.getSizeStyles(this.width, this.height);
    return {
      ...baseStyles,
      ...sizeStyles
    };
  }

  onClick(event: MouseEvent): void {
    console.log('Button clicked!');
  }

}
