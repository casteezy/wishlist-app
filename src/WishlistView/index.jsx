import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Flexbox from 'flexbox-react';
import {PageHeader} from 'react-bootstrap';
import WishlistViewItem from './components/WishlistViewItem';
import './WishlistView.scss';

const mapStateToProps = (state) => {
    const { wishlistView } = state;
    return {
        ownerName: wishlistView.ownerName,
        wishlistViewItems: wishlistView.wishlistViewItems,
    };
};

const WishlistViewComponent = ({ownerName, wishlistViewItems = []}) => {
    const itemComponents = wishlistViewItems.map(({id, title, detail, description, purchased}) => {
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
                <PageHeader className="page-title">
                    {ownerName}'s Wishlist
                </PageHeader>
                {itemComponents}
            </Flexbox>
        </div>
    );
};

WishlistViewComponent.propTypes = {
    ownerName: PropTypes.string.isRequired,
    wishlistViewItems: PropTypes.array,
};


export default connect(mapStateToProps)(WishlistViewComponent);