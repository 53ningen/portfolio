import React from 'react'
import { Status } from '../models/Status'
import App from '../components/App'
import Meta from '../components/Meta'

export default class Skills extends React.Component {
  render() {
    const statuses: Status[] = [
      {
        id: 'pinned',
        name: 'Skills',
        updated: 'now',
        text: '▼ 触ったことのある主な領域についてまとめました',
      },
      {
        id: 'java',
        name: 'Java',
        screenName: '@java',
        url: 'https://twitter.com/java',
        icon: 'images/logos/java.jpg',
        updated: '3+ years of exp.',
        text:
          '主に Java 6〜8 環境にて電子書籍の入稿処理システム、配信サーバーの保守・機能開発を行った。それに際して Ant, Maven, Gradle など複数のビルドシステムを扱った。',
      },
      {
        id: 'swift',
        name: 'Swift',
        screenName: '@SwiftLang',
        url: 'https://twitter.com/SwiftLang',
        updated: '3+ years of exp.',
        icon: 'images/logos/swift.png',
        text:
          'Swift 1.2 時代から RxSwift を用いた iOS ネイティブアプリのフルスクラッチ開発を行っていた。リリース後の保守・運用・機能追加実装も経験。また、セグメントプッシュ通知の設計・実装などのサーバーサイドの業務も行った。iOSDC Japan 2017 にて「RxSwift の Observable とは何か」というテーマで発表、ベストトーク賞（1位）受賞。',
      },
      {
        id: 'python',
        name: 'Python',
        screenName: '@ThePSF',
        url: 'https://twitter.com/ThePSF',
        icon: 'images/logos/python.png',
        updated: '2 years of exp.',
        text:
          'AWS SAM (awslabs/serverless-application-model) などへのコントリビューション。業務でもサーバーレスアプリケーションやスクリプトの開発などを行った。また Python を用いたサーバーレスアプリケーションの趣味開発も行っている。',
      },
      {
        id: 'xamarin',
        name: 'Xamarin.iOS (C#)',
        screenName: '@xamarinhq',
        url: 'https://twitter.com/xamarinhq',
        icon: 'images/logos/xamarin.png',
        updated: '2 years of exp.',
        text:
          'Xamarin.iOS を用いたネイティブアプリのフルスクラッチ開発にて設計・実装を行った。ReactiveProperty を利用した MVVM なアーキテクチャとした。',
      },
      {
        id: 'csharp',
        name: 'C# (WPF)',
        screenName: '@dotnet',
        url: 'https://twitter.com/dotnet',
        icon: 'images/logos/csharp.png',
        updated: '2 years of exp.',
        text:
          '熱伝導度や電気抵抗率などの物性測定を行う際に利用する WPF デスクトップアプリケーションの開発を行った。',
      },
      {
        id: 'php',
        name: 'PHP',
        screenName: '@official_php',
        url: 'https://twitter.com/official_php',
        icon: 'images/logos/php.jpg',
        updated: '2 years of exp.',
        text:
          'composer を用いたウェブアプリ、バッチアプリの保守・機能追加などを行った。また PHP を実行するプロダクション環境の構築などインフラ領域の業務も行った。',
      },
      {
        id: 'aws',
        name: 'AWS',
        screenName: '@awscloud',
        url: 'https://twitter.com/awscloud',
        icon: 'images/logos/aws.png',
        updated: '4 years of exp.',
        text:
          'EC2, ELB, VPC, IAM, S3 などの基本的なサービスを利用したシステム構築・運用を行った。また SNS, Pinpoint などを用いたモバイルプッシュ通知システムの構築や Lambda などを利用したサーバーレスアプリケーションの開発も行った。',
      },
      {
        id: 'git',
        name: 'Git',
        url: 'https://git-scm.com',
        icon: 'images/logos/git.png',
        updated: '8+ years of exp.',
        text:
          '主に3〜4人規模のチーム開発におけるバージョン管理システムとして git を利用。GitHub 上のオープンソースソフトウェアへのコントリビューションなども随時行っている。',
      },
      {
        id: 'ansible',
        name: 'Ansible',
        screenName: '@ansible',
        url: 'https://twitter.com/ansible',
        icon: 'images/logos/ansible.png',
        updated: '2 years of exp.',
        text:
          '主にオンプレミスのプロダクトの本番/開発環境サーバー構成管理に利用。また手元環境 MacBook のセットアップ手順も Playbook にまとめてある。',
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        screenName: '@typescript',
        url: 'https://twitter.com/typescript',
        icon: 'images/logos/typescript.png',
        updated: 'a year of exp.',
        text:
          'このポートフォリオサイトの作成や研修でのアプリケーション開発などに利用した。',
      },
      {
        id: 'react',
        name: 'React',
        screenName: '@reactjs',
        url: 'https://twitter.com/reactjs',
        icon: 'images/logos/react.png',
        updated: 'a year of exp.',
        text:
          '正直ウェブフロントエンドよくわからんけどこのページは React, Next.js, styled-components などを用いて作られているらしい',
      },
      {
        id: 'ai',
        name: 'Adobe Illustorator',
        screenName: '@Illustrator',
        url: 'https://twitter.com/Illustrator',
        icon: 'images/logos/ai.jpg',
        updated: '4+ years of exp.',
        text:
          'イベントパンフレット制作、ウェブデザイン、同人誌制作などを行った',
      },
      {
        id: 'id',
        name: 'Adobe InDesign',
        screenName: '@InDesign',
        url: 'https://twitter.com/InDesign',
        icon: 'images/logos/id.jpg',
        updated: 'a year of exp.',
        text:
          'Illustrator だけだとページ数が多い本の作成が辛すぎたので最近覚えた',
      },
      {
        id: 'pr',
        name: 'Adobe Premiere Pro',
        screenName: '@AdobePremiere',
        url: 'https://twitter.com/AdobePremiere',
        icon: 'images/logos/pr.png',
        updated: 'a year of exp.',
        text: '短尺の映像制作などを行った',
      },
    ]
    return (
      <div>
        <Meta title="@gomi_ningen" />
        <App tabItem="Skills" statuses={statuses} />
      </div>
    )
  }
}
