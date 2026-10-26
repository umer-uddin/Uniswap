// =====================================================
//  UniSwap — Student Marketplace | app.js
// =====================================================

// ---- PRODUCTS DATA ----
const PRODUCTS = [
  { id:1, title:"Marketing Principles — Philip Kotler (15th Ed.)", category:"textbooks", price:800, originalPrice:2500, condition:"Used", conditionNote:"Some highlighting on pages 45-120. All pages intact.", description:"Marketing Principles by Philip Kotler, 15th Edition. Perfect for BBA/MBA students. Some yellow highlighting on a few pages but completely readable. Spine intact, no torn pages. A great deal for semester starters!", university:"FAST-NUCES Karachi", sellerId:"ahmed_khan", listingType:"sale", icon:"📚", gradient:"linear-gradient(135deg,#1a5c3a,#2d8653)", posted:new Date(Date.now()-2*864e5).toISOString(), views:45, saved:8 },
  { id:2, title:"Casio FX-991ES Plus Scientific Calculator", category:"calculators", price:1500, originalPrice:3200, condition:"Like New", conditionNote:"Used for one semester. Fully functional with original hard cover.", description:"Casio FX-991ES Plus scientific calculator. Used for only one semester. All functions working perfectly including integration, differentiation, matrix operations, and statistical calculations. Comes with original hard cover. Battery is new.", university:"LUMS Lahore", sellerId:"fatima_malik", listingType:"sale", icon:"🖩", gradient:"linear-gradient(135deg,#1e40af,#3b82f6)", posted:new Date(Date.now()-1*864e5).toISOString(), views:72, saved:15 },
  { id:3, title:"CS Semester 1 Complete Lecture Notes Bundle", category:"notes", price:300, originalPrice:null, condition:"Like New", conditionNote:"Neatly written and organized by subject.", description:"Complete lecture notes for CS Semester 1: OOP (C++), Calculus, English Composition, and Islamic Studies. Neatly handwritten and organized. Includes past papers and solved exercises. Great for CS/SE students at semester start.", university:"COMSATS Islamabad", sellerId:"usman_ali", listingType:"sale", icon:"📝", gradient:"linear-gradient(135deg,#6d28d9,#8b5cf6)", posted:new Date(Date.now()-3*36e5).toISOString(), views:28, saved:6 },
  { id:4, title:"HP Laptop — Core i5 8th Gen, 8GB RAM, 256GB SSD", category:"laptops", price:45000, originalPrice:75000, condition:"Used", conditionNote:"Good condition. Minor scratches on lid. Battery holds 4 hrs.", description:"HP 15s laptop with Intel Core i5 8th generation, 8GB DDR4 RAM, 256GB SSD. 15.6\" Full HD screen. Windows 11 installed. Great for programming, office work, and light design. Minor scratches on lid but screen and keyboard are perfect.", university:"UET Lahore", sellerId:"ahmed_khan", listingType:"sale", icon:"💻", gradient:"linear-gradient(135deg,#1e293b,#475569)", posted:new Date(Date.now()-5*864e5).toISOString(), views:189, saved:34 },
  { id:5, title:"Complete Stationery Bundle — Back to Uni Ready", category:"stationery", price:500, originalPrice:1200, condition:"New", conditionNote:"All items brand new, never used.", description:"Complete stationery bundle: 5 ballpoint pens (blue/black/red), 3 highlighters, 2 mechanical pencils, geometry set, ruler, 200-page scientific notebook, sticky notes, and a file folder. Everything brand new, never used.", university:"NUST Islamabad", sellerId:"fatima_malik", listingType:"sale", icon:"✏️", gradient:"linear-gradient(135deg,#b45309,#f59e0b)", posted:new Date(Date.now()-4*36e5).toISOString(), views:33, saved:9 },
  { id:6, title:"Engineering Mathematics — Kreyszig (10th Edition)", category:"textbooks", price:600, originalPrice:3500, condition:"Used", conditionNote:"Pencil notes in margins (useful!). All content readable.", description:"Advanced Engineering Mathematics by Erwin Kreyszig, 10th Edition. Essential for all engineering students. Covers Linear Algebra, Calculus, ODE, PDE, Complex Analysis, and Numerical Methods. Pencil annotations are helpful study notes!", university:"NED University Karachi", sellerId:"usman_ali", listingType:"sale", icon:"📚", gradient:"linear-gradient(135deg,#0d3d26,#1a5c3a)", posted:new Date(Date.now()-7*864e5).toISOString(), views:56, saved:11 },
  { id:7, title:"Business Statistics — Notes + Past Papers (5 Years)", category:"notes", price:250, originalPrice:null, condition:"Like New", conditionNote:"Typed notes, printed and spiral bound.", description:"Comprehensive Business Statistics notes: Descriptive Stats, Probability, Hypothesis Testing, Regression, and Time Series. Includes 5 years of past papers with complete solutions. Typed, printed on A4, and spiral bound.", university:"IBA Karachi", sellerId:"fatima_malik", listingType:"sale", icon:"📝", gradient:"linear-gradient(135deg,#4c1d95,#6d28d9)", posted:new Date(Date.now()-2*864e5).toISOString(), views:41, saved:7 },
  { id:8, title:"Wacom Intuos Drawing Tablet (Small) — Design Students", category:"other", price:8000, originalPrice:18000, condition:"Like New", conditionNote:"Used lightly for 3 months. All accessories included.", description:"Wacom Intuos Small drawing tablet. Used for only one semester of Graphic Design. Comes with original pen, 3 replacement nibs, USB cable, and original box. Compatible with Windows and Mac. Perfect for design, architecture, and fine arts students.", university:"FAST-NUCES Lahore", sellerId:"ahmed_khan", listingType:"sale", icon:"🖱️", gradient:"linear-gradient(135deg,#be185d,#ec4899)", posted:new Date(Date.now()-6*864e5).toISOString(), views:88, saved:21 },
  { id:9, title:"Organic Chemistry — McMurry 9th Edition (Pre-Med)", category:"textbooks", price:900, originalPrice:4000, condition:"Used", conditionNote:"Some highlighting in first half. Good condition overall.", description:"Organic Chemistry by John McMurry, 9th Edition. Essential for pre-med, pharmacy, and chemistry students. Some highlighting in chapters 1-15 but rest is clean. Hardcover, all pages complete. Great for MDCAT preparation too.", university:"Dow Medical College Karachi", sellerId:"usman_ali", listingType:"sale", icon:"📚", gradient:"linear-gradient(135deg,#1a5c3a,#16a34a)", posted:new Date(Date.now()-10*864e5).toISOString(), views:63, saved:14 },
  { id:10, title:"Professional Engineering Geometry & Drawing Kit", category:"stationery", price:400, originalPrice:900, condition:"New", conditionNote:"Completely unused, still in packaging.", description:"Professional engineering geometry set: compass, divider, set squares (30-60-90 & 45-45-90), protractor, scale ruler, stapler, eraser set, and pencil set — all in a hard case. Completely new. Bought two sets by mistake.", university:"UET Taxila", sellerId:"fatima_malik", listingType:"sale", icon:"✏️", gradient:"linear-gradient(135deg,#92400e,#b45309)", posted:new Date(Date.now()-1*864e5).toISOString(), views:19, saved:4 },
  { id:11, title:"Learning Python — O'Reilly 5th Edition (1,594 Pages)", category:"textbooks", price:1200, originalPrice:5000, condition:"Like New", conditionNote:"Read once carefully. No markings or damage.", description:"Learning Python by Mark Lutz, 5th Edition (O'Reilly). 1594 pages of comprehensive Python 3 coverage. Perfect for CS, SE, and IT students. Covers basics through advanced OOP, functional programming, and modules.", university:"COMSATS Lahore", sellerId:"ahmed_khan", listingType:"sale", icon:"📚", gradient:"linear-gradient(135deg,#1a5c3a,#2d8653)", posted:new Date(Date.now()-3*864e5).toISOString(), views:97, saved:22 },
  { id:12, title:"Psychology 101 — Myers 12th Ed. (Exchange / Free)", category:"textbooks", price:0, originalPrice:3000, condition:"Used", conditionNote:"Normal wear. Sticky note tabs for key sections.", description:"Psychology by David G. Myers, 12th Edition. Comprehensive intro psychology textbook. Has sticky tab notes for important sections. Looking to exchange for any Social Work or Education textbook, or give free to a student in need.", university:"Bahria University Islamabad", sellerId:"usman_ali", listingType:"exchange", icon:"📚", gradient:"linear-gradient(135deg,#0369a1,#0284c7)", posted:new Date(Date.now()-8*864e5).toISOString(), views:31, saved:5 }
];

// ---- SELLERS DATA ----
const SELLERS = {
  ahmed_khan:{ id:"ahmed_khan", name:"Ahmed Khan", initials:"AK", university:"FAST-NUCES Karachi", department:"BS Computer Science", year:"3rd Year", bio:"CS student selling used textbooks and tech. Genuine seller, fast responses!", color:"#1a5c3a", verified:true, rating:4.8, totalListings:12, sales:18, joinedDate:"September 2023" },
  fatima_malik:{ id:"fatima_malik", name:"Fatima Malik", initials:"FM", university:"LUMS Lahore", department:"BBA", year:"2nd Year", bio:"Business student clearing out semester materials. Quality items at best prices!", color:"#be185d", verified:true, rating:4.9, totalListings:8, sales:11, joinedDate:"January 2024" },
  usman_ali:{ id:"usman_ali", name:"Usman Ali", initials:"UA", university:"COMSATS Islamabad", department:"BE Electrical Engineering", year:"4th Year", bio:"Engineering student selling books and notes. Reasonable deals only.", color:"#6d28d9", verified:true, rating:4.7, totalListings:15, sales:24, joinedDate:"August 2022" }
};

