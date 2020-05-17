import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

type Props = {
  href: string
  isActive: boolean
}

const Tab: React.FC<Props> = (props) => {
  return (
    <Link href={props.href} replace>
      <Wrapper isActive={props.isActive}>
        <span>{props.children}</span>
      </Wrapper>
    </Link>
  )
}

export default Tab

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
