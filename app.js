/* ==================== Roomzy Demo Data ==================== */
const PROPERTIES = [
  {id:1, name:"Colonial Heritage", hood:"Pansodan", price:600000, beds:2, baths:1, size:750, furnished:"Furnished", utilities:"Water, WiFi, electricity Included", verified:true, img:"apartment_pic1.jpg", type:"Apartment"},
  {id:2, name:"Downtown Business Studio", hood:"Pansodan", price:400000, beds:1, baths:1, size:420, furnished:"Furnished", utilities:"Wi-Fi Included", verified:true, img:"studio.svg", type:"Studio"},
  {id:3, name:"Heritage Building Shared Room", hood:"Pansodan", price:300000, beds:1, baths:1, size:280, furnished:"Unfurnished", utilities:"Electricity Extra", verified:false, img:"shared.svg", type:"Shared Room"},
  {id:4, name:"Pansodan Riverside Condo", hood:"Pansodan", price:700000, beds:2, baths:2, size:900, furnished:"Furnished", utilities:"Wi-Fi Included", verified:true, img:"condo.svg", type:"Condo"},
  {id:5, name:"Affordable 1BR Near Market", hood:"Hlaing", price:450000, beds:1, baths:1, size:500, furnished:"Furnished", utilities:"Wi-Fi Included", verified:true, img:"assets/apartment.svg", type:"Apartment"},
  {id:6, name:"Hlaing Budget Shared Apartment", hood:"Hlaing", price:320000, beds:1, baths:1, size:350, furnished:"Unfurnished", utilities:"Electricity Extra", verified:false, img:"assets/shared.svg", type:"Shared Room"},
  {id:7, name:"Hlaing Family Apartment", hood:"Hlaing", price:600000, beds:3, baths:2, size:1150, furnished:"Unfurnished", utilities:"Wi-Fi Extra", verified:true, img:"assets/apartment.svg", type:"Apartment"},
  {id:8, name:"Modern Hlaing Studio", hood:"Hlaing", price:480000, beds:1, baths:1, size:400, furnished:"Furnished", utilities:"Water Included", verified:true, img:"assets/studio.svg", type:"Studio"},
  {id:9, name:"Tamwe Residential Apartment", hood:"Tamwe", price:420000, beds:2, baths:1, size:680, furnished:"Unfurnished", utilities:"Electricity Extra", verified:true, img:"assets/apartment.svg", type:"Apartment"},
  {id:10, name:"Cozy Tamwe Shared Room", hood:"Tamwe", price:280000, beds:1, baths:1, size:260, furnished:"Unfurnished", utilities:"Water Included", verified:false, img:"assets/shared.svg", type:"Shared Room"},
  {id:11, name:"Tamwe Balcony Condo", hood:"Tamwe", price:650000, beds:2, baths:2, size:880, furnished:"Furnished", utilities:"Wi-Fi Included", verified:true, img:"assets/condo.svg", type:"Condo"},
  {id:12, name:"Tamwe Studio Near Transit", hood:"Tamwe", price:350000, beds:1, baths:1, size:380, furnished:"Furnished", utilities:"Wi-Fi Included", verified:true, img:"assets/studio.svg", type:"Studio"},
  {id:13, name:"Cozy Studio Near Campus", hood:"Kamayut", price:300000, beds:1, baths:1, size:400, furnished:"Furnished", utilities:"Water Included", verified:true, img:"assets/studio.svg", type:"Studio"},
  {id:14, name:"Kamayut 4-Bed Condo", hood:"Kamayut", price:720000, beds:4, baths:2, size:1300, furnished:"Furnished", utilities:"Wi-Fi Included", verified:true, img:"assets/condo.svg", type:"Condo"},
  {id:15, name:"Kamayut Student Shared Room", hood:"Kamayut", price:290000, beds:1, baths:1, size:270, furnished:"Unfurnished", utilities:"Electricity Extra", verified:false, img:"assets/shared.svg", type:"Shared Room"},
  {id:16, name:"Kamayut 3-Bedroom Apartment", hood:"Kamayut", price:580000, beds:3, baths:2, size:1050, furnished:"Unfurnished", utilities:"Wi-Fi Extra", verified:true, img:"assets/apartment.svg", type:"Apartment"}
];

