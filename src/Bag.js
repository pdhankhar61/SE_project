import React from 'react'
import { useHistory} from 'react-router-dom';
import styled from 'styled-components'
import { db } from './firebase'

function Bag({ title, quantity, image, id }) {
 const history = useHistory();

    const chatWithCustomers = () => {
        console.log(id);
        
       return history.push(`/sellerDashboard/chatWithCustomers/${id}`);
    }

    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Quantity>
                {quantity}
            </Quantity>

            <Image src={image} />
            <ActionSection>
                <AddToCartButton
                    onClick={chatWithCustomers}
                >
                    Chat with Customers
                </AddToCartButton>
            </ActionSection>
        </Container>
    )
}

export default Bag;

const Container = styled.div`
    background-color: white;
    z-index: 100;
    ${'' /* flex: 1; */}
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    display: flex;
    flex-direction: column;
`
const Title = styled.span`
max-width:300px`
const Quantity = styled.span`
    font-weight: 500;
    margin-top: 3px;
`
// const Rating = styled.div`
//     display: flex;
// `
const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`

const ActionSection = styled.div`
    margin-top: 12px;
    display: grid;
    place-items: center;
`

const AddToCartButton = styled.button`
    ${'' /* width: 100px; */}
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    cursor: pointer;
`
