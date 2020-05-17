import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import Statuses from '../components/Status/Statuses'
import Tabs from '../components/Tab/Tabs'
import { Profile } from '../models/Profile'
import { Status } from '../models/Status'
import { TabItem } from '../models/TabItem'

type Props = {
  tabItem: TabItem
  statuses: Status[]
}

const App: React.FC<Props> = (props) => {
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
      <Tabs activeItem={props.tabItem} />
      <Statuses statuses={props.statuses} />
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  max-width: 600px;
  width: 100%;
`
