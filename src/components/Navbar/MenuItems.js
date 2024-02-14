export const MenuItems = [
  { label: "About us", path: "/about_us", open: false,
    children: [
      { label: "Intro", path: "/intro"},
      { label: "Contact us", path: "/contact_us"},
    ]
  },
  { label: "Menu", path: "", open: false,
    children: [
      { label: "Food menu", path: "/food_menu"},
      { label: "Beverages", path: "/beverages"},
    ]
  },
  { label: "Events", path: "/events"},
  { label: "Gallery", path: "/gallery"},
];
