import React from 'react';

import {Person} from '../../../../content/types'
interface Props {
    founders: Person[]
}

export function FounderGrid({founders}: Props) {
    return <p>{founders.map(el => <FounderSquare founder={el}/>)}</p>
}

interface SquareProps {
    founder: Person
}
export function FounderSquare({founder}: SquareProps) {
    return <p>{founder.name}</p>
}