# Vault Card Demo

[Live demo](https://vault-card-ten.vercel.app/)

## Project Structure

```
├── components/    # React components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions and configurations
├── providers/     # React context providers
├── queries/       # GraphQL queries
└── types/         # TypeScript type definitions
```

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Generate GraphQL types:

```bash
pnpm run generate
```

3. Run the development server:

```bash
pnpm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To create a production build:

```bash
pnpm run build
```

Then start the production server:

```bash
pnpm start
```

## Technical Details

The project uses:

- [shadcn/ui](https://ui.shadcn.com/) components for the UI, built on top of Radix UI primitives and styled with TailwindCSS
- Apollo Client for GraphQL integration
-

## Implementation Notes

- Font Substitution: The design uses FK Grotesk, which is a premium font. For this demo, Inter is used as a substitute. In a production environment, the proper font files would be obtained from the design team.

- Design Token Adjustments:

  - Created a new `--text-button-secondary` token to resolve conflicting text-body color definitions in Figma
  - Implemented buttons with font-weight 400 (instead of 500) and 12px font size (instead of 15px) to match the actual page designs rather than the button states frame

- Code Organization:
  - First PR should follow the naming convention `feat/feature-name` instead of using generic names like `dev`
  - GraphQL type generation process should be documented in first PR descriptions
