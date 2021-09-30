import React, {useState, useEffect} from 'react';
import "./Category.js";
import { CartContext } from '../components/CartProvider.js';
import { Container, Card, CardTitle,CardSubtitle, Button,CardText, CardImg,Row,Col,CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Shopping.css";

function Shopping() {
    const shoppingCart = React.useContext(CartContext);
    console.log("shoppingCart",shoppingCart);
    const [total, setTotal] = useState(0);
    useEffect(() =>  {
        const totalPrice = () => {
            const total = shoppingCart.cart.reduce((first, item) => {
                return first + (item.price * item.quantity)
            },0)
            setTotal(total);
        }
        totalPrice();
    }, [shoppingCart.cart])
    
    return (
        <div>
            <Container className="menuItem " >
                <Row className=" justify-content-center mt-3 ">
                {shoppingCart.cart.map((shoppingCartItem,i) => {
                    return(
                        <Col xs ={10}sm={9} md={12} lg={8} key={i} className=" mb-2  menuColumn">
                            <Card className="border-2 d-flex flex-md-row  menuCard" style={{height:"100%",position:"relative"}}>
                                    <Button className="d-flex justify-content-center" style={{ width:"25px",height:"25px", alignItems:"center", position:"absolute", top:"0", left:"0", color:"red", fontSize:"22px", border:"1px solid ", cursor:"pointer"}} onClick={() => shoppingCart.removeFromCart(i)}>X</Button>
                                <CardImg className="menuImg"   style={{height:"100%", width:"50%", objectFit:"cover" }} src={shoppingCartItem.image.url} alt="Card image cap" />
                                <CardBody className="menuBody " style={{height:"100%", width:"50%", position:"relative"}}>
                                    <CardTitle className="menuTitle mb-md-3" tag="h5"><b>Title: </b>{shoppingCartItem.title}</CardTitle>
                                    <CardText className=" menuTitle mb-md-5  "><b>ID:</b>{shoppingCartItem._id}</CardText>
                                    <div className="priceAndOrder"  style={{backgroundColor:"", alignItems:"center", display:"flex",justifyContent:"space-between"}}>
                                        <div className="menuOrderDiv ">
                                            <CardText className="menuOrder menuOrderIcon " onClick={() => shoppingCart.decrementCount(shoppingCartItem)}>-</CardText>
                                            <CardText className="menuOrderNumber menuOrderIcon">{shoppingCartItem.quantity}</CardText>
                                            <CardText className="menuOrder menuOrderIcon" onClick={() => shoppingCart.addToCart(shoppingCartItem)}>+</CardText>
                                        </div>
                                        <div className="">
                                            <CardSubtitle tag="h6" className=" menuPrice  ">{(shoppingCartItem.price * shoppingCartItem.quantity).toFixed(2)}€</CardSubtitle>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                }

                )}
                {/* <Button className="menuButton" onClick={() => shoppingCart.removeFromCart(categoryProduct)} >ORDER</Button> */}
                </Row>
                {/* <Row className="justify-content-center mt-3">
                        <Col xs ={10}sm={9} md={12} lg={8}>
                        <CardText className ="summaryCard">{shoppingCart.cart.length === 0?
                        (<p>your cart is empty</p>) : 
                        (<b>Summary: {total.toFixed(2)}€</b>)}</CardText>
                        </Col>
                    </Row> */}
                    <Row className="justify-content-center mt-3 mb-3 ">
                        {shoppingCart.cart.length === 0?
                        (<p style={{textAlign: "center", fontSize: "25px", textTransform: "capitalize"}}>your cart is empty!</p>) :
                        (<>
                        <Col xs={6} md={6} lg={4} className=" summaryCardCol">
                        <CardText className ="summaryCard"><b>Summary:</b>{total.toFixed(2)}€</CardText>
                        </Col>
                        <Col className=" d-flex shoppingButton " xs={6} md={6} lg={4} style={{justifyContent:"space-between"}}>
                    <Button className="" style={{marginRight: "3px", borderRadius: "10px", backgroundColor: "darkorange", color: "white", border:"none"}}>
                        Go Back
                    </Button>
                    <Button className="bg-success" style={{marginRight: "3px", borderRadius: "10px", color: "white", border:"none"}}>
                        Checkbox
                    </Button>
                    </Col>
                    </>)
                    
                    }
                        
                    </Row>
                </Container>
        </div>
    )
}

export default Shopping
