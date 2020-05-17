import React from 'react'
import styled from 'styled-components'

const margin = '10px'

interface Props {
  marginLeft?: boolean
  marginTop?: boolean
  marginBottom?: boolean
  marginRight?: boolean
}

export default class Layout extends React.Component<Props, {}> {
  render() {
    return (
      <Wrapper
        marginLeft={this.props.marginLeft}
        marginTop={this.props.marginTop}
        marginBottom={this.props.marginBottom}
        marginRight={this.props.marginRight}
      >
        {this.props.children}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div<Props>`
  border: 0;
  margin-left: ${(props) => (props.marginLeft ? margin : 0)};
  margin-top: ${(props) => (props.marginTop ? margin : 0)};
  margin-right: ${(props) => (props.marginRight ? margin : 0)};
  margin-bottom: ${(props) => (props.marginBottom ? margin : 0)};
`
