import React from 'react'
import App from '../components/App'
import Meta from '../components/Meta'
import { Status } from '../models/Status'

const Index: React.FC = (_) => {
  const statuses: Status[] = [
    {
      id: 'pinned',
      name: 'Links',
      screenName: '@gomi_ningen',
      updated: 'now',
      text: '▼ ブログや各種 SNS アカウントへのリンクをまとめました',
    },
    {
      id: 'blog',
      name: 'ゴミ箱',
      screenName: '@gomi_ningen',
      updated: 'now',
      icon: 'images/logos/home.png',
      url: 'https://53ningen.com',
      text: '趣味や技術関連の記事をまとめたブログ',
    },
    {
      id: 'circle',
      name: '串カツ広川',
      screenName: '@gomi_ningen',
      updated: 'now',
      icon: 'images/logos/hirokawa.png',
      url: 'https://circle.53ningen.com',
      text: '同人サークルのウェブページ',
    },
    {
      id: 'github',
      name: 'GitHub',
      screenName: '@github',
      updated: 'now',
      icon: 'images/logos/github.png',
      url: 'https://github.com/53ningen',
      text: 'GitHub アカウント',
    },
    {
      id: 'qiita',
      name: 'Qiita',
      screenName: '@Qiita',
      updated: 'now',
      icon: 'images/logos/qiita.jpg',
      url: 'https://qiita.com/gomi_ningen',
      text: 'Qiita アカウント',
    },
    {
      id: 'twitter',
      name: 'Twitter',
      screenName: '@twitter',
      updated: 'now',
      icon: 'images/logos/twitter.png',
      url: 'https://twitter.com/gomi_ningen',
      text: 'Twitter アカウント',
    },
    {
      id: 'eventernote',
      name: 'Eventernote',
      screenName: '@eventernote',
      updated: 'now',
      icon: 'images/logos/eventernote.png',
      url: 'https://www.eventernote.com/users/gomi_ningen',
      text: 'Eventernote アカウント',
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      screenName: '@LinkedIn',
      updated: 'now',
      icon: 'images/logos/linkedin.jpg',
      url: 'https://www.linkedin.com/in/gomi-ningen-840022112/',
      text: 'linkedin アカウント',
    },
    {
      id: 'niconico',
      name: 'niconico',
      screenName: '@nico_nico_info',
      updated: 'now',
      icon: 'images/logos/niconico.jpg',
      url: 'https://www.nicovideo.jp/user/2316023',
      text: 'niconico アカウント',
    },
  ]
  return (
    <div>
      <Meta title="@gomi_ningen - Links" />
      <App tabItem="Links" statuses={statuses} />
    </div>
  )
}

export default Index
