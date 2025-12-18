# Portfolio Design Guidelines

## Design Approach

**Reference-Based with Tech-Forward Innovation**

Drawing inspiration from cutting-edge developer portfolios (Linear's precision, Stripe's sophistication, Vercel's minimalism) while breaking conventional portfolio patterns. This design prioritizes technical credibility with bold, memorable visual moments.

**Core Principles:**
- Asymmetric, dynamic layouts that avoid predictable grids
- Dark-first design with strategic vibrant accents
- Technical sophistication through typography and spacing hierarchy
- Unique content presentation per expertise area

## Typography System

**Font Families:**
- Headings: Inter or Space Grotesk (700, 600, 500) - geometric, technical feel
- Body: Inter (400, 500) - optimal readability
- Code/Technical: JetBrains Mono (400, 500) - for inline code snippets

**Hierarchy:**
- Hero headline: text-6xl to text-8xl (responsive), font-bold, tracking-tight
- Section headers: text-4xl to text-5xl, font-semibold
- Project titles: text-2xl to text-3xl, font-semibold
- Body text: text-base to text-lg, font-normal
- Labels/metadata: text-sm, font-medium, uppercase tracking-wide

## Layout System

**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 20, 24, 32

**Container Strategy:**
- Hero: Full viewport width (w-full), min-h-screen
- Content sections: max-w-7xl with px-8 to px-16
- Asymmetric text blocks: max-w-3xl offset to one side

## Page Structure

### 1. Hero Section (Full Viewport)
Three.js animated background featuring:
- Particle network system visualizing blockchain/AI connections
- Geometric wireframe structures morphing between states
- Subtle camera movement on scroll

**Content Overlay:**
- Large headline introducing name + role (left-aligned, taking 60% width)
- Subheadline highlighting three expertise areas with subtle stagger reveal
- Two CTAs: "View Projects" (primary) + "Download Resume" (secondary ghost button with backdrop blur)
- Scroll indicator at bottom with animated chevron

### 2. Expertise Overview Section
**Layout:** Three distinct zones (NOT standard grid) - staggered vertical cards

Each expertise area (Solidity, Software Dev, AI Engineering) gets:
- Large heading with icon
- 3-4 key technologies listed with subtle dividers
- Brief impact statement
- Recent project teaser

**Visual Treatment:** Cards with subtle gradient borders, offset positioning creating diagonal flow

### 3. Featured Projects Section
**Layout:** Alternating asymmetric project showcases (avoid uniform grid)

Project Card Pattern:
- Large project preview (screenshot or diagram) - 55% width
- Project details on opposite side - 45% width
- Metadata bar: Tech stack tags, GitHub link, live demo link
- Short description with key technical achievements
- Code snippet preview in expandable panel (optional per project)

**Arrangement:** 
- Odd projects: Image left, content right
- Even projects: Content left, image right
- Varied vertical spacing between projects

### 4. Technical Skills Visualization
**Layout:** Tiered categorization with visual weight

- Blockchain/Solidity: Prominent tier with animated chain links or blocks
- Software Development: Framework logos in animated orbit or constellation
- AI/ML: Neural network-inspired node visualization

Interactive hover states revealing proficiency levels and use cases

### 5. About/Journey Section
**Layout:** Horizontal timeline with milestone cards

- Career milestones as nodes on a continuous line
- Each node expands to show role, company, key achievements
- Educational background integrated into timeline
- Certifications displayed as badges below timeline

### 6. Contact Section
Minimal, focused layout:
- Bold headline: "Let's Build Something"
- Two-column split: Contact methods (left) + social links (right)
- Email, LinkedIn, GitHub, Twitter with custom icons
- Optional contact form (simple: name, email, message)

## Component Library

**Buttons:**
- Primary: Solid with vibrant gradient (purple-to-blue), medium size, rounded-lg
- Secondary: Ghost with border, backdrop-blur when on images
- Icon buttons: Subtle hover scale, no background on dark theme

**Cards:**
- Backdrop blur effect with subtle border (border-white/10)
- Minimal shadow, emphasis on content
- Hover: Subtle scale and border glow

**Tags/Badges:**
- Small, rounded-full, transparent background with colored text
- Tech stack: Individual tags with icon + label

**Navigation:**
- Fixed header on scroll: Transparent initially, blurred background on scroll
- Logo/name left, navigation links center, CTA right
- Smooth anchor scrolling

## Animation Guidelines

**Three.js Hero:** Primary animation budget - complex particle/geometric system

**Scroll Animations:**
- Subtle fade-in and slide-up for sections (intersection observer triggered)
- Stagger animations for project grid items
- No parallax or excessive scroll-linked effects

**Micro-interactions:**
- Button hover: Subtle scale (1.02)
- Card hover: Border glow intensify
- Skill visualization: Subtle pulse or rotation on hover
- NO auto-playing animations outside hero

## Images

**Hero Section:** NO static background image - Three.js animation fills entire background

**Project Screenshots:** 4-6 high-quality project visuals showing:
- Smart contract dashboards
- Software application interfaces
- AI model visualizations or results

Dimensions: Minimum 1200x800px, 16:9 ratio preferred, optimized for web

**About Section:** Optional professional headshot (300x300px, circular crop)

## Responsive Behavior

- Hero: Scale Three.js canvas, stack CTA buttons vertically on mobile
- Projects: Single column on mobile, full asymmetric layout on desktop (lg:)
- Skills: Collapse to vertical list on mobile, expand to visualization on tablet+
- Timeline: Vertical on mobile, horizontal on desktop

**Critical:** Maintain visual impact on all devices - reduce complexity, not quality