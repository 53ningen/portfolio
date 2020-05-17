import React from 'react'
import styled from 'styled-components'
import Item from './Icon'

type Props = {
  icon: Item
}

const IconText: React.FC<Props> = (props) => (
  <IconTextWrapper>
    <I>{props.icon}</I>
    {props.children}
  </IconTextWrapper>
)

export default IconText

const IconTextWrapper = styled.div`
  margin-right: 10px;

  line-height: 10px;
  font-weight: 400;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Ubuntu, 'Helvetica Neue', sans-serif;
  box-sizing: border-box;
  color: rgb(101, 119, 134);

  display: inline-flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
`

const I = styled.span`
  margin-right: 5px;
`
