import React from 'react'
import Tabs from '../components/Tab/Tabs'
import Header from '../components/Header/Header'
import Statuses from '../components/Status/Statuses'
import styled from 'styled-components'
import { Status } from '../models/Status'
import { Profile } from '../models/Profile'
import { TabItem } from '../models/TabItem'

interface Props {
  tabItem: TabItem
  statuses: Status[]
}

export default class Index extends React.Component<Props, {}> {
  render() {
    const profile: Profile = {
      name: 'ゴミ人間',
      screenName: '@gomi_ningen',
      description:
        'ウェブ界隈で労働をしている @gomi_ningen のポートフォリオ的なページです。コンタクトは twitter の DM もしくはリプライにてお願いします。',
      location: 'Tokyo, Japan',
      url: 'https://53ningen.com',
      displayUrl: '53ningen.com',
      company: 'Engineer',
      birthday: 'Born in 1989',
      avatar: 'images/avatar.jpg',
      cover: 'images/cover.jpg',
    }
    return (
      <Wrapper>
        <Header profile={profile} />
        <Tabs activeItem={this.props.tabItem} />
        <Statuses statuses={this.props.statuses} />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  max-width: 600px;
  width: 100%;
`
