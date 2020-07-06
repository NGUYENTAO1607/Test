import React, { Component } from 'react';
import Banner from './Banner/Banner';
import Characteristics from './Characteristics/Characteristics';
import DealsFeatured from './DealsFeatured/DealsFeatured';
import PopularCategories from './PopularCategories/PopularCategories';
import Banner2 from './Banner2/Banner2';
import NewArrivals from './NewArrivals/NewArrivals';
import BestSellers from './BestSellers/BestSellers';
import Adverts from './Adverts/Adverts';
import Trends from './Trends/Trends';
import Reviews from './Reviews/Reviews';
import Viewed from '../Common/Viewed/Viewed';
import Brands from '../Common/Brands/Brands';
import '../../../public/plugins/slick-1.8.0/slick';
import '../../../public/styles/'



{/* <link rel="stylesheet" type="text/css" href="plugins/slick-1.8.0/slick.css">
<link rel="stylesheet" type="text/css" href="styles/main_styles.css">
<link rel="stylesheet" type="text/css" href="styles/responsive.css"></link> */}
class HomePage extends Component {
  render() {
    return (
      <div>
        <Banner></Banner>
        <Characteristics></Characteristics>
        <DealsFeatured></DealsFeatured>
        <PopularCategories></PopularCategories>
        <Banner2></Banner2>
        <NewArrivals></NewArrivals>
        <BestSellers></BestSellers>
        <Adverts></Adverts>
        <Trends></Trends>
        <Reviews></Reviews>
        <Viewed></Viewed>
        <Brands></Brands>
      </div>
    );
  }
}

export default HomePage;