// ---- CATEGORIES DATA ----
const CATEGORIES = [
  { id:"textbooks", name:"Textbooks", icon:"📚", gradient:"linear-gradient(135deg,#1a5c3a,#2d8653)", count:156 },
  { id:"calculators", name:"Calculators", icon:"🖩", gradient:"linear-gradient(135deg,#1e40af,#3b82f6)", count:43 },
  { id:"notes", name:"Lecture Notes", icon:"📝", gradient:"linear-gradient(135deg,#6d28d9,#8b5cf6)", count:89 },
  { id:"stationery", name:"Stationery", icon:"✏️", gradient:"linear-gradient(135deg,#b45309,#f59e0b)", count:67 },
  { id:"laptops", name:"Laptops", icon:"💻", gradient:"linear-gradient(135deg,#1e293b,#475569)", count:28 },
  { id:"other", name:"Other Essentials", icon:"🎒", gradient:"linear-gradient(135deg,#be185d,#ec4899)", count:112 }
];

// ---- WHY FEATURES ----
const WHY_FEATURES = [
  { icon:"🎓", title:"Students Only", desc:"Every user is a verified university student. No scammers, no outsiders — just your trusted campus community." },
  { icon:"💰", title:"Save Up to 80%", desc:"Buy used textbooks and equipment at a fraction of retail prices. Save money every single semester." },
  { icon:"🔒", title:"Verified & Safe", desc:"All sellers are verified with their university ID and student email. Shop with complete confidence." },
  { icon:"🏫", title:"Campus Community", desc:"Connect with students at your own university. Meet locally and trade safely within your campus." },
  { icon:"♻️", title:"Eco-Friendly", desc:"Reuse and recycle university materials. Reduce waste and help the environment one book at a time." },
  { icon:"⚡", title:"Quick & Easy", desc:"List your item in under 2 minutes. Sell fast, earn fast. Simple and completely hassle-free." }
];

// ---- SAMPLE INQUIRIES ----
const SAMPLE_INQUIRIES = [
  { id:1, from:"Sara Ahmed", initials:"SA", color:"#be185d", itemTitle:"Marketing Principles — Philip Kotler", message:"Hi! Is the textbook still available? Can you do Rs. 700? I'm a 1st year BBA student and really need it for my Marketing course starting next week.", time:"2 hours ago", isNew:true },
  { id:2, from:"Ali Hassan", initials:"AH", color:"#1e40af", itemTitle:"HP Laptop — Core i5 8th Gen", message:"Hello, I'm interested in the laptop. Can we meet at FAST campus tomorrow? Also is the price negotiable? I can offer Rs. 42,000.", time:"Yesterday", isNew:true },
  { id:3, from:"Zara Khan", initials:"ZK", color:"#6d28d9", itemTitle:"CS Semester 1 Notes Bundle", message:"These notes look great! Do you have OOP notes specifically for Dr. Imran's class? That would be perfect for me.", time:"3 days ago", isNew:false }
];

// ---- DEMO USERS ----
const DEMO_USERS = [
  { id:"demo_student", name:"Demo Student", email:"student@nu.edu.pk", password:"demo123", university:"FAST-NUCES Karachi", initials:"DS", color:"#1a5c3a", verificationStatus:"verified", joinedDate:new Date().toISOString(), bio:"Demo student account for testing UniSwap." },
  { id:"test_user", name:"Test User", email:"test@lums.edu.pk", password:"test123", university:"LUMS Lahore", initials:"TU", color:"#1e40af", verificationStatus:"pending", joinedDate:new Date().toISOString(), bio:"" }
];

// ---- APP STATE ----
let appState = {
  currentPage:'home', currentProductId:null,
  browseFilters:{ search:'', category:'all', condition:'all', minPrice:0, maxPrice:100000, sort:'recent', listingType:'all' },
  wishlist:[], user:null, userListings:[], activeTab:'listings',
  registerStep:1, _tempReg:null, isMenuOpen:false
};

// ---- LOCAL STORAGE ----
function loadFromStorage(){
  try{
    const d=JSON.parse(localStorage.getItem('uniswap_data')||'{}');
    appState.wishlist=d.wishlist||[];
    appState.user=d.user||null;
    appState.userListings=d.userListings||[];
  }catch(e){}
}
function saveToStorage(){
  try{ localStorage.setItem('uniswap_data',JSON.stringify({ wishlist:appState.wishlist, user:appState.user, userListings:appState.userListings })); }catch(e){}
}

// ---- UTILITIES ----
function formatPrice(p){ return p===0?'FREE':'Rs. '+p.toLocaleString('en-PK'); }
function timeAgo(ds){
  const d=Date.now()-new Date(ds).getTime(), m=Math.floor(d/6e4), h=Math.floor(d/36e5), dy=Math.floor(d/864e5);
  if(m<1)return'Just now'; if(m<60)return m+'m ago'; if(h<24)return h+'h ago';
  if(dy<30)return dy+'d ago'; return new Date(ds).toLocaleDateString('en-PK',{month:'short',day:'numeric'});
}
function condBadge(c){ const m={'New':'<span class="badge badge-new">● New</span>','Like New':'<span class="badge badge-like-new">● Like New</span>','Used':'<span class="badge badge-used">● Used</span>'}; return m[c]||`<span class="badge">${c}</span>`; }
function typeBadge(t){ const m={'sale':'<span class="badge badge-sale">For Sale</span>','exchange':'<span class="badge badge-exchange">Exchange</span>','free':'<span class="badge badge-free">Free</span>'}; return m[t]||''; }
function discount(p,op){ return(!op||op<=p)?null:Math.round((1-p/op)*100); }
function inWishlist(id){ return appState.wishlist.includes(id); }
function allProducts(){ return [...PRODUCTS,...appState.userListings]; }
function getInitials(name){ return name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase(); }

// ---- ROUTER ----
function navigate(page,params={}){
  appState.currentPage=page;
  if(page==='product'&&params.id){ appState.currentProductId=params.id; history.pushState(null,'',`#product/${params.id}`); }
  else if(page==='browse'&&params.category){ appState.browseFilters.category=params.category; history.pushState(null,'','#browse'); }
  else{ history.pushState(null,'',`#${page}`); }
  renderPage(); window.scrollTo({top:0,behavior:'smooth'});
}
window.onhashchange=function(){
  const h=location.hash.replace('#','');
  if(!h) appState.currentPage='home';
  else if(h.startsWith('product/')){ appState.currentPage='product'; appState.currentProductId=parseInt(h.split('/')[1]); }
  else appState.currentPage=h;
  renderPage(); window.scrollTo({top:0,behavior:'smooth'});
};

function renderPage(){
  const app=document.getElementById('app'); if(!app)return;
  updateNav();
  switch(appState.currentPage){
    case'home': app.innerHTML=renderHome(); break;
    case'browse': app.innerHTML=renderBrowse(); break;
    case'product':{const p=allProducts().find(x=>x.id===appState.currentProductId); app.innerHTML=p?renderProduct(p):renderNotFound(); break;}
    case'sell': if(!appState.user){showToast('Please login first','warning');navigate('login');return;} app.innerHTML=renderSell(); attachSellListeners(); break;
    case'login': app.innerHTML=renderLogin(); break;
    case'register': app.innerHTML=renderRegister(); break;
    case'dashboard': if(!appState.user){showToast('Please login first','warning');navigate('login');return;} app.innerHTML=renderDashboard(); break;
    default: app.innerHTML=renderHome();
  }
  updateActiveLink();
}

// ---- NAV UPDATE ----
function updateNav(){
  const nA=document.getElementById('navAuth'), mA=document.getElementById('mobileAuth');
  if(!nA)return;
  if(appState.user){
    const ini=getInitials(appState.user.name);
    nA.innerHTML=`<div class="nav-avatar" onclick="navigate('dashboard')" title="${appState.user.name}" style="background:${appState.user.color||'#1a5c3a'}">${ini}</div><button class="btn btn-outline btn-sm" onclick="handleLogout()">Logout</button>`;
    if(mA) mA.innerHTML=`<a href="#" class="mobile-link" onclick="navigate('dashboard');toggleMenu();return false;">👤 My Dashboard</a><a href="#" class="mobile-link" onclick="handleLogout();toggleMenu();return false;">🚪 Logout</a>`;
  } else {
    nA.innerHTML=`<button class="btn btn-outline btn-sm" onclick="navigate('login')">Login</button><button class="btn btn-primary btn-sm" onclick="navigate('register')">Register Free</button>`;
    if(mA) mA.innerHTML=`<a href="#" class="mobile-link" onclick="navigate('login');toggleMenu();return false;">Login</a><a href="#" class="mobile-link" onclick="navigate('register');toggleMenu();return false;">Register Free</a>`;
  }
}
function updateActiveLink(){ document.querySelectorAll('.nav-link[data-page]').forEach(l=>l.classList.toggle('active',l.dataset.page===appState.currentPage)); }
function toggleMenu(){
  appState.isMenuOpen=!appState.isMenuOpen;
  document.getElementById('mobileMenu').classList.toggle('open',appState.isMenuOpen);
}

