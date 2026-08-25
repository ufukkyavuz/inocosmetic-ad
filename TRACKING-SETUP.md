# Catch — Tracking Setup Checklist

**Do this before any campaign spends a dollar.** Every KPI in `ADS-STRATEGY.md` depends on this being correct first.

## Google

- [ ] Global Site Tag (gtag.js) installed on all pages, including checkout/thank-you
- [ ] Enhanced Conversions enabled — hashed (SHA-256) email, phone, name, address sent on Purchase
- [ ] Consent Mode v2 implemented in **Advanced** mode (Basic mode = large data loss) — mandatory for any EU/EEA/UK traffic
- [ ] Server-side GTM (recommended) for data durability, paired with `ads-server-side-tracking` sub-skill if you want a deeper audit later
- [ ] Conversion actions split: **macro** (Purchase) set as Primary/bidding conversion; **micro** (AddToCart, TimeOnSite) excluded from bidding, tracked for observation only
- [ ] GA4 conversions imported for observation only — never counted alongside native Google Ads conversions (double-counting risk)
- [ ] Data-Driven Attribution (DDA) confirmed as the attribution model (mandatory default since Sept 2025) — Last Click is the only other valid option

## Meta

- [ ] Meta Pixel base code on all pages + standard events (ViewContent, AddToCart, InitiateCheckout, Purchase)
- [ ] Conversions API (CAPI) configured server-side
- [ ] Event deduplication via matching `event_id` between Pixel and CAPI — verify in Events Manager, not just assumed
- [ ] EMQ (Event Match Quality) parameters passed: email, phone, `fbp`, `fbc`, `external_id`
- [ ] EMQ score checked in Events Manager — target ≥7.0 by Month 3, ≥8.0 by Month 6 (87% of advertisers sit below 8.0, so this is a real differentiator, not a formality)

## Product-Line-Specific Notes

- **Collagen Shot / Sunscreen**: no special tracking requirement beyond the above, but purchase events for these SKUs are worth tagging separately (custom parameter or product category) so you can isolate their CPA from the cosmetics lines — they'll have different buyer intent and likely different CVR.

## Verification Before Launch

1. Fire a test Purchase event end-to-end (test order) and confirm it appears in **both** Google Ads and Meta Events Manager within expected latency.
2. Confirm EMQ score is visible (not "no data") in Meta Events Manager.
3. Confirm Enhanced Conversions status shows "Recording conversions" (not "No recent conversions") in Google Ads.
4. Add a post-purchase survey question ("How did you hear about us?") to the order confirmation page — cheap insurance against attribution gaps neither platform will show you.

---
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