const NEIGHBORHOODS = [
  {name:"Pansodan", count:4, img:"assets/neighborhood.svg", desc:"Historic colonial-era downtown, banks and heritage architecture"},
  {name:"Hlaing", count:4, img:"assets/neighborhood.svg", desc:"Affordable, growing student and business hub"},
  {name:"Tamwe", count:4, img:"assets/neighborhood.svg", desc:"Dense residential township close to downtown"},
  {name:"Kamayut", count:4, img:"assets/neighborhood.svg", desc:"Student-friendly area near Yangon University"}
];

const ROOMMATES = [
  {id:"demo:thiri", name:"Thiri", age:21, loc:"Pansodan", budgetMin:300000, budgetMax:450000, hobbies:["Reading","Music","Cooking"], sleepSchedule:"Night owl", cleanliness:"Very clean", noisePreference:"Quiet", cooking:"Often", guests:"Sometimes", smoking:"Non-smoker", pets:"No pets", schedule:"Student", bio:"I like quiet evenings, reading and cooking at home.", source:"demo"},
  {id:"demo:kaung", name:"Kaung", age:23, loc:"Kamayut", budgetMin:350000, budgetMax:500000, hobbies:["Gaming","Music","Technology"], sleepSchedule:"Night owl", cleanliness:"Moderate", noisePreference:"Moderate", cooking:"Sometimes", guests:"Sometimes", smoking:"Non-smoker", pets:"No pets", schedule:"Student", bio:"Gaming, music and tech are my main interests.", source:"demo"},
  {id:"demo:eiei", name:"Ei Ei", age:20, loc:"Tamwe", budgetMin:350000, budgetMax:550000, hobbies:["Fitness","Cooking","Travel"], sleepSchedule:"Early sleeper", cleanliness:"Very clean", noisePreference:"Quiet", cooking:"Often", guests:"Rarely", smoking:"Non-smoker", pets:"Pet-friendly", schedule:"Student", bio:"I enjoy cooking, fitness and keeping a calm home.", source:"demo"},
  {id:"demo:zin", name:"Zin", age:22, loc:"Hlaing", budgetMin:280000, budgetMax:400000, hobbies:["Sports","Movies","Gaming"], sleepSchedule:"Flexible", cleanliness:"Moderate", noisePreference:"Social / lively", cooking:"Sometimes", guests:"Sometimes", smoking:"Occasional", pets:"No pets", schedule:"9–5 worker", bio:"I like sports, movies and a friendly but respectful home.", source:"demo"}
];

/* ==================== State (localStorage) ==================== */
function getSessionUser(){
  try { return JSON.parse(localStorage.getItem('roomzy_user') || 'null'); }
  catch(e){ return null; }
}

function userStorageKey(prefix){
  const u = getSessionUser();
  const identity = u && u.email ? encodeURIComponent(String(u.email).trim().toLowerCase()) : 'guest';
  return `roomzy_${prefix}_${identity}`;
}

function readUserList(prefix){
  try { return JSON.parse(localStorage.getItem(userStorageKey(prefix)) || '[]'); }
  catch(e){ return []; }
}

function writeUserList(prefix, value){
  localStorage.setItem(userStorageKey(prefix), JSON.stringify(Array.isArray(value) ? value : []));
}

const state = {
  get user(){ return getSessionUser(); },
  set user(v){ localStorage.setItem('roomzy_user', JSON.stringify(v)); },
  get saved(){ return readUserList('saved'); },
  set saved(v){ writeUserList('saved', v); },
  get liked(){ return readUserList('liked'); },
  set liked(v){ writeUserList('liked', v); }
};

// Older versions stored saved/liked data in one shared key. Migrate that legacy
// data to the first registered account so existing demo data is not lost,
// while every account thereafter gets its own private lists.
function migrateLegacyPersonalData(){
  if(localStorage.getItem('roomzy_personal_data_migrated') === '1') return;
  let accounts = [];
  try { accounts = JSON.parse(localStorage.getItem('roomzy_accounts') || '[]'); } catch(e){}
  if(accounts.length){
    const firstIdentity = encodeURIComponent(String(accounts[0].email || '').trim().toLowerCase());
    ['saved','liked'].forEach(prefix=>{
      const legacyKey = `roomzy_${prefix}`;
      const scopedKey = `roomzy_${prefix}_${firstIdentity}`;
      if(!localStorage.getItem(scopedKey)){
        const legacy = localStorage.getItem(legacyKey);
        if(legacy) localStorage.setItem(scopedKey, legacy);
      }
      localStorage.removeItem(legacyKey);
    });
  }
  localStorage.setItem('roomzy_personal_data_migrated','1');
}

