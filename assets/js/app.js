
const products=[
{id:1,name:"Market garden mix",category:"produce",desc:"A bright mix for salads & sides",price:149,img:"vegetables.jpg",tag:"FRESH PICK"},
{id:2,name:"Sunday sourdough",category:"bakery",desc:"Golden crust, soft middle",price:189,img:"bakery.jpg",tag:"BAKED TODAY"},
{id:3,name:"The pantry trio",category:"pantry",desc:"Three cupboard-friendly staples",price:299,img:"groceries.jpg",tag:"EVERYDAY HERO"},

{id:4,name:"Creamy daily milk",category:"daily",desc:"A fridge-door essential",price:68,img:"creamy_dairy_milk.png",tag:"DAILY GOOD"},
{id:5,name:"Chocolate truffle cake",category:"cakes",desc:"Rich chocolate layers for celebrations",price:699,img:"chocolate_truffle_cake.png",tag:"CELEBRATION",unit:"cake"},
{id:6,name:"Sparkling water",category:"drinks",desc:"Crisp and refreshing",price:35,img:"sparkling_water.png",tag:"REFRESH",unit:"bottle"},
{id:7,name:"Vanilla ice cream",category:"desserts",desc:"Creamy dessert for cosy evenings",price:160,img:"vanilla_ice_cream.png",tag:"FROZEN FAVOURITE",unit:"tub"},
{id:8,name:"Red apples",category:"fruits",desc:"Crunchy, juicy orchard favourites",price:180,img:"red_apples.png",tag:"ORCHARD PICK",unit:"kg"},

{id:9,name:"Sunshine fruit crate",category:"produce",desc:"A juicy mix of seasonal favourites",price:279,img:"fruits.jpg",tag:"ORCHARD PICK"},
{id:10,name:"Garden veggie box",category:"produce",desc:"Colourful veg for your weekly meals",price:199,img:"vegetables.jpg",tag:"FARM FRESH"},
{id:11,name:"Celebration cake",category:"cakes",desc:"A sweet centrepiece for your table",price:599,img:"golden_bake_loaf_celebration_cake.png",tag:"MAKE A WISH"},
{id:12,name:"Little cupcake box",category:"bakery",desc:"Soft, sweet and ready to share",price:249,img:"little_cupcakes_box.png",tag:"BAKERY LOVE"},
{id:13,name:"Farmhouse cheese",category:"daily",desc:"A creamy fridge-door favourite",price:189,img:"farmhouse_cheese.png",tag:"DAILY GOOD"},
{id:14,name:"Farm fresh eggs",category:"daily",desc:"A breakfast-time essential",price:99,img:"farm_fresh_eggs.png",tag:"EVERYDAY HERO"},
{id:15,name:"Sweet bananas",category:"fruits",desc:"Naturally sweet everyday fruit",price:48,img:"sweet_bananas.png",tag:"FRUIT BOWL",unit:"kg"},
{id:16,name:"Pantry refill pack",category:"pantry",desc:"Good basics, ready when you are",price:249,img:"groceries.jpg",tag:"SMART PICK"},{id:17,name:"Tomatoes",category:"vegetables",desc:"Bright tomatoes for curries and salads",price:38,img:"tomatoes.png",tag:"FARM FRESH",unit:"kg"},
{id:18,name:"Potatoes",category:"vegetables",desc:"A versatile kitchen staple",price:32,img:"potatoes.png",tag:"EVERYDAY",unit:"kg"},
{id:19,name:"Rice",category:"groceries",desc:"Everyday pantry rice",price:68,img:"rice.png",tag:"PANTRY STAPLE",unit:"kg"},
{id:20,name:"Wheat flour",category:"groceries",desc:"For chapati, roti and baking",price:52,img:"wheat_flour.png",tag:"PANTRY STAPLE",unit:"kg"},
{id:21,name:"Potato chips",category:"snacks",desc:"Crispy, crunchy snack-time favourite",price:30,img:"potato_chips.png",tag:"CRUNCH TIME",unit:"pack"},
{id:22,name:"Chocolate cookies",category:"snacks",desc:"A sweet little tea-time treat",price:75,img:"chocolate_cookies.png",tag:"LITTLE TREAT",unit:"pack"},
{id:23,name:"Orange cool drink",category:"drinks",desc:"A chilled citrus refreshment",price:45,img:"orange_cool_drink.png",tag:"CHILL OUT",unit:"bottle"},
{id:24,name:"Seasonal fruit bowl",category:"produce",desc:"A colourful, ready-to-love mix",price:229,img:"vegetables.jpg",tag:"IN SEASON"},
{id:25,name:"Little oat bites",category:"snacks",desc:"A small treat for slow moments",price:119,img:"little_bites.png",tag:"LITTLE TREAT"},

{id:26,name:"Strawberry cupcakes",category:"desserts",desc:"Soft cupcakes with a berry finish",price:280,img:"strawberry_cupcakes.png",tag:"SWEET MOMENT",unit:"box"},

{id:27,name:"Golden bake loaf",category:"bakery",desc:"A cosy classic for your table",price:139,img:"sunday_sourdough.png",tag:"OVEN WARM"},
{id:28,name:"Onions",category:"vegetables",desc:"Aromatic base for everyday cooking",price:42,img:"onions.png",tag:"KITCHEN ESSENTIAL",unit:"kg"},
{id:29,name:"Carrots",category:"vegetables",desc:"Sweet crunch for colourful meals",price:55,img:"carrots.png",tag:"FARM FRESH",unit:"kg"},
{id:30,name:"Green peas",category:"vegetables",desc:"Tender green peas for biryani and curries",price:95,img:"green_peas.png",tag:"FRESH PICK",unit:"kg"},
{id:31,name:"Plain yogurt",category:"daily",desc:"Cooling, creamy cooking essential",price:75,img:"plain_yogurt.png",tag:"DAILY GOOD",unit:"kg"},
{id:32,name:"Biryani masala",category:"groceries",desc:"Aromatic spice blend for biryani",price:65,img:"biryani_masala.png",tag:"SPICE DRAWER",unit:"pack"},
{id:33,name:"Fresh mint",category:"vegetables",desc:"Fresh fragrant leaves for biryani",price:20,img:"fresh_mint.png",tag:"HERB PICK",unit:"bunch"},
{id:34,name:"Fresh coriander",category:"vegetables",desc:"Bright herbs to finish your dish",price:20,img:"fresh_coriander.png",tag:"HERB PICK",unit:"bunch"},
{id:35,name:"Cooking oil",category:"groceries",desc:"A pantry staple for everyday cooking",price:155,img:"cooking_oil.png",tag:"PANTRY STAPLE",unit:"litre"},
{id:36,name:"Ginger garlic paste",category:"groceries",desc:"Quick aromatic cooking base",price:48,img:"ginger_garlic_paste.png",tag:"COOKING ESSENTIAL",unit:"pack"}
];
const mmUserEmail=()=>window.MorrowAuth?.currentEmail?.()||'';
const mmReadBaskets=()=>window.MorrowAuth?.read?.('morrowBaskets',{})||{};
let basket=(()=>{const email=mmUserEmail();const all=mmReadBaskets();if(email)return Array.isArray(all[email])?all[email]:[];return []})();
const money=n=>"₹"+n.toLocaleString("en-IN");
function productMarkup(p){return `<div class="col-6 col-lg-3 product-wrap" data-category="${p.category}" data-name="${p.name.toLowerCase()}"><article class="product-card reveal visible"><div class="product-image"><img src="assets/images/${p.img}" alt="${p.name}" loading="lazy"><span class="product-tag">${p.tag}</span></div><div class="product-info"><span class="category">${p.category}</span><h3>${p.name}</h3><p>${p.desc}</p><div class="product-buy"><strong>${money(p.price)} <small class="unit-note">/ ${p.unit||"item"}</small></strong><button class="add-button" data-add="${p.id}" aria-label="Add ${p.name} to bag">+</button></div></div></article></div>`}
function renderProducts(){const featured=document.querySelector("#featuredProducts"),all=document.querySelector("#allProducts");if(featured)featured.innerHTML=products.slice(0,4).map(p=>productMarkup(p)).join("");if(all)all.innerHTML=products.map(p=>productMarkup(p)).join("");}
function updateBasket(){document.querySelectorAll("#cartCount").forEach(el=>el.textContent=basket.length);const total=basket.reduce((s,p)=>s+p.price*p.qty,0);const el=document.querySelector("#basketTotal");if(el)el.textContent=money(total);sessionStorage.setItem("morrowBasket",JSON.stringify(basket));const email=mmUserEmail();if(email){const all=mmReadBaskets();all[email]=basket;window.MorrowAuth?.write?.('morrowBaskets',all)}}
function toast(msg){const t=document.querySelector("#toastMessage");if(!t)return;t.textContent=msg;t.classList.add("show");clearTimeout(window.morrowToast);window.morrowToast=setTimeout(()=>t.classList.remove("show"),2600)}
document.addEventListener("click",e=>{const add=e.target.closest("[data-add]");if(add){const p=products.find(x=>x.id===Number(add.dataset.add));const existing=basket.find(x=>x.id===p.id);existing?existing.qty++:basket.push({...p,qty:1});updateBasket();toast(`${p.name} added to your bag ✳`)}if(e.target.closest("#bagButton")){const count=basket.reduce((s,p)=>s+p.qty,0);toast(count?`Your bag has ${count} item${count===1?"":"s"} · ${money(basket.reduce((s,p)=>s+p.price*p.qty,0))}`:"Your bag is waiting for a little something ✳")}if(e.target.closest("#clearBag")){basket=[];updateBasket();toast("Bag cleared. Start fresh ✳")}});
document.addEventListener("click",e=>{const btn=e.target.closest(".filter-btn");if(!btn)return;document.querySelectorAll(".filter-btn").forEach(b=>b.classList.toggle("active",b===btn));document.querySelectorAll(".product-wrap").forEach(card=>{const q=(document.querySelector("#productSearch")?.value||"").toLowerCase().trim();card.hidden=!(btn.dataset.filter==="all"||card.dataset.category===btn.dataset.filter)||!card.dataset.name.includes(q)})});
document.querySelector("#newsletterForm")?.addEventListener("submit",e=>{e.preventDefault();const email=document.querySelector("#email");document.querySelector("#newsletterMessage").textContent="You're on the list — look out for a little goodness ✳";email.value="";toast("Thanks for joining the Morrow list!")});
renderProducts();updateBasket();
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");revealObserver.unobserve(entry.target)}}),{threshold:.12,rootMargin:"0px 0px -35px 0px"});
document.querySelectorAll(".reveal").forEach((el,i)=>{if(!el.classList.contains("visible")){el.style.transitionDelay=(Math.min(i%5,4)*65)+"ms";revealObserver.observe(el)}});
const nav=document.querySelector(".site-nav");window.addEventListener("scroll",()=>{if(nav)nav.classList.toggle("nav-scrolled",window.scrollY>20)},{passive:true});

