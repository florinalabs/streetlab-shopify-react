# StreetLab Shopify Liquid Theme

A native Shopify Online Store 2.0 theme included alongside the React storefront.

## Includes

- Liquid layout and reusable snippets
- JSON templates
- Theme sections and section groups
- Theme editor settings
- Product variant + add-to-cart forms
- Dynamic checkout option
- Collection sorting + pagination
- Cart update/remove/checkout flow
- Search results
- Responsive storefront CSS

## Preview on a development store

From this `shopify-theme` folder:

```bash
shopify theme dev --store your-store.myshopify.com
```

Run Theme Check:

```bash
shopify theme check
```

Upload as an unpublished theme:

```bash
shopify theme push --unpublished --store your-store.myshopify.com
```

The root repository also contains a separate `frontend/` React storefront using the Storefront GraphQL API. Keeping both approaches in one portfolio project demonstrates native Liquid theme development and headless React storefront development.
