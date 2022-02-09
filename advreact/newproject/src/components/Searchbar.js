import React, { useState } from 'react';

import { dataProducts } from '../appData';

import { NavLink } from 'react-router-dom';

import { Card, Row, Col, Button } from 'react-bootstrap';

import { ProductConsumer } from '../contextAPI';

function Searchbar() {

    const [searchTerm, setSearchTerm] = useState('');

    return (

        <div className='sear'>

            <input

                type="text"

                placeholder='Search....'

                onChange={(event) => {

                    setSearchTerm(event.target.value);

                }}

            />

            {dataProducts.filter((val) => {

                if (searchTerm === "") {

                    return val

                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {

                    return val

                }

            }).map((val, key) => {

                return (

                    <div>

                        <div className="col-4 mb-3 mx-auto col-md-6  my-4">

                            <ProductConsumer>

                                {value => (

                                    <Card className='card' style={{ width: '27rem', height: '35rem' }} >

                                        <NavLink to="/details">

                                            <Card.Img variant="top" src={dataProducts[key].img} key={key} style={{ width: "400px", height: "400px" }} />

                                        </NavLink>

                                        <Card.Body>

                                            <Card.Title>{val.title}</Card.Title>

                                        </Card.Body>

                                        <Card.Footer>

                                            <Row>

                                                <Col>

                                                    <small className="text-muted text-right">INR {val.price}</small>

                                                </Col>

                                            </Row>

                                        </Card.Footer>

                                    </Card>

                                )}

                            </ProductConsumer>

                        </div>

                    </div>

                );

            })}

        </div>

    );

}

export default Searchbar;