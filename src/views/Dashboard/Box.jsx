import React from 'react'
import { useDrag } from 'react-dnd'
const style = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
}
const Box = ({ id, left, top, name, hideSourceOnDrag, children }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, name, type: 'box' },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />
  }
  return (
    <div id={id} ref={drag} style={{ ...style, left, top }}>
      {children}
    </div>
  )
}
export default Box
