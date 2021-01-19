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
    }

  }
})
