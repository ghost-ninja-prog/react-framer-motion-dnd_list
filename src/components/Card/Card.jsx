import { Reorder, useMotionValue } from 'framer-motion'
import React from 'react'
import { useRaisedShadow } from '../../utils/use-raised-shadow'

import style from './Card.module.css'

function Card({ title}) {
  const y = useMotionValue(0)
  const boxShadow = useRaisedShadow(y)

  return (
    <Reorder.Item value={title} className={style.card} style={{ boxShadow, y }} >
      { title }
    </Reorder.Item>
  )
}

export default Card