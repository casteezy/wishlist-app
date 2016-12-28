import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Grid, Container, Divider } from 'semantic-ui-react';
import Heading from './components/Heading';
import WishlistItem from './components/WishlistItem';
import './Wishlist.scss';

const Wishlist = ({ ownerName, items }) => (
  <div className="Wishlist">
    <Container>
      <Heading ownerName={ownerName} />
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

const mapStateToProps = state => ({
  ownerName: state.getIn(['wishlist', 'ownerName']),
  items: state.getIn(['wishlist', 'items']),
});

Wishlist.propTypes = {
  ownerName: PropTypes.string.isRequired,
  items: ImmutablePropTypes.map,
};

export default connect(mapStateToProps)(Wishlist);
