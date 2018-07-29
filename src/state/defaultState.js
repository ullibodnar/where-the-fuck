export const defaultState = {
  restaurants: [
    {
      id: 1,

      name: 'Logan Brown',

      isCafe: false,

      website: 'https://www.loganbrown.co.nz/',

      address: '',

      rating: 4
    },
    {
      id: 2,

      name: "Frank's",

      isCafe: true,

      website: 'http://www.frankscoffee.co.nz/',

      address: '',

      rating: 5
    },
    {
      id: 3,

      name: 'The Chippery',

      isCafe: false,

      website: 'https://www.thechippery.co.nz/',

      address: '',

      rating: 3
    },
    {
      id: 4,

      name: 'Atria',

      isCafe: true,

      website: 'https://www.facebook.com/',

      address: '',

      rating: 3
    },
    {
      id: 5,

      name: 'Dillingers',

      isCafe: false,

      website: 'https://www.dillingers.org/',

      address: '',

      rating: 1
    }
  ],
  selectedRestaurant: {
    id: 5,

    name: 'Dillingers',

    isCafe: false,

    website: 'https://www.dillingers.org/',

    address: '',

    rating: 1
  },
  viewed: []
}