import React from 'react'
import styled from 'styled-components'
import AvatarIcon from '../commons/AvatorIcon'
import IconText from '../commons/IconText'
import {
  ReplyIcon,
  RetweetIcon,
  FavoriteBorderIcon,
  LinkIcon,
} from '../commons/Icon'
import { Status as StatusModel } from '../../models/Status'

interface Props {
  status: StatusModel
}

export default class Status extends React.Component<Props, {}> {
  render() {
    var avatarWrapper = (
      <AvatarWrapper>
        <AvatarIcon
          iconPath={this.props.status.icon || 'images/avatar.jpg'}
        ></AvatarIcon>
      </AvatarWrapper>
    )
    if (this.props.status.url) {
      avatarWrapper = (
        <a href={this.props.status.url || ''} target="_blank">
          {avatarWrapper}
        </a>
      )
    }

    var namesWrapper = (
      <NamesWrapper>
        {' '}
        <Name>{this.props.status.name}</Name>
        <ScreenName>{this.props.status.screenName || ''}</ScreenName>
      </NamesWrapper>
    )
    if (this.props.status.url) {
      namesWrapper = (
        <a href={this.props.status.url || ''} target="_blank">
          {namesWrapper}
        </a>
      )
    }
    return (
      <Wrapper id={this.props.status.id}>
        {avatarWrapper}
        <DetailsWrapper>
          <MetadataWrapper>
            {namesWrapper}
            <span style={{ color: 'rgb(101, 119, 134)', marginRight: '5px' }}>
              ·
            </span>
            <a href={'#' + this.props.status.id}>
              <UpdatedDate>{this.props.status.updated}</UpdatedDate>
            </a>
          </MetadataWrapper>
          <TextWrapper>{this.props.status.text}</TextWrapper>
          <FooterWrapper>
            <IconWrapper>
              <IconText icon={<ReplyIcon />}></IconText>
            </IconWrapper>
            <IconWrapper>
              <IconText icon={<RetweetIcon />}>
                {this.props.status.retweetCount || ''}
              </IconText>
            </IconWrapper>
            <IconWrapper>
              <IconText icon={<FavoriteBorderIcon />}>
                {' '}
                {this.props.status.favoriteCount || ''}
              </IconText>
            </IconWrapper>
            <IconWrapper>
              <IconText icon={<LinkIcon />}></IconText>
            </IconWrapper>
          </FooterWrapper>
        </DetailsWrapper>
      </Wrapper>
    )
  }
}

const Wrapper = styled.article`
  padding: 10px 15px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  line-height: 1.3125;

  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  background-color: rgb(255, 255, 255);
  &:hover {
    background-color: rgb(245, 248, 250);
  }
`

const AvatarWrapper = styled.div`
  width: 49px;
  height: 49px;
  flex-basis: 49px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-left: 5px;
  margin-right: 5px;
`

const DetailsWrapper = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  flex-grow: 1;
  flex-shrink: 1;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Ubuntu, 'Helvetica Neue', sans-serif;
`

const MetadataWrapper = styled.div`
  margin-bottom: 2px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`

const NamesWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  color: rgb(20, 23, 26);
`

const Name = styled.div`
  margin-right: 5px;
  font-weight: bold;
`

const ScreenName = styled.div`
  margin-right: 5px;
  color: rgb(101, 119, 134);
`

const UpdatedDate = styled.div`
  color: rgb(101, 119, 134);
`

const TextWrapper = styled.div`
  margin-bottom: 10px;
`

const FooterWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
`

const IconWrapper = styled.div`
  width: 25%;
`
