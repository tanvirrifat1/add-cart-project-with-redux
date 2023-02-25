import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { ADD } from '../Redux/actions/action';
import './style.css'


const Cards = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('/CardData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const dispatch = useDispatch()

    const send = (e) => {
        dispatch(ADD(e))
    }

    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Add to Cart Project</h2>

            <div className="row d-flex justify-content-center align-items-center">
                {
                    data && data.map((element) => {

                        return (
                            <>
                                <Card
                                    key={element.id}
                                    style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                                    <Card.Img variant="top" src={element.imgdata} style={{ height: '16rem' }} className='mt-3' />
                                    <Card.Body>
                                        <Card.Title>{element.rname}</Card.Title>
                                        <Card.Text>
                                            price: ৳ {element.price}
                                        </Card.Text>
                                        <div className="button_div d-flex justify-content-center">
                                            <Button
                                                onClick={() => send(element)}
                                                variant="primary"
                                                className='col-lg-12'>Add to cart
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default Cards;