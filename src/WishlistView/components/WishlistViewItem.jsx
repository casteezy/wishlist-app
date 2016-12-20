import React, {PropTypes} from 'react';
import {Media} from 'react-bootstrap';
import {Icon} from 'react-fa';
import LinkBarContainer from './LinkBarContainer';

function WishlistViewItem({id, imgSrc, title, detail, description, purchased}) {
    return (
        <div className="WishlistViewItem">
            <Media>
                <Media.Left>
                    <div className="ImageBlock">
                        <img className="ImageBlock--Image" src={imgSrc} alt="placeholder"/>
                        {purchased && <div className="ImageBlock--Overlay">
                            <span className="ImageBlock--OverlayText"><Icon name="check-circle"/> Purchased</span>
                        </div>}
                    </div>
                </Media.Left>
                <Media.Body>
                    <Media.Heading className="WishlistViewItem--Title"><a href="#">{title}</a></Media.Heading>
                    <Media.Body>
                        <p className="WishlistViewItem--Detail"><strong>{detail}</strong></p>
                        <p className="WishlistViewItem--Description">{description}</p>
                        <LinkBarContainer itemId={id} purchased={purchased} />
                    </Media.Body>
                </Media.Body>
            </Media>
        </div>
    );
}

WishlistViewItem.propTypes = {
    id: PropTypes.number.isRequired,
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    detail: PropTypes.string,
    description: PropTypes.string,
    purchased: PropTypes.bool,
};

export default WishlistViewItem;