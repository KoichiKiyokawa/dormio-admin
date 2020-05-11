import React from 'react'

type Props = {
  size: number
}

const Space: React.FC<Props> = ({ size }) => <div style={{ width: `${size}em`, height: `${size}em` }} />

export default React.memo(Space)
