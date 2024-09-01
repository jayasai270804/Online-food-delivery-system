import React, { useState } from 'react';
import './Barkaas.css';
import { Link } from 'react-router-dom';

function Littlevillage() {
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
            <h1 className="res-name">Little village</h1>
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
                        className="item-img" alt="Biryani" />
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
                        className="item-img" alt="Biryani" />
                </div>
            </div>
        </div>
            );
}

            export default Littlevillage;