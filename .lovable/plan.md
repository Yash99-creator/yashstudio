# Recreate Yash Verma portfolio

## What I’ll build
- Reproduce the reference as a single responsive portfolio page, preserving its section order, typography scale, spacing, white canvas, card treatment, navigation, project layout, process panels, FAQ, contact grid, and subtle motion.
- Keep the opening image triptych, conversion-focused headline, problem/statistics section, biography section, featured projects, three-step process, FAQ, and contact area in the same sequence.
- Remove the entire client review area, including its video cards and written testimonial carousel, so the opening flows directly into the next non-review content.
- Replace visible identity references with **Yash Verma** and use a clearly labeled, correctly cropped portrait placeholder because no Yash photo is currently available.
- Preserve the reference wording everywhere else. Replace email and phone/contact details only with clearly editable Yash placeholders while matching the original presentation.

## Interactions and responsive behavior
- Keep anchored navigation for Projects, Who am I?, Process, and FAQ.
- Reproduce the reference’s button states, image/card movement, project reveal/load-more behavior, FAQ accordions, and entrance transitions with reduced-motion support.
- Match the desktop composition and reflow the same content into the reference-style single-column mobile layout without adding new features.

## Technical details
- Build the page at `/` using the existing React/TanStack setup and a semantic Tailwind design system in `src/styles.css`.
- Store downloaded reference imagery through the project asset pipeline rather than linking externally.
- Add page-specific title, description, Open Graph, and Twitter metadata.
- Verify the result in the live preview at desktop and mobile sizes, including navigation, FAQ, project reveal, image loading, and text overflow.

## Assumptions
- “Remove the entire client review/testimonial/video-review section” includes both the video-review strip below the opening and the later written testimonial carousel.
- The existing scheduling, Instagram, and Topmate destinations remain as in the reference because only email and phone/contact details were requested as placeholders.
