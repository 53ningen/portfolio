import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

interface Props {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  icon: Icon
}

export default class IconButton extends React.Component<Props, {}> {
  render() {
    return <Wrapper>{this.props.icon}</Wrapper>
  }
}

const Wrapper = styled.div`
  width: 38px;
  height: 38px;
  background-color: white;
  cursor: pointer;
  user-select: none;
  color: #21a1f3;
  border: solid 1px #21a1f3;
  border-radius: 50%;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;

  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`
