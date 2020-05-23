import React from 'react'
import styled from 'styled-components'
import IconButton from '../commons/IconButton'
import TextButton from '../commons/TextButton'

const HeaderButtons: React.FC = (_) => (
  <Wrapper>
    <div style={{ marginRight: '10px', marginBottom: '10px' }}>
      <a
        href="https://twitter.com/messages/compose?recipient_id=37937394&ref_src=twsrc%5Etfw"
        data-screen-name="@gomi_ningen"
        target="_blank"
      >
        <IconButton iconPath="images/svg/mail.svg" />
      </a>
    </div>
    <div style={{ marginRight: '10px', marginBottom: '10px' }}>
      <IconButton iconPath="images/svg/bell.svg" />
    </div>
    <div style={{ marginBottom: '10px' }}>
      <a
        href="https://twitter.com/gomi_ningen?ref_src=twsrc%5Etfw"
        target="_blank"
      >
        <TextButton>Follow</TextButton>
      </a>
    </div>
  </Wrapper>
)

export default HeaderButtons

const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  a:hover {
    text-decoration: none;
  }
`
