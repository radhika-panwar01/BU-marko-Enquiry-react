/**
 * Brand color tokens — change here to update the entire site.
 * Used in JSX inline styles. Tailwind classes in CSS use the
 * CSS custom properties defined in style.css (:root block).
 */
export const BRAND = {
  primary:        '#6366F1',   // indigo-500 — main CTAs, icons, links
  primaryHover:   '#4F46E5',   // indigo-600 — hover state
  primaryDark:    '#4338CA',   // indigo-700 — deep hover / pressed
  primaryDeep:    '#312E81',   // indigo-900 — dark gradient start
  primaryLight:   '#EEF2FF',   // indigo-50  — light backgrounds
  primaryBorder:  '#C7D2FE',   // indigo-200 — subtle borders
  secondary:      '#8B5CF6',   // violet-500 — accent / gradient end
  secondaryDark:  '#7C3AED',   // violet-600 — gradient dark stop

  /** Ready-to-use gradient strings */
  gradient:       'linear-gradient(135deg, #6366F1, #8B5CF6)',
  gradientBtn:    'linear-gradient(135deg, #5B5EF5, #7C3AED)',
  gradientDark:   'linear-gradient(140deg, #312E81 0%, #4F46E5 40%, #7C3AED 100%)',
  gradientHero:   'linear-gradient(160deg, #FEFEFF 0%, #F5F3FF 55%, #EDE9FE 100%)',
};
