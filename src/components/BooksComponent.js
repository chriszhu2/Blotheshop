import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

    function RenderMenuItem ({book, onClick}) {
        return (
            <Card className = "BookPic">
                <Link to = {`/books/${book.id}`}> {/* same thing as onClick */}
                <CardImg width = "100%" src={book.image} alt={book.name} className = "BookPic"/>
                <CardImgOverlay>
                    <CardTitle>{book.name}</CardTitle>
                </CardImgOverlay>
                </Link>
            </Card>
        );
    }

    const Books = (props) => {

        const books = props.books.map((book) => {
            return (
                <div className="col-12 col-md-5 m-1"  key={book.id}>
                    <RenderMenuItem book={book} />
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
                        <BreadcrumbItem active>Books</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Featured Books</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {books}
                </div>
            </div>
        );
    }

export default Books;