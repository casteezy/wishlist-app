import React from 'react';
import {Media} from 'react-bootstrap';

function WishlistViewItem({imgSrc, title, detail, description}) {
    return (
        <div className="WishlistViewItem">
            <Media>
                <Media.Left>
                    <img className="WishlistViewItem--Image" src={imgSrc} alt="placeholder"/>
                </Media.Left>
                <Media.Body>
                    <Media.Heading className="WishlistViewItem--Title"><a href="#">{title}</a></Media.Heading>
                    <Media.Body>
                        <p className="WishlistViewItem--Details"><strong>{detail}</strong></p>
                        <p className="WishlistViewItem--Description">{description}</p>
                        <ul className="list-inline WishlistViewItem--LinkBar">
                            <li className="WishlistViewItem--LinkBarItem"><a href="#">
                                 Mark as Purchased</a></li>
                            <li className="WishlistViewItem--LinkBarItem"><a href="#">
                                <span className="fa fa-question-circle"></span> Ask About This Item</a></li>
                        </ul>
                    </Media.Body>
                </Media.Body>
            </Media>
        </div>
    );
}

export default WishlistViewItem;