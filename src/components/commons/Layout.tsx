import React from 'react'
import styled from 'styled-components'

const margin = '10px'

type Props = {
  marginLeft?: boolean
  marginTop?: boolean
  marginBottom?: boolean
  marginRight?: boolean
}

const Layout: React.FC<Props> = (props) => (
  <Wrapper
    marginLeft={props.marginLeft}
    marginTop={props.marginTop}
    marginBottom={props.marginBottom}
    marginRight={props.marginRight}
  >
    {props.children}
  </Wrapper>
)

export default Layout

const Wrapper = styled.div<Props>`
  border: 0;
  margin-left: ${(props) => (props.marginLeft ? margin : 0)};
  margin-top: ${(props) => (props.marginTop ? margin : 0)};
  margin-right: ${(props) => (props.marginRight ? margin : 0)};
  margin-bottom: ${(props) => (props.marginBottom ? margin : 0)};
`
