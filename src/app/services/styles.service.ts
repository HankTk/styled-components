import { Injectable } from '@angular/core';
import { COLOR_TOKENS, SPACING_TOKENS, TYPOGRAPHY_TOKENS, RADIUS_TOKENS } from '../constants';

export type VariantType = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'information';

@Injectable({
  providedIn: 'root'
})
export class StylesService
{

  private variantStyles = {
    primary: {
      'background-color': COLOR_TOKENS.background.PRIMARY,
      'color': COLOR_TOKENS.text.PRIMARY,
      'padding': SPACING_TOKENS.LG,
      'font-size': TYPOGRAPHY_TOKENS.size.LG,
      'font-weight': TYPOGRAPHY_TOKENS.weight.SEMIBOLD,
      'border-radius': RADIUS_TOKENS.LG,
      'line-height': TYPOGRAPHY_TOKENS.lineHeight.NORMAL
    },
    secondary: {
      'background-color': COLOR_TOKENS.background.SECONDARY,
      'color': COLOR_TOKENS.text.SECONDARY,
      'padding': SPACING_TOKENS.MD,
      'font-size': TYPOGRAPHY_TOKENS.size.BASE,
      'font-weight': TYPOGRAPHY_TOKENS.weight.NORMAL,
      'border-radius': RADIUS_TOKENS.MD,
      'line-height': TYPOGRAPHY_TOKENS.lineHeight.NORMAL
    },
    success: {
      'background-color': COLOR_TOKENS.background.SUCCESS,
      'color': COLOR_TOKENS.text.SUCCESS,
      'padding': SPACING_TOKENS.MD,
      'font-size': TYPOGRAPHY_TOKENS.size.BASE,
      'font-weight': TYPOGRAPHY_TOKENS.weight.MEDIUM,
      'border-radius': RADIUS_TOKENS.MD,
      'line-height': TYPOGRAPHY_TOKENS.lineHeight.NORMAL
    },
    warning: {
      'background-color': COLOR_TOKENS.background.WARNING,
      'color': COLOR_TOKENS.text.WARNING,
      'padding': SPACING_TOKENS.MD,
      'font-size': TYPOGRAPHY_TOKENS.size.BASE,
      'font-weight': TYPOGRAPHY_TOKENS.weight.MEDIUM,
      'border-radius': RADIUS_TOKENS.MD,
      'line-height': TYPOGRAPHY_TOKENS.lineHeight.NORMAL
    },
    danger: {
      'background-color': COLOR_TOKENS.background.DANGER,
      'color': COLOR_TOKENS.text.DANGER,
      'padding': SPACING_TOKENS.MD,
      'font-size': TYPOGRAPHY_TOKENS.size.BASE,
      'font-weight': TYPOGRAPHY_TOKENS.weight.MEDIUM,
      'border-radius': RADIUS_TOKENS.MD,
      'line-height': TYPOGRAPHY_TOKENS.lineHeight.NORMAL
    },
    information: {
      'background-color': COLOR_TOKENS.background.INFOMATION,
      'color': COLOR_TOKENS.text.INFOMATION,
      'padding': SPACING_TOKENS.MD,
      'font-size': TYPOGRAPHY_TOKENS.size.BASE,
      'font-weight': TYPOGRAPHY_TOKENS.weight.MEDIUM,
      'border-radius': RADIUS_TOKENS.MD,
      'line-height': TYPOGRAPHY_TOKENS.lineHeight.NORMAL
    }
  };

  getVariantStyles(variant: VariantType)
  {
    return this.variantStyles[variant];
  }

}
