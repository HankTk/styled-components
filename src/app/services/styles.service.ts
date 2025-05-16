import { Injectable } from '@angular/core';
import { TOKENS } from '../constants/colors';

export type VariantType = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'information';

@Injectable({
  providedIn: 'root'
})
export class StylesService
{

  private variantStyles = {
    primary: {
      'background-color': TOKENS.color.background.PRIMARY,
      'color': TOKENS.color.text.PRIMARY,
      'padding': TOKENS.spacing.LG,
      'font-size': TOKENS.typography.size.LG,
      'font-weight': TOKENS.typography.weight.SEMIBOLD,
      'border-radius': TOKENS.radius.LG,
      'line-height': TOKENS.typography.lineHeight.NORMAL
    },
    secondary: {
      'background-color': TOKENS.color.background.SECONDARY,
      'color': TOKENS.color.text.SECONDARY,
      'padding': TOKENS.spacing.MD,
      'font-size': TOKENS.typography.size.BASE,
      'font-weight': TOKENS.typography.weight.NORMAL,
      'border-radius': TOKENS.radius.MD,
      'line-height': TOKENS.typography.lineHeight.NORMAL
    },
    success: {
      'background-color': TOKENS.color.background.SUCCESS,
      'color': TOKENS.color.text.SUCCESS,
      'padding': TOKENS.spacing.MD,
      'font-size': TOKENS.typography.size.BASE,
      'font-weight': TOKENS.typography.weight.MEDIUM,
      'border-radius': TOKENS.radius.MD,
      'line-height': TOKENS.typography.lineHeight.NORMAL
    },
    warning: {
      'background-color': TOKENS.color.background.WARNING,
      'color': TOKENS.color.text.WARNING,
      'padding': TOKENS.spacing.MD,
      'font-size': TOKENS.typography.size.BASE,
      'font-weight': TOKENS.typography.weight.MEDIUM,
      'border-radius': TOKENS.radius.MD,
      'line-height': TOKENS.typography.lineHeight.NORMAL
    },
    danger: {
      'background-color': TOKENS.color.background.DANGER,
      'color': TOKENS.color.text.DANGER,
      'padding': TOKENS.spacing.MD,
      'font-size': TOKENS.typography.size.BASE,
      'font-weight': TOKENS.typography.weight.MEDIUM,
      'border-radius': TOKENS.radius.MD,
      'line-height': TOKENS.typography.lineHeight.NORMAL
    },
    information: {
      'background-color': TOKENS.color.background.INFOMATION,
      'color': TOKENS.color.text.INFOMATION,
      'padding': TOKENS.spacing.MD,
      'font-size': TOKENS.typography.size.BASE,
      'font-weight': TOKENS.typography.weight.MEDIUM,
      'border-radius': TOKENS.radius.MD,
      'line-height': TOKENS.typography.lineHeight.NORMAL
    }
  };

  getVariantStyles(variant: VariantType)
  {
    return this.variantStyles[variant];
  }

}
