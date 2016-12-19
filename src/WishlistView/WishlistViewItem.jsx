import React, {Component} from 'react';
import {Media} from 'react-bootstrap';

class WishlistItem extends Component {
    render() {
        return (
            <div className="WishlistViewItem">
                <Media>
                    <Media.Left>
                        <img width="150" height="150" src="http://placehold.it/150x150" alt="placeholder"/>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading className="WishlistViewItem--Title"><a href="#">Lorem Ipsum Dolores</a></Media.Heading>
                        <Media.Body>
                            <p className="WishlistViewItem--Details"><strong>$10.00 at Amazon, Qty: 8</strong></p>
                            <p className="WishlistViewItem--Description">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                turpis.</p>
                            <ul className="list-inline WishlistViewItem--LinkBar">
                                <li className="WishlistViewItem--LinkBarItem"><a href="#"><span className="glyphicon glyphicon-ok"></span> Mark as Purchased</a></li>
                                <li className="WishlistViewItem--LinkBarItem"><a href="#"><span className="glyphicon glyphicon-question-sign"></span> Ask About This Item</a></li>
                            </ul>
                        </Media.Body>
                    </Media.Body>
                </Media>
            </div>
        );
    }
}

export default WishlistItem;