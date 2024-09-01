import React, { useState } from 'react';
import './Barkaas.css';
import { Link } from 'react-router-dom';

function Hugamug() {
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

      return(
        <div>
            <h1 className="res-name">Hug A Mug Cafe</h1>
            <div className="res-item">
                <div className="container">
                    <div className="item">
                        <h3 className="item-name">Chocalate Milkshake</h3>
                        <p>Price: <i className='bx bx-rupee'></i>100</p>
                        <i className='bx bxs-star check'></i>
                        <i className='bx bxs-star check'></i>
                        <i className='bx bxs-star check'></i>
                        <i className='bx bxs-star check'></i>
                        <i className='bx bxs-star check'></i>
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
                        src="https://thegourmetbonvivant.com/wp-content/uploads/2022/01/chocolate-cake-milkshake-1200x1200-1.jpg"
                        className="item-img" alt="milkshake" />
                </div>

                <div className="container">
                    <div className="item">
                        <h3 className="item-name">Mint Mojito</h3>
                        <p>Price: <i className='bx bx-rupee'></i>75</p>
                        <i className='bx bxs-star check'></i>
                        <i className='bx bxs-star check'></i>
                        <i className='bx bxs-star check'></i>
                        <i className='bx bxs-star check'></i>
                        <i className='bx bxs-star '></i>
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
                        src="https://data.thefeedfeed.com/recommended/post_3966940.jpeg"
                        className="item-img" alt="mojito" />
                </div>
            </div>

            <div className="res-item">
        <div className="container">
          <div className="item">
            <h3 className="item-name">Espresso Coffee</h3>
            <p>Price: <i className='bx bx-rupee'></i>60</p>
            <i className='bx bxs-star check'></i>
            <i className='bx bxs-star check'></i>
            <i className='bx bxs-star check'></i>
            <i className='bx bxs-star check'></i>
            <i className='bx bxs-star check'></i>
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
            src="https://hips.hearstapps.com/hmg-prod/images/espresso-martini-index-6613f83abcb4d.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*"
            className="item-img" alt="coffee"/>
        </div>

        <div className="container">
          <div className="item">
            <h3 className="item-name">Special masala maggiee</h3>
            <p>Price: <i className='bx bx-rupee'></i>50</p>
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
            src="https://madhurasrecipe.com/wp-content/uploads/2020/10/Kolhapuri-Maggi-Masala-Marathi-Recipe-585x419.jpg"
            className="item-img" alt="maggiee"/>
        </div>
      </div>
        </div>
      );
}

export default Hugamug;