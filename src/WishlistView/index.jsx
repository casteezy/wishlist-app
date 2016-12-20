import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {PageHeader} from 'react-bootstrap';
import Flexbox from 'flexbox-react';
import WishlistViewItem from './components/WishlistViewItem';
import './WishlistView.scss';

const mapStateToProps = (state) => {
    const { wishlistView } = state;
    return {
        ownerName: wishlistView.ownerName,
        items: wishlistView.items,
    };
};

const WishlistViewComponent = ({ownerName, items = []}) => {
    const itemComponents = items.map(({id, title, detail, description, purchased}) => {
        return (
            <WishlistViewItem
                key={id}
                id={id}
                imgSrc='http://placehold.it/200x200'
                title={title}
                detail={detail}
                description={description}
                purchased={purchased}
            />
        );
    });

    return (
        <div className="WishlistView container">
            <Flexbox flexDirection="column">
                <PageHeader className="WishlistView--Title">
                    {ownerName}'s Wishlist
                </PageHeader>
                {itemComponents}
            </Flexbox>
        </div>
    );
};

WishlistViewComponent.propTypes = {
    ownerName: PropTypes.string.isRequired,
    items: PropTypes.array,
};


export default connect(mapStateToProps)(WishlistViewComponent);