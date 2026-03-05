# namenuplus-website

Static website for [namenuplus.toomcis.eu](https://namenuplus.toomcis.eu), hosted on Cloudflare Pages.

This is the public-facing site for the [namenu+](https://github.com/toomcis/namenuPlus) project — a REST API that serves structured daily lunch menus from Slovak restaurants.

## Structure

```
index.html          # root — redirects to /api (will become app landing page later)
style.css
script.js
api/
  index.html        # API documentation & early access page
  style.css
  script.js
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Redirects to `/api` for now. Will become the app landing page once the Android app ships. |
| `/api` | Developer docs — endpoint reference, authentication, and early access key request. |

## Related

- **API server repo:** [toomcis/namenuPlus](https://github.com/toomcis/namenuPlus)
- **API base URL:** `https://api.namenuplus.toomcis.eu` *(coming soon)*
- **Contact:** [contact@toomcis.eu](mailto:contact@toomcis.eu)
