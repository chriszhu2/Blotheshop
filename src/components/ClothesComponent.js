import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

    function RenderMenuItem ({clothe, onClick}) {
        return (
            <Card className = "BookPic">
                <Link to = {`/clothes/${clothe.id}`}> {/* same thing as onClick */}
                <CardImg width = "100%" src={clothe.image} alt={clothe.name} className = "BookPic"/>
                <CardImgOverlay>
                    <CardTitle>{clothe.name}</CardTitle>
                </CardImgOverlay>
                </Link>
            </Card>
        );
    }

    const Clothes = (props) => {

        const clothes = props.clothes.map((clothe) => {
            return (
                <div className="col-12 col-md-5 m-1"  key={clothe.id}>
                    <RenderMenuItem clothe={clothe} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className = 'row'>
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to ='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Clothes</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Featured Clothes</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {clothes}
                </div>
            </div>
        );
    }

export default Clothes;