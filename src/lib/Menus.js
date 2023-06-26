const basicSubmenus = [
  { id: 1, name: "Mother Tounge", link: "motherTounge" },
];

const placeSubmenus = [
  { id: 1, name: "Country", link: "country" },
  { id: 2, name: "State", link: "state" },
  { id: 3, name: "District", link: "district" },
  { id: 4, name: "Home Town", link: "homeTown" },
  { id: 5, name: "Pin Code", link: "pincode" },
  { id: 6, name: "Cities", link: "cities" },
];

const academicSubmenus = [
  { id: 1, name: "Steams", link: "streams" },
  { id: 2, name: "Courses", link: "courses" },
];

const occupationSubmenus = [
  { id: 1, name: "Steams", link: "occupationStreams" },
]

const religionSubmenus = [
  { id: 1, name: "Religion", link: "religion" },
  { id: 2, name: "Caste", link: "caste" },
];

const institutionSubmenus = [
  { id: 1, name: "College Names", link: "colleges" },
  { id: 2, name: "University Names", link: "universities" },
  { id: 3, name: "Institute Names", link: "institutes" },
];

const adminPublishSubmenus = [
  { id: 1, name: 'Feed Post', link: 'feedPost' },
  { id: 2, name: 'Notifications', link: 'notifications' },
]

const employersSubmenu = [{ id: 1, name: "Employer", link: "employer" }];

export const menus = [
  { id: 1, name: "Statistics", hasSubmenu: false, link: "statistics" },
  {
    id: 2,
    name: "Users",
    hasSubmenu: true,
    subMenu: [
      { id: 1, name: "New Users", hasSubmenu: false, link: "newUsers" },
      { id: 2, name: "All Users", hasSubmenu: false, link: "allUsers" },
      {
        id: 3,
        name: "Incomplete Profiles",
        hasSubmenu: false,
        link: "incompleteProfiles",
      },
      {
        id: 4,
        name: "Non Active Profiles",
        hasSubmenu: false,
        link: "nonActiveProfiles",
      },
      {
        id: 5,
        name: "De Activations",
        hasSubmenu: false,
        link: "deActivations",
      },
      {
        id: 6,
        name: "ID Verification",
        hasSubmenu: false,
        link: "IdVerification",
      },
    ],
  },
  {
    id: 3,
    name: "Payments",
    hasSubmenu: false,
    link: "payments",
  },
  {
    id: 4,
    name: "Photo Updates",
    hasSubmenu: false,
    link: "photoUpdates",
  },
  {
    id: 5,
    name: "Video Updates",
    hasSubmenu: false,
    link: "videoUpdates",
  },
  {
    id: 6,
    name: "Profile Updates",
    hasSubmenu: false,
    link: "profileUpdates",
  },
  {
    id: 7,
    name: "Profile Reports",
    hasSubmenu: false,
    link: "profileReports",
  },
  {
    id: 8,
    name: "Feedbacks",
    hasSubmenu: false,
    link: "feedbacks",
  },
  {
    id: 9,
    name: "Data Manager",
    hasSubmenu: true,
    subMenu: [
      { id: 1, name: "Basic", hasSubmenu: true, subMenus: basicSubmenus },
      { id: 2, name: "Places", hasSubmenu: true, subMenus: placeSubmenus },
      { id: 3, name: "Religion", hasSubmenu: true, subMenus: religionSubmenus },
      {
        id: 4,
        name: "Institution",
        hasSubmenu: true,
        subMenus: institutionSubmenus,
      },
      {
        id: 5,
        name: "Employers",
        hasSubmenu: true,
        subMenus: employersSubmenu,
      },
      { id: 6, name: "Academic", hasSubmenu: true, subMenus: academicSubmenus },
      { id: 7, name: "Occupation", hasSubmenu: true, subMenus: occupationSubmenus },
      { id: 8, name: "Admin Publish", hasSubmenu: true, subMenus: adminPublishSubmenus }
    ],
  },
  {
    id: 10,
    name: "Settings",
    hasSubmenu: false,
    link: "settings",
  },
];
