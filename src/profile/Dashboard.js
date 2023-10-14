
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.webp';
import img5 from '../assets/img5.jpg';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {chooseProduct} from '../Store/productSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Dashboard() {

const dispatch = useDispatch()
const navigate = useNavigate()
const products = [
      {
        "id":1,
        "price":"20",
        "description":"Lays",
        "discount":"2",
        "image":img1
      },
      {
        "id":2,
        "price":"25",
        "description":"Bourbon",
        "discount":"5",
        "image":img2
      },
      {
        "id":3,
        "price":"30",
        "discount":"5",
        "description":"Coconut",
        "image":img3
      },
      {
        "id":4,
        "price":"235",
        "description":"India Gate",
        "discount":"5",
        "image":img4
      },
      {
        "id":5,
        "price":"98",
        "description":"Pickle",
        "discount":"5",
        "image":img5
      }
]

const selectProduct=(e)=>{
   const id = e.target.alt
   console.log("id",id)
   if(id){
    const findItems = products.find(item => item.id === parseInt(id))
    console.log("find products",findItems)
    dispatch(chooseProduct(findItems))
    navigate('/ViewItems')
   }
   
  
}
  return (
       <div>
  
    <div>

    </div>
        <div className='container pt-5' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {products.map(pdtList=>(
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" onClick={(e)=>selectProduct(e)} src={pdtList.image} alt={pdtList.id} style={{height:'200px',width:'200px'}} />
                        <Card.Body>
                            <Card.Title className='text-Danger'>{pdtList.description}</Card.Title>
                            <Card.Text>
                            {/* <Card.Img variant="top" src={pdtList.src} alt={`Image`} /> */}
                        
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Product Price : {pdtList.price}</ListGroup.Item>
                            <ListGroup.Item>Discount : {pdtList.discount}</ListGroup.Item>  
                        </ListGroup>
                    </Card>    
                </div>
            ))}
        </div>
        <div className='p-5'>
           Footer
        </div>
    </div>
 

  );
}

export default Dashboard;