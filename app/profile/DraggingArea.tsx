'use client'
import update from 'immutability-helper'
import { useState, useCallback } from "react"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { Card } from './Card'

export default function DraggingArea ({ children }: { children: React.ReactNode }) {
    const [cards, setCards] = useState([
        {
          id: 1,
          text: 'Write a cool JS library',
        },
        {
          id: 2,
          text: 'Make it generic enough',
        },
        {
          id: 3,
          text: 'Write README',
        },
        {
          id: 4,
          text: 'Create some examples',
        },
        {
          id: 5,
          text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
        },
        {
          id: 6,
          text: '???',
        },
        {
          id: 7,
          text: 'PROFIT',
        },
    ])

    const moveCard = useCallback((dragIndex: any, hoverIndex: any) => {
        console.log('222')
        setCards((prevCards) =>
          update(prevCards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, prevCards[dragIndex]],
            ],
          }),
        )
      }, [])

      const renderCard = useCallback((card, index) => {
        return (
          <Card
            key={card.id}
            index={index}
            id={card.id}
            text={card.text}
            moveCard={moveCard}
          />
        )
      }, [])

    return (
        <div className="border-2 border-red-500">
            <DndProvider backend={HTML5Backend}>
                    
        <div>{cards.map((card, i) => renderCard(card, i))}</div>
				</DndProvider>
            {/* {children} */}
        </div>
    )
}