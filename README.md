# StyledComponents

A modern Angular application demonstrating the use of styled components and best practices in Angular development.

## Technology Stack

- Angular 19.2.0
- TypeScript 5.7.2
- RxJS 7.8.0
- Karma & Jasmine for testing

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)
- Angular CLI (`npm install -g @angular/cli`)

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd styled-components
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Project Structure

```
styled-components/
├── src/                    # Source files
├── public/                 # Public assets
├── .angular/              # Angular build files
├── node_modules/          # Dependencies
└── ...config files
```

## Style Token System

The application uses a comprehensive token-based design system for consistent styling across components. The token system is organized into several categories:

### Color Tokens

```typescript
TOKENS.color.background.PRIMARY    // Primary background color
TOKENS.color.background.SECONDARY  // Secondary background color
TOKENS.color.background.SUCCESS    // Success state color
TOKENS.color.background.WARNING    // Warning state color
TOKENS.color.background.DANGER     // Danger state color
TOKENS.color.background.INFOMATION // Information state color
```

### Spacing Tokens

```typescript
TOKENS.spacing.XS    // 4px
TOKENS.spacing.SM    // 8px
TOKENS.spacing.MD    // 16px
TOKENS.spacing.LG    // 24px
TOKENS.spacing.XL    // 32px
TOKENS.spacing.XXL   // 48px
TOKENS.spacing.XXXL  // 64px
```

### Typography Tokens

```typescript
// Font Sizes
TOKENS.typography.size.XS     // 12px
TOKENS.typography.size.SM     // 14px
TOKENS.typography.size.BASE   // 16px
TOKENS.typography.size.LG     // 18px
TOKENS.typography.size.XL     // 20px
TOKENS.typography.size.XXL    // 24px
TOKENS.typography.size.XXXL   // 30px
TOKENS.typography.size.XXXXL  // 36px

// Font Weights
TOKENS.typography.weight.NORMAL    // 400
TOKENS.typography.weight.MEDIUM    // 500
TOKENS.typography.weight.SEMIBOLD  // 600
TOKENS.typography.weight.BOLD      // 700

// Line Heights
TOKENS.typography.lineHeight.TIGHT    // 1.25
TOKENS.typography.lineHeight.NORMAL   // 1.5
TOKENS.typography.lineHeight.RELAXED  // 1.75
```

### Border Radius Tokens

```typescript
TOKENS.radius.SM    // 2px
TOKENS.radius.MD    // 6px
TOKENS.radius.LG    // 8px
TOKENS.radius.XL    // 12px
TOKENS.radius.XXL   // 16px
TOKENS.radius.FULL  // 9999px
```

### Using Tokens in Components

Example of using tokens in a component:

```typescript
@Component({
  selector: 'ax-box',
  template: '...'
})
export class AxBoxComponent {
  @Input() backgroundColor: string = TOKENS.color.background.PRIMARY;
  @Input() color: string = TOKENS.color.text.PRIMARY;
  @Input() padding: string = TOKENS.spacing.MD;
  @Input() fontSize: string = TOKENS.typography.size.BASE;
  @Input() fontWeight: string = TOKENS.typography.weight.NORMAL;
  @Input() borderRadius: string = TOKENS.radius.MD;
  @Input() lineHeight: string = TOKENS.typography.lineHeight.NORMAL;
}
```

## Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run test` - Runs unit tests
- `npm run e2e` - Runs end-to-end tests

## Development

### Code Scaffolding

Generate new components, services, and other Angular artifacts using the Angular CLI:

```bash
ng generate component component-name
ng generate service service-name
ng generate directive directive-name
```

For a complete list of available schematics, run:
```bash
ng generate --help
```

### Building

To build the project for production:
```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Testing

- Unit Tests: `ng test`
- End-to-End Tests: `ng e2e`

## Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Overview](https://angular.dev/tools/cli)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [RxJS Documentation](https://rxjs.dev/)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
