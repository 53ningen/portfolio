import React from 'react'
import styled from 'styled-components'
import { TabItem } from '../../models/TabItem'
import Tab from './Tab'

type Props = {
  activeItem: TabItem
}

const Tabs: React.FC<Props> = (props) => (
  <Nav>
    <Tab href="/" isActive={props.activeItem == 'Skills'}>
      Skills
    </Tab>
    <Tab href="/backgrounds" isActive={props.activeItem == 'Backgrounds'}>
      Backgrounds
    </Tab>
    <Tab href="/links" isActive={props.activeItem == 'Links'}>
      Links
    </Tab>
    <Tab href="/hobbies" isActive={props.activeItem == 'Hobbies'}>
      Hobbies
    </Tab>
  </Nav>
)

export default Tabs

const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: solid 1px #e6ecf0;
`
