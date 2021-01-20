let app = new Vue({
  el: '#app',
  data: {
    app:[
      {
        text:'Dowload App',
        spanText: 'ios',
      },
      {
        text:'Advertise with us',
      }
    ],
    social:[
      {
        name:'fab fa-facebook-f',
      },
      {
        name:'fab fa-instagram',
      },
      {
        name:'fab fa-twitter',
      },
      {
        name:'fab fa-youtube',
      }
    ],
    logo: {
      name:'assets/images/avada-food-logo.png',
    },
    navbar:[
      {
        text: 'Home',
      },
      {
        text: 'Replice',
      },
      {
        text: 'Places',
      },
      {
        text: 'Blog',
      },
      {
        text: 'About',
      },
      {
        text: 'Contact',
      }
    ],
    banner:{
      title: 'Food Corner: Top Japanese',
      subTitle:'Restaurants for Sushi',
      day: 'March 25,2019',
    },
    icons:[
      {
        name:'DRINKS',
        url: 'assets/images/icone/drinks-recipes.png',
      },
      {
        name:'SOUP',
        url: 'assets/images/icone/soups-recipes.png',
      },
      {
        name:'BAKERY',
        url: 'assets/images/icone/baking-recipes.png',
      },
      {
        name:'DINNER',
        url: 'assets/images/icone/dinner-recipes.png',
      },
      {
        name:'HEALTHY',
        url: 'assets/images/icone/healthy-recipes.png',
      },
      {
        name:'STAFF PICKS',
        url: 'assets/images/icone/staff-picks.png',
      },
      {
        name:'APPETISERS',
        url: 'assets/images/icone/premium-recipes.png',
      },
      {
        name:'QUICK & EASY',
        url: 'assets/images/icone/quick-easy-recipes.png',
      }
    ]

  }
})
