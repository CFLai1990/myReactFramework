/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react'
import styled from 'styled-components'
import { injectIntl, intlShape, FormattedMessage } from 'react-intl'

import Flex from 'components/Flex/index'
import { Page, Header, Body, Row, Col } from 'components/Page/index'
import View from 'components/View/index'
import SVGView from 'components/SVGView/index'
import TestView from 'containers/TestView/Loadable'

class HomePageHeader extends React.PureComponent {
    // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <Header title={this.props.intl.formatMessage({ id: 'app.components.title' })} language data />
    )
  }
}

HomePageHeader.propTypes = {
  intl: intlShape.isRequired
}

class HomePageBody extends React.PureComponent {
    // eslint-disable-line react/prefer-stateless-function
  constructor (props) {
    super(props)
    // Row 1
    this.R1 = new Flex.Unit(Body.style.viewWidth, Body.style.viewHeight * 0.6) // The real (vw, vh)
    this.R1_View1 = this.R1.child(40, 100)
    this.R1_View1_SVG = {
      size: {w: 90, h: 90}
    }
    this.R1_C2 = this.R1.child(40, 100)
    this.R1_C2_View1 = this.R1_C2.child(100, 40)
    this.R1_C2_View2 = this.R1_C2.child(100, 60)
    this.R1_View3 = this.R1.child(20, 100)
    this.R1_View3_SVG = {
      size: {w: 85, h: 85},
      viewBox: {w: 100, h: 100}
    }
    // Row 2
    this.R2 = new Flex.Unit(Body.style.viewWidth, Body.style.viewHeight * 0.4) // The real (vw, vh)
    this.R2_View1 = this.R2.child(100, 100)
  }
  render () {
    return (
      <Body>
        <Row size={this.R1.size}>
          <SVGView size={this.R1_View1.size} inner={this.R1_View1_SVG} />
          <Col size={this.R1_C2.size}>
            <View size={this.R1_C2_View1.size} />
            <View size={this.R1_C2_View2.size} />
          </Col>
          <TestView size={this.R1_View3.size} inner={this.R1_View3_SVG} />
        </Row>
        <Row size={this.R2.size}>
          <View size={this.R2_View1.size} />
        </Row>
      </Body>
    )
  }
}

export default Page(injectIntl(HomePageHeader), HomePageBody)
