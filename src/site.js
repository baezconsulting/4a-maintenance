// All business content lives here. Edit this file to update the site.

export const business = {
  name: 'AAAA Maintenance',
  phoneDisplay: '+1 239-280-8172',
  phoneHref: 'tel:+12392808172',
  email: 'contact@4amaintenance.com',
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

// Short checkmarked points under the hero buttons. Only list what's true.
export const trustPoints = ['Free estimates', 'Clean, on-time work']

// Hero photos: free stock from Unsplash (Unsplash License, commercial use OK, no credit required).
//   hero-bathroom.jpg: Peter Muniz, https://unsplash.com/photos/9OKuf13OidA
//   hero-shower.jpg:   Point3D Commercial Imaging Ltd., https://unsplash.com/photos/HOVrnurWcb0
// The first photo is the large one (portrait, 4:5); the second overlaps it (square).
// Swap in real job photos anytime, e.g. '/photos/job-smith-bath.jpg'.
export const heroPhotos = [
  { src: '/photos/hero-bathroom.jpg', alt: 'Modern bathroom with stone tile walls, a wood vanity and a walk-in shower' },
  { src: '/photos/hero-shower.jpg', alt: 'Tiled walk-in shower with a rain shower head, hand shower and built-in bench' },
]

// Gallery section. These are free Unsplash stock photos (Unsplash License), NOT this
// business's own jobs, so the section is titled as styles/ideas rather than "Recent work".
//   gallery-marble-bath.jpg:      Clay Banks, https://unsplash.com/photos/Fuguvv3goCA
//   gallery-double-vanity.jpg:    Peter Muniz, https://unsplash.com/photos/6YEMkA-2ji8
//   gallery-dark-tile-shower.jpg: immo RENOVATION, https://unsplash.com/photos/en9pOa2YAKI
// When you have real job photos, swap them in and change the title to 'Recent work'
// and the menu label to 'Projects'.
export const gallery = {
  title: 'Styles we build',
  navLabel: 'Gallery',
  photos: [
    { src: '/photos/gallery-marble-bath.jpg', alt: 'Bright bathroom with marble tile, a walk-in shower and a wood vanity' },
    { src: '/photos/gallery-double-vanity.jpg', alt: 'Modern bathroom with a double vanity and a lit walk-in shower niche' },
    { src: '/photos/gallery-dark-tile-shower.jpg', alt: 'Walk-in shower with large dark tiles and a built-in niche' },
  ],
}

// Quote form: Formspree form https://formspree.io/f/xzervlbd (sends to contact@4amaintenance.com).
// The ID is public by design (it's in the page source). A VITE_FORMSPREE_ID env var/secret overrides it.
export const formspreeId = import.meta.env.VITE_FORMSPREE_ID || 'xzervlbd'