// ---- RENDER: HOME ----
function renderHome(){
  const recent=allProducts().sort((a,b)=>new Date(b.posted)-new Date(a.posted)).slice(0,6);
  return `<div class="page-animate">
  <section class="hero">
    <div class="hero-content">
      <div class="hero-badge">🎓 Pakistan's #1 Student Marketplace</div>
      <h1 class="hero-title">Buy, Sell & Exchange.<br>All Within Your Campus.</h1>
      <p class="hero-subtitle">UniSwap connects university students to trade affordable essentials — textbooks, calculators, laptops, and more. Verified students only.</p>
      <div class="hero-search">
        <div class="search-bar-hero">
          <span class="search-icon">🔍</span>
          <input type="text" id="heroSearchInput" class="search-input-hero" placeholder="Search textbooks, calculators, laptops, and more…" value="${appState.browseFilters.search||''}" onkeydown="if(event.key==='Enter'){appState.browseFilters.search=this.value;navigate('browse');}">
          <button class="search-btn-hero" onclick="appState.browseFilters.search=document.getElementById('heroSearchInput').value;navigate('browse')">Search</button>
        </div>
      </div>
      <div class="hero-actions">
        <button class="btn btn-white btn-lg" onclick="navigate('browse')">🛍️ Browse Items</button>
        <button class="btn btn-outline-white btn-lg" onclick="navigate('sell')">+ Sell an Item</button>
      </div>
      <div class="hero-stats">
        <div class="stat-item"><span class="stat-number">2,400+</span><span class="stat-label">Items Listed</span></div>
        <div class="stat-divider"></div>
        <div class="stat-item"><span class="stat-number">25+</span><span class="stat-label">Universities</span></div>
      </div>
    </div>
  </section>
  <section class="categories-section">
    <div class="container">
      <div class="section-header"><h2 class="section-title">Browse by Category</h2><a href="#" onclick="navigate('browse');return false;" class="see-all-link">View All →</a></div>
      <div class="categories-grid">
        ${CATEGORIES.map(c=>`<div class="category-card" onclick="appState.browseFilters.category='${c.id}';appState.browseFilters.search='';navigate('browse')">
          <div class="category-icon-wrap" style="background:${c.gradient}"><span class="category-icon">${c.icon}</span></div>
          <div class="category-info"><span class="category-name">${c.name}</span><span class="category-count">${c.count} items</span></div>
        </div>`).join('')}
      </div>
    </div>
  </section>
  <section class="listings-section">
    <div class="container">
      <div class="section-header"><h2 class="section-title">Recently Listed Items</h2><a href="#" onclick="navigate('browse');return false;" class="see-all-link">See All Items →</a></div>
      <div class="products-grid">${recent.map(p=>productCard(p)).join('')}</div>
    </div>
  </section>
  <section class="why-section">
    <div class="container">
      <div class="section-header centered"><h2 class="section-title">Why Choose UniSwap?</h2><p class="section-subtitle">Built for students, by students. The smartest way to trade university essentials.</p></div>
      <div class="why-grid">${WHY_FEATURES.map(f=>`<div class="why-card"><div class="why-icon">${f.icon}</div><h3 class="why-title">${f.title}</h3><p class="why-desc">${f.desc}</p></div>`).join('')}</div>
    </div>
  </section>
  <section class="cta-section">
    <div class="container">
      <div class="cta-card">
        <div class="cta-content">
          <h2>Ready to Join UniSwap?</h2>
          <p>Register with your university email and start saving money on university essentials today.</p>
          <div class="cta-actions">
            <button class="btn btn-white btn-lg" onclick="navigate('register')">Create Free Account</button>
            <button class="btn btn-outline-white" onclick="navigate('browse')">Browse as Guest</button>
          </div>
        </div>
        <div class="cta-decoration">🎓</div>
      </div>
    </div>
  </section>
</div>`;
}

// ---- RENDER: BROWSE ----
function renderBrowse(){
  const filtered=getFilteredProducts();
  const counts={};
  allProducts().forEach(p=>{ counts[p.category]=(counts[p.category]||0)+1; });
  return `<div class="browse-page page-animate">
  <div class="container">
    <div class="browse-header">
      <h1>Browse Listings</h1>
      <div class="browse-search-bar">
        <span>🔍</span>
        <input type="text" id="browseSearch" class="browse-search-input" placeholder="Search items..." value="${appState.browseFilters.search}" oninput="handleBrowseSearch(this.value)">
        <button class="browse-search-btn" onclick="handleBrowseSearch(document.getElementById('browseSearch').value)">Search</button>
      </div>
    </div>
    <div class="browse-layout">
      <aside class="browse-sidebar">
        <div class="sidebar-section">
          <div class="sidebar-title">Category</div>
          ${[{id:'all',name:'All Items',icon:'🛍️',count:allProducts().length},...CATEGORIES].map(c=>`<button class="filter-option${appState.browseFilters.category===c.id?' active':''}" onclick="setFilter('category','${c.id}')">${c.icon} ${c.name}<span class="filter-count">${c.id==='all'?allProducts().length:(counts[c.id]||0)}</span></button>`).join('')}
        </div>
        <div class="sidebar-section">
          <div class="sidebar-title">Condition</div>
          ${['all','New','Like New','Used'].map(c=>`<button class="filter-option${appState.browseFilters.condition===c?' active':''}" onclick="setFilter('condition','${c}')">${c==='all'?'📦 All':c==='New'?'✨ New':c==='Like New'?'🌟 Like New':'📦 Used'}<span class="filter-count">${c==='all'?allProducts().length:allProducts().filter(p=>p.condition===c).length}</span></button>`).join('')}
        </div>
        <div class="sidebar-section">
          <div class="sidebar-title">Price Range (PKR)</div>
          <div class="price-range-inputs">
            <div class="price-input-group"><label class="price-input-label">Min</label><input type="number" id="minP" class="price-input" placeholder="0" value="${appState.browseFilters.minPrice||''}" min="0"></div>
            <span class="price-divider">—</span>
            <div class="price-input-group"><label class="price-input-label">Max</label><input type="number" id="maxP" class="price-input" placeholder="100,000" value="${appState.browseFilters.maxPrice<100000?appState.browseFilters.maxPrice:''}" min="0"></div>
          </div>
          <button class="apply-price-btn" onclick="applyPrice()">Apply Price Filter</button>
        </div>
        <div class="sidebar-section">
          <div class="sidebar-title">Listing Type</div>
          ${['all','sale','exchange','free'].map(t=>`<button class="filter-option${(appState.browseFilters.listingType||'all')===t?' active':''}" onclick="setFilter('listingType','${t}')">${t==='all'?'🛍️ All Types':t==='sale'?'💵 For Sale':t==='exchange'?'🔄 Exchange':'🎁 Free'}<span class="filter-count">${t==='all'?allProducts().length:allProducts().filter(p=>t==='free'?p.price===0:p.listingType===t).length}</span></button>`).join('')}
        </div>
        <button class="clear-filters-btn" onclick="clearFilters()">✕ Clear All Filters</button>
      </aside>
      <div class="browse-main">
        ${renderActiveFilters()}
        <div class="browse-toolbar">
          <p class="browse-results-count"><strong>${filtered.length}</strong> ${filtered.length===1?'item':'items'} found</p>
          <select class="sort-select" onchange="setFilter('sort',this.value)">
            <option value="recent"${appState.browseFilters.sort==='recent'?' selected':''}>Recently Listed</option>
            <option value="price_asc"${appState.browseFilters.sort==='price_asc'?' selected':''}>Price: Low to High</option>
            <option value="price_desc"${appState.browseFilters.sort==='price_desc'?' selected':''}>Price: High to Low</option>
            <option value="popular"${appState.browseFilters.sort==='popular'?' selected':''}>Most Popular</option>
          </select>
        </div>
        ${filtered.length===0
          ?`<div class="empty-state"><div class="empty-state-icon">🔍</div><h3>No items found</h3><p>Try adjusting your filters or search query</p><button class="btn btn-primary" onclick="clearFilters()">Clear All Filters</button></div>`
          :`<div class="products-grid">${filtered.map(p=>productCard(p)).join('')}</div>`}
      </div>
    </div>
  </div>
</div>`;
}

function renderActiveFilters(){
  const chips=[];
  const f=appState.browseFilters;
  if(f.search) chips.push(`<span class="filter-chip">🔍 "${f.search}" <button class="filter-chip-remove" onclick="setFilter('search','')">×</button></span>`);
  if(f.category!=='all'){ const c=CATEGORIES.find(x=>x.id===f.category); chips.push(`<span class="filter-chip">${c?.icon||''} ${c?.name||f.category} <button class="filter-chip-remove" onclick="setFilter('category','all')">×</button></span>`); }
  if(f.condition!=='all') chips.push(`<span class="filter-chip">📦 ${f.condition} <button class="filter-chip-remove" onclick="setFilter('condition','all')">×</button></span>`);
  if(f.minPrice>0||f.maxPrice<100000) chips.push(`<span class="filter-chip">💰 Rs.${f.minPrice.toLocaleString()} – Rs.${f.maxPrice.toLocaleString()} <button class="filter-chip-remove" onclick="appState.browseFilters.minPrice=0;appState.browseFilters.maxPrice=100000;updateBrowse()">×</button></span>`);
  if((f.listingType||'all')!=='all') chips.push(`<span class="filter-chip">${f.listingType==='sale'?'💵 For Sale':f.listingType==='exchange'?'🔄 Exchange':'🎁 Free'} <button class="filter-chip-remove" onclick="setFilter('listingType','all')">×</button></span>`);
  return chips.length?`<div class="active-filters">${chips.join('')}</div>`:'';
}

