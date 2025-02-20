import chefsMarioAndAdrianAImage from './assets/chefs-mario-and-adrian_a.jpg';
import chefsMarioAndAdrianBImage from './assets/chefs-mario-and-adrian_b.jpg';
import littleLemon from './assets/little-lemon.png'
import restaurantFood from './assets/restaurant-food-2.jpg'
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum. Sed ut 
          perspiciatis unde omnis iste natu ccusantium 
          doloremque laudantium, totam rem aperiam, eaque ipsa beatae vitae dicta sunt 
          explicabo. Nemo oluptas sit aspernatur aut 
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
          voluptatem sequi nesciunt.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
          doloremque laudantium, eaque ipsa quae ab illo 
          inventore veritatis et  vitae dicta sunt odit aut fugit, sed quia consequuntur
          voluptatem sequi nesciunt.</p>
          <h3 className="author">--   Charlie Hughes (Owner, Little Lemon)</h3> 
      </div>
      <div className="our-story-chefs">
        <img src={restaurantFood} alt="Little Lemon" />
        {/* <img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" /> */}
      </div>
    </section>
  );
};

export default OurStory;
