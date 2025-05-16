export type Width = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'full';
export type Height = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' | 'full';

export const WIDTHS = {
  xs:    'var(--width-1)',    // 50px
  sm:    'var(--width-2)',    // 100px
  md:    'var(--width-3)',    // 150px
  lg:    'var(--width-4)',    // 200px
  xl:    'var(--width-5)',    // 250px
  xxl:   'var(--width-6)',    // 300px
  xxxl:  'var(--width-7)',    // 400px
  full:  '100%',
} as const;

export const HEIGHTS = {
  xs:    'var(--height-1)',   // 16px
  sm:    'var(--height-2)',   // 32px
  md:    'var(--height-3)',   // 48px
  lg:    'var(--height-4)',   // 64px
  xl:    'var(--height-5)',   // 80px
  xxl:   'var(--height-6)',   // 96px
  xxxl:  'var(--height-7)',   // 128px
  full:  '100%',
} as const; 