// ---- RENDER: PRODUCT DETAIL ----
function renderProduct(p){
  const seller=SELLERS[p.sellerId]||{ name:appState.user?.name||'Unknown', initials:'?', university:appState.user?.university||'Unknown University', department:'Student', color:'#1a5c3a', verified:false, rating:4.5, totalListings:1, sales:0, joinedDate:'Recently', bio:'UniSwap seller.' };
  const disc=discount(p.price,p.originalPrice);
  const wl=inWishlist(p.id);
  const cat=CATEGORIES.find(c=>c.id===p.category);
  return `<div class="product-detail-page page-animate">
  <div class="container">
    <div class="product-detail-breadcrumb">
      <a class="breadcrumb-link" onclick="navigate('home')">Home</a> /
      <a class="breadcrumb-link" onclick="navigate('browse')">Browse</a> /
      <a class="breadcrumb-link" onclick="appState.browseFilters.category='${p.category}';navigate('browse')">${cat?.name||'Items'}</a> /
      <span>${p.title.split(' ').slice(0,4).join(' ')}…</span>
    </div>
    <div class="product-detail-grid">
      <div>
        <div class="product-detail-main">
          <div class="product-detail-image" style="background:${p.gradient}"><span class="product-detail-emoji">${p.icon}</span></div>
          <div class="image-thumbs">
            <div class="image-thumb active" style="background:${p.gradient}20">${p.icon}</div>
            <div class="image-thumb" style="background:#f0f4f2">📷</div>
            <div class="image-thumb" style="background:#f0f4f2">📷</div>
          </div>
          <div class="product-detail-info">
            <div class="product-detail-badges">
              ${condBadge(p.condition)}
              ${typeBadge(p.listingType)}
              ${disc?`<span class="badge" style="background:#fee2e2;color:#dc2626">${disc}% OFF</span>`:''}
            </div>
            <h1 class="product-detail-title">${p.title}</h1>
            <div class="product-detail-price">${p.listingType==='exchange'?'🔄 Open to Exchange':formatPrice(p.price)}</div>
            ${p.originalPrice?`<p class="product-detail-original">Original: Rs. ${p.originalPrice.toLocaleString()}</p>`:''}
            <div class="detail-info-grid">
              <div class="detail-info-item"><div class="detail-info-label">Condition</div><div class="detail-info-value">${p.condition}</div></div>
              <div class="detail-info-item"><div class="detail-info-label">Listing Type</div><div class="detail-info-value">${p.listingType==='sale'?'For Sale':p.listingType==='exchange'?'Exchange':'Free'}</div></div>
              <div class="detail-info-item"><div class="detail-info-label">University</div><div class="detail-info-value">${p.university}</div></div>
              <div class="detail-info-item"><div class="detail-info-label">Posted</div><div class="detail-info-value">${timeAgo(p.posted)}</div></div>
            </div>
            <div class="product-description-section"><h4>Description</h4><p>${p.description}</p></div>
            ${p.conditionNote?`<div class="product-description-section"><h4>Condition Notes</h4><p>${p.conditionNote}</p></div>`:''}
            <div class="product-detail-stats">
              <div class="detail-stat">👁️ ${p.views+1} views</div>
              <div class="detail-stat">❤️ ${p.saved} saves</div>
              <div class="detail-stat">🏫 ${p.university}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-detail-sidebar">
        <div class="action-card">
          <h3>Interested in this item?</h3>
          <div class="action-buttons">
            <button class="btn btn-primary btn-block" onclick="openContactModal(${p.id},'${p.title.replace(/'/g,"\\\'")}')">💬 Contact Seller</button>
            ${p.listingType==='sale'?`<button class="btn btn-outline btn-block" onclick="openOfferModal(${p.id},'${p.title.replace(/'/g,"\\'")}',${p.price})">💰 Make an Offer</button>`:''}
            <button class="btn ${wl?'btn-success':'btn-outline'} btn-block" id="wlBtn_${p.id}" onclick="toggleWishlist(${p.id})">${wl?'❤️ Saved to Wishlist':'🤍 Save to Wishlist'}</button>
          </div>
        </div>
        <div class="seller-card">
          <div class="seller-header">
            <div class="seller-avatar" style="background:${seller.color}">${seller.initials}</div>
            <div class="seller-info">
              <h4>${seller.name} ${seller.verified?'<span class="badge badge-verified">✓ Verified</span>':''}</h4>
              <p>${seller.department} · ${seller.university}</p>
            </div>
          </div>
          <div class="seller-stats">
            <div class="seller-stat"><span class="seller-stat-value">⭐ ${seller.rating}</span><span class="seller-stat-label">Rating</span></div>
            <div class="seller-stat"><span class="seller-stat-value">${seller.totalListings}</span><span class="seller-stat-label">Listings</span></div>
            <div class="seller-stat"><span class="seller-stat-value">${seller.sales}</span><span class="seller-stat-label">Sold</span></div>
            <div class="seller-stat"><span class="seller-stat-value">98%</span><span class="seller-stat-label">Response</span></div>
          </div>
          <p style="font-size:13px;color:var(--text-muted);margin-bottom:10px">"${seller.bio}"</p>
          <p style="font-size:12px;color:var(--text-muted)">Member since ${seller.joinedDate}</p>
        </div>
        <div class="safety-card">
          <h3>🛡️ Safety Tips</h3>
          <ul>
            <li>Meet in a public, busy place on campus</li>
            <li>Inspect the item before paying</li>
            <li>Never send money before receiving the item</li>
            <li>Use UniSwap messaging for all communication</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>`;
}

// ---- RENDER: SELL ----
function renderSell(){
  return `<div class="page-animate">
  <div class="sell-page">
    <div class="sell-header"><h1>📦 List an Item for Sale</h1><p>Fill in the details below to list your item. Free and takes under 2 minutes!</p></div>
    <div class="prototype-note">⚠️ <strong>Prototype:</strong> Listings are saved locally in your browser and appear immediately. In production, listings would be reviewed before publishing.</div>
    <div class="sell-form-card" id="sellFormCard">
      <form id="sellForm" onsubmit="handleSellSubmit(event)">
        <div class="form-section">
          <div class="form-section-title"><span class="form-section-number">1</span> Item Information</div>
          <div class="form-group"><label class="form-label">Item Title <span class="required">*</span></label><input type="text" id="iTitle" class="form-input" placeholder="e.g. Marketing Principles by Philip Kotler 15th Edition" required maxlength="100"><p class="form-hint">Be specific — mention book name, edition, brand or model.</p></div>
          <div class="form-row">
            <div class="form-group"><label class="form-label">Category <span class="required">*</span></label><select id="iCategory" class="form-select" required><option value="">Select a category</option><option value="textbooks">📚 Textbooks</option><option value="calculators">🖩 Calculators</option><option value="notes">📝 Lecture Notes</option><option value="stationery">✏️ Stationery</option><option value="laptops">💻 Laptops</option><option value="other">🎒 Other Study Essentials</option></select></div>
            <div class="form-group"><label class="form-label">Condition <span class="required">*</span></label><select id="iCondition" class="form-select" required><option value="">Select condition</option><option value="New">✨ New — Never used</option><option value="Like New">🌟 Like New — Used but excellent</option><option value="Used">📦 Used — Normal wear</option></select></div>
          </div>
          <div class="form-group"><label class="form-label">Description <span class="required">*</span></label><textarea id="iDesc" class="form-textarea" placeholder="Describe your item — edition, any damage, what's included, why you're selling…" required style="min-height:110px"></textarea></div>
        </div>
        <div class="form-section">
          <div class="form-section-title"><span class="form-section-number">2</span> Listing Type & Price</div>
          <div class="form-group">
            <label class="form-label">Listing Type <span class="required">*</span></label>
            <div class="listing-type-grid">
              <div class="listing-type-option"><input type="radio" name="lType" id="tSale" value="sale" checked onchange="togglePriceField(this.value)"><label class="listing-type-label" for="tSale"><span class="listing-type-icon">💵</span><span class="listing-type-text">For Sale</span><span class="listing-type-desc">Set your price</span></label></div>
              <div class="listing-type-option"><input type="radio" name="lType" id="tExchange" value="exchange" onchange="togglePriceField(this.value)"><label class="listing-type-label" for="tExchange"><span class="listing-type-icon">🔄</span><span class="listing-type-text">Exchange</span><span class="listing-type-desc">Trade for something</span></label></div>
              <div class="listing-type-option"><input type="radio" name="lType" id="tFree" value="free" onchange="togglePriceField(this.value)"><label class="listing-type-label" for="tFree"><span class="listing-type-icon">🎁</span><span class="listing-type-text">Free</span><span class="listing-type-desc">Give it away</span></label></div>
            </div>
          </div>
          <div id="priceField" class="form-row">
            <div class="form-group"><label class="form-label">Price (PKR) <span class="required">*</span></label><input type="number" id="iPrice" class="form-input" placeholder="e.g. 800" min="0" max="500000"><p class="form-hint">Leave blank for exchange/free items.</p></div>
            <div class="form-group"><label class="form-label">Original Price (optional)</label><input type="number" id="iOPrice" class="form-input" placeholder="e.g. 2500" min="0"><p class="form-hint">Shows buyers the discount they're getting.</p></div>
          </div>
        </div>
        <div class="form-section">
          <div class="form-section-title"><span class="form-section-number">3</span> Photos</div>
          <div class="image-upload-area" id="uploadArea" onclick="document.getElementById('imgUpload').click()">
            <input type="file" id="imgUpload" accept="image/*" multiple style="display:none" onchange="handleImageUpload(this)">
            <div class="upload-icon">📸</div>
            <p class="upload-text">Click to upload photos of your item</p>
            <p class="upload-hint">JPG, PNG or WEBP · Max 5MB each · Up to 4 photos</p>
          </div>
          <div class="image-preview" id="imgPreview"></div>
        </div>
        <div class="form-section">
          <div class="form-section-title"><span class="form-section-number">4</span> University</div>
          <div class="form-group"><label class="form-label">Your University <span class="required">*</span></label><input type="text" id="iUniversity" class="form-input" placeholder="e.g. FAST-NUCES Karachi" value="${appState.user?.university||''}" required><p class="form-hint">Buyers will use this to arrange meetups on campus.</p></div>
        </div>
        <div style="border-top:1px solid var(--border-light);padding-top:22px;margin-top:4px">
          <button type="submit" class="btn btn-primary btn-lg btn-block" id="publishBtn">🚀 Publish Listing</button>
          <p style="text-align:center;font-size:13px;color:var(--text-muted);margin-top:10px">By publishing, you agree to UniSwap's <a href="#" style="color:var(--primary)">Terms of Service</a>.</p>
        </div>
      </form>
    </div>
  </div>
</div>`;
}

// ---- RENDER: LOGIN ----
function renderLogin(){
  return `<div class="auth-page page-animate">
  <div class="auth-card">
    <div class="auth-logo"><div class="logo-icon">U</div><span>UniSwap</span></div>
    <h1>Welcome back! 👋</h1>
    <p class="auth-subtitle">Login to access your student marketplace</p>
    <div class="demo-credentials"><h4>🧪 Demo Credentials</h4><p><strong>Email:</strong> student@nu.edu.pk<br><strong>Password:</strong> demo123<br><br><strong>Email:</strong> test@lums.edu.pk<br><strong>Password:</strong> test123</p></div>
    <form id="loginForm" onsubmit="handleLoginSubmit(event)">
      <div class="form-group"><label class="form-label">University Email</label><input type="email" id="lEmail" class="form-input" placeholder="student@university.edu.pk" required autocomplete="email"></div>
      <div class="form-group"><label class="form-label">Password</label><input type="password" id="lPass" class="form-input" placeholder="Enter your password" required autocomplete="current-password"></div>
      <div id="lError" style="display:none;font-size:13px;background:var(--error-bg);color:var(--error);padding:10px 14px;border-radius:8px;margin-bottom:12px"></div>
      <button type="submit" class="btn btn-primary btn-lg btn-block" style="margin-top:6px">Login to UniSwap</button>
    </form>
    <div class="auth-divider"><span>or</span></div>
    <div class="auth-switch">Don't have an account? <a href="#" onclick="navigate('register');return false;">Register for free →</a></div>
    <p style="text-align:center;margin-top:14px;font-size:12px;color:var(--text-muted)">⚠️ Prototype: Authentication is simulated for demonstration.</p>
  </div>
</div>`;
}

// ---- RENDER: REGISTER ----
function renderRegister(){
  const step=appState.registerStep||1;
  return `<div class="auth-page page-animate" style="align-items:flex-start;padding-top:60px">
  <div class="auth-card" style="max-width:520px">
    <div class="auth-logo"><div class="logo-icon">U</div><span>UniSwap</span></div>
    <h1>Join UniSwap 🎓</h1>
    <p class="auth-subtitle">Create your student account — exclusively for university students.</p>
    <div class="register-steps">
      <div class="step-dot ${step>=1?'active':''}">${step>1?'✓':'1'}</div>
      <div class="step-line ${step>=2?'done':''}"></div>
      <div class="step-dot ${step>=2?'active':''}">${step>2?'✓':'2'}</div>
      <div class="step-line ${step>=3?'done':''}"></div>
      <div class="step-dot ${step>=3?'active':''}">3</div>
    </div>
    ${step===1?renderRegStep1():step===2?renderRegStep2():renderRegStep3()}
    <div class="auth-switch" style="margin-top:18px">Already have an account? <a href="#" onclick="navigate('login');return false;">Login →</a></div>
    <p style="text-align:center;margin-top:10px;font-size:12px;color:var(--text-muted)">⚠️ Prototype: Registration is simulated. No real server data is stored.</p>
  </div>
</div>`;
}

function renderRegStep1(){
  return `<p style="font-size:13px;font-weight:600;color:var(--text-muted);text-align:center;margin-bottom:18px">Step 1 of 3 — Basic Information</p>
  <form id="regStep1" onsubmit="handleRegStep1(event)">
    <div class="form-group"><label class="form-label">Full Name <span class="required">*</span></label><input type="text" id="rName" class="form-input" placeholder="Ahmed Khan" required autocomplete="name"></div>
    <div class="form-group"><label class="form-label">University Email <span class="required">*</span></label><input type="email" id="rEmail" class="form-input" placeholder="student@university.edu.pk" required autocomplete="email"><p class="form-hint">Must be a valid university email (.edu.pk, .ac.pk, .edu)</p></div>
    <div class="form-group"><label class="form-label">University Name <span class="required">*</span></label><input type="text" id="rUniversity" class="form-input" placeholder="e.g. FAST-NUCES Karachi" required></div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Password <span class="required">*</span></label><input type="password" id="rPass" class="form-input" placeholder="Min. 6 characters" required minlength="6"></div>
      <div class="form-group"><label class="form-label">Confirm Password <span class="required">*</span></label><input type="password" id="rConfirm" class="form-input" placeholder="Repeat password" required></div>
    </div>
    <div id="rStep1Err" style="display:none;font-size:13px;background:var(--error-bg);color:var(--error);padding:10px 14px;border-radius:8px;margin-bottom:12px"></div>
    <button type="submit" class="btn btn-primary btn-lg btn-block">Continue →</button>
  </form>`;
}

function renderRegStep2(){
  const t=appState._tempReg||{};
  return `<p style="font-size:13px;font-weight:600;color:var(--text-muted);text-align:center;margin-bottom:18px">Step 2 of 3 — University Verification</p>
  <div class="verification-info"><p>🔐 <strong>Why do we verify?</strong><br><br>UniSwap is exclusively for university students. We verify every member is a real student at a recognized Pakistani university to keep the marketplace safe and trusted.</p></div>
  <form id="regStep2" onsubmit="handleRegStep2(event)">
    <div class="form-group">
      <label class="form-label">Email Verification</label>
      <div style="background:var(--primary-faint);border:1px solid var(--primary-subtle);padding:12px;border-radius:var(--radius);font-size:13px;color:var(--primary);margin-bottom:4px">✅ In production, a verification link would be sent to <strong>${t.email||'your email'}</strong>. For this prototype, email is auto-verified.</div>
    </div>
    <div class="form-group">
      <label class="form-label">Upload Student ID Card <span class="required">*</span></label>
      <div class="id-upload-area" onclick="document.getElementById('idUpload').click()">
        <input type="file" id="idUpload" accept="image/*,.pdf" style="display:none" onchange="handleIdUpload(this)">
        <div style="font-size:36px;margin-bottom:8px">🪪</div>
        <p style="font-size:14px;font-weight:600;color:var(--text-secondary)">Upload your Student ID Card</p>
        <p style="font-size:12px;color:var(--text-muted)">Front side · JPG, PNG or PDF · Max 5MB</p>
      </div>
      <div id="idStatus" style="font-size:13px;color:var(--text-muted);text-align:center;margin-top:8px"></div>
      <p class="form-hint">⚠️ Prototype: ID is not actually processed. In production, IDs are reviewed by admins within 24 hours.</p>
    </div>
    <div class="form-group"><label class="form-label">Student Enrollment Number (optional)</label><input type="text" id="rStudentId" class="form-input" placeholder="e.g. FA20-BCE-001"><p class="form-hint">Helps speed up verification in production.</p></div>
    <div style="display:flex;gap:12px;margin-top:8px">
      <button type="button" class="btn btn-outline" onclick="appState.registerStep=1;renderPage()">← Back</button>
      <button type="submit" class="btn btn-primary btn-block">Continue →</button>
    </div>
  </form>`;
}

function renderRegStep3(){
  return `<div style="text-align:center;padding:16px 0">
  <div style="font-size:64px;margin-bottom:14px">🎉</div>
  <h2 style="font-size:22px;font-weight:800;margin-bottom:8px">Account Created!</h2>
  <p style="font-size:15px;color:var(--text-muted);margin-bottom:20px">Your account is ready. Verification status is <strong>Pending</strong>.</p>
  <div style="background:var(--warning-bg);border:1px solid #fde68a;border-radius:var(--radius);padding:14px;margin-bottom:16px;text-align:left">
    <p style="font-size:13px;color:#92400e;line-height:1.8">⏳ <strong>Verification Status: Pending</strong><br><br>Your Student ID is being reviewed. In production, this takes up to 24 hours. For this prototype, you can access the full marketplace right away.</p>
  </div>
  <div style="background:var(--primary-faint);border:1px solid var(--primary-subtle);border-radius:var(--radius);padding:14px;margin-bottom:20px;text-align:left">
    <p style="font-size:13px;color:var(--primary);line-height:2">📌 <strong>Verification Process:</strong><br>1. ✅ Email verified (done)<br>2. ⏳ Student ID reviewed by admin<br>3. 🎓 Full marketplace access granted</p>
  </div>
  <div style="display:flex;flex-direction:column;gap:10px">
    <button class="btn btn-primary btn-block btn-lg" onclick="completeRegistration()">🚀 Go to My Dashboard</button>
    <button class="btn btn-outline btn-block" onclick="navigate('browse')">Browse the Marketplace</button>
  </div>
