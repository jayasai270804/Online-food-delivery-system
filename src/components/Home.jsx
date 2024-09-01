import './Home.css';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div class="main-imae">
      <div class="inside-main">
        <h1 class="img-heading ">FoodieCrush</h1>
        <p class="img-caption"> Eat smart & Healthy</p>
      </div>
      <div class="enter-card">
        <div class="card">
          <img src="https://img.freepik.com/premium-vector/enjoy-your-meal-vector-illustration-variety-delicious-food-home-restaurant_2175-15074.jpg" class="photo" />
          <button class="custom-button"><Link to='/login'>As customer</Link></button>
        </div>
        <div class="card">
          <img src="https://png.pngtree.com/png-vector/20200715/ourmid/pngtree-delivery-boy-riding-scooter-when-bringing-box-package-png-image_2308892.jpg" class="photo" />
          <button class="custom-button">As Delivery boy</button>
        </div>
      </div>

    </div>
  );
}

export default Home;
