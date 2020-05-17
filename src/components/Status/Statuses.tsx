import React from 'react'
import styled from 'styled-components'
import { Status as StatusModel } from '../../models/Status'
import Status from './Status'

interface Props {
  statuses: StatusModel[]
}

export default class Statuses extends React.Component<Props, {}> {
  static defaultProps: Props = {
    statuses: [],
  }

  render() {
    const statuses = this.props.statuses.map((s) => (
      <StatusWrapper key={s.id}>
        <Status status={s} />
      </StatusWrapper>
    ))
    return <Wrapper>{statuses}</Wrapper>
  }
}

const Wrapper = styled.div`
  background-color: rgb(230, 236, 240);
`

const StatusWrapper = styled.div`
  margin-top: 1px;
`
