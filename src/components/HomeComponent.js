import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import Slider from './Slider';
function RenderCard({item}) {

    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }  {/* if item.desination is not null, return cardsubtitle */}
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {
    return(
        
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <Slider/>
                </div>
            </div>
            
            <div className="row align-items-start">
                
                <div className="col-12 col-md m-1" >
                    <RenderCard item={props.celeb1} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.celeb2} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.celeb3} />
                </div>
                
            </div>
        </div>
    );
}

export default Home;