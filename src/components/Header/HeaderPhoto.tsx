import React from 'react'
import styled from 'styled-components'

type Props = {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  path: string
}

const HeaderPhoto: React.FC<Props> = (props) => (
  <Wrapper>
    <Block />
    <Cover draggable={true} onClick={props.onClick} path={props.path}>
      <Img draggable={true} src={props.path} />
    </Cover>
  </Wrapper>
)

export default HeaderPhoto

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
