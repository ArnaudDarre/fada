import React from 'react'

import { Snippet } from '../../../lib/components/Snippet'
import { TableCell } from '../../../lib/components/TableCell'
import { TableHead } from '../../../lib/components/TableHead'
import { TableRow } from '../../../lib/components/TableRow'
import { Text } from '../../../lib/components/Text'

export const HeaderRow = () => {
  return (
    <TableHead>
      <TableCell>Class</TableCell>
      <TableCell>Style</TableCell>
      <TableCell>Default weight</TableCell>
      <TableCell>Size (in rem)</TableCell>
      <TableCell>Line height</TableCell>
    </TableHead>
  )
}

export const HeadingRows = () => {

  const styles = [
    { class: 'h1', weight: 'bold', size: '3.5', lineHeight: '1.25' },
    { class: 'h2', weight: 'bold', size: '2.5', lineHeight: '1.25' },
    { class: 'h3', weight: 'bold', size: '2', lineHeight: '1.25' },
    { class: 'h4', weight: 'bold', size: '1.75', lineHeight: '1.25' },
    { class: 'h5', weight: 'bold', size: '1.5', lineHeight: '1.25' },
    { class: 'h6', weight: 'bold', size: '1.25', lineHeight: '1.25' }
  ]

  return (
    styles.map((style) => (
      <TableRow key={style.class}>
        <TableCell><Snippet dense content={'.' + style.class} /></TableCell>
        <TableCell><Text variant={style.class}>Sample text</Text></TableCell>
        <TableCell>{style.weight}</TableCell>
        <TableCell>{style.size}</TableCell>
        <TableCell>{style.lineHeight}</TableCell>
      </TableRow>
    ))
  )
}

export const BodyRows = () => {

  const styles = [
    { class: 'subtitle', weight: 'regular', size: '1.125', lineHeight: '1.5' },
    { class: 'body', weight: 'regular', size: '1', lineHeight: '1.5', isDefault: true },
    { class: 'caption', weight: 'regular', size: '0.875', lineHeight: '1.5' },
    { class: 'overline', weight: 'regular', size: '0.75', lineHeight: '1.5' }
  ]

  return (
    styles.map((style) => (
      <TableRow key={style.class}>
        <TableCell><Snippet dense content={'.' + style.class} isDefault={style.isDefault ? true : false }/></TableCell>
        <TableCell><Text variant={style.class}>Sample text</Text></TableCell>
        <TableCell>{style.weight}</TableCell>
        <TableCell>{style.size}</TableCell>
        <TableCell>{style.lineHeight}</TableCell>
      </TableRow>
    ))
  )
}
