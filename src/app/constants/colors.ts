export const TOKENS = {
  color: {
    background: {
      PRIMARY:    'var(--color-background-primary)',    // Blue
      SECONDARY:  'var(--color-background-secondary)',  // Gray
      SUCCESS:    'var(--color-background-success)',    // Green
      WARNING:    'var(--color-background-warning)',    // Yellow
      DANGER:     'var(--color-background-danger)',     // Red
      INFOMATION: 'var(--color-background-infomation)', // Light Blue
      WHITE:      'var(--color-background-white)',
      BLACK:      'var(--color-background-black)',
    },
    text: {
      PRIMARY:    'var(--color-text-primary)',
      SECONDARY:  'var(--color-text-secondary)',
      SUCCESS:    'var(--color-text-success)',
      WARNING:    'var(--color-text-warning)',
      DANGER:     'var(--color-text-danger)',
      INFOMATION: 'var(--color-text-infomation)',
      WHITE:      'var(--color-text-white)',
      BLACK:      'var(--color-text-black)',
    }
  },
  spacing: {
    XS:    'var(--spacing-1)',   // 4px
    SM:    'var(--spacing-2)',   // 8px
    MD:    'var(--spacing-4)',   // 16px
    LG:    'var(--spacing-6)',   // 24px
    XL:    'var(--spacing-8)',   // 32px
    XXL:   'var(--spacing-12)',  // 48px
    XXXL:  'var(--spacing-16)',  // 64px
  },
  typography: {
    size: {
      XS:    'var(--font-size-xs)',    // 12px
      SM:    'var(--font-size-sm)',    // 14px
      BASE:  'var(--font-size-base)',  // 16px
      LG:    'var(--font-size-lg)',    // 18px
      XL:    'var(--font-size-xl)',    // 20px
      XXL:   'var(--font-size-2xl)',   // 24px
      XXXL:  'var(--font-size-3xl)',   // 30px
      XXXXL: 'var(--font-size-4xl)',   // 36px
    },
    weight: {
      NORMAL:    'var(--font-weight-normal)',
      MEDIUM:    'var(--font-weight-medium)',
      SEMIBOLD:  'var(--font-weight-semibold)',
      BOLD:      'var(--font-weight-bold)',
    },
    lineHeight: {
      TIGHT:    'var(--line-height-tight)',
      NORMAL:   'var(--line-height-normal)',
      RELAXED:  'var(--line-height-relaxed)',
    }
  },
  radius: {
    SM:    'var(--radius-sm)',    // 2px
    MD:    'var(--radius-md)',    // 6px
    LG:    'var(--radius-lg)',    // 8px
    XL:    'var(--radius-xl)',    // 12px
    XXL:   'var(--radius-2xl)',   // 16px
    FULL:  'var(--radius-full)',
  }
} as const; 