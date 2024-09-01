import React, { useState } from 'react';
import './Barkaas.css';
import { Link } from 'react-router-dom';

function Barkaas() {
  const [values, setValues] = useState({
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    value5: 0
  });

  const dec = (id) => {
    setValues(prevState => ({
      ...prevState,
      [id]: prevState[id] > 0 ? prevState[id] - 1 : prevState[id]
    }));
  }

  const add = (id) => {
    setValues(prevState => ({
      ...prevState,
      [id]: prevState[id] + 1
    }));
  }

  const add1 = (id) => {
    if (values[id] < 1) {
      setValues(prevState => ({
        ...prevState,
        [id]: prevState[id] + 1
      }));
    }
  }

  return (
    <div>
      <h1 className="res-name">Barkaas</h1>
      <div className="res-item">
        <div className="container">
          <div className="item">
            <h3 className="item-name">Fry piece Biryani</h3>
            <p>Price: <i className='bx bx-rupee'></i>200</p>
            <i className='bx bxs-star check'></i>
            <i className='bx bxs-star check'></i>
            <i className='bx bxs-star check'></i>
            <i className='bx bxs-star check'></i>
            <i className='bx bxs-star'></i>
            <div className="add">
              <button type="button" onClick={() => add1('value1')}> Add</button>
              <div>
                <button onClick={() => dec('value1')} className="cou-but">-</button>
                <button className="cou-but-1" id="value1">{values.value1}</button>
                <button onClick={() => add('value1')} className="cou-but">+</button>
              </div>
            </div>
          </div>
          <img
            src="https://i0.wp.com/ayurvedam365.com/wp-content/uploads/2023/03/chicken-fry-piece-biryani.jpg?resize=1200%2C675&ssl=1pg"
            className="item-img" alt="Biryani"/>
        </div>

        <div className="container">
          <div className="item">
            <h3 className="item-name">Fry piece Biryani</h3>
            <p>Price: <i className='bx bx-rupee'></i>200</p>
            <i className='bx bxs-star check'></i>
            <i className='bx bxs-star check'></i>
            <i className='bx bxs-star check'></i>
            <i className='bx bxs-star check'></i>
            <i className='bx bxs-star'></i>
            <div className="add">
              <button type="button " onClick={() => add1('value2')}> Add </button>
              <div>
                <button onClick={() => dec('value2')} className="cou-but">-</button>
                <button className="cou-but-1" id="value2">{values.value2}</button>
                <button onClick={() => add('value2')} className="cou-but">+</button>
              </div>
            </div>
          </div>
          <img
            src="https://assets.gqindia.com/photos/649eb2753079ace4f5336eaa/master/pass/how-Indians-have-ordered-76-million-biryanis-in-the-last-12-months.jpg"
            className="item-img" alt="Biryani"/>
        </div>
      </div>

      <div className="res-item">
        <div className="container">
          <div className="item">
            <h3 className="item-name">Fry piece Biryani</h3>
            <p>Price: <i className='bx bx-rupee'></i>200</p>
            <i className='bx bxs-star check'></i>
            <i className='bx bxs-star check'></i>
            <i className='bx bxs-star check'></i>
            <i className='bx bxs-star check'></i>
            <i className='bx bxs-star'></i>
            <div className="add">
              <button type="button" onClick={() => add1('value3')}> Add</button>
              <div>
                <button onClick={() => dec('value3')} className="cou-but">-</button>
                <button className="cou-but-1" id="value3">{values.value3}</button>
                <button onClick={() => add('value3')} className="cou-but">+</button>
              </div>
            </div>
          </div>
          <img
            src="https://lh3.googleusercontent.com/WHUWDagIb1Ji4v9mpnK_SNW1YiVnsAKN8-kvQRqjMfzTe8hvk8V6SmKbpRcD0F5L5pXKSjtzYTzo_OipX7n1fvrGGD7l9NUiCK4VMKqI8g"
            className="item-img" alt="Biryani"/>
        </div>

        <div className="container">
          <div className="item">
            <h3 className="item-name">Fry piece Biryani</h3>
            <p>Price: <i className='bx bx-rupee'></i>200</p>
            <i className='bx bxs-star check'></i>
            <i className='bx bxs-star check'></i>
            <i className='bx bxs-star check'></i>
            <i className='bx bxs-star check'></i>
            <i className='bx bxs-star'></i>
            <div className="add">
              <button type="button" onClick={() => add1('value4')}> Add</button>
              <div>
                <button onClick={() => dec('value4')} className="cou-but">-</button>
                <button className="cou-but-1" id="value4">{values.value4}</button>
                <button onClick={() => add('value4')} className="cou-but">+</button>
              </div>
            </div>
          </div>
          <img
            src="https://c.ndtvimg.com/2023-08/sfc3gcoo_chicken-snack_625x300_21_August_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"
            className="item-img" alt="Biryani"/>
        </div>
      </div>

      <div className="container">
        <div className="item">
          <h3 className="item-name">Fry piece Biryani</h3>
          <p>Price: <i className='bx bx-rupee'></i>200</p>
          <i className='bx bxs-star check'></i>
          <i className='bx bxs-star check'></i>
          <i className='bx bxs-star check'></i>
          <i className='bx bxs-star check'></i>
          <i className='bx bxs-star'></i>
          <div className="add">
            <button type="button" onClick={() => add1('value5')}> Add</button>
            <div>
              <button onClick={() => dec('value5')} className="cou-but">-</button>
              <button className="cou-but-1" id="value5">{values.value5}</button>
              <button onClick={() => add('value5')} className="cou-but">+</button>
            </div>
          </div>
        </div>
        <img src="https://i0.wp.com/www.shanazrafiq.com/wp-content/uploads/2016/12/3-DSC_0126.jpg?fit=1600%2C972&ssl=1"
          className="item-img" alt="Biryani"/>
      </div>
    </div>
  );
}

export default Barkaas;
