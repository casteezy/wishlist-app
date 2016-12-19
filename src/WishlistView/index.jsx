import React, {Component} from 'react';
import {Grid, Row, Col, PageHeader} from 'react-bootstrap';
import WishlistViewItem from './WishlistViewItem';

import './WishlistView.scss';

class WishlistView extends Component {
    render() {
        return (
            <div className="WishlistView container">

                <Grid>
                    <Row className="show-grid">
                        <Col md={10} mdOffset={1}>
                            <PageHeader className="page-title">Jane's Wishlist</PageHeader>

                            <WishlistViewItem />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default WishlistView;