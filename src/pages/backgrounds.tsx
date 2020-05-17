import React from 'react'
import App from '../components/App'
import Meta from '../components/Meta'
import { Status } from '../models/Status'

const Backgrounds: React.FC = (_) => {
  const statuses: Status[] = [
    {
      id: 'pinned',
      name: 'Backgrounds',
      updated: 'now',
      text: '▼ 主な経歴や対外向けの発表・記事などをまとめました',
    },
    {
      id: 'wug2019',
      name: 'Wake Up, Girls! Advent Calendar 2019',
      updated: '2019/12/23',
      icon: 'images/logos/article.png',
      url: 'https://qiita.com/gomi_ningen/items/d8e2ba9669d85ee396ae',
      text: '記事「女性声優と自動化」を公開',
    },
    {
      id: 'xamarin4',
      name: 'Xamarin入門者の集い #4',
      updated: '2018/05/23',
      icon: 'images/logos/talk.png',
      text: '「Xamarin.iOS アプリ開発の全体像」というタイトルにて発表',
    },
    {
      id: 'current',
      name: '正社員@どこか',
      icon: 'images/logos/work.png',
      updated: 'Joined April 2018',
      text: '都内のどこかの IT 関係会社にて日々労働にはげんでいる',
    },
    {
      id: 'dwango2017',
      name: 'ドワンゴ Advent Calendar 2017',
      updated: '2017/12/23',
      icon: 'images/logos/article.png',
      url: 'https://qiita.com/gomi_ningen/items/ce20176d86276fce71e3',
      text:
        '記事「読書メーターiOSアプリにおける Xamarin.iOS 導入事例のご紹介」を公開',
    },
    {
      id: 'dwangolt',
      name: 'ドワンゴ社内エンジニアLT大会（社外向け）',
      updated: '2017/12/03',
      icon: 'images/logos/talk.png',
      url: 'https://www.slideshare.net/gomi_ningen/xamarinios-163576710',
      text:
        '「Xamarin.iOS によるプロダクトアプリ開発の実践」というタイトルにて発表',
    },
    {
      id: 'iosdcjp2017',
      name: 'iOSDC Japan 2017',
      screenName: '@iosdcjp',
      updated: '2017/09/16',
      icon: 'images/logos/talk.png',
      url:
        'https://www.slideshare.net/gomi_ningen/rxswiftobservable-iosdc-japan-2017',
      text:
        '「RxSwift の Observable とは何か」というタイトルにて発表、ベストトーク賞（1位）。',
    },
    {
      id: 'chobooktech',
      name: '超技術書典',
      updated: '2017/04/29',
      icon: 'images/logos/book.png',
      url: 'https://circle.53ningen.com/#chotech',
      text: '技術同人誌「ご注文は SE ですか?」を発行',
    },
    {
      id: 'dwango2016',
      name: 'ドワンゴ Advent Calendar 2016',
      updated: '2016/12/23',
      icon: 'images/logos/article.png',
      url: 'https://qiita.com/gomi_ningen/items/ab31aa2b3d46bb6ffa5e',
      text:
        '記事「大規模ネイティブアプリへのプッシュ通知機能導入にあたって考えたこと」を公開',
    },
    {
      id: 'kyobashi2',
      name: 'kyobashi.swift #2',
      updated: '2016/08/17',
      icon: 'images/logos/talk.png',
      url: 'https://www.slideshare.net/gomi_ningen/ss-65112253',
      text: '「この実装には問題がある！」というタイトルにて発表',
    },
    {
      id: 'sansan',
      name: 'RxSwift勉強会＠Sansan',
      updated: '2016/04/14',
      icon: 'images/logos/talk.png',
      url:
        'https://www.slideshare.net/gomi_ningen/15-minutes-recipe-of-rxswift',
      text: '「15 minutes recipe of RxSwift」というタイトルにて発表',
    },
    {
      id: 'kyobashi1',
      name: 'kyobashi.swift #1',
      updated: '2016/02/09',
      icon: 'images/logos/talk.png',
      url:
        'https://www.slideshare.net/gomi_ningen/dependency-injection-in-swift2',
      text: '「Dependency Injection in Swift2」というタイトルにて発表',
    },
    {
      id: 'nanaka8',
      name: 'Nanaka Inside PRESS vol.8',
      updated: '2015/12/30',
      icon: 'images/logos/book.png',
      url: 'https://sites.google.com/site/dai7sec/',
      text:
        'ななかInside PRESS vol.8 に「ご注文はRxですか?」というタイトルの記事を寄稿',
    },
    {
      id: 'dwango2015',
      name: 'ドワンゴ Advent Calendar 2015',
      updated: '2015/12/23',
      icon: 'images/logos/article.png',
      url: 'https://qiita.com/gomi_ningen/items/21089658b4b024ab21d3',
      text:
        '記事「ニコニコ漫画アプリの中身、全部見せます！　〜iOSアプリ開発事例のご紹介〜」を公開',
    },
    {
      id: 'oss',
      name: 'オープンソースライブラリ研究会',
      updated: '2015/11/27',
      icon: 'images/logos/talk.png',
      url:
        'https://www.slideshare.net/gomi_ningen/15-minutes-recipe-of-rxswift',
      text: '「RxSwiftを用いたアプリ開発の実践」というタイトルにて発表',
    },
    {
      id: 'dwango',
      name: 'DWANGO Co.,Ltd.',
      screenName: '@nico_nico_info',
      updated: 'Joined April 2014',
      icon: 'images/logos/work.png',
      text:
        'イラスト/マンガ/電子書籍関連サービスや読書記録管理サービスを担当。インフラ、バックエンドから iOS ネイティブクライアント開発まで、Android とウェブフロントエンド以外の業務を状況に応じて行った。',
    },
    {
      id: 'ut',
      name: 'University of Tsukuba',
      updated: 'Entered April 2011',
      icon: 'images/logos/school.png',
      text: '理工学群物理学類、物性実験系の研究室',
    },
    {
      id: 'mu',
      name: 'Musashi University',
      updated: 'Entered April 2009',
      icon: 'images/logos/school.png',
      text: '社会学部メディア社会学科',
    },
    {
      id: 'tus',
      name: 'Tokyo University of Science',
      updated: 'Entered April 2008',
      icon: 'images/logos/school.png',
      text: '理工学部電気電子情報工学科',
    },
  ]
  return (
    <div>
      <Meta title="@gomi_ningen - Backgrounds" />
      <App tabItem="Backgrounds" statuses={statuses} />
    </div>
  )
}

export default Backgrounds
