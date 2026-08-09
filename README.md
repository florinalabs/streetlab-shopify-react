# StreetLab — Shopify + React Storefront

A custom ecommerce frontend demonstrating React with Shopify's Storefront GraphQL API.

## Features

- Editorial storefront home page
- Product grid and category filters
- Search
- Product/variant data adapter
- Local cart drawer
- Shopify `cartCreate` checkout flow when connected
- Responsive mobile layout
- Mock mode so the portfolio demo works without Shopify credentials

## Run demo mode

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

## Connect Shopify

Create Storefront API access for your development store, then update `.env`:

```env
VITE_DEMO_MODE=false
VITE_SHOPIFY_DOMAIN=your-store.myshopify.com
VITE_STOREFRONT_TOKEN=your_public_storefront_token
VITE_SHOPIFY_API_VERSION=2026-07
```

The app sends GraphQL requests to:

```text
https://<store>/api/2026-07/graphql.json
```

The storefront token used by this browser app must be a **public Storefront access token** with only the scopes your storefront needs. Never put Admin API secrets in frontend environment variables.
