import React from 'react'

import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import Instructions from '../../../client/components/Instructions'

describe('<Instructions /> component test', () => {
  it('renders the instructions correctly', () => {
    // Arrange
    const expected = 'He Pokai-Manu is a treasure-hunt game for birds in Aotearoa. We aim to help younger Kiwis learn more about our bird life in an exciting way, while getting them outside and interested in nature.'

    // Act
    const wrapper = mount(<Instructions />)
    const actual = wrapper.text()
    // Assert
    expect(actual).toContain(expected)
  })
  it('render unchanged from previous snapshot', () => {
    const wrapper = mount(<Instructions/>)

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
