import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

interface Props {
  href: string
  isActive: boolean
}

interface States {
  isActive: boolean
}

export default class Tab extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props)
    this.state = { isActive: props.isActive }
  }
  render() {
    return (
      <Link href={this.props.href} replace>
        <Wrapper isActive={this.state.isActive}>
          <span>{this.props.children}</span>
        </Wrapper>
      </Link>
    )
  }
}

const Wrapper = styled.div<{ isActive: boolean }>`
  height: 52px;
  line-height: 1.3125;
  font-weight: bold;
  color: ${(props) =>
    props.isActive ? 'rgb(29, 161, 242)' : 'rgb(101, 119, 134)'};
  box-sizing: border-box;
  border-bottom: ${(props) =>
    props.isActive ? 'solid 2px rgb(29, 161, 242);' : 0};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  cursor: pointer;
  user-select: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Ubuntu, 'Helvetica Neue', sans-serif;

  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`
