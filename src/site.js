// All business content lives here. Edit this file to update the site.

export const business = {
  name: 'AAAA Maintenance',
  phoneDisplay: '+1 239-280-8172',
  phoneHref: 'tel:+12392808172',
  email: 'mcobra2003@gmail.com',
  serviceArea: 'Naples, Ft Myers, Cape Coral, Lehigh Acres',
  license: '[LICENSE #]',
}

export const services = [
  {
    title: 'Bathroom Renovations',
    description:
      'Full and partial bathroom remodels, from demolition to the finishing touches: new layouts, vanities, fixtures, flooring and tile.',
  },
  {
    title: 'Tile Work',
    description:
      'Floors, walls, backsplashes and shower surrounds, set level and straight with clean grout lines in the tile and pattern you choose.',
  },
  {
    title: 'New Showers',
    description:
      'Tub-to-shower conversions and custom walk-in showers, built with proper waterproofing, tiled walls, niches and glass.',
  },
  {
    title: 'Window Installation',
    description:
      'Replacement and new windows, installed, sealed and trimmed for a tight fit that keeps drafts and water out.',
  },
  {
    title: 'Cabinet Installation',
    description:
      'Kitchen, bathroom and laundry cabinets, hung level and secure, with hardware and trim for a finished, built-in look.',
  },
]

// Photos live in /public/photos. Swap any `src` for a real project photo,
// e.g. '/photos/job-smith-bath.jpg'. Set src to '' to show a placeholder.
export const heroPhotos = [
  { src: '/photos/bathroom.svg', alt: 'Renovated bathroom with a dark vanity and round mirror', label: '[Photo: finished bathroom]' },
  { src: '/photos/shower.svg', alt: 'New tiled shower with a glass panel and rain shower head', label: '[Photo: new shower]' },
  { src: '/photos/tile.svg', alt: 'Diamond-pattern tile being installed', label: '[Photo: tile detail]' },
]

export const projectPhotos = [
  { src: '/photos/cabinets.svg', alt: 'Installed white shaker kitchen cabinets', label: '[Project photo]' },
  { src: '/photos/window.svg', alt: 'Newly installed double window with white trim', label: '[Project photo]' },
  { src: '/photos/remodel.svg', alt: 'Remodeled bathroom with a freestanding tub', label: '[Project photo]' },
]

// Contact form: create a free form at https://formspree.io and paste its ID
// into a .env file as VITE_FORMSPREE_ID=xxxxxxx. Without it, the form opens
// the visitor's email app instead.
export const formspreeId = import.meta.env.VITE_FORMSPREE_ID || ''
