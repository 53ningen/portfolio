import React from 'react'
import Head from 'next/head'

interface Props {
  title: string
  description: string
  url: string
  image: string
  siteName: string
}

export default class Meta extends React.Component<Props, {}> {
  public static defaultProps: Props = {
    title: '@gomi_ningen',
    description: 'about @gomi_ningen',
    url: 'https://53ningen.github.io',
    image: 'https://53ningen.now.sh/images/avatar150.jpg',
    siteName: '@gomi_ningen',
  }

  render() {
    return (
      <Head>
        <title>{this.props.title}</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@gomi_ningen" />
        <meta name="twitter:url" content={this.props.image} />
        <meta name="twitter:title" content={this.props.title} />
        <meta name="twitter:description" content={this.props.description} />
        <meta name="twitter:image" content={this.props.image} />
        <meta property="og:title" content={this.props.title} />
        <meta property="og:description" content={this.props.description} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={this.props.image} />
        <meta property="og:url" content={this.props.url} />
        <meta property="og:site_name" content={this.props.siteName} />
        <link rel="canonical" href={this.props.url} />
      </Head>
    )
  }
}
