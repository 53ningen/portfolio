import React from 'react'
import { Status } from '../models/Status'
import App from '../components/App'
import Meta from '../components/Meta'

export default class Interests extends React.Component {
  render() {
    const statuses: Status[] = [
      {
        id: 'pinned',
        name: 'Hobbies and Interests',
        updated: 'now',
        text: '▼ 主な趣味や推しについてまとめました',
      },
      {
        id: 'circle',
        name: '串カツ広川, きらきらアラモード',
        screenName: '@gomi_ningen',
        url: 'https://circle.53ningen.com/',
        icon: 'images/logos/hirokawa.png',
        updated: '2016/12/30',
        text:
          'コミケや作品関連オンリーで同人誌を頒布している。Wake Up, Girls! やご注文はうさぎですか? などの本を作る。舞台探訪本、技術書、楽譜本などが中心。',
      },
      {
        id: 'yopipi',
        name: '青山吉能',
        screenName: '@Yopipi555',
        url: 'https://twitter.com/Yopipi555',
        icon: 'images/logos/blank_20BAEF.png',
        updated: '1996/05/15',
        text: 'メインの現場',
      },
      {
        id: 'wug',
        name: 'Wake Up, Girls！',
        screenName: '@wakeupgirls_PR',
        url: 'https://twitter.com/wakeupgirls_PR',
        icon: 'images/logos/blank_015D8B.png',
        updated: '2013/04/01',
        text: '2019年3月に解散したメインの現場だった声優ユニット',
      },
      {
        id: 'ltw',
        name: 'Luce Twinkle Wink☆',
        screenName: '@Luce_TW',
        url: 'https://twitter.com/Luce_TW',
        icon: 'images/logos/blank_C3206F.png',
        updated: '2014/05/23',
        text: 'メインの現場',
      },
      {
        id: 'sake',
        name: '居酒屋',
        icon: 'images/logos/sake.png',
        updated: '10 years of exp.',
        text: 'メインの現場',
      },
      {
        id: 'onsen',
        name: '温泉',
        icon: 'images/logos/onsen.png',
        updated: 'always',
        text: 'メインの現場',
      },
      {
        id: 'travel',
        name: '遠征',
        icon: 'images/logos/travel.png',
        updated: 'always',
        text: '人生、すなわち遠征',
      },
      {
        id: 'programming',
        name: 'Programming',
        icon: 'images/logos/computer.png',
        updated: 'sometimes',
        text: 'たしなむ程度',
      },
      {
        id: 'drums',
        name: 'Drums',
        icon: 'images/logos/drums.png',
        updated: 'sometimes',
        text: '何もできない',
      },
    ]
    return (
      <div>
        <Meta title="@gomi_ningen - Hobbies and Interests" />
        <App tabItem="Hobbies" statuses={statuses}></App>
      </div>
    )
  }
}
