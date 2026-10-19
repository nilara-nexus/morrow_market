# Morrow Market — Supermarket Website

A responsive, three-page supermarket storefront concept built with HTML5, Bootstrap 5 and vanilla JavaScript.

## Pages
- `index.html` — home, hero video, categories, featured products and newsletter
- `shop.html` — product listing, category filters, add-to-bag interaction and basket total
- `story.html` — brand story and values

## Run locally
1. Extract the ZIP file.
2. Open `index.html` in a modern browser. For best results, run a local server (VS Code Live Server or `python -m http.server 8000`).
3. The project uses Bootstrap and Google Fonts via CDN, so an internet connection is needed for those external resources. Images and the hero video are local assets.

## Assets
- `assets/images/` — original SVG illustrations used throughout the site
- `assets/video/video.mp4` — generated abstract produce-inspired hero motion background
- `assets/css/style.css` — theme, responsive layouts and animations
- `assets/js/app.js` — products, filters, basket demo, newsletter feedback and scroll reveals

## Notes
This is a front-end demo. Basket contents are kept in `sessionStorage` for the current browser tab; checkout and newsletter submission are simulated and do not contact a backend. Prices and product descriptions are sample content.


## Enhanced shopping experience
- Category-led shopping for groceries, fruits, vegetables, snacks, cool drinks, cakes, desserts, bakery, dairy and eggs.
- Search and category filters work together; choose a category tile to jump to matching products.
- Morrow Bot supports typed shopping requests, quantity parsing (kg/grams and pack/item counts), and browser speech recognition with a selectable language (English, Tamil, Hindi, Telugu, Malayalam, Kannada).
- Bot-created lists are added to the session basket. Review the basket and delivery form before checkout.
- This is a front-end demo: product matching is rule-based, voice support varies by browser/device, and checkout does not process payment or dispatch deliveries. For production, connect a backend, inventory database, authentication, payment gateway and real multilingual AI service.


## Quantity-aware basket and recipe assistant
- Basket rows show product name, unit price, selected quantity, and line total.
- Use + / − controls to change quantity. Weight-based products change in 250 g increments and show kg plus gram equivalents.
- Morrow Bot recognises the demo recipe request “veg biryani” / “வெஜ் பிரியாணி” and proposes a shopping list for approximately 3–4 servings, with ingredient quantities and estimated prices. Choose “Add all ingredients to basket” to add the full list.
- The recipe and catalogue prices are demo values. This is not a live inventory, payment, or dispatch system.

## Morrow Bot — recipe-to-basket update
The assistant now includes a curated recipe list for common dishes (including biryani, fried rice, tomato/lemon/curd rice, sambar, rasam, idli, dosa, chapati, paneer butter masala, chana masala, pasta, pizza, burgers, omelette, chicken/fish/egg curry, cake, gulab jamun, tea and coffee), plus Tamil aliases for selected dishes. Enter a dish name to get a suggested ingredient list for about 3–4 servings, estimated prices, quantities and an Add All button. Ingredients missing from the catalogue are added as recipe-only catalogue entries with estimated demo prices. Unknown dish names receive a best-effort generic starter list; this is not a guarantee of culinary accuracy. Review ingredient lists and prices before adding them to the basket. For reliable coverage of arbitrary regional dishes, connect a recipe database or AI API with server-side validation.


### Checkout behavior update
- After a valid demo order is submitted, the active basket is emptied and saved as empty in session storage.
- The basket panel immediately displays its empty state; old product/order details are not kept in the active checkout.
- Delivery form fields reset after submission. This is a front-end demo only and does not process payment or dispatch a real delivery.


## Account features (demo)
- Added `signup.html`, `signin.html`, and `user.html` (customer profile + order history).
- Account details, signed-in customer, per-customer basket and completed order history are saved in browser `localStorage`.
- Shopping actions and checkout require a signed-in account.
- Completed demo orders appear in My Account. `Buy again` adds that order's products back into the active basket.
- This is a front-end demo only. Passwords stored in localStorage are not secure; use a server-side authentication system, password hashing, and a database before production. Different browser profiles/devices do not share localStorage.


## Realistic image assets (14 files)

The `assets/images/` folder now includes 14 JPEG images: `hero-banner.jpg`, `groceries.jpg`, `fruits.jpg`, `vegetables.jpg`, `snacks.jpg`, `cool-drinks.jpg`, `cakes-desserts.jpg`, `dairy-eggs.jpg`, `bakery.jpg`, `fresh-meat.jpg`, `ready-to-cook.jpg`, `organic-products.jpg`, `delivery-bag.jpg`, and `user-profile.jpg`. Product cards use the realistic category imagery where mapped.