</div>`;
}

// ---- RENDER: DASHBOARD ----
function renderDashboard(){
  const u=appState.user, tab=appState.activeTab||'listings';
  const ini=getInitials(u.name);
  const wlItems=allProducts().filter(p=>appState.wishlist.includes(p.id));
  return `<div class="dashboard-page page-animate">
  <div class="container">
    <div class="dashboard-header">
      <div class="dashboard-welcome"><h1>Welcome back, ${u.name.split(' ')[0]}! 👋</h1><p>Manage your listings, saved items, and account settings.</p></div>
      <button class="btn btn-primary" onclick="navigate('sell')">+ List New Item</button>
    </div>
    <div class="dashboard-overview">
      <div class="overview-card"><div class="overview-icon" style="background:#dcf5e7">📦</div><div class="overview-info"><div class="overview-value">${appState.userListings.length}</div><div class="overview-label">My Listings</div></div></div>
      <div class="overview-card"><div class="overview-icon" style="background:#dbeafe">❤️</div><div class="overview-info"><div class="overview-value">${appState.wishlist.length}</div><div class="overview-label">Saved Items</div></div></div>
      <div class="overview-card"><div class="overview-icon" style="background:#fce7f3">💬</div><div class="overview-info"><div class="overview-value">${SAMPLE_INQUIRIES.length}</div><div class="overview-label">Inquiries</div></div></div>
      <div class="overview-card" onclick="switchTab('profile')" style="cursor:pointer"><div class="overview-icon" style="background:${u.verificationStatus==='verified'?'var(--success-bg)':'var(--warning-bg)'}">${u.verificationStatus==='verified'?'✅':'⏳'}</div><div class="overview-info"><div class="overview-value" style="font-size:16px;text-transform:capitalize">${u.verificationStatus||'pending'}</div><div class="overview-label">Verification</div></div></div>
    </div>
    <div class="dashboard-tabs">
      <button class="tab-btn${tab==='listings'?' active':''}" onclick="switchTab('listings')">📦 My Listings${appState.userListings.length?` <span class="tab-badge">${appState.userListings.length}</span>`:''}</button>
      <button class="tab-btn${tab==='saved'?' active':''}" onclick="switchTab('saved')">❤️ Saved${appState.wishlist.length?` <span class="tab-badge">${appState.wishlist.length}</span>`:''}</button>
      <button class="tab-btn${tab==='inquiries'?' active':''}" onclick="switchTab('inquiries')">💬 Inquiries <span class="tab-badge">${SAMPLE_INQUIRIES.filter(i=>i.isNew).length}</span></button>
      <button class="tab-btn${tab==='profile'?' active':''}" onclick="switchTab('profile')">👤 My Profile</button>
    </div>
    <div id="dashTab">${renderDashTab(tab,wlItems,u,ini)}</div>
  </div>
</div>`;
}

function renderDashTab(tab,wlItems,u,ini){
  u=u||appState.user; ini=ini||getInitials(u.name);
  wlItems=wlItems||allProducts().filter(p=>appState.wishlist.includes(p.id));
  switch(tab){
    case'listings': return renderListingsTab();
    case'saved': return renderSavedTab(wlItems);
    case'inquiries': return renderInquiriesTab();
    case'profile': return renderProfileTab(u,ini);
    default: return renderListingsTab();
  }
}

function renderListingsTab(){
  const listings=appState.userListings;
  if(!listings.length) return `<div class="empty-state"><div class="empty-state-icon">📦</div><h3>No listings yet</h3><p>Start selling by listing your first item. It's free!</p><button class="btn btn-primary" onclick="navigate('sell')">+ List Your First Item</button></div>`;
  return `<div class="dashboard-listings">${listings.map(item=>`<div class="dashboard-listing-row"><div class="listing-mini-image" style="background:${item.gradient||'#f0f4f2'}">${item.icon||'📦'}</div><div class="listing-mini-info"><div class="listing-mini-title">${item.title}</div><div class="listing-mini-meta">${item.price>0?`<strong style="color:var(--primary)">${formatPrice(item.price)}</strong>`:item.listingType==='exchange'?'🔄 Exchange':'🎁 Free'} · ${condBadge(item.condition)} · Posted ${timeAgo(item.posted)}</div></div><div class="listing-mini-actions"><button class="btn btn-outline btn-sm" onclick="navigate('product',{id:${item.id}})">View</button><button class="btn btn-danger btn-sm" onclick="delListing(${item.id})">Delete</button></div></div>`).join('')}</div>`;
}

function renderSavedTab(wlItems){
  if(!wlItems.length) return `<div class="empty-state"><div class="empty-state-icon">🤍</div><h3>No saved items</h3><p>Browse and tap the heart icon to save items you like.</p><button class="btn btn-primary" onclick="navigate('browse')">Browse Items</button></div>`;
  return `<div class="products-grid">${wlItems.map(p=>productCard(p)).join('')}</div>`;
}

function renderInquiriesTab(){
  return SAMPLE_INQUIRIES.map(inq=>`<div class="inquiry-card"><div class="inquiry-header"><div class="inquiry-avatar" style="background:${inq.color}">${inq.initials}</div><div class="inquiry-from">${inq.from} ${inq.isNew?'<span class="badge badge-new" style="font-size:10px">New</span>':''}</div><div class="inquiry-time">${inq.time}</div></div><div class="inquiry-item-ref">📦 Re: ${inq.itemTitle}</div><div class="inquiry-message">"${inq.message}"</div><div style="margin-top:12px;display:flex;gap:8px"><button class="btn btn-primary btn-sm" onclick="openReplyModal('${inq.from}')">Reply</button><button class="btn btn-grey btn-sm" onclick="showToast('Marked as read','info')">Mark Read</button></div></div>`).join('');
}

