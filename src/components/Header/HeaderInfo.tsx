import React from 'react'
import styled from 'styled-components'
import { Profile } from '../../models/Profile'
import AvatorIcon from '../commons/AvatorIcon'
import IconText from '../commons/IconText'
import HeaderButtons from './HeaderButtons'

type Props = {
  profile: Profile
}

const HeaderInfo: React.FC<Props> = (props) => (
  <Wrapper>
    <ButtonsWrapper>
      <AvatarWrapper>
        <AvatorIcon iconPath="images/avatar.jpg" />
      </AvatarWrapper>
      <HeaderButtons />
    </ButtonsWrapper>
    <NamesWrapper>
      <Name>{props.profile.name}</Name>
      <ScreenName>{props.profile.screenName}</ScreenName>
    </NamesWrapper>
    <Description>{props.profile.description}</Description>
    <IconTextsWrapper>
      <IconText iconPath="images/svg/location.svg">
        {props.profile.location}
      </IconText>
      <IconText iconPath="images/svg/work.svg">
        {props.profile.company}
      </IconText>
      <IconText iconPath="images/svg/cake.svg">
        {props.profile.birthday}
      </IconText>
      <IconText iconPath="images/svg/link.svg">
        <a href={props.profile.url} target="_blank">
          {props.profile.displayUrl}
        </a>
      </IconText>
    </IconTextsWrapper>
  </Wrapper>
)

export default HeaderInfo

const Wrapper = styled.div`
  height: 100%;
  margin: 15px;
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-basis: auto;
  flex-direction: row;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`

const AvatarWrapper = styled.div`
  width: 25%;
  min-width: 49px;
  margin-left: -4px;
  margin-top: -18%;
  margin-bottom: -4px;
  border-radius: 9999px;
  border: solid 4px rgba(255, 255, 255, 1);
`

const NamesWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`

const Name = styled.div`
  font-size: 19px;
  font-weight: 800;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Ubuntu, 'Helvetica Neue', sans-serif;
  line-height: 24.9374px;
  box-sizing: border-box;
`

const ScreenName = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Ubuntu, 'Helvetica Neue', sans-serif;
  color: rgb(101, 119, 134);
`

const Description = styled.div`
  margin-bottom: 10px;
`

const IconTextsWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`
