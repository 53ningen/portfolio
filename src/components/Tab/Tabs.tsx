import React from 'react'
import styled from 'styled-components'
import Tab from './Tab'
import { TabItem } from '../../models/TabItem'

interface Props {
  activeItem: TabItem
}

interface States {}

export default class Tabs extends React.Component<Props, States> {
  render() {
    return (
      <Nav>
        <Tab href="/" isActive={this.props.activeItem == 'Skills'}>
          Skills
        </Tab>
        <Tab
          href="/backgrounds"
          isActive={this.props.activeItem == 'Backgrounds'}
        >
          Backgrounds
        </Tab>
        <Tab href="/links" isActive={this.props.activeItem == 'Links'}>
          Links
        </Tab>
        <Tab href="/hobbies" isActive={this.props.activeItem == 'Hobbies'}>
          Hobbies
        </Tab>
      </Nav>
    )
  }
}

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: solid 1px #e6ecf0;
`