function renderProfileTab(u,ini){
  const vs=u.verificationStatus||'pending';
  const vBadge={'verified':'<span class="badge badge-verified">✓ Verified</span>','pending':'<span class="badge badge-pending">⏳ Pending</span>','rejected':'<span class="badge badge-rejected">✕ Rejected</span>'}[vs]||'<span class="badge badge-pending">⏳ Pending</span>';
  return `<div>
  <div class="verification-card">
    <div class="verification-status-header"><h3>🔒 Verification Status</h3>${vBadge}</div>
    <ul class="verification-steps-list">
      <li class="verification-step-item"><span class="step-check done">✓</span> Account created with university email</li>
      <li class="verification-step-item"><span class="step-check done">✓</span> Email address verified</li>
      <li class="verification-step-item"><span class="step-check ${vs==='verified'?'done':'pending'}">${vs==='verified'?'✓':'⏳'}</span> Student ID reviewed by admin ${vs==='pending'?'<span style="font-size:11px;color:var(--warning);margin-left:6px">(Under review)</span>':''}</li>
      <li class="verification-step-item"><span class="step-check ${vs==='verified'?'done':'todo'}">${vs==='verified'?'✓':'○'}</span> Full marketplace access granted</li>
    </ul>
    ${vs==='pending'?`<div style="margin-top:14px;padding:12px;background:var(--warning-bg);border-radius:var(--radius-sm);font-size:13px;color:#92400e">⏳ Student ID is being reviewed. You'll be notified within 24 hours.<br><br><button class="btn btn-sm" style="background:var(--warning);color:white" onclick="simulateVerification()">Simulate Approval (Demo)</button></div>`:vs==='verified'?`<div style="margin-top:14px;padding:12px;background:var(--success-bg);border-radius:var(--radius-sm);font-size:13px;color:#166534">✅ Your account is fully verified! Full marketplace access granted.</div>`:''}
  </div>
  <div class="profile-card">
    <div class="profile-header"><div class="profile-avatar-large" style="background:${u.color||'#1a5c3a'}">${ini}</div><div class="profile-header-info"><h3>${u.name}</h3><p>${u.email}</p><p style="margin-top:4px">${u.university}</p></div></div>
    <form id="profileForm" onsubmit="handleProfileUpdate(event)">
      <div class="form-row"><div class="form-group"><label class="form-label">Full Name</label><input type="text" id="pName" class="form-input" value="${u.name}" required></div><div class="form-group"><label class="form-label">University</label><input type="text" id="pUniv" class="form-input" value="${u.university||''}"></div></div>
      <div class="form-group"><label class="form-label">Bio (optional)</label><textarea id="pBio" class="form-textarea" placeholder="Tell others about yourself…" style="min-height:80px">${u.bio||''}</textarea></div>
      <button type="submit" class="btn btn-primary">Save Changes</button>
    </form>
    <div style="margin-top:20px;padding-top:20px;border-top:1px solid var(--border-light)"><button class="btn btn-danger btn-sm" onclick="handleLogout()">🚪 Logout from UniSwap</button></div>
  </div>
</div>`;
}

function renderNotFound(){
  return `<div class="not-found page-animate"><div class="not-found-icon">😕</div><h2 style="font-size:24px;font-weight:800;margin-bottom:8px">Item Not Found</h2><p style="color:var(--text-muted);margin-bottom:24px">This item may have been sold or removed.</p><button class="btn btn-primary" onclick="navigate('browse')">Browse Other Items</button></div>`;
}

// ---- PRODUCT CARD COMPONENT ----
function productCard(p){
  const disc=discount(p.price,p.originalPrice);
  const wl=inWishlist(p.id);
  const seller=SELLERS[p.sellerId];
  return `<div class="product-card" onclick="navigate('product',{id:${p.id}})">
  <div class="product-card-image" style="background:${p.gradient||'linear-gradient(135deg,#1a5c3a,#2d8653)'}">
    <span class="product-card-emoji">${p.icon||'📦'}</span>
    <div class="product-card-badges">${condBadge(p.condition)}${disc?`<span class="badge" style="background:rgba(220,38,38,.9);color:white">${disc}% OFF</span>`:''}</div>
    <button class="product-card-wishlist" onclick="event.stopPropagation();toggleWishlist(${p.id})" title="${wl?'Remove from wishlist':'Save to wishlist'}">${wl?'❤️':'🤍'}</button>
  </div>
  <div class="product-card-body">
    <p class="product-title">${p.title}</p>
    <div class="product-meta">
      <span class="product-university">🏫 ${p.university}</span>
      ${seller?`<span class="product-seller">by ${seller.name}</span>`:''}
    </div>
    <div class="product-price-row">
      <div>
        <span class="product-price">${p.listingType==='exchange'?'🔄 Exchange':formatPrice(p.price)}</span>
        ${p.originalPrice?`<br><span class="product-original-price">Rs. ${p.originalPrice.toLocaleString()}</span>`:''}
      </div>
      ${typeBadge(p.listingType)}
    </div>
    <div class="product-card-footer"><button class="btn-view-details" onclick="event.stopPropagation();navigate('product',{id:${p.id}})">View Details</button></div>
  </div>
</div>`;
}

// ---- FILTER LOGIC ----
function getFilteredProducts(){
  let ps=allProducts(), f=appState.browseFilters;
  if(f.search&&f.search.trim()){ const q=f.search.toLowerCase(); ps=ps.filter(p=>p.title.toLowerCase().includes(q)||p.description.toLowerCase().includes(q)||p.category.toLowerCase().includes(q)||p.university.toLowerCase().includes(q)); }
  if(f.category&&f.category!=='all') ps=ps.filter(p=>p.category===f.category);
  if(f.condition&&f.condition!=='all') ps=ps.filter(p=>p.condition===f.condition);
  if(f.listingType&&f.listingType!=='all'){ if(f.listingType==='free') ps=ps.filter(p=>p.price===0); else ps=ps.filter(p=>p.listingType===f.listingType); }
  ps=ps.filter(p=>p.listingType==='exchange'||p.price===0||( p.price>=(f.minPrice||0) && p.price<=(f.maxPrice||100000) ));
  switch(f.sort){
    case'price_asc': ps.sort((a,b)=>a.price-b.price); break;
    case'price_desc': ps.sort((a,b)=>b.price-a.price); break;
    case'popular': ps.sort((a,b)=>b.views-a.views); break;
    default: ps.sort((a,b)=>new Date(b.posted)-new Date(a.posted));
  }
  return ps;
}
function setFilter(k,v){ appState.browseFilters[k]=v; updateBrowse(); }
function handleBrowseSearch(v){ appState.browseFilters.search=v; updateBrowse(); }
function applyPrice(){ appState.browseFilters.minPrice=parseInt(document.getElementById('minP')?.value||0)||0; appState.browseFilters.maxPrice=parseInt(document.getElementById('maxP')?.value||100000)||100000; updateBrowse(); }
function clearFilters(){ appState.browseFilters={search:'',category:'all',condition:'all',minPrice:0,maxPrice:100000,sort:'recent',listingType:'all'}; updateBrowse(); }
function updateBrowse(){ if(appState.currentPage==='browse'){ document.getElementById('app').innerHTML=renderBrowse(); } }

// ---- WISHLIST ----
function toggleWishlist(id){
  id=parseInt(id);
  if(inWishlist(id)){ appState.wishlist=appState.wishlist.filter(x=>x!==id); showToast('Removed from wishlist','info'); }
  else{ appState.wishlist.push(id); showToast('Added to wishlist ❤️','success'); }
  saveToStorage();
  const btn=document.getElementById(`wlBtn_${id}`);
  if(btn){ btn.className=`btn ${inWishlist(id)?'btn-success':'btn-outline'} btn-block`; btn.innerHTML=inWishlist(id)?'❤️ Saved to Wishlist':'🤍 Save to Wishlist'; }
  document.querySelectorAll(`.product-card-wishlist`).forEach(b=>{ if(b.getAttribute('onclick')?.includes(`(${id})`)) b.innerHTML=inWishlist(id)?'❤️':'🤍'; });
}

// ---- SELL FORM ----
function attachSellListeners(){
  const ua=document.getElementById('uploadArea');
  if(ua){ ua.addEventListener('dragover',e=>{e.preventDefault();ua.classList.add('drag-over');}); ua.addEventListener('dragleave',()=>ua.classList.remove('drag-over')); ua.addEventListener('drop',e=>{e.preventDefault();ua.classList.remove('drag-over');if(e.dataTransfer.files.length)previewImages(e.dataTransfer.files);}); }
}
function togglePriceField(t){ const pf=document.getElementById('priceField'); if(pf) pf.style.display=t==='sale'?'':'none'; }
function handleImageUpload(inp){ if(inp.files?.length) previewImages(inp.files); }
function previewImages(files){
  const preview=document.getElementById('imgPreview'); if(!preview)return;
  preview.innerHTML='';
  Array.from(files).slice(0,4).forEach(f=>{const r=new FileReader();r.onload=e=>{const img=document.createElement('img');img.src=e.target.result;img.className='image-preview-item';preview.appendChild(img);};r.readAsDataURL(f);});
  showToast(`${Math.min(files.length,4)} photo(s) added`,'success');
}
function handleIdUpload(inp){
  const s=document.getElementById('idStatus');
  if(inp.files?.length&&s){ s.innerHTML=`<span style="color:var(--success)">✅ "${inp.files[0].name}" uploaded successfully</span>`; showToast('Student ID uploaded','success'); }
}
function handleSellSubmit(e){
  e.preventDefault();
  const title=document.getElementById('iTitle').value.trim();
  const category=document.getElementById('iCategory').value;
  const condition=document.getElementById('iCondition').value;
  const desc=document.getElementById('iDesc').value.trim();
  const lType=document.querySelector('input[name="lType"]:checked')?.value||'sale';
  const price=parseInt(document.getElementById('iPrice')?.value)||0;
  const oPrice=parseInt(document.getElementById('iOPrice')?.value)||null;
  const univ=document.getElementById('iUniversity').value.trim();
  if(!title||!category||!condition||!desc||!univ){ showToast('Please fill all required fields','error'); return; }
  const btn=document.getElementById('publishBtn'); btn.innerHTML='Publishing…'; btn.disabled=true;
  setTimeout(()=>{
    const cat=CATEGORIES.find(c=>c.id===category);
    const newP={ id:Date.now(), title, category, price, originalPrice:oPrice, condition, conditionNote:'', description:desc, university:univ, sellerId:appState.user.id, listingType:lType, icon:cat?.icon||'📦', gradient:cat?.gradient||'linear-gradient(135deg,#1a5c3a,#2d8653)', posted:new Date().toISOString(), views:0, saved:0 };
    appState.userListings.unshift(newP); saveToStorage();
    const fc=document.getElementById('sellFormCard');
    if(fc) fc.innerHTML=`<div class="success-state"><div class="success-state-icon">🎉</div><h2>Listing Published!</h2><p>Your item "<strong>${title}</strong>" has been listed on UniSwap!</p><div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:6px"><button class="btn btn-primary" onclick="navigate('browse')">Browse Listings</button><button class="btn btn-outline" onclick="navigate('dashboard')">Go to Dashboard</button><button class="btn btn-outline" onclick="navigate('sell')">List Another Item</button></div></div>`;
    showToast('Item listed successfully! 🎉','success');
  },1200);
}

