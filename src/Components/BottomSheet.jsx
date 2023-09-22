import React, { useState, useEffect } from 'react';
import './BottomSheet.css';
import { AiFillCloseSquare } from 'react-icons/ai';

const BottomSheet = () => {
    const [sheetState, setSheetState] = useState('closed');
    const [dragging, setDragging] = useState(false);
    const [initialMouseY, setInitialMouseY] = useState(0);

    const toggleSheet = () => {

        switch (sheetState) {
            case 'closed':
                setSheetState('half-open');
                break;
            case 'half-open':
                setSheetState('fully-open');
                break;
            case 'fully-open':
                setSheetState('closed');
                break;
            default:
                setSheetState('closed');
        }
    };

    const handleCloseClick = () => {
        setSheetState('closed');
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (dragging) {
                const deltaY = e.clientY - initialMouseY;
                const threshold1 = 50;
                console.log(deltaY);
                if (deltaY > threshold1) {
                    setSheetState('half-open');
                } 
                else if (sheetState === 'half-open' && deltaY > -threshold1) {
                    setSheetState('fully-open');
                }
                else if(sheetState==='half-open' && deltaY > threshold1){
                    
                    setSheetState('closed');
                }
                 else if (sheetState === 'closed' && deltaY < 0) {
                    setSheetState('half-open');
                }
            }
        };

        const handleMouseUp = () => {
            if (dragging) {
                setDragging(false);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [dragging, initialMouseY, sheetState]);

    return (
        <div className={`bottom-sheet ${sheetState}`}>
            <div
                className="sheet-header"
                onMouseDown={(e) => {
                    // Prevent text selection during dragging
                    e.preventDefault();
                    setDragging(true);
                    setInitialMouseY(e.clientY);
                }}
            >
                <div className="handle" onClick={toggleSheet}></div>
                <div className="close-button-container">
                    <AiFillCloseSquare onClick={handleCloseClick} className="close-button" />
                </div>
            </div>
            <div className="content">
                <h1>Made by Nafis Aamir</h1>
                <p>
                    {/* Your content */}
                </p>
            </div>
        </div>
    );
}
export { BottomSheet };
