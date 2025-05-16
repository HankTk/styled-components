export type Width = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'full';
export type Height = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'full';

export const WIDTHS = {
  XS:    'var(--width-1)',    // 50px
  SM:    'var(--width-2)',    // 100px
  MD:    'var(--width-3)',    // 150px
  LG:    'var(--width-4)',    // 200px
  XL:    'var(--width-5)',    // 250px
  XXL:   'var(--width-6)',    // 300px
  XXXL:  'var(--width-7)',    // 400px
  FULL:  '100%',
} as const;

export const HEIGHTS = {
  XS:    'var(--height-1)',   // 16px
  SM:    'var(--height-2)',   // 32px
  MD:    'var(--height-3)',   // 48px
  LG:    'var(--height-4)',   // 64px
  XL:    'var(--height-5)',   // 80px
  XXL:   'var(--height-6)',   // 96px
  XXXL:  'var(--height-7)',   // 128px
  FULL:  '100%',
} as const; 