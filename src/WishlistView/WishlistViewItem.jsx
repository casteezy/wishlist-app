import React from 'react';
import {Media} from 'react-bootstrap';
import LinkBar from './LinkBar';

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
                        <p className="WishlistViewItem--Detail"><strong>{detail}</strong></p>
                        <p className="WishlistViewItem--Description">{description}</p>
                        <LinkBar />
                    </Media.Body>
                </Media.Body>
            </Media>
        </div>
    );
}

export default WishlistViewItem;