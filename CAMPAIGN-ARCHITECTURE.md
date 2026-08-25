# Catch — Campaign Architecture

## Naming Convention

```
[Platform]_[Objective]_[Audience/Product]_[Geo]_[Date]
```
Examples:
- `META_ASC_Prospecting_US_2026Q3`
- `META_RETARGETING_CartAbandon_US_2026Q3`
- `GOOGLE_PMAX_BestSellers_US_2026Q3`
- `GOOGLE_SEARCH_Brand_US_2026Q3`

## Product Grouping (from current catalog)

Based on the assets in `Products/`, Catch's catalog groups into:

| Group | Examples | Feed/Creative Notes |
|---|---|---|
| **Best-Seller Sets** | All-in-one Set, Ultimate Set, Your Everyday Set, Full Glam Set | Highest AOV — lead PMax "Best Sellers" asset group and Meta Advantage+ with these |
| **Pairing Sets** | Color & Glow Set, Color & Shield Set, Glow & Shield Set | Great for "complete the routine" retargeting and upsell to single-SKU buyers |
| **Core Lines** | Catch Bloom (lip & cheek), Catch Glow | Anchor evergreen prospecting campaigns; highest creative-asset availability |
| **Collagen Shot** | Ingestible | Separate ad set/asset group — different claims rules (see compliance note in `ADS-STRATEGY.md`), different buyer intent (wellness vs. makeup) |
| **Sunscreen (Broad)** | Broad Spectrum line | Separate campaign — OTC drug ad review, restricted claims copy, expect slower approval |

## Google Ads Account Structure

```
Account: Catch
├── Brand Search (always-on)
│   └── "catch [bloom/glow]", "catch cosmetics", branded misspellings
├── PMax — Best Sellers
│   └── Asset Group: All-in-one Set / Ultimate Set / Your Everyday Set
├── PMax — Pairing Sets
│   └── Asset Group: Color & Glow / Color & Shield / Glow & Shield
├── PMax — Core Lines
│   ├── Asset Group: Catch Bloom (lip & cheek)
│   └── Asset Group: Catch Glow
├── PMax — Collagen Shot
│   └── Asset Group: Collagen Shot (claims-reviewed copy only)
├── PMax — Sunscreen
│   └── Asset Group: Broad Spectrum line (claims-reviewed copy only, expect manual review)
├── Standard Shopping — price-sensitive / sale SKUs
└── Search — Non-Brand Category
    └── "tinted sunscreen," "collagen skincare shot," "lip and cheek tint," etc.
```

Feed hygiene before launch: product titles as `[Brand] + [Product/Set Name] + [Key Attribute] + [Shade/Size]`, white-background primary image + lifestyle image as PMax supplemental, custom labels for margin tier and best-seller flag (drives PMax bid segmentation).

## Meta Ads Account Structure

```
Account: Catch
├── Advantage+ Sales Campaign (primary engine)
│   └── 150+ creative mix: product shots, lifestyle, UGC, Set bundles, before/after
│       (exclude Sunscreen + Collagen Shot claims-sensitive creative from broad-audience
│        testing until claims-reviewed copy is locked)
├── Prospecting — Interest/Lookalike (secondary, feeds ASC learnings)
│   ├── Ad Set: Lookalike — top 5% purchasers / high-AOV (Set buyers)
│   └── Ad Set: Interest stack — beauty/skincare + wellness (for Collagen Shot)
├── Retargeting
│   ├── Ad Set: View Content (7 days) → single-SKU creative
│   ├── Ad Set: Add to Cart (14 days) → urgency/social proof creative
│   └── Ad Set: Past Purchasers (180 days) → Set upsell / "complete the routine" cross-sell
│       (e.g. single Bloom buyer → Color & Glow Set retarget)
└── Testing
    └── New Set bundles, new shade launches, new creative formats (Reels-first)
```

## Bidding Strategy (by conversion volume — check monthly before choosing)

| Platform | Monthly Conversions | Strategy |
|---|---|---|
| Google | <15 | Maximize Clicks (capped CPC) |
| Google | 15–29 | Maximize Conversions |
| Google | 30+ | Target CPA |
| Google | 50+ with transaction values in feed | Target ROAS (recommended once volume supports it) |
| Meta | Learning phase / new | Lowest Cost |
| Meta | Efficiency priority | Cost Cap at target CPA |
| Meta | Revenue tracking live | ROAS Goal (4.0+ target) |

**Hard rule**: never edit budget, audience, or creative on a campaign mid-learning-phase (Meta: first 50 conversions per ad set; resets on budget change >20% or major creative swap).

---
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
