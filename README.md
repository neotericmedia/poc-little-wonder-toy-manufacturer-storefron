# Little Wonder – Toy Storefront

A playful, direct-to-consumer e-commerce app for toy enthusiasts and bulk buyers.

## Stack

- **React 18** – UI framework
- **Vite** – Build tool & dev server
- **TypeScript** – Type safety
- **CSS Custom Properties** – Design tokens (colors, spacing, type scale)

## Project Structure

```
src/
├── App.tsx                      # Root component
├── main.tsx                     # Entry point
├── pages/
│   └── ProductCatalog.tsx       # Epic: Toy Shop (catalog, categories)
├── components/
│   └── shop/
│       ├── CategoryNav.tsx      # Category filtering
│       ├── ProductGrid.tsx      # Grid layout
│       ├── ProductCard.tsx      # Product preview
│       ├── ProductDetail.tsx    # Epic: Product Detail (variants, options)
│       └── ShoppingBag.tsx      # Epic: Shopping Bag (cart, checkout)
└── styles/
    ├── tokens.css              # Design tokens
    ├── global.css              # Reset & base
    └── catalog.css             # Component styles
```

## Epics

1. **Implement Little Wonder — Toy Shop** (`src/pages/ProductCatalog.tsx`, `src/components/shop/`)
   - Product catalogue with category navigation
   - Persistent filtering UI
   - Inventory visibility

2. **Implement Little Wonder — Product Detail** (`src/components/shop/ProductDetail.tsx`)
   - Variant pickers (color, size, configuration options)
   - Upfront pricing & SKU display
   - Add-to-cart flow

3. **Implement Little Wonder — Shopping Bag** (`src/components/shop/ShoppingBag.tsx`)
   - Cart summary & line items
   - Streamlined checkout
   - Order history dashboard
   - Gift messaging & bulk buyer options

## Getting Started

```bash
npm install
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build
npm run preview  # Preview built app
```

## Design Tokens

All colors, spacing, typography, and shadows are defined as CSS custom properties in `src/styles/tokens.css`. Playful, toy-themed palette includes primary red (#FF6B6B), teal secondary (#4ECDC4), and warm accent (#FFE66D).

## Next Steps

- [ ] Review Figma design; map component names & tokens
- [ ] Clarify variant strategy (colors, sizes, config options) & SKU count
- [ ] Implement ProductDetail with variant pickers (swatch chips)
- [ ] Build Shopping Bag & checkout flow
- [ ] Add order history dashboard
- [ ] Confirm gift messaging, wholesale account support, subscription logic
- [ ] E-commerce best practices review: persistent filtering, upfront pricing
