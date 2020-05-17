import React from 'react'
import styled from 'styled-components'

interface Props {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  path: string
}

export default class HeaderPhoto extends React.Component<Props, {}> {
  render() {
    return (
      <Wrapper>
        <Block />
        <Cover
          draggable={true}
          onClick={this.props.onClick}
          path={this.props.path}
        >
          <Img draggable={true} src={this.props.path} />
        </Cover>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
`

const Block = styled.div`
  width: 100%;
  padding-bottom: 33.3333%;
  z-index: 0;
`

const Cover = styled.div<Props>`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  z-index: -1;
  background-image: url(${(props) => props.path});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

const Img = styled.img`
  width: 100%;
  z-index: -1;
`