// Delivery checkout demo: once an order is placed, clear the active basket and form
// so the previously ordered products/details do not reappear on this page.
const deliveryForm=document.querySelector("#deliveryForm");
const checkoutUser=window.MorrowAuth?.currentUser?.();if(deliveryForm&&!checkoutUser){deliveryForm.querySelectorAll('input,textarea,select,button[type="submit"]').forEach(el=>el.disabled=true);const m=document.querySelector('#deliveryMessage');if(m)m.innerHTML='Please <a href="signin.html">sign in</a> before checkout.';}if(deliveryForm&&checkoutUser){const n=document.querySelector('#customerName'),ph=document.querySelector('#customerPhone');if(n&&!n.value)n.value=checkoutUser.name||'';if(ph&&!ph.value)ph.value=checkoutUser.phone||'';}
const deliveryTotal=document.querySelector("#deliveryTotal");
if(deliveryTotal) deliveryTotal.textContent=money(basket.reduce((sum,p)=>sum+p.price*p.qty,0));
deliveryForm?.addEventListener("submit",e=>{
  e.preventDefault();
  if(!basket.length){
    const message=document.querySelector("#deliveryMessage");
    if(message) message.textContent="Your basket is empty. Add products before placing an order.";
    toast("Your basket is empty — add products first");
    return;
  }
  if(!deliveryForm.reportValidity()) return;
  const orderedName=document.querySelector("#customerName").value.trim();
  const orderTotal=basket.reduce((sum,p)=>sum+p.price*p.qty,0);
  const orderCount=basket.reduce((sum,p)=>sum+Number(p.qty||0),0);
  // Store completed order in the signed-in customer's localStorage history.
  const account=window.MorrowAuth?.currentUser?.();
  if(account){const allOrders=window.MorrowAuth.read('morrowOrders',{});const order={id:'MM'+Date.now(),date:new Date().toISOString(),items:basket.map(p=>({...p})),total:orderTotal,address:document.querySelector('#customerAddress')?.value.trim()||'',slot:document.querySelector('#deliverySlot')?.value||''};allOrders[account.email]=allOrders[account.email]||[];allOrders[account.email].push(order);window.MorrowAuth.write('morrowOrders',allOrders)}
  // Clear current basket after demo order is accepted.
  basket=[];
  updateBasket();
  if(deliveryTotal) deliveryTotal.textContent=money(0);
  deliveryForm.reset();
  const message=document.querySelector("#deliveryMessage");
  if(message) message.textContent=`Order placed successfully for ${orderedName}! ${orderCount} item(s) · ${money(orderTotal)}. Your previous order details have been cleared from the active basket. Demo only — no payment or delivery was processed.`;
  const panel=document.querySelector("#basketItemsPanel");
  if(panel) panel.scrollIntoView({behavior:"smooth",block:"center"});
  toast("Order placed — basket cleared ✳");
});

