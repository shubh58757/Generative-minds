// CanvasComponent.js

import React, { useEffect, useRef } from 'react';
import './canvas.css';

const Canvas = () => {
  const canvasRef = useRef(null);
  const colorPickerRef = useRef(null);
  const shapes = [];
  let isDrawing = false;
  let startRectX, startRectY;
  let drawSquareMode = false;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const drawShapes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      shapes.forEach((shape) => {
        ctx.lineWidth = 2;
        ctx.fillStyle = shape.color;
        if (shape.type === 'square') {
          ctx.fillRect(shape.startX, shape.startY, shape.width, shape.height);
          ctx.strokeRect(shape.startX, shape.startY, shape.width, shape.height);
          ctx.strokeStyle = '#000';
        } else if (shape.type === 'room') {
          ctx.fillRect(shape.x, shape.y, 9, 9);
        }
      });
    };

    canvas.addEventListener('mousedown', (e) => {
      isDrawing = true;
      startRectX = e.clientX - canvas.getBoundingClientRect().left;
      startRectY = e.clientY - canvas.getBoundingClientRect().top;
    });

    canvas.addEventListener('mousemove', (e) => {
      if (isDrawing === true) {
        const currentX = e.clientX - canvas.getBoundingClientRect().left;
        const currentY = e.clientY - canvas.getBoundingClientRect().top;
        const width = currentX - startRectX;
        const height = currentY - startRectY;

        drawShapes();

        if (drawSquareMode) {
          ctx.fillStyle = colorPickerRef.current.value;
          ctx.fillRect(startRectX, startRectY, width, height);
          ctx.strokeStyle = '#000';
          ctx.strokeRect(startRectX, startRectY, width, height);
        } else {
          const x = Math.floor(startRectX / 10) * 10;
          const y = Math.floor(startRectY / 10) * 10;
          ctx.fillStyle = colorPickerRef.current.value;
          ctx.fillRect(x, y, 9, 9);
        }
      }
    });

    canvas.addEventListener('mouseup', (e) => {
      if (isDrawing === true) {
        isDrawing = false;
        const currentX = e.clientX - canvas.getBoundingClientRect().left;
        const currentY = e.clientY - canvas.getBoundingClientRect().top;
        const width = currentX - startRectX;
        const height = currentY - startRectY;

        if (drawSquareMode) {
          shapes.push({
            startX: startRectX,
            startY: startRectY,
            width: width,
            height: height,
            type: 'square',
            color: colorPickerRef.current.value,
          });
        } else {
          const x = Math.floor(startRectX / 10) * 10;
          const y = Math.floor(startRectY / 10) * 10;
          shapes.push({ x, y, type: 'room', color: colorPickerRef.current.value });
        }

        drawShapes();
      }
    });
  }, [drawSquareMode]);

  return (
    <div>
      <canvas ref={canvasRef} id="drawCanvas" width="400" height="400"></canvas>
      <div className="controls">
        <button className="canvas-button" id="drawSquareBtn">Draw Square</button>
        <button className="canvas-button" id="drawRoomBtn">Draw Room</button>
        <input ref={colorPickerRef} type="color" id="colorPicker" />
        <button className="canvas-button" id="sendBtn">Send</button>
      </div>
    </div>
  );
};

export default Canvas;
