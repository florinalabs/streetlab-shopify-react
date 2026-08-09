import { products as mock } from './data.js'
const DEMO=import.meta.env.VITE_DEMO_MODE!=='false'
const DOMAIN=import.meta.env.VITE_SHOPIFY_DOMAIN
const TOKEN=import.meta.env.VITE_STOREFRONT_TOKEN
const VERSION=import.meta.env.VITE_SHOPIFY_API_VERSION||'2026-07'

async function gql(query,variables={}){
 const r=await fetch(`https://${DOMAIN}/api/${VERSION}/graphql.json`,{method:'POST',headers:{'Content-Type':'application/json','X-Shopify-Storefront-Access-Token':TOKEN},body:JSON.stringify({query,variables})})
 const body=await r.json(); if(!r.ok||body.errors) throw new Error(body.errors?.[0]?.message||`Shopify ${r.status}`); return body.data
}
export async function loadProducts(){
 if(DEMO||!DOMAIN||!TOKEN) return mock
 try{
  const data=await gql(`query Products($first:Int!){products(first:$first,sortKey:BEST_SELLING){nodes{id title productType description featuredImage{url altText} variants(first:10){nodes{id title availableForSale price{amount currencyCode} selectedOptions{name value}}}}}}`,{first:24})
  return data.products.nodes.map(p=>{const v=p.variants.nodes.find(x=>x.availableForSale)||p.variants.nodes[0];return{id:p.id,variantId:v?.id,title:p.title,type:p.productType||'Collection',price:Number(v?.price?.amount||0),currency:v?.price?.currencyCode||'USD',color:v?.selectedOptions?.find(o=>o.name.toLowerCase()==='color')?.value||v?.title||'Default',image:p.featuredImage?.url||'/products/tee.svg',description:p.description||'Shopify product'}})
 }catch(e){console.warn('Shopify unavailable; using demo catalog.',e);return mock}
}
export async function createShopifyCart(lines){
 if(DEMO) return null
 const data=await gql(`mutation CartCreate($input:CartInput!){cartCreate(input:$input){cart{id checkoutUrl totalQuantity cost{totalAmount{amount currencyCode}}} userErrors{field message}}}`,{input:{lines:lines.map(x=>({merchandiseId:x.variantId,quantity:x.qty}))}})
 if(data.cartCreate.userErrors?.length) throw new Error(data.cartCreate.userErrors[0].message)
 return data.cartCreate.cart
}
export const isDemo=DEMO
