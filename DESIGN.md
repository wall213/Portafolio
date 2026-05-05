---
name: Lumina Noir
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#373a3b'
  surface-container-lowest: '#0c0f10'
  surface-container-low: '#191c1d'
  surface-container: '#1d2021'
  surface-container-high: '#282a2b'
  surface-container-highest: '#323536'
  on-surface: '#e1e3e4'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e1e3e4'
  inverse-on-surface: '#2e3132'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#c9c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#c8c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#929090'
  on-tertiary-container: '#2a2a29'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#111415'
  on-background: '#e1e3e4'
  surface-variant: '#323536'
typography:
  h1:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  section-padding: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered to project the persona of a sophisticated, high-performance fullstack engineer. It targets technical recruiters and prospective clients by balancing technical rigor with high-end aesthetic refinement. The brand personality is "The Architect in the Shadows"—expert, precise, and understated.

The visual style is a hybrid of **Minimalism** and **Glassmorphism**. It utilizes a "Dark Mode First" philosophy, relying on depth, translucency, and precise illumination to guide the user's eye. The emotional response should be one of calm authority and digital craftsmanship. Motion should be fluid and dampened, avoiding unnecessary flourish in favor of purposeful transitions.

## Colors

The palette is anchored in a monochromatic dark range to minimize eye strain and maximize the impact of the accent. 
- **Core Surfaces:** The deepest black (#0A0A0A) serves as the primary canvas, with #121212 used for elevated containers and sections.
- **Electric Accent:** The Electric Blue (#3B82F6) is reserved for interactive states, progress indicators, and primary CTAs. It should be used sparingly to maintain its "electric" quality.
- **Typography:** High-contrast white (#F9FAFB) is used for headings to ensure immediate legibility. Secondary text uses a mid-tone grey to establish hierarchy and reduce visual noise.

## Typography

This design system utilizes **Inter** for its incredible clarity and neutral, systematic feel, ensuring that complex technical descriptions remain readable. To add a hint of technical "flavor," **Space Grotesk** is introduced for labels and small metadata (like tech stack tags), providing a subtle geometric, futuristic edge.

Headlines should utilize tight letter spacing and heavy weights to command attention, while body text requires generous line height for long-form project case studies.

## Layout & Spacing

The layout follows a **Fixed Grid** model on large screens, centering content within a 1280px container to maintain focus. A 12-column system is used for project cards and tech-stack grids.

Generous whitespace is mandatory. Section vertical padding should be substantial (120px+) to allow each project or section to breathe, reinforcing the minimalist aesthetic. Alignment should be mathematically precise, emphasizing the developer's attention to detail.

## Elevation & Depth

Depth is achieved through **Glassmorphism** rather than traditional drop shadows. 
- **Layer 0 (Base):** #0A0A0A.
- **Layer 1 (Cards/Floating Nav):** Background of `rgba(18, 18, 18, 0.7)` with a `backdrop-filter: blur(12px)`.
- **Borders:** Instead of heavy shadows, use a 1px solid border of `rgba(255, 255, 255, 0.1)` on the top and left edges to simulate a light source.
- **Shadows:** When necessary, use a large, ultra-soft "Ambient Glow" rather than a dark shadow. The shadow should inherit a slight blue tint from the accent color at 5% opacity.

## Shapes

The shape language is defined by "Medium" roundedness. A base radius of **12px** is applied to project cards, input fields, and buttons. This softens the tech-heavy aesthetic, making the portfolio feel approachable yet modern. Interactive elements like chips or small tags should use a more aggressive rounding (pill-shaped) to distinguish them from structural containers.

## Components

- **Project Cards:** Feature a subtle hover lift. On hover, the 1px border should transition from semi-transparent white to the electric blue accent. Images within cards should have a slight desaturation that returns to full color on interaction.
- **Buttons:** 
  - *Primary:* Solid Electric Blue with white text. No shadow, but a subtle outer glow on hover.
  - *Secondary:* Ghost style with a 1px white border and glass background.
- **Tech Stack Grid:** Minimalist icons paired with Space Grotesk labels. Each item sits in a "soft-square" glass tile.
- **Contact Forms:** Fields use a dark background (#050505) with a bottom-only border that glows blue upon focus. Labels should float or be positioned in the `label-caps` style above the input.
- **Progress Bars / Skill Indicators:** Use thin, 2px lines for a sophisticated "blueprint" feel, avoiding chunky or heavy loading states.