import React, { useState, useContext } from 'react';
import { useDrop } from 'react-dnd';
import context from '../../hooks/useContext/Context';
import Box from './Box';
import update from 'immutability-helper';
const styles = {
    width: 'inherit',
    height: 'inherit',
    // border: '1px solid black',
    position: 'relative',
}
const DragrableContainer = ({ hideSourceOnDrag }) => {
    const globalContext = useContext(context);
    debugger
    const globalContextBoxes = globalContext.payload || {};
    const [boxes, setBoxes] = useState(globalContextBoxes);
    const [, drop] = useDrop({
        accept: 'box',
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);
            moveBox(item.id, left, top, item.name);           
            return undefined
        },
    })
    const moveBox = (id, left, top, name) => {
        let newBox = { id, left, top, name }; 
        globalContext.updateSelectedInputFieldList(newBox);
        if (boxes[id]) {
            setBoxes(
                update(boxes, {
                    [id]: {
                        $merge: { left, top },
                    },
                }),
            )
        } else {
            setBoxes(
                update(boxes, {
                    [id]: { $set: newBox }
                })
            )
        }
    }
return (
    <div ref={drop} style={styles}>
        {Object.keys(boxes).map(key => {
            const { left, top, name } = boxes[key]
            return (
                <Box
                    key={key}
                    id={key}
                    left={left}
                    top={top}
                    hideSourceOnDrag={hideSourceOnDrag}
                >
                    {name}
                </Box>
            )
        })}
    </div>
)
}
export default DragrableContainer
