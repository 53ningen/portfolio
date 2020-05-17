import React from 'react'
import styled from 'styled-components'

interface Props {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  iconPath: string
}

interface State {}

export default class AvatorIcon extends React.Component<Props, State> {
  render() {
    return (
      <Wrapper>
        <MarginBottom />
        <Icon iconPath={this.props.iconPath} />
        <Hover />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 1);
  border: solid 1px rgba(0, 0, 0, 0.04);
  border-radius: 9999px;
`

const MarginBottom = styled.div`
  margin-bottom: 100%;
`

const Icon = styled.div<Props>`
  background-image: url(${(props) => props.iconPath});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`

const Hover = styled.div`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 0px 2px inset;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 1;
  &:hover {
    background-color: rgba(26, 26, 26, 0.15);
  }
`
