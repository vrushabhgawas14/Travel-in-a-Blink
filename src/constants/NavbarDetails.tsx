export const NavFirstHalf = [
  {
    id: 1,
    text: "ABOUT",
    url: "/about",
  },
  {
    id: 2,
    text: "SERVICE",
    url: "/service",
  },
  {
    id: 3,
    text: "TRAVEL PLANS",
    url: "/plans",
  },
];

export const NavSecondHalf = [
  {
    id: 4,
    text: "BLOG",
    url: "/blog",
  },
  {
    id: 5,
    text: "FAQ",
    url: "/faq",
  },
  {
    id: 6,
    text: "CONTACT",
    url: "/contact",
  },
];

export const hamburgerMenu = {
  bar: (
    <svg viewBox="0 0 448 512" className="fill-black">
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>
  ),
  cross: (
    <svg viewBox="0 0 490 490" className="fill-black">
      <polygon
        points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
	489.292,457.678 277.331,245.004 489.292,32.337 "
      />
    </svg>
  ),
};