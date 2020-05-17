import React from 'react'
import styled from 'styled-components'
import { Profile } from '../../models/Profile'
import HeaderInfo from './HeaderInfo'
import HeaderPhoto from './HeaderPhoto'

type Props = {
  profile: Profile
}

const Header: React.FC<Props> = (props) => (
  <Wrapper>
    <HeaderPhoto path={props.profile.cover} />
    <HeaderInfo profile={props.profile} />
  </Wrapper>
)
export default Header

const Wrapper = styled.div``
