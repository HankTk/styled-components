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
  @Input() variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'information' = 'primary';
  @Input() backgroundColor: string = TOKENS.color.background.PRIMARY;
  @Input() color: string = TOKENS.color.text.PRIMARY;
  @Input() padding: string = TOKENS.spacing.MD;
  @Input() fontSize: string = TOKENS.typography.size.BASE;
  @Input() fontWeight: string = TOKENS.typography.weight.NORMAL;
  @Input() borderRadius: string = TOKENS.radius.MD;
  @Input() lineHeight: string = TOKENS.typography.lineHeight.NORMAL;
  @Input() styles: Partial<{
    backgroundColor: string;
    color: string;
    padding: string;
    fontSize: string;
    fontWeight: string;
    borderRadius: string;
    lineHeight: string;
  }> = {};

  getStyles() {
    const variantStyles = {
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

    return {
      ...variantStyles[this.variant],
      ...this.styles
    };
  }
}