function fmtPrice(n){ return n.toLocaleString('en-US') + " MMK/month"; }

function escapeHtml(str){
  const div=document.createElement("div");
  div.textContent=String(str ?? "");
  return div.innerHTML;
}

function toast(msg){
  let t = document.getElementById('toast');
  if(!t){
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(()=>t.classList.remove('show'), 2200);
}

function updateNav(){
  const navActions = document.getElementById('navActions');
  if(!navActions) return;
  const u = state.user;
  if(u){
    navActions.innerHTML = `<span style="font-weight:600;color:var(--navy);font-size:14px">Hi, ${u.name.split(" ")[0]}</span>
      <a class="btn btn-outline" href="dashboard.html">Dashboard</a>
      <button class="btn btn-ghost" onclick="logout()">Logout</button>`;
  } else {
    navActions.innerHTML = `<button class="btn btn-outline" onclick="openModal('loginModal')">Log In</button>
      <button class="btn btn-primary" onclick="openModal('registerModal')">Sign Up</button>`;
  }
}

function logout(){
  localStorage.removeItem('roomzy_user');
  toast("Logged out successfully");
  updateNav();
  setTimeout(()=>window.location.href="index.html", 600);
}

function openModal(id){ document.getElementById(id).classList.add('active'); }
function closeModal(id){ document.getElementById(id).classList.remove('active'); }

function calcAge(dobStr){
  const dob = new Date(dobStr);
  const diff = Date.now() - dob.getTime();
  return Math.floor(diff / (1000*60*60*24*365.25));
}

/* ==================== Accounts store (persists across logout) ==================== */
function getAccounts(){
  return JSON.parse(localStorage.getItem('roomzy_accounts') || '[]');
}
function saveAccounts(list){
  localStorage.setItem('roomzy_accounts', JSON.stringify(list));
}

function handleRegister(e){
  e.preventDefault();
  const form = e.target;
  const dob = form.dob.value;
  if(!dob){ toast("Please enter your date of birth"); return; }

  const age = calcAge(dob);
  if(age < 18){ toast("You must be 18 or older to use Roomzy."); return; }

  const budgetMin = Number(form.budgetMin.value);
  const budgetMax = Number(form.budgetMax.value);
  if(!budgetMin || !budgetMax || budgetMin < 300000 || budgetMax < budgetMin){
    toast("Please enter a valid roommate budget starting from 300,000 MMK.");
    return;
  }

  const hobbies = Array.from(form.querySelectorAll('input[name="hobbies"]:checked')).map(x=>x.value);
  if(hobbies.length < 2){
    toast("Please choose at least 2 hobbies or interests.");
    return;
  }

  const email = form.email.value.trim().toLowerCase();
  const accounts = getAccounts();

  if(accounts.some(a => a.email.toLowerCase() === email)){
    toast("An account with this email already exists. Please log in instead.");
    return;
  }

  const user = {
    id: (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : ('u_' + Date.now() + '_' + Math.random().toString(36).slice(2,8)),
    name: form.fullname.value.trim(),
    profileName: form.profilename.value.trim() || form.fullname.value.trim().split(" ")[0],
    email: email,
    password: form.password.value,
    phone: form.phone.value.trim(),
    dob: dob,
    verified: false,

    // Roommate profile used for compatibility matching
    location: form.location.value,
    budgetMin,
    budgetMax,
    hobbies,
    sleepSchedule: form.sleepSchedule.value,
    cleanliness: form.cleanliness.value,
    noisePreference: form.noisePreference.value,
    cooking: form.cooking.value,
    guests: form.guests.value,
    smoking: form.smoking.value,
    pets: form.pets.value,
    schedule: form.schedule.value,
    bio: form.bio.value.trim()
  };

  accounts.push(user);
  saveAccounts(accounts);

  state.user = user;
  toast("Account created! Your roommate profile is ready.");
  closeModal("registerModal");
  updateNav();
  setTimeout(()=>window.location.href="dashboard.html", 700);
}

function handleLogin(e){
  e.preventDefault();
  const form = e.target;
  const email = form.email.value.trim().toLowerCase();
  const password = form.password ? form.password.value : "";

  const accounts = getAccounts();
  const match = accounts.find(a => a.email.toLowerCase() === email);

  if(!match){
    toast("No account found with that email. Please sign up first.");
    return;
  }
  if(match.password !== undefined && match.password !== password){
    toast("Incorrect password");
    return;
  }

  state.user = match;
  toast("Logged in successfully");
  closeModal("loginModal");
  updateNav();
  setTimeout(()=>window.location.href="dashboard.html", 600);
}

/* ==================== Save / Like ==================== */
function toggleSave(id, btnEl){
  let saved = state.saved;
  if(saved.includes(id)){
    saved = saved.filter(x=>x!==id);
    if(btnEl){ btnEl.classList.remove('saved'); }
    toast("Removed from saved properties");
  } else {
    saved.push(id);
    if(btnEl){ btnEl.classList.add('saved'); }
    toast("Property saved");
  }
  state.saved = saved;
}

function readUserListForEmail(prefix, email){
  if(!email) return [];
  try {
    const key = `roomzy_${prefix}_${encodeURIComponent(String(email).trim().toLowerCase())}`;
    return JSON.parse(localStorage.getItem(key) || '[]');
  } catch(e){ return []; }
}

function getCandidateKey(candidate){
  if(candidate && candidate.source === "account") return `user:${candidate.id}`;
  return candidate && candidate.id ? candidate.id : `demo:${String(candidate?.name||'').toLowerCase().replace(/\s+/g,'-')}`;
}

function isLikedBack(candidate){
  const user = state.user;
  if(!user || !candidate) return false;

  // Demo profile used for the presentation flow.
  if(candidate.source !== "account") return candidate.id === "demo:thiri";

  // Real accounts: inspect that account's own, user-scoped likes list.
  const theirLikes = readUserListForEmail('liked', candidate.email);
  const myKey = `user:${user.id}`;
  return theirLikes.includes(myKey) || theirLikes.includes(user.profileName) || theirLikes.includes(user.name);
}

function toggleLike(candidateKey, btnEl){
  const user = state.user;
  if(!user){
    toast("Please log in to like a roommate.");
    return;
  }

  let liked = state.liked.map(String);
  const candidate = getAllRoommateCandidates(user).find(r => getCandidateKey(r) === candidateKey);
  const legacyNames = candidate ? [candidate.name, candidate.profileName].filter(Boolean) : [];
  const alreadyLiked = liked.includes(candidateKey) || legacyNames.some(n => liked.includes(n));

  if(alreadyLiked){
    liked = liked.filter(x => x !== candidateKey && !legacyNames.includes(x));
    btnEl.classList.remove('liked');
    btnEl.textContent = "Like";
    toast("Like removed");
  } else {
    liked.push(candidateKey);
    btnEl.classList.add('liked');
    btnEl.textContent = "Liked";
    if(candidate && isLikedBack(candidate)){
      setTimeout(()=>toast("It's a Match! You and " + candidate.name + " liked each other"), 250);
    } else if(candidate) {
      toast("Like sent to " + candidate.name + ". They must like you back to chat.");
    }
  }
  state.liked = liked;
  renderRoommates();
}

/* ==================== Card Renderers ==================== */
function propertyCard(p){
  const isSaved = state.saved.includes(p.id);
  return `<div class="card">
    <div class="card-img" style="background-image:url(${p.img})">
      ${p.verified ? '<span class="badge badge-verified">Verified</span>' : '<span class="badge">New</span>'}
      <button class="save-btn ${isSaved?'saved':''}" onclick="toggleSave(${p.id}, this)">${isSaved?'♥':'♡'}</button>
    </div>
    <div class="card-body">
      <h3>${p.name}</h3>
      <div class="card-loc">${p.hood}, Yangon</div>
      <div class="card-price">${fmtPrice(p.price)}</div>
      <div class="card-meta">${p.beds} Bed &bull; ${p.baths} Bath &bull; ${p.size} sq ft</div>
      <div class="card-tags"><span class="tag">${p.furnished}</span><span class="tag">${p.utilities}</span></div>
      <a class="card-btn" href="property.html?id=${p.id}">View Property</a>
    </div>
  </div>`;
}

function renderFeatured(){
  const el = document.getElementById('featuredGrid');
  if(!el) return;
  el.innerHTML = PROPERTIES.slice(0,4).map(propertyCard).join('');
}

/* Neighborhood cards are now clickable — each one links to the
   Find a Home page pre-filtered to that township via a URL parameter. */
function renderNeighborhoods(){
  const el = document.getElementById('hoodGrid');
  if(!el) return;
  el.innerHTML = NEIGHBORHOODS.map(h=>`<a class="hood-card" href="find-a-home.html?hood=${encodeURIComponent(h.name)}" style="background-image:url(${h.img});background-size:cover;background-position:center;display:block;cursor:pointer">
    <div class="overlay"><h4>${h.name}</h4><span>${h.count} homes available</span></div>
  </a>`).join('');
}


function normalizeList(v){
  if(Array.isArray(v)) return v;
  if(typeof v === "string") return v.split(",").map(x=>x.trim()).filter(Boolean);
  return [];
}

function budgetOverlapScore(aMin,aMax,bMin,bMax){
  aMin=Number(aMin)||0; aMax=Number(aMax)||0; bMin=Number(bMin)||0; bMax=Number(bMax)||0;
  if(aMax < bMin || bMax < aMin){
    const gap = Math.max(bMin-aMax, aMin-bMax);
    const base = Math.max(aMax,bMax,1);
    return Math.max(0, Math.round(55 - (gap/base)*70));
  }
  const overlapMin=Math.max(aMin,bMin), overlapMax=Math.min(aMax,bMax);
  const overlap=Math.max(0,overlapMax-overlapMin);
  const span=Math.max(aMax-aMin,bMax-bMin,1);
  return Math.min(100, Math.round(65 + (overlap/span)*35));
}

function jaccardScore(a,b){
  const A=new Set(normalizeList(a).map(x=>String(x).toLowerCase()));
  const B=new Set(normalizeList(b).map(x=>String(x).toLowerCase()));
  if(!A.size && !B.size) return 50;
  let intersection=0;
  A.forEach(x=>{ if(B.has(x)) intersection++; });
  const union=new Set([...A,...B]).size;
  return union ? Math.round((intersection/union)*100) : 0;
}

function preferenceScore(a,b,key){
  if(!a || !b || !a[key] || !b[key]) return 50;
  return String(a[key]).toLowerCase()===String(b[key]).toLowerCase() ? 100 : 45;
}

function calculateCompatibility(user, match){
  if(!user) return Number(match.compat)||75;
  const locationScore = String(user.location||"").toLowerCase()===String(match.loc||match.location||"").toLowerCase() ? 100 : 40;
  const budgetScore = budgetOverlapScore(user.budgetMin,user.budgetMax,match.budgetMin,match.budgetMax);
  const hobbyScore = jaccardScore(user.hobbies, match.hobbies);
  const sleepScore = preferenceScore(user,match,"sleepSchedule");
  const cleanScore = preferenceScore(user,match,"cleanliness");
  const noiseScore = preferenceScore(user,match,"noisePreference");
  const petsScore = preferenceScore(user,match,"pets");
  const smokingScore = preferenceScore(user,match,"smoking");

  const score = Math.round(
    locationScore*0.20 +
    budgetScore*0.20 +
    hobbyScore*0.25 +
    sleepScore*0.10 +
    cleanScore*0.10 +
    noiseScore*0.05 +
    petsScore*0.05 +
    smokingScore*0.05
  );
  return Math.max(0,Math.min(100,score));
}

function matchReasons(user,match){
  if(!user) return ["Lifestyle-focused matching","Budget and location considered","Shared preferences"];
  const reasons=[];
  if(String(user.location||"").toLowerCase()===String(match.loc||match.location||"").toLowerCase()) reasons.push("Same preferred area");
  if(budgetOverlapScore(user.budgetMin,user.budgetMax,match.budgetMin,match.budgetMax)>=75) reasons.push("Compatible budgets");
  const shared=normalizeList(user.hobbies).filter(h=>normalizeList(match.hobbies).map(x=>x.toLowerCase()).includes(String(h).toLowerCase()));
  if(shared.length) reasons.push("Shared hobbies: "+shared.slice(0,2).join(", "));
  if(preferenceScore(user,match,"sleepSchedule")>=100) reasons.push("Similar sleep schedule");
  if(preferenceScore(user,match,"cleanliness")>=100) reasons.push("Similar cleanliness preference");
  if(preferenceScore(user,match,"noisePreference")>=100) reasons.push("Similar noise preference");
  return reasons.slice(0,4);
}

function getAllRoommateCandidates(currentUser){
  const accounts = getAccounts();
  const registeredCandidates = accounts
    .filter(a => a && a.id && a.email && (!currentUser || a.email.toLowerCase() !== String(currentUser.email||'').toLowerCase()))
    .filter(a => calcAge(a.dob) >= 18)
    .map(a => ({
      ...a,
      name: a.profileName || a.name?.split(' ')[0] || 'Roomzy User',
      age: calcAge(a.dob),
      loc: a.location || 'Yangon',
      source: 'account'
    }));

  return [...ROOMMATES, ...registeredCandidates];
}

function renderRoommates(){
  const targets = ["roommateGrid","dashboardRoommateGrid"]
    .map(id=>document.getElementById(id))
    .filter(Boolean);
  if(!targets.length) return;

  const user = state.user;
  const liked = state.liked.map(String);
  const candidates = getAllRoommateCandidates(user);
  const ranked = candidates
    .map(r=>({...r, score: calculateCompatibility(user,r), candidateKey:getCandidateKey(r)}))
    .sort((a,b)=>b.score-a.score || String(a.name).localeCompare(String(b.name)));

  const cards = ranked.map(r=>{
    const legacyNames = [r.name, r.profileName].filter(Boolean);
    const likedAlready = liked.includes(r.candidateKey) || legacyNames.some(n=>liked.includes(n));
    const reasons = matchReasons(user,r);
    const verification = r.source === 'account'
      ? (r.verified ? '<span class="badge badge-verified">✓ Verified</span>' : '<span class="badge">Verification pending</span>')
      : '<span class="badge badge-verified">Demo profile</span>';
    const avatar = String(r.name||'R').trim().slice(0,1).toUpperCase();
    return `<div class="rm-card">
      <div class="rm-avatar">${escapeHtml(avatar)}</div>
      <div style="display:flex;justify-content:center;gap:6px;flex-wrap:wrap;margin:6px 0 4px;">${verification}</div>
      <h4>${escapeHtml(r.name)}, ${r.age}</h4>
      <p>${escapeHtml(r.loc)} &bull; Budget ${(Number(r.budgetMin||0)/1000).toFixed(0)}K–${(Number(r.budgetMax||0)/1000).toFixed(0)}K<br>${escapeHtml(normalizeList(r.hobbies).slice(0,3).join(", "))}</p>
      <div class="compat">${r.score}% Compatible</div>
      <div style="font-size:11.5px;color:var(--muted);text-align:left;margin:8px 0 12px;">
        <b>Why you match</b><br>${reasons.length ? reasons.map(x=>`• ${escapeHtml(x)}`).join("<br>") : "Complete your profile to improve recommendations."}
      </div>
      <button class="like-btn ${likedAlready?'liked':''}" onclick="toggleLike('${r.candidateKey}', this)">${likedAlready?'Liked':'Like'}</button>
    </div>`;
  }).join("");

  targets.forEach(el=>el.innerHTML = cards || '<p style="color:var(--muted)">No roommate matches yet.</p>');
}

/* ==================== Find a Home page ====================
   PRE-FILTER SUPPORT: if the URL has ?hood=Pansodan (etc.), the
   township dropdown is set automatically on page load, then
   filtering runs immediately — this is what makes neighborhood
   cards on the homepage "clickable" into a filtered results view. */
function applyHoodFromURL(){
  const params = new URLSearchParams(window.location.search);
  const hood = params.get('hood');
  const select = document.getElementById('fHood');
  if(hood && select){
    const optionExists = Array.from(select.options).some(o => o.value === hood);
    if(optionExists){
      select.value = hood;
    }
  }
}

function renderSearchResults(){
  const el = document.getElementById('resultsGrid');
  if(!el) return;
  const hood = document.getElementById('fHood')?.value;
  const minB = parseInt(document.getElementById('fMin')?.value) || 0;
  const maxB = parseInt(document.getElementById('fMax')?.value) || 9999999;
  const type = document.getElementById('fType')?.value;
  let results = PROPERTIES.filter(p =>
    (!hood || p.hood === hood) &&
    (!type || p.type === type) &&
    p.price >= minB && p.price <= maxB
  );
  document.getElementById('resultsCount').textContent = results.length + " properties found";
  el.innerHTML = results.length ? results.map(propertyCard).join('') : '<p style="color:var(--muted)">No properties match your filters. Try adjusting your budget or location.</p>';
}

/* ==================== Property detail page ==================== */
function renderPropertyDetail(){
  const el = document.getElementById('propertyDetail');
  if(!el) return;
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const p = PROPERTIES.find(x=>x.id===id) || PROPERTIES[0];
  document.title = p.name + " - Roomzy";
  el.innerHTML = `<div style="margin-bottom:20px">
      <h1 style="color:var(--navy);font-size:28px">${p.name}</h1>
      <div style="display:flex;gap:16px;align-items:center;margin-top:8px;flex-wrap:wrap">
        <span class="card-price" style="font-size:20px">${fmtPrice(p.price)}</span>
        <span class="card-loc">${p.hood}, Yangon</span>
        ${p.verified ? '<span class="verified-tag">Verified Property</span>' : ''}
      </div>
    </div>
    <div class="card-img" style="height:380px;border-radius:14px;background-image:url(${p.img});margin-bottom:12px"></div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:28px">
      ${["bedroom","living room","kitchen","bathroom"].map((r,i)=>`<div class="card-img" style="height:90px;border-radius:10px;background-image:url(${p.img});filter:brightness(0.8) invert(0.05)"></div>`).join('')}
    </div>
    <div style="background:#fff;border-radius:14px;box-shadow:var(--shadow);padding:24px;margin-bottom:20px">
      <h3 style="color:var(--navy);margin-bottom:14px">Property Details</h3>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:14px;font-size:14px">
        <div><b>Rent</b><br>${fmtPrice(p.price)}</div>
        <div><b>Deposit</b><br>${(p.price*2).toLocaleString()} MMK</div>
        <div><b>Bedrooms</b><br>${p.beds}</div>
        <div><b>Bathrooms</b><br>${p.baths}</div>
        <div><b>Size</b><br>${p.size} sq ft</div>
        <div><b>Furnishing</b><br>${p.furnished}</div>
        <div><b>Utilities</b><br>${p.utilities}</div>
        <div><b>Type</b><br>${p.type}</div>
      </div>
      <p style="margin-top:16px;color:var(--muted);font-size:14px">A comfortable, budget-friendly home in ${p.hood}, ideal for students and young professionals. Close to public transport, markets, and universities.</p>
    </div>
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <button class="btn btn-primary" onclick="openModal('contactModal')">Contact Landlord</button>
      <button class="btn btn-outline" onclick="openModal('viewingModal')">Request Viewing</button>
      <button class="btn btn-outline" onclick="toggleSave(${p.id}, this)">${state.saved.includes(p.id) ? 'Saved ✓' : 'Save Property'}</button>
    </div>`;
}

function handleContact(e){
  e.preventDefault();
  toast("Message sent to landlord!");
  closeModal("contactModal");
  e.target.reset();
}

function handleViewing(e){
  e.preventDefault();
  toast("Viewing request submitted — status: Pending");
  closeModal("viewingModal");
  e.target.reset();
}

/* ==================== Dashboard ==================== */
function renderDashboard(){
  const el = document.getElementById('dashboardContent');
  if(!el) return;
  const u = state.user;
  if(!u){ window.location.href = "index.html"; return; }

  const savedProps = PROPERTIES.filter(p=>state.saved.includes(p.id));
  document.getElementById('welcomeName').textContent = "Welcome back, " + u.profileName;
  document.getElementById('verifStatus').textContent = u.verified ? "Verified" : "Pending Verification";
  document.getElementById('savedCount').textContent = savedProps.length;
  document.getElementById('likedCount').textContent = state.liked.length;
  const mutualCountEl = document.getElementById('mutualCount');
  if(mutualCountEl){
    const candidates = getAllRoommateCandidates(u);
    const mutualCount = candidates.filter(candidate => {
      const key = getCandidateKey(candidate);
      const likedByMe = state.liked.includes(key) || state.liked.includes(candidate.name);
      return likedByMe && isLikedBack(candidate);
    }).length;
    mutualCountEl.textContent = mutualCount;
  }

  const savedGrid = document.getElementById('savedGrid');
  if(savedGrid){
    savedGrid.innerHTML = savedProps.length ? savedProps.map(propertyCard).join('') : '<p style="color:var(--muted)">No saved properties yet. Browse homes to save some!</p>';
  }

  const profileSummary = document.getElementById('roommateProfileSummary');
  if(profileSummary){
    const hobbyText = normalizeList(u.hobbies).join(", ") || "Not set";
    profileSummary.innerHTML = `
      <div class="step" style="margin-bottom:20px;">
        <div style="display:flex;justify-content:space-between;gap:12px;align-items:center;flex-wrap:wrap;">
          <div>
            <h3 style="color:var(--navy);margin-bottom:4px;">Your Roommate Profile</h3>
            <p style="font-size:13px;color:var(--muted);">Matches use only the preferences you entered when creating your account.</p>
          </div>
          <span class="compat" style="margin:0;">${hobbyText}</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-top:14px;font-size:13px;">
          <div><b>Location</b><br>${u.location||"Not set"}</div>
          <div><b>Budget</b><br>${Number(u.budgetMin||0).toLocaleString()}–${Number(u.budgetMax||0).toLocaleString()} MMK</div>
          <div><b>Sleep</b><br>${u.sleepSchedule||"Not set"}</div>
          <div><b>Pets</b><br>${u.pets||"Not set"}</div>
          <div><b>Cleanliness</b><br>${u.cleanliness||"Not set"}</div>
          <div><b>Noise</b><br>${u.noisePreference||"Not set"}</div>
        </div>
      </div>`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  migrateLegacyPersonalData();
  updateNav();
  renderFeatured();
  renderNeighborhoods();
  renderRoommates();
  applyHoodFromURL();
  renderSearchResults();
  renderPropertyDetail();
  renderDashboard();
});

/* ===================== Feedback & Report Feature ===================== */
(function(){
  function getFeedbackList(){
    return JSON.parse(localStorage.getItem('roomzy_feedback') || '[]');
  }
  function saveFeedbackList(list){
    localStorage.setItem('roomzy_feedback', JSON.stringify(list));
  }

  function injectFeedbackUI(){
    if (document.getElementById('feedbackModal')) return;

    const btn = document.createElement('button');
    btn.id = 'feedbackFab';
    btn.setAttribute('aria-label', 'Feedback and Report');
    btn.innerHTML = '\u2691 Feedback';
    btn.onclick = function(){ openModal('feedbackModal'); };
    document.body.appendChild(btn);

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'feedbackModal';
    overlay.innerHTML = `
      <div class="modal">
        <button class="modal-close" onclick="closeModal('feedbackModal')">&times;</button>
        <h3>Feedback & Report</h3>
        <p class="sub">Tell us about a bug, a listing problem, or share your feedback. Your report is saved and our team will review it.</p>
        <form id="feedbackForm" onsubmit="handleFeedback(event)">
          <div class="form-group">
            <label>Type</label>
            <select name="type" required>
              <option value="Feedback">General Feedback</option>
              <option value="Bug">Report a Bug</option>
              <option value="Listing">Report a Listing</option>
              <option value="User">Report a User</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="form-group">
            <label>Subject</label>
            <input type="text" name="subject" placeholder="Short summary" required>
          </div>
          <div class="form-group">
            <label>Details</label>
            <textarea name="details" rows="4" placeholder="Describe the issue or your feedback..." required></textarea>
          </div>
          <div class="form-group">
            <label>Your Email (optional)</label>
            <input type="email" name="email" placeholder="you@example.com">
          </div>
          <button type="submit" class="btn btn-primary">Submit Report</button>
        </form>
      </div>`;
    document.body.appendChild(overlay);
  }

  window.handleFeedback = function(e){
    e.preventDefault();
    const form = e.target;
    const type = form.type.value;
    const subject = form.subject.value.trim();
    const details = form.details.value.trim();
    const email = form.email.value.trim();

    if(!subject || !details){
      toast('Please fill in subject and details');
      return;
    }

    const entry = {
      id: Date.now(),
      type: type,
      subject: subject,
      details: details,
      email: email || (typeof state !== 'undefined' && state.user ? state.user.email : ''),
      page: window.location.pathname.split('/').pop() || 'index.html',
      date: new Date().toISOString(),
      status: 'Open'
    };

    const list = getFeedbackList();
    list.push(entry);
    saveFeedbackList(list);

    toast('Thanks! Your ' + type.toLowerCase() + ' was submitted.');
    form.reset();
    closeModal('feedbackModal');
  };

  window.getRoomzyFeedback = getFeedbackList;

  document.addEventListener('DOMContentLoaded', injectFeedbackUI);
})();
/* ===================== End Feedback & Report Feature ===================== */
