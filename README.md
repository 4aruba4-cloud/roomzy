# Roomzy — Static Frontend Prototype

## What this is
A client-side (HTML/CSS/JS) visual + interactive prototype of the Roomzy housing marketplace
and roommate-matching concept, styled with the navy/blue-gray brand palette.

## What actually works (client-side only, using browser localStorage)
- Register / Login / Logout (with 18+ age validation)
- Session persists on page refresh (stored in your browser, not a real database)
- Browse featured properties, neighborhoods, and roommate profiles
- Find a Home page with live filtering by township, budget, and property type
- Save / unsave properties (heart button)
- Like roommate profiles with account-specific likes and real mutual-like detection for registered accounts
- Newly registered 18+ accounts are automatically added to the roommate discovery pool on the same browser/device
- Property detail pages with bundled local image assets
- Contact Landlord and Request Viewing forms (show confirmation, don't send real messages)
- Fully responsive layout for mobile and desktop
- Dashboard showing saved properties and like counts

## What is NOT implemented (needs a real backend — see notes below)
- Real authentication (Supabase Auth) — currently simulated via localStorage
- Shared account data across different devices/browsers — account discovery currently uses the same-browser localStorage store
- Government ID upload + admin verification workflow
- Live interactive Google Maps
- Admin dashboard (/admin) for demo feedback/report management
- Real messaging/chat between users
- Image upload/reorder by admin

## How to run
1. Unzip the folder.
2. Open `index.html` directly in any browser (Chrome/Edge/Firefox).
   No install or server needed — it's fully static.
3. For best results (so relative links work), you can also right-click the
   folder and "Open with Live Server" in VS Code, or run:
   `python -m http.server` inside the folder, then visit http://localhost:8000

## Files
- index.html — Homepage
- find-a-home.html — Property search/filter page
- property.html — Property detail page (pass ?id=1 to 8)
- dashboard.html — Logged-in user dashboard
- style.css — All styling (Roomzy navy/blue-gray branding)
- app.js — All interactivity and demo data

## Next step: making it fully real
To satisfy every requirement in your original spec (real auth, live map, admin CMS,
ID verification, persistent database), paste your original prompt into an AI app
builder with backend support — Lovable is recommended since it has native Supabase
integration for auth, database, and file storage. This prototype gives you the exact
visual design and page structure to guide that build, or to demo the concept if the
full build isn't finished in time.

### Fixes in this repaired build
- Corrected all logo references to the bundled `real-logo.png` file.
- Corrected inconsistent `#roommates` links to the existing `#roommate` section.
- Bundled local SVG property/neighborhood images so the site does not depend on unstable external image URLs.
- Fixed login validation so an existing account cannot bypass its password by submitting an empty password.


## Latest fixes
- New account registration now requires roommate-profile information: preferred township, budget range, hobbies/interests, sleep schedule, cleanliness, noise preference, cooking, guests, smoking, pets, work/study schedule, and a short bio.
- Roommate compatibility is calculated from the information the user enters.
- Dashboard now shows the user's roommate profile summary and personalized compatibility cards.
- Roomzy header and footer logo visibility has been increased by using a tightly cropped logo asset and larger sizing.


### Account isolation and ad placements
- Saved properties and roommate likes are now scoped to the currently signed-in account, so one account cannot see another account's private saved/liked state.
- Legacy shared saved/liked data from the older demo is migrated once to the first registered account, then removed from the shared keys.
- Added placeholder advertisement placements to the homepage, property/search pages, and dashboard for future sponsorships and Roomzy Premium listings.

### Latest roommate-discovery fix
- Registered user profiles are now merged with the built-in demo roommate profiles.
- A user never sees their own profile in the roommate pool.
- Compatibility is calculated from the registered profile fields.
- Likes are stored per account and use stable account IDs for registered users.
- Mutual likes for registered users are detected by reading the other account's scoped like list.
- The dashboard mutual-match counter now reflects dynamic mutual likes.

### Important deployment note
This static prototype stores accounts in browser localStorage. That means a newly created account appears to other accounts **when they use the same browser/origin**. To make accounts created by different people on different phones/computers appear to one another, the site needs a shared backend such as Supabase for authentication and database storage.
