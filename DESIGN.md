# Design

Direction: clean corporate (category standard, played straight). Quality bar: restrained developer-operator sites with software-grade detail.

## Color (Restrained)
- Paper `#ffffff`, Mist `#f2f4f7` (alternate section ground), Line `#dce1e8`, Line-strong `#b9c2ce`
- Ink `#0c1a2b` (text, dark bands, footer), Ink-2 `#34445a` (body), Ink-3 `#56667b` (meta)
- Lake `#1450c8` (single accent: primary buttons, links, step labels, map), Lake-deep `#0d3a96` (hover)
- Night band uses Ink ground with `#a9b7c8` secondary text and `#24364c` rules
- Bolt `#ffc422` (second accent, from the safety bollards in MWP's own bays): CTAs on dark bands, case-study figures on dark, timeline dots. Graphic accent and text on Ink only — never text on white.
- Light theme only: daytime business audience on laptops and phones.

## Type
- Schibsted Grotesk Variable (self-hosted via @fontsource). One family; hierarchy by size and weight.
- Display: semibold, tracking -0.035em, clamp to ~4.25rem max. H2: clamp 1.9–2.75rem, -0.025em.
- Body 1rem–1.2rem, leading-relaxed, measure ≤ 42rem.

## Composition
- 76rem container, 12-col grid, sections 6–7rem vertical rhythm.
- Content lives in ruled lists and definition lists (border-t / divide-y), not card grids. Cards only for the contact form and the 4-step strip.
- Corners 3–4px. One soft shadow (contact form only).

## Photography
- Real MWP sites only, EXIF-stripped WebP in public/photos/. As-found vs. after-rebuild pairing tells the operator story; interiors are bright and wet, the action shot runs under colored lighting. No stock, no competitor branding, no Stella's.

## Signature
- Service-area map (generated from U.S. Census boundaries via us-atlas; script outside repo) in the home hero; served counties sweep in west→east once on load, disabled under reduced motion.

## Components
- ButtonLink: primary (Lake), secondary (outlined), inverse (white on Ink). 48px tall, arrow nudges on hover.
- Wordmark: three-arch bay mark + "Midwest Wash Partners". Placeholder until a real logo exists.
