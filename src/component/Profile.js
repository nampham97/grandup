import { Col, Container, Row } from "react-bootstrap";
import { Redirect } from "react-router";

export default function Profile({profileUser, isSignedIn}){
    const styleImg ={
        borderRadius: '50% 50%',
        width: '200px',
        height: '200px'
    }


    return (
        !isSignedIn ? <Redirect exact from="/private/profile" to="/" /> :
        <div className="profileUser">
            <img src={profileUser.imageUrl} alt="anhdaidien"  style={styleImg}/>

            <hr></hr>
            <Container>
                <Row>
                    <Col xs lg='4'></Col>
                    <Col lg="4">
                        <span style={{marginRight: '20px'}} >Email: </span>
                        <span>{profileUser.email}</span>
                    </Col>
                    <Col xs lg='4'></Col>
                </Row>
                <Row>
                    <Col xs lg='4'></Col>
                    <Col lg="4">
                        <span style={{marginRight: '20px'}} >First Name: </span>
                        <span>{profileUser.familyName}</span>
                    </Col>
                    <Col xs lg='4'></Col>
                </Row>
                <Row>
                    <Col xs lg='4'></Col>
                    <Col lg="4">
                        <span style={{marginRight: '20px'}} >Last Name: </span>
                        <span>{profileUser.givenName}</span>
                    </Col>
                    <Col xs lg='4'></Col>
                </Row>
                <Row>
                    <Col xs lg='4'></Col>
                    <Col lg="4">
                        <span style={{marginRight: '20px'}} >Full Name: </span>
                        <span>{profileUser.name}</span>
                    </Col>
                    <Col xs lg='4'></Col>
                </Row>
            </Container>         
        </div>
    )
}