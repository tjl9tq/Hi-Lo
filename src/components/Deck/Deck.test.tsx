import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow, ShallowWrapper } from 'enzyme';
import { unwrappedDeck as Deck } from './Deck';

describe('<Deck>', () => {
  let wrapper: ShallowWrapper;

  const defaultProps = {
    remainingCards: 52,
    drawCard: sinon.spy(),
    classes: {
      deckContainer: 'hello',
      deck: 'hello',
    }
  };

  beforeEach(() => {
    wrapper = shallow(
      <Deck {...defaultProps}/>,
    );
  });

  it('renders correctly',() => {
    expect(wrapper).to.have.exactly(3).descendants('div');
    expect(wrapper.find('div').at(0)).to.have.prop('className', defaultProps.classes.deckContainer);
    expect(wrapper.find('div').at(2)).to.have.prop('className', defaultProps.classes.deck);
  });
});
