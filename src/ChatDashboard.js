import React ,{useState}from 'react';
import styled from 'styled-components';
import {useParams, useHistory, Redirect,Link} from "react-router-dom";
import { db} from './firebase'
import ForumIcon from '@material-ui/icons/Forum';


function ChatDashboard() {
//  const history = useHistory();
 const hello = () => {
    
   return window.location = "https://slackcloneprince.web.app/";
}
    let {id} = useParams();

    let item = db.collection("cartItems").doc(id);
    const [title, setTitle]=useState("");
    const [quantity, setQuantity]=useState("");
    const [imageSrc, setImageSrc]=useState("");
  item.get().then((doc) => {
        if (doc.exists) {
            console.log(doc.data());
            setTitle(doc.data().name);
            setQuantity(doc.data().quantity);
            setImageSrc(doc.data().image);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    
   
    return (
        <Container>
<Rectangle>
<ImageCircle>
<img src="https://randomuser.me/api/portraits/men/44.jpg" alt=""/>

</ImageCircle>

<Title>{title}</Title>
<Quantity>
             {quantity}  
            </Quantity>

         <ProductImage>
<img src={imageSrc} alt=""/>
         </ProductImage> 

         <ChatButton onClick={hello} >
             <ForumIcon className="forumIcon"  />
         </ChatButton>  
</Rectangle>

        </Container>
    )
}

export default ChatDashboard;


const Container =styled.div`
height:100vh;
background:#FFF;
padding:100px 0;
display:flex;
justify-Content:center;
`; 

const Rectangle =styled.div`
height:100px;
width:800px;
padding:10px 20px;
background:black;
display:flex;
align-items:center;
`; 
const ImageCircle =styled.div`
height:80px;
width:80px;
margin:0 20px 0 0;
border-radius:50%;
background:#FFF;
img{width:inherit;
border-radius:50%;
height:inherit;}
`; 

const Title =styled.div`
height:80px;
width:500px;
padding:5px 10px;
margin:0 20px 0 0;
background:#FFF;
display:flex;
justify-content:center;
align-items:center;
`; 

const Quantity =styled.div`
height:80px;
width:40px;
margin:0 20px 0 0;
background:#FFF;
display:flex;
justify-content:center;
align-items:center;

`; 

const ProductImage =styled.div`
height:80px;
width:80px;
margin:0 20px 0 0;
background:#FFF;
display:flex;
justify-content:center;
align-items:center;
img{width:inherit;
${'' /* border-radius:50%; */}
height:inherit;}
`; 

const ChatButton = styled.div`
background:#fff;
height:80px;
width:80px;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%; 
.forumIcon{
    font-size:2.5rem;
    color:#febd69;
    }

`;