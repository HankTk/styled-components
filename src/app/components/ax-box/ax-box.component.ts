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
  imports: [CommonModule],
  standalone: true
})
export class AxBoxComponent
{

  @Input() variant: VariantType = 'primary';
  @Input() width: Width = 'md';
  @Input() height: Height = 'md';

  private stylesService = inject(StylesService);

  // Mapping for font size and padding based on box size
  private sizeMap = {
    xs:  { fontSize: TYPOGRAPHY_TOKENS.size.XS,    padding: SPACING_TOKENS.XS },
    sm:  { fontSize: TYPOGRAPHY_TOKENS.size.SM,    padding: SPACING_TOKENS.SM },
    md:  { fontSize: TYPOGRAPHY_TOKENS.size.BASE,  padding: SPACING_TOKENS.MD },
    lg:  { fontSize: TYPOGRAPHY_TOKENS.size.LG,    padding: SPACING_TOKENS.LG },
    xl:  { fontSize: TYPOGRAPHY_TOKENS.size.XL,    padding: SPACING_TOKENS.XL },
    xxl: { fontSize: TYPOGRAPHY_TOKENS.size.XXL,   padding: SPACING_TOKENS.XXL },
    xxxl:{ fontSize: TYPOGRAPHY_TOKENS.size.XXXL,  padding: SPACING_TOKENS.XXXL },
    full:{ fontSize: TYPOGRAPHY_TOKENS.size.XXXXL, padding: SPACING_TOKENS.XXXL },
  };

  private getLargerSize(): keyof typeof this.sizeMap {
    const order = ['xs','sm','md','lg','xl','xxl','xxxl','full'];
    const widthIdx = order.indexOf(this.width);
    const heightIdx = order.indexOf(this.height);
    return widthIdx > heightIdx ? this.width : this.height;
  }

  getStyles()
  {
    const baseStyles = this.stylesService.getVariantStyles(this.variant);
    const sizeKey = this.getLargerSize();
    const { fontSize, padding } = this.sizeMap[sizeKey];
    return {
      ...baseStyles,
      width: WIDTHS[this.width.toUpperCase() as keyof typeof WIDTHS],
      height: HEIGHTS[this.height.toUpperCase() as keyof typeof HEIGHTS],
      'font-size': fontSize,
      'padding': padding
    };
  }

  onClick(event: MouseEvent): void {
    console.log('Button clicked!');
  }

}
