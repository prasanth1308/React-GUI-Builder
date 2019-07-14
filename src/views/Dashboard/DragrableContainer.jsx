import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Box from './Box';
import update from 'immutability-helper';
const styles = {
    width: 'inherit',
    height: 'inherit',
    // border: '1px solid black',
    position: 'relative',
}
const DragrableContainer = ({ hideSourceOnDrag }) => {
    const [boxes, setBoxes] = useState({
        
    })
    const [, drop] = useDrop({
        accept: 'box',
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            
            //
            const delta1 = monitor.getInitialClientOffset()
            const delta2 = monitor.getInitialSourceClientOffset()
            const delta3 = monitor.getClientOffset()
            const delta4 = monitor.getSourceClientOffset()
            //

            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);
            const left1 = Math.round(item.left + delta.x);
            const top1 = Math.round(item.top + delta.y);
            if(boxes[item.id]){
                moveBox(item.id, left, top, item.name);
            } else {
                moveBox(item.id, left1, top1, item.name);
            }
           
            return undefined
        },
    })
    const moveBox = (id, left, top, name) => {
        if (boxes[id]) {
            setBoxes(
                update(boxes, {
                    [id]: {
                        $merge: { left, top },
                    },
                }),
            )
        } else {
            let newBox = { id, left, top, name };
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
