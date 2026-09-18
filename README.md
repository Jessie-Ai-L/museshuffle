# MuseShuffle v1.8.0 — Generator Function Upgrade

This build upgrades all 10 generators from working MVPs to more search-intent-specific tools.

- Random Drawing: idea type + complexity affect output
- Drawing Prompt: difficulty now changes challenge complexity; focus filter added
- Random Theme: context + tone filters
- Drawing Idea: focus + meaningful difficulty
- Random Character: genre + quick/full profile depth
- Art Idea: medium + mood, palette suggestions
- Art Prompt: medium + short/detailed prompt
- Book Idea: genre-aware premise/roles/conflicts/twists + tone
- Story Ideas: genre-aware seeds + quick/detailed mode
- Roleplay Scenario: genre-aware settings/roles/goals/secrets + tone
- Copy has a fallback for browsers where Clipboard API is unavailable
- Select changes regenerate immediately
- Controls remain responsive on mobile

Deploy the contents as the next full-site build. No URL changes.


## v1.8.3 Book Idea hotfix
- Fixes Book Idea Generator tone-selection runtime error that froze results.
- Genre and Tone now both affect output.
- Cache-busts app/data assets to ensure browsers load the fix.


## v1.13.0 — Drawing Idea SEO
Expanded Drawing Idea Generator with intent-focused content, FAQ structured data, social cards, image dimensions, and sitemap lastmod.


## v1.15.0 — Random Character SEO
Expanded the Random Character Generator with unique intent-focused content, examples, FAQ schema, social metadata, image dimensions, and sitemap lastmod.


## v1.17.0 — Random Theme Internal Link Boost
- Added one contextual body link to `/random-theme-generator/` from each of the other 9 tool pages.
- Used varied, natural anchor text and page-specific context.
- Made a small real content update to the Random Theme related-tools guidance and set its sitemap `lastmod` to 2026-09-18.
- No title, H1, meta description, generator logic, or previously approved SEO copy was changed on the optimized pages.
