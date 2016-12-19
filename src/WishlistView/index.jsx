import React from 'react';
import {Grid, Row, Col, PageHeader} from 'react-bootstrap';
import WishlistViewItem from './WishlistViewItem';

import './WishlistView.scss';
import {FontAwesome} from 'react-fontawesome';

function WishlistView() {
    const ownerName = 'Jane';
    const items = [{
        id: 0,
        title: 'Lorem Ipsum Dolores',
        detail: '$21.99 at Amazon, Qty: 1',
        description: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
    }, {
        id: 1,
        title: 'Forcem Ipsum Rebel Base',
        detail: '$3.95 at Target, Qty: 8',
        description: `Stretch out with your feelings. You see, you can do it. I call it luck. In my experience, there's no such thing as luck. Look, going good against remotes is one thing. Going good against the living? That's something else. Looks like we're coming up on Alderaan. No, my father didn't fight in the wars. He was a navigator on a spice freighter. That's what your uncle told you. He didn't hold with your father's ideals. Thought he should have stayed here and not gotten involved. You fought in the Clone Wars? Yes, I was once a Jedi Knight the same as your father.`,
    }];

    const wishlistViewItems = items.map(({id, title, detail, description}) => {
        return (
            <Row key={id}>
                <Col md={10} mdOffset={1}>
                    <WishlistViewItem
                        imgSrc='http://placehold.it/200x200'
                        title={title}
                        detail={detail}
                        description={description}
                    />
                </Col>
            </Row>
        );
    });

    return (
        <div className="WishlistView container">
            <Grid>
                <Row>
                    <Col md={10} mdOffset={1}>
                        <PageHeader className="page-title">{ownerName}'s Wishlist
                            {/*<FontAwesome
                            className='super-crazy-colors'
                            name='rocket'
                            size='2x'
                            spin
                            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                        />*/}</PageHeader>
                    </Col>
                </Row>
                {wishlistViewItems}
            </Grid>
        </div>
    );
}

export default WishlistView;