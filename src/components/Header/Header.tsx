import React from 'react'
import styled from 'styled-components'
import HeaderPhoto from './HeaderPhoto'
import HeaderInfo from './HeaderInfo'
import { Profile } from '../../models/Profile'

interface Props {
  profile: Profile
}

export default class Header extends React.Component<Props, {}> {
  render() {
    return (
      <Wrapper>
        <HeaderPhoto path={this.props.profile.cover} />
        <HeaderInfo profile={this.props.profile} />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div``
