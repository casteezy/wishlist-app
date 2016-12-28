import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Grid, Container, Header } from 'semantic-ui-react';
import WishlistItem from './components/WishlistItem';
import './Wishlist.scss';

const mapStateToProps = state => ({
  ownerName: state.getIn(['wishlist', 'ownerName']),
  items: state.getIn(['wishlist', 'items']),
});

const Wishlist = ({ ownerName, items }) => (
  <div className="Wishlist">
    <Container>
      <Header as="h1" className="Wishlist--Title">
        {ownerName}&rsquo;s Wishlist
      </Header>
      <Grid columns="4">
        <Grid.Row>
          {items.keySeq().map(key =>
            <Grid.Column key={key}>
              <WishlistItem
                id={key}
                imgSrc="http://placehold.it/200x200"
                {...items.get(key).toJS()}
              />
            </Grid.Column>,
          )}
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

Wishlist.propTypes = {
  ownerName: PropTypes.string.isRequired,
  items: ImmutablePropTypes.map,
};

export default connect(mapStateToProps)(Wishlist);
