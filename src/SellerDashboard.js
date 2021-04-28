import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import Bag from './Bag';
import { db } from './firebase'


function SellerDashboard() {
    const [bag, setProducts] = useState([])

    const getProducts = () => {
        db.collection('cartItems').onSnapshot((snapshot) => {
            let tempProducts = [];
            tempProducts = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    product: doc.data()
                }
            ));
            setProducts(tempProducts);
        })
    }

    useEffect(()=>{
        console.log("Call products");
        getProducts()
    }, [])


    return (
        <Container>
            <Banner>

            </Banner>
            <Content>
                {
                    bag.map((data)=>(
                        <Bag
                            title={data.product.name}
                            image={data.product.image}
                            id={data.id}
                            quantity={data.product.quantity}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}

export default SellerDashboard;



const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`

const Banner = styled.div`
    background-image: url('https://i.imgur.com/SYHeuYM.jpg');
    min-height: 600px;
    background-position: center;
    background-size: cover;
    z-index: 1;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`

const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -350px;
    display: flex;
`
