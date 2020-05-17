import React from 'react'
import styled from 'styled-components'

interface Props {
  iconPath?: string
}

export default class TextButton extends React.Component<Props, {}> {
  render() {
    return (
      <Wrapper role="button">
        <Text>{this.props.children}</Text>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-width: calc(62.79px);
  min-height: 39px;
  max-width: 100%;
  cursor: pointer;
  user-select: none;
  padding-left: 1em;
  padding-right: 1em;
  margin: 0;
  border: solid 1px rgb(29, 161, 242);
  border-radius: 9999px;
  box-sizing: border-box;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 15px;
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Ubuntu, 'Helvetica Neue', sans-serif;
  line-height: 1;
  align-items: center;
  justify-content: center;
  color: rgba(29, 161, 242, 1);

  background-color: rgba(0, 0, 0, 0);
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  &:hover {
    background: rgba(29, 161, 242, 0.1);
  }
`

const Text = styled.span`
  min-width: 0px;
  line-height: 1.3125;
  text-decoration: none;
`
