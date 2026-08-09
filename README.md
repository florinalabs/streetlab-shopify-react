# StreetLab — Shopify + React + Liquid

StreetLab is a portfolio ecommerce project that demonstrates **two modern Shopify storefront approaches in one repository**:

1. **Headless React storefront** using Shopify's Storefront GraphQL API.
2. **Native Shopify Online Store 2.0 theme** using Liquid, sections, snippets, JSON templates, and theme settings.

This makes the project useful for showing both React development and traditional Shopify theme development.

## Repository structure

```text
streetlab-shopify-react/
├── frontend/                 # Headless React + Shopify Storefront API
│   ├── src/
│   ├── .env.example
│   └── package.json
│
└── shopify-theme/            # Native Shopify Liquid / Online Store 2.0
    ├── assets/
    ├── config/
    ├── layout/
    ├── locales/
    ├── sections/
    ├── snippets/
    └── templates/
```

## React storefront features

- Editorial ecommerce homepage
- Product grid and category filters
- Search
- Product/variant data adapter
- Local cart drawer
- Shopify `cartCreate` checkout flow when connected
- Responsive mobile layout
- Mock mode so the portfolio demo works without Shopify credentials

## Liquid theme features

- Native `theme.liquid` storefront layout
- Online Store 2.0 JSON templates
- Dynamic theme sections
- Header/footer section groups
- Theme editor settings
- Reusable Liquid product-card and pagination snippets
- Product media and variant selector
- Shopify `{% form 'product' %}` add-to-cart flow
- Optional dynamic checkout button
- Collection sorting and pagination
- Native cart update/remove/checkout
- Product search
- Responsive theme styling

## Run the React demo

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

## Connect the React frontend to Shopify

Create Storefront API access for your development store, then update `frontend/.env`:

```env
VITE_DEMO_MODE=false
VITE_SHOPIFY_DOMAIN=your-store.myshopify.com
VITE_STOREFRONT_TOKEN=your_public_storefront_token
VITE_SHOPIFY_API_VERSION=2026-07
```

The browser storefront should only use a **public Storefront API token**. Never expose Shopify Admin API secrets in client-side environment variables.

## Run the Liquid theme

Install Shopify CLI, then from the theme directory:

```bash
cd shopify-theme
shopify theme dev --store your-store.myshopify.com
```

Check the theme:

```bash
shopify theme check
```

Push it as an unpublished theme:

```bash
shopify theme push --unpublished --store your-store.myshopify.com
```

## Portfolio talking points

This repository demonstrates:

- React component architecture
- Storefront GraphQL API integration
- Shopify cart/checkout integration
- Shopify Liquid
- Online Store 2.0 sections and JSON templates
- Theme settings and merchant customization
- Responsive ecommerce UI
- Two different Shopify frontend architectures in one project