// Search/filter interactions and Morrow Bot grocery-list assistant.
let activeFilter="all";
document.querySelectorAll(".filter-btn").forEach(b=>{if(b.classList.contains("active"))activeFilter=b.dataset.filter});
function applyCatalogFilters(){const q=(document.querySelector("#productSearch")?.value||"").toLowerCase().trim();document.querySelectorAll(".product-wrap").forEach(card=>{card.hidden=!(activeFilter==="all"||card.dataset.category===activeFilter)||!card.dataset.name.includes(q)});const result=document.querySelector("#searchResultCount");if(result){const count=[...document.querySelectorAll(".product-wrap")].filter(c=>!c.hidden).length;result.textContent=`${count} item${count===1?"":"s"} found`}}
document.querySelector("#productSearch")?.addEventListener("input",applyCatalogFilters);
document.addEventListener("click",e=>{const f=e.target.closest(".filter-btn");if(f){activeFilter=f.dataset.filter;applyCatalogFilters()}const tile=e.target.closest("[data-category-jump]");if(tile){activeFilter=tile.dataset.categoryJump;document.querySelectorAll(".filter-btn").forEach(b=>b.classList.toggle("active",b.dataset.filter===activeFilter));applyCatalogFilters();document.querySelector("#products")?.scrollIntoView({behavior:"smooth"})}});
// Quantity-aware basket UI: explicit item name, quantity/unit, unit price and line total.
function displayQty(item){const q=Number(item.qty)||0;return Number.isInteger(q)?String(q):q.toFixed(3).replace(/0+$/,'').replace(/\.$/,'')}
function renderBasketItems(){const host=document.querySelector('#basketItemsPanel');if(!host)return;if(!basket.length){host.innerHTML='<div class="basket-empty"><span>🧺</span><div><strong>Your basket is empty</strong><p>Add products or ask Morrow Bot to build a recipe list.</p></div><a href="shop.html" class="btn btn-green">Browse groceries ↗</a></div>';return}host.innerHTML='<div class="basket-list-head"><div><span class="eyebrow dark-eye">YOUR LIVE BASKET</span><h3>Every item, <em>clearly counted.</em></h3></div><strong>'+basket.length+' product types</strong></div>'+basket.map(item=>{const line=item.price*item.qty;return `<article class="basket-line"><div class="basket-line-thumb"><img src="assets/images/${item.img}" alt=""></div><div class="basket-line-main"><strong>${item.name}</strong><small>${money(item.price)} per ${item.unit||'item'}</small><span class="basket-qty-label">Quantity: ${displayQty(item)} ${item.unit||'item'}${item.unit==='kg'?' ('+(item.qty*1000).toFixed(0)+' g)':''}</span></div><div class="qty-stepper" aria-label="Change ${item.name} quantity"><button type="button" data-qty-minus="${item.id}" aria-label="Decrease quantity">−</button><span>${displayQty(item.qty)}</span><button type="button" data-qty-plus="${item.id}" aria-label="Increase quantity">+</button></div><div class="basket-line-total"><small>Item total</small><strong>${money(line)}</strong></div><button class="basket-remove" type="button" data-remove="${item.id}" aria-label="Remove ${item.name}">×</button></article>`}).join('')+'<div class="basket-grand-total"><span>Estimated total</span><strong>'+money(basket.reduce((sum,item)=>sum+item.price*item.qty,0))+'</strong></div><p class="basket-footnote">Prices are demo catalogue prices. Weight-based products are calculated proportionally by kg; final checkout is a demo.</p>'}
function changeBasketQty(id,delta){const item=basket.find(x=>x.id===Number(id));if(!item)return;const step=item.unit==='kg'?0.25:1;item.qty=Math.max(step,Math.round((Number(item.qty)+delta*step)*1000)/1000);if(item.unit!=='kg')item.qty=Math.max(1,Math.round(item.qty));updateBasket();renderBasketItems();const totalEl=document.querySelector('#deliveryTotal');if(totalEl)totalEl.textContent=money(basket.reduce((sum,p)=>sum+p.price*p.qty,0))}
const baseUpdateBasket=updateBasket;updateBasket=function(){baseUpdateBasket();renderBasketItems();const totalEl=document.querySelector('#deliveryTotal');if(totalEl)totalEl.textContent=money(basket.reduce((sum,p)=>sum+p.price*p.qty,0))};
updateBasket();
document.addEventListener('click',e=>{const plus=e.target.closest('[data-qty-plus]');const minus=e.target.closest('[data-qty-minus]');const remove=e.target.closest('[data-remove]');if(plus){changeBasketQty(plus.dataset.qtyPlus,1)}else if(minus){changeBasketQty(minus.dataset.qtyMinus,-1)}else if(remove){basket=basket.filter(p=>p.id!==Number(remove.dataset.remove));updateBasket();toast('Item removed from your basket')}});