// ---- AUTH ----
function handleLoginSubmit(e){
  e.preventDefault();
  const email=document.getElementById('lEmail').value.trim().toLowerCase();
  const pass=document.getElementById('lPass').value;
  const errDiv=document.getElementById('lError');
  let user=DEMO_USERS.find(u=>u.email.toLowerCase()===email&&u.password===pass);
  if(!user){ try{ const stored=JSON.parse(localStorage.getItem('uniswap_users')||'[]'); user=stored.find(u=>u.email.toLowerCase()===email&&u.password===pass); }catch(err){} }
  if(user){ appState.user=user; saveToStorage(); updateNav(); showToast(`Welcome back, ${user.name.split(' ')[0]}! 🎉`,'success'); navigate('dashboard'); }
  else{ if(errDiv){errDiv.style.display='block';errDiv.innerHTML='❌ Invalid email or password. Try the demo credentials above.';} }
}
function handleRegStep1(e){
  e.preventDefault();
  const name=document.getElementById('rName').value.trim();
  const email=document.getElementById('rEmail').value.trim().toLowerCase();
  const univ=document.getElementById('rUniversity').value.trim();
  const pass=document.getElementById('rPass').value;
  const conf=document.getElementById('rConfirm').value;
  const errDiv=document.getElementById('rStep1Err');
  const validDomains=['.edu.pk','.ac.pk','.edu','.ac.'];
  const isValid=validDomains.some(d=>email.includes(d));
  if(!isValid){ errDiv.style.display='block'; errDiv.innerHTML='❌ Please use a valid university email (.edu.pk, .ac.pk, .edu)'; return; }
  if(pass!==conf){ errDiv.style.display='block'; errDiv.innerHTML='❌ Passwords do not match'; return; }
  if(pass.length<6){ errDiv.style.display='block'; errDiv.innerHTML='❌ Password must be at least 6 characters'; return; }
  appState._tempReg={name,email,univ,pass};
  appState.registerStep=2; renderPage();
}
function handleRegStep2(e){ e.preventDefault(); appState.registerStep=3; renderPage(); }
function completeRegistration(){
  const t=appState._tempReg; if(!t){navigate('home');return;}
  const cols=['#1a5c3a','#1e40af','#6d28d9','#be185d','#b45309'];
  const color=cols[Math.floor(Math.random()*cols.length)];
  const newUser={id:'u_'+Date.now(),name:t.name,email:t.email,password:t.pass,university:t.univ,initials:getInitials(t.name),color,verificationStatus:'pending',joinedDate:new Date().toISOString(),bio:''};
  try{ const stored=JSON.parse(localStorage.getItem('uniswap_users')||'[]'); stored.push(newUser); localStorage.setItem('uniswap_users',JSON.stringify(stored)); }catch(err){}
  appState.user=newUser; appState.registerStep=1; appState._tempReg=null;
  saveToStorage(); updateNav();
  showToast(`Welcome to UniSwap, ${newUser.name.split(' ')[0]}! 🎓`,'success');
  navigate('dashboard');
}
function handleLogout(){ appState.user=null; appState.activeTab='listings'; saveToStorage(); updateNav(); showToast('You have been logged out','info'); navigate('home'); }

// ---- DASHBOARD ACTIONS ----
function switchTab(tab){
  appState.activeTab=tab;
  const content=document.getElementById('dashTab'); if(!content||!appState.user)return;
  content.innerHTML=renderDashTab(tab,null,null,null);
  document.querySelectorAll('.tab-btn').forEach(b=>{ const m=b.getAttribute('onclick')?.match(/switchTab\('(\w+)'\)/); b.classList.toggle('active',m&&m[1]===tab); });
}
function delListing(id){
  if(!confirm('Delete this listing?'))return;
  appState.userListings=appState.userListings.filter(p=>p.id!==id);
  saveToStorage(); showToast('Listing deleted','info'); switchTab('listings');
}
function handleProfileUpdate(e){
  e.preventDefault(); if(!appState.user)return;
  appState.user.name=document.getElementById('pName').value.trim();
  appState.user.university=document.getElementById('pUniv').value.trim();
  appState.user.bio=document.getElementById('pBio').value.trim();
  saveToStorage(); updateNav(); showToast('Profile updated! ✅','success');
}
function simulateVerification(){
  if(appState.user){ appState.user.verificationStatus='verified'; saveToStorage(); showToast('✅ Account verified! Full access granted.','success'); renderPage(); }
}

// ---- MODALS ----
function openModal(html){ const mb=document.getElementById('modalBackdrop'),mc=document.getElementById('modalContent'); if(!mb||!mc)return; mc.innerHTML=html; mb.classList.add('open'); }
function closeModal(){ document.getElementById('modalBackdrop')?.classList.remove('open'); }
function openContactModal(pid,title){
  openModal(`<div>
    <h3 class="modal-title">💬 Contact Seller</h3>
    <p class="modal-subtitle">Send a message about: <strong>${title}</strong></p>
    ${!appState.user?`<div style="background:var(--warning-bg);border:1px solid #fde68a;padding:12px;border-radius:var(--radius);font-size:13px;color:#92400e;margin-bottom:16px">⚠️ Please <a href="#" onclick="closeModal();navigate('login')" style="color:var(--primary);font-weight:600">login</a> to contact the seller.</div>`:''}
    <div class="form-group"><label class="form-label">Your Message</label><textarea class="form-textarea" id="contactMsg" placeholder="Hi! I'm interested in this item. Is it still available?" style="min-height:100px"></textarea></div>
    <div style="display:flex;gap:10px;margin-top:4px">
      <button class="btn btn-primary btn-block" onclick="sendContactMsg('${title}')">Send Message</button>
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
    </div>
    <p style="font-size:12px;color:var(--text-muted);margin-top:12px;text-align:center">⚠️ Prototype: Messages are simulated and not actually sent.</p>
  </div>`);
}
function sendContactMsg(title){
  const msg=document.getElementById('contactMsg')?.value.trim();
  if(!msg){showToast('Please write a message','warning');return;}
  closeModal(); showToast('Message sent to seller! ✅','success');
}
function openOfferModal(pid,title,price){
  openModal(`<div>
    <h3 class="modal-title">💰 Make an Offer</h3>
    <p class="modal-subtitle">Current price: <strong>${formatPrice(price)}</strong><br>Make a counter-offer for: ${title}</p>
    ${!appState.user?`<div style="background:var(--warning-bg);border:1px solid #fde68a;padding:12px;border-radius:var(--radius);font-size:13px;color:#92400e;margin-bottom:16px">⚠️ Please <a href="#" onclick="closeModal();navigate('login')" style="color:var(--primary);font-weight:600">login</a> to make an offer.</div>`:''}
    <div class="form-group"><label class="form-label">Your Offer (PKR)</label><input type="number" id="offerAmt" class="form-input" placeholder="e.g. ${Math.round(price*0.8)}" min="0" max="${price*2}"></div>
    <div class="form-group"><label class="form-label">Message (optional)</label><textarea class="form-textarea" id="offerMsg" placeholder="Hi! I can offer this price because…" style="min-height:70px"></textarea></div>
    <div style="display:flex;gap:10px;margin-top:4px">
      <button class="btn btn-primary btn-block" onclick="sendOffer('${title}')">Send Offer</button>
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
    </div>
    <p style="font-size:12px;color:var(--text-muted);margin-top:12px;text-align:center">⚠️ Prototype: Offers are simulated.</p>
  </div>`);
}
function sendOffer(title){
  const amt=document.getElementById('offerAmt')?.value;
  if(!amt){showToast('Please enter your offer amount','warning');return;}
  closeModal(); showToast(`Offer of Rs. ${parseInt(amt).toLocaleString()} sent! 🎯`,'success');
}
function openReplyModal(name){
  openModal(`<div>
    <h3 class="modal-title">💬 Reply to ${name}</h3>
    <div class="form-group" style="margin-top:16px"><label class="form-label">Your Reply</label><textarea class="form-textarea" id="replyMsg" placeholder="Type your reply…" style="min-height:100px"></textarea></div>
    <div style="display:flex;gap:10px;margin-top:8px">
      <button class="btn btn-primary btn-block" onclick="closeModal();showToast('Reply sent to ${name}! ✅','success')">Send Reply</button>
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
    </div>
    <p style="font-size:12px;color:var(--text-muted);margin-top:12px;text-align:center">⚠️ Prototype: Messages are simulated.</p>
  </div>`);
}

// ---- TOAST ----
function showToast(msg,type='info'){
  const icons={success:'✅',error:'❌',warning:'⚠️',info:'ℹ️'};
  const tc=document.getElementById('toastContainer'); if(!tc)return;
  const t=document.createElement('div');
  t.className=`toast ${type}`; t.innerHTML=`<span class="toast-icon">${icons[type]||'ℹ️'}</span><span>${msg}</span>`;
  tc.appendChild(t); setTimeout(()=>t.remove(),3200);
}

// ---- NAVBAR SCROLL ----
window.addEventListener('scroll',()=>{ document.getElementById('navbar')?.classList.toggle('scrolled',window.scrollY>10); });

// ---- INIT ----
function init(){
  loadFromStorage();
  const h=location.hash.replace('#','');
  if(!h) appState.currentPage='home';
  else if(h.startsWith('product/')){ appState.currentPage='product'; appState.currentProductId=parseInt(h.split('/')[1]); }
  else appState.currentPage=h||'home';
  renderPage();
}

document.addEventListener('DOMContentLoaded',init);