const botToggle=document.querySelector("#morrowBotToggle"),botPanel=document.querySelector("#morrowBotPanel"),botClose=document.querySelector("#morrowBotClose"),botInput=document.querySelector("#morrowBotInput"),botSend=document.querySelector("#morrowBotSend"),botMessages=document.querySelector("#morrowBotMessages"),botMic=document.querySelector("#morrowBotMic"),botLang=document.querySelector("#morrowBotLanguage");
function botSay(text,who="bot"){if(!botMessages)return;const el=document.createElement("div");el.className=`bot-bubble ${who}`;el.textContent=text;botMessages.appendChild(el);botMessages.scrollTop=botMessages.scrollHeight}
function showBotList(items){if(!items.length){botSay("I couldn't match those items yet. Try saying fruits, tomatoes, rice, cake, snacks or cool drinks — and mention a quantity like 2 kg or 500 grams.");return}const summary=items.map(x=>`${x.name} — ${x.qty} ${x.unit}`).join("\n");botSay("Here's your shopping list:\n"+summary+"\nI'll add these to your basket now.");items.forEach(item=>{const p=products.find(x=>x.id===item.id);if(!p)return;const old=basket.find(x=>x.id===p.id);old?old.qty+=item.qty:basket.push({...p,qty:item.qty,unit:item.unit});});updateBasket();botSay("Done! Your basket is updated. Open Shop or Delivery to review the items and continue to demo checkout.");}
const aliases={"banana":"Sweet bananas","bananas":"Sweet bananas","வாழைப்பழம்":"Sweet bananas","வாழைப்பழம்":"Sweet bananas","apple":"Red apples","apples":"Red apples","ஆப்பிள்":"Red apples","tomato":"Tomatoes","tomatoes":"Tomatoes","தக்காளி":"Tomatoes","potato":"Potatoes","potatoes":"Potatoes","உருளைக்கிழங்கு":"Potatoes","rice":"Rice","அரிசி":"Rice","wheat flour":"Wheat flour","flour":"Wheat flour","மாவு":"Wheat flour","chips":"Potato chips","snacks":"Potato chips","சிப்ஸ்":"Potato chips","cookies":"Chocolate cookies","biscuit":"Chocolate cookies","பிஸ்கட்":"Chocolate cookies","cool drink":"Orange cool drink","cool drinks":"Orange cool drink","juice":"Orange cool drink","குளிர்பானம்":"Orange cool drink","water":"Sparkling water","cake":"Chocolate truffle cake","கேக்":"Chocolate truffle cake","birthday cake":"Chocolate truffle cake","cupcake":"Strawberry cupcakes","dessert":"Vanilla ice cream","ice cream":"Vanilla ice cream","பால்":"Creamy daily milk","milk":"Creamy daily milk","egg":"Farm fresh eggs","eggs":"Farm fresh eggs","முட்டை":"Farm fresh eggs"};
function parseQuantity(txt, product){let m=txt.match(/(\d+(?:[.,]\d+)?)\s*(kg|kilo|kilos|கிலோ|கிலோஸ்)/i);if(m)return {qty:Math.max(.1,parseFloat(m[1].replace(',','.'))),unit:"kg"};m=txt.match(/(\d+(?:[.,]\d+)?)\s*(g|gram|grams|கிராம்)/i);if(m)return {qty:Math.max(.001,parseFloat(m[1].replace(',','.'))/1000),unit:"kg"};m=txt.match(/(\d+)\s*(pack|packs|packet|packets|bottle|bottles|box|boxes|tub|tubs|cake|cakes|items?)?/i);if(m)return {qty:Math.max(1,parseInt(m[1])),unit:product.unit||"item"};return {qty:1,unit:product.unit||"item"}}
// Curated multilingual recipe matcher. Quantities are starter suggestions for 3–4 servings.
const recipeBook = [
 {keys:['veg biryani','vegetable biryani','veg biriyani','vegetable biriyani','வெஜ் பிரியாணி','வெஜிடபிள் பிரியாணி','காய்கறி பிரியாணி'],title:'Vegetable Biryani',items:[['Rice',.5,'kg'],['Onions',.3,'kg'],['Tomatoes',.25,'kg'],['Carrots',.2,'kg'],['Green peas',.15,'kg'],['Potatoes',.2,'kg'],['Plain yogurt',.15,'kg'],['Biryani masala',1,'pack'],['Fresh mint',1,'bunch'],['Fresh coriander',1,'bunch'],['Cooking oil',.1,'litre'],['Ginger garlic paste',1,'pack']]},
 {keys:['chicken biryani','chicken biriyani','சிக்கன் பிரியாணி'],title:'Chicken Biryani',items:[['Rice',.5,'kg'],['Chicken',.75,'kg'],['Onions',.35,'kg'],['Tomatoes',.25,'kg'],['Plain yogurt',.2,'kg'],['Biryani masala',1,'pack'],['Fresh mint',1,'bunch'],['Fresh coriander',1,'bunch'],['Cooking oil',.1,'litre'],['Ginger garlic paste',1,'pack']]},
 {keys:['mutton biryani','mutton biriyani','ஆட்டிறைச்சி பிரியாணி'],title:'Mutton Biryani',items:[['Rice',.5,'kg'],['Mutton',.75,'kg'],['Onions',.35,'kg'],['Tomatoes',.25,'kg'],['Plain yogurt',.2,'kg'],['Biryani masala',1,'pack'],['Fresh mint',1,'bunch'],['Fresh coriander',1,'bunch'],['Cooking oil',.1,'litre'],['Ginger garlic paste',1,'pack']]},
 {keys:['fried rice','veg fried rice','vegetable fried rice','ஃப்ரைட் ரைஸ்'],title:'Vegetable Fried Rice',items:[['Rice',.5,'kg'],['Carrots',.2,'kg'],['Green peas',.15,'kg'],['Spring onions',1,'bunch'],['Capsicum',.2,'kg'],['Soy sauce',1,'bottle'],['Cooking oil',.05,'litre']]},
 {keys:['tomato rice','தக்காளி சாதம்'],title:'Tomato Rice',items:[['Rice',.4,'kg'],['Tomatoes',.4,'kg'],['Onions',.2,'kg'],['Cooking oil',.05,'litre'],['Ginger garlic paste',1,'pack']]},
 {keys:['lemon rice','எலுமிச்சை சாதம்'],title:'Lemon Rice',items:[['Rice',.4,'kg'],['Lemons',4,'piece'],['Peanuts',.1,'kg'],['Cooking oil',.04,'litre']]},
 {keys:['curd rice','yogurt rice','தயிர் சாதம்'],title:'Curd Rice',items:[['Rice',.35,'kg'],['Plain yogurt',.4,'kg'],['Milk',.25,'litre'],['Carrots',.1,'kg']]},
 {keys:['sambar','சாம்பார்'],title:'Sambar',items:[['Toor dal',.2,'kg'],['Tomatoes',.25,'kg'],['Onions',.15,'kg'],['Carrots',.15,'kg'],['Drumstick',2,'piece'],['Sambar powder',1,'pack'],['Tamarind',.05,'kg']]},
 {keys:['rasam','ரசம்'],title:'Rasam',items:[['Tomatoes',.25,'kg'],['Tamarind',.03,'kg'],['Rasam powder',1,'pack'],['Garlic',1,'piece'],['Fresh coriander',1,'bunch']]},
 {keys:['idli','இட்லி'],title:'Idli',items:[['Idli rice',.5,'kg'],['Urad dal',.15,'kg'],['Salt',1,'pack']]},
 {keys:['dosa','தோசை'],title:'Dosa',items:[['Dosa rice',.5,'kg'],['Urad dal',.15,'kg'],['Fenugreek seeds',.02,'kg'],['Cooking oil',.05,'litre']]},
 {keys:['chapati','chapathi','roti','சப்பாத்தி','ரொட்டி'],title:'Chapati / Roti',items:[['Wheat flour',.5,'kg'],['Cooking oil',.03,'litre'],['Salt',1,'pack']]},
 {keys:['poori','பூரி'],title:'Poori',items:[['Wheat flour',.4,'kg'],['Cooking oil',.25,'litre'],['Potatoes',.3,'kg']]},
 {keys:['paneer butter masala','paneer masala','பன்னீர் மசாலா'],title:'Paneer Butter Masala',items:[['Paneer',.25,'kg'],['Tomatoes',.35,'kg'],['Onions',.2,'kg'],['Butter',.1,'kg'],['Cream',.1,'litre'],['Ginger garlic paste',1,'pack']]},
 {keys:['chana masala','chole','சன்னா மசாலா'],title:'Chana Masala',items:[['Chickpeas',.25,'kg'],['Onions',.2,'kg'],['Tomatoes',.25,'kg'],['Ginger garlic paste',1,'pack']]},
 {keys:['potato curry','aloo curry','உருளைக்கிழங்கு கறி'],title:'Potato Curry',items:[['Potatoes',.6,'kg'],['Onions',.2,'kg'],['Tomatoes',.2,'kg'],['Cooking oil',.04,'litre']]},
 {keys:['pasta','white sauce pasta','பாஸ்தா'],title:'Pasta',items:[['Pasta',.3,'kg'],['Milk',.25,'litre'],['Cheese',.15,'kg'],['Butter',.05,'kg'],['Capsicum',.15,'kg']]},
 {keys:['pizza','பீட்சா'],title:'Homemade Pizza',items:[['Wheat flour',.3,'kg'],['Cheese',.2,'kg'],['Tomatoes',.25,'kg'],['Capsicum',.15,'kg'],['Onions',.1,'kg']]},
 {keys:['burger','பர்கர்'],title:'Veg Burger',items:[['Burger buns',4,'piece'],['Potatoes',.4,'kg'],['Tomatoes',.15,'kg'],['Onions',.1,'kg'],['Lettuce',1,'piece'],['Cheese',.1,'kg']]},
 {keys:['pancake','pancakes'],title:'Pancakes',items:[['Wheat flour',.2,'kg'],['Milk',.25,'litre'],['Eggs',4,'piece'],['Sugar',.08,'kg'],['Butter',.05,'kg']]},
 {keys:['omelette','omelet','முட்டை ஆம்லெட்'],title:'Omelette',items:[['Eggs',4,'piece'],['Onions',.1,'kg'],['Tomatoes',.1,'kg'],['Cooking oil',.02,'litre']]},
 {keys:['egg curry','முட்டை கறி'],title:'Egg Curry',items:[['Eggs',6,'piece'],['Onions',.2,'kg'],['Tomatoes',.25,'kg'],['Ginger garlic paste',1,'pack'],['Cooking oil',.04,'litre']]},
 {keys:['chicken curry','சிக்கன் கறி'],title:'Chicken Curry',items:[['Chicken',.7,'kg'],['Onions',.25,'kg'],['Tomatoes',.25,'kg'],['Plain yogurt',.1,'kg'],['Ginger garlic paste',1,'pack'],['Cooking oil',.06,'litre']]},
 {keys:['fish curry','மீன் குழம்பு'],title:'Fish Curry',items:[['Fish',.6,'kg'],['Tomatoes',.25,'kg'],['Onions',.15,'kg'],['Tamarind',.04,'kg'],['Ginger garlic paste',1,'pack']]},
 {keys:['gulab jamun','குலாப் ஜாமுன்'],title:'Gulab Jamun',items:[['Gulab jamun mix',1,'pack'],['Sugar',.25,'kg'],['Cooking oil',.25,'litre']]},
 {keys:['cake','chocolate cake','கேக்'],title:'Chocolate Cake',items:[['Wheat flour',.25,'kg'],['Sugar',.2,'kg'],['Eggs',3,'piece'],['Milk',.2,'litre'],['Butter',.12,'kg'],['Cocoa powder',1,'pack']]},
 {keys:['tea','சாய்','தேநீர்'],title:'Tea',items:[['Tea powder',.05,'kg'],['Milk',.5,'litre'],['Sugar',.08,'kg']]},
 {keys:['coffee','காபி'],title:'Coffee',items:[['Coffee powder',.05,'kg'],['Milk',.5,'litre'],['Sugar',.08,'kg']]}
];
const ingredientMeta={
'Chicken':[260,'kg','daily','daily.svg'],'Mutton':[850,'kg','daily','daily.svg'],'Fish':[320,'kg','daily','daily.svg'],'Spring onions':[60,'bunch','vegetables','veggie-box.svg'],'Capsicum':[90,'kg','vegetables','veggie-box.svg'],'Soy sauce':[85,'bottle','groceries','pantry.svg'],'Lemons':[8,'piece','fruits','fruit-crate.svg'],'Peanuts':[140,'kg','groceries','pantry.svg'],'Toor dal':[145,'kg','groceries','pantry.svg'],'Drumstick':[15,'piece','vegetables','veggie-box.svg'],'Sambar powder':[55,'pack','groceries','pantry.svg'],'Tamarind':[160,'kg','groceries','pantry.svg'],'Rasam powder':[55,'pack','groceries','pantry.svg'],'Garlic':[120,'kg','vegetables','veggie-box.svg'],'Idli rice':[65,'kg','groceries','pantry.svg'],'Urad dal':[150,'kg','groceries','pantry.svg'],'Salt':[25,'pack','groceries','pantry.svg'],'Dosa rice':[65,'kg','groceries','pantry.svg'],'Fenugreek seeds':[120,'kg','groceries','pantry.svg'],'Paneer':[360,'kg','daily','cheese.svg'],'Butter':[560,'kg','daily','cheese.svg'],'Cream':[220,'litre','daily','daily.svg'],'Chickpeas':[130,'kg','groceries','pantry.svg'],'Pasta':[120,'kg','groceries','pantry.svg'],'Milk':[68,'litre','daily','daily.svg'],'Cheese':[420,'kg','daily','cheese.svg'],'Burger buns':[35,'piece','bakery','bakery.svg'],'Lettuce':[90,'piece','vegetables','veggie-box.svg'],'Eggs':[99,'piece','daily','eggs.svg'],'Sugar':[48,'kg','groceries','pantry.svg'],'Lamb':[850,'kg','daily','daily.svg'],'Gulab jamun mix':[90,'pack','groceries','pantry.svg'],'Cocoa powder':[110,'pack','groceries','pantry.svg'],'Tea powder':[180,'kg','groceries','pantry.svg'],'Coffee powder':[300,'kg','groceries','pantry.svg']};
function normalizeDish(s){return s.toLowerCase().normalize('NFKC').replace(/[.,!?]/g,' ').replace(/\s+/g,' ').trim()}
function findRecipe(raw){const t=normalizeDish(raw);return recipeBook.find(r=>r.keys.some(k=>t===normalizeDish(k)||t.includes(normalizeDish(k))))}
function findOrCreateIngredient(name,unit){let p=products.find(x=>x.name.toLowerCase()===name.toLowerCase());if(p)return p;const meta=ingredientMeta[name]||[75,unit||'item','groceries','pantry.svg'];p={id:Math.max(...products.map(x=>x.id))+1,name,category:meta[2],desc:`Ingredient for home-cooked recipes`,price:meta[0],img:meta[3],tag:'RECIPE ESSENTIAL',unit:meta[1]};products.push(p);return p}
function recipeItems(recipe){return recipe.items.map(([name,qty,unit])=>{const p=findOrCreateIngredient(name,unit);return {...p,qty,unit:p.unit||unit,note:`Suggested amount: ${qty} ${unit}`}})}
function addItemsToBasket(items){items.forEach(item=>{const p=products.find(x=>x.id===item.id)||item;const old=basket.find(x=>x.id===p.id);if(old){old.qty=Math.round((old.qty+item.qty)*1000)/1000}else basket.push({...p,qty:item.qty,unit:item.unit||p.unit});});updateBasket()}
function displayRecipe(recipe,raw){
 const items=recipeItems(recipe);let remaining=[...items];
 botSay(`I matched “${raw}” to ${recipe.title}. These are suggested ingredients for about 3–4 servings. Add each item separately, or add the remaining items together.`);
 const list=document.createElement('div');list.className='bot-recipe-card';list.dataset.recipeTitle=recipe.title;
 const render=()=>{
   if(!remaining.length){list.innerHTML=`<div class="bot-recipe-title">✓ ${recipe.title}</div><p class="bot-recipe-complete">All ingredients have been moved to your basket. This list is now cleared.</p>`;setTimeout(()=>list.remove(),1800);return}
   const total=remaining.reduce((sum,x)=>sum+x.price*x.qty,0);
   list.innerHTML=`<div class="bot-recipe-title">🍲 ${recipe.title} · ${remaining.length} items remaining</div>`+
   remaining.map((x,i)=>`<div class="bot-recipe-row"><span><b>${x.name}</b><small>${displayQty(x.qty)} ${x.unit} · ${x.note}</small></span><span class="bot-recipe-price"><strong>${money(x.price*x.qty)}</strong><button type="button" class="bot-add-one" data-recipe-item="${i}" aria-label="Add ${x.name} to basket">Add ✓</button></span></div>`).join('')+
   `<div class="bot-recipe-total"><span>Remaining items total</span><strong>${money(total)}</strong></div><button type="button" class="bot-add-recipe" id="addRecipeItems">Add remaining ${remaining.length} item${remaining.length===1?'':'s'} to basket ↗</button><small class="bot-recipe-disclaimer">Suggested quantities and catalogue prices are estimates. Added items disappear from this list and stay in your basket for checkout.</small>`;
   list.querySelectorAll('[data-recipe-item]').forEach(btn=>btn.addEventListener('click',()=>{
     const idx=Number(btn.dataset.recipeItem);const [item]=remaining.splice(idx,1);if(!item)return;
     addItemsToBasket([item]);toast(`${item.name} added to basket ✳`);render();
   }));
   list.querySelector('#addRecipeItems').addEventListener('click',()=>{const count=remaining.length;addItemsToBasket(remaining);remaining=[];render();botSay(`${count} remaining ingredient types for ${recipe.title} have been added to your basket. The ingredient list is cleared; review your basket for checkout.`);toast(`${count} ingredients added ✳`)});
 };
 render();botMessages.appendChild(list);botMessages.scrollTop=botMessages.scrollHeight;
}
function inferUnknownRecipe(raw){const t=normalizeDish(raw);let title=raw.trim().replace(/^how to make\s+/i,'').replace(/^make\s+/i,'').replace(/^cook\s+/i,'');let items=[['Onions',.2,'kg'],['Tomatoes',.2,'kg'],['Cooking oil',.04,'litre'],['Ginger garlic paste',1,'pack']];if(/rice|சாதம்|pulao|புலாவ்/.test(t))items.unshift(['Rice',.5,'kg']);else if(/dosa|idli|இட்லி|தோசை/.test(t))items=[['Idli rice',.5,'kg'],['Urad dal',.15,'kg'],['Salt',1,'pack']];else if(/roti|chapati|சப்பாத்தி|naan/.test(t))items=[['Wheat flour',.5,'kg'],['Salt',1,'pack'],['Cooking oil',.03,'litre']];else if(/chicken|சிக்கன்/.test(t))items.unshift(['Chicken',.6,'kg']);else if(/fish|மீன்/.test(t))items.unshift(['Fish',.5,'kg']);else if(/egg|முட்டை/.test(t))items.unshift(['Eggs',4,'piece']);else if(/paneer|பன்னீர்/.test(t))items.unshift(['Paneer',.25,'kg']);else if(/sweet|halwa|payasam|லட்டு|பாயசம்/.test(t))items=[['Sugar',.2,'kg'],['Milk',.5,'litre'],['Butter',.05,'kg']];else if(/pasta|noodle|நூடுல்ஸ்/.test(t))items.unshift(['Pasta',.3,'kg']);else if(/cake|கேக்/.test(t))items=[['Wheat flour',.25,'kg'],['Sugar',.2,'kg'],['Eggs',3,'piece'],['Milk',.2,'litre'],['Butter',.12,'kg']];else items.unshift(['Rice',.3,'kg']);return {title:title.charAt(0).toUpperCase()+title.slice(1),items,keys:[t]}}
function handleBotText(raw){botSay(raw,'user');const recipe=findRecipe(raw);if(recipe){displayRecipe(recipe,raw);return}const txt=normalizeDish(raw);const found=[];const seen=new Set();for(const [alias,name] of Object.entries(aliases)){if(txt.includes(normalizeDish(alias))&&!seen.has(name)){const p=products.find(x=>x.name===name);if(p){const q=parseQuantity(txt,p);found.push({...p,qty:q.qty,unit:q.unit});seen.add(name)}}}if(found.length){addItemsToBasket(found);botSay('I found these catalogue items and added them to your basket:\n'+found.map(x=>`${x.name} — ${displayQty(x.qty)} ${x.unit} · ${money(x.price*x.qty)}`).join('\n')+'\nYou can adjust quantities and review totals in the basket.');return}const groups=[[/fruit|fruits|பழம்|பழங்கள்/i,'fruits'],[/vegetable|vegetables|காய்கறி/i,'vegetables'],[/grocery|groceries|மளிகை/i,'groceries'],[/snack|snacks|சிற்றுண்டி/i,'snacks'],[/drink|drinks|cool drink|குளிர்பானம்/i,'drinks'],[/cake|cakes|கேக்/i,'cakes'],[/dessert|desserts|ice cream|இனிப்பு/i,'desserts']];const cats=groups.filter(([r])=>r.test(txt)).map(x=>x[1]);if(cats.length){botSay('Here are matching picks:\n'+products.filter(p=>cats.includes(p.category)).slice(0,8).map(p=>`${p.name} — ${money(p.price)} / ${p.unit||'item'}`).join('\n')+'\nTell me the item names and quantities to add them.');return}const inferred=inferUnknownRecipe(raw);displayRecipe(inferred,raw);botSay('I did not find an exact curated recipe for that dish, so I made a best-effort starter list based on the dish name. Please review it before adding; for the most accurate list, use a recognised dish name or connect a recipe/AI API.');}

botToggle?.addEventListener("click",()=>{botPanel.hidden=!botPanel.hidden;if(!botPanel.hidden)botInput?.focus()});botClose?.addEventListener("click",()=>botPanel.hidden=true);botSend?.addEventListener("click",()=>{const v=botInput?.value.trim();if(v){handleBotText(v);botInput.value=""}});botInput?.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();botSend.click()}});
botMic?.addEventListener("click",()=>{const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){botSay("Voice recognition isn't available in this browser. Please type your list instead.");return}const rec=new SR();rec.lang=botLang?.value||"en-IN";rec.interimResults=false;rec.maxAlternatives=1;botMic.textContent="Listening…";rec.onresult=e=>{const heard=e.results[0][0].transcript;botInput.value=heard;handleBotText(heard);botInput.value=""};rec.onerror=()=>botSay("I couldn't hear that clearly. Try again or type your items.");rec.onend=()=>botMic.textContent="🎙 Speak";rec.start()});
