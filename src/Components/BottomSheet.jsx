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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, laborum iure. In, dolor ullam aperiam dolore ratione veritatis ipsa delectus. Ullam, commodi in qui ad facere perspiciatis quam recusandae odio possimus consectetur voluptas distinctio cum dolor obcaecati dicta, provident dolore velit autem laudantium dolorum deleniti! Vitae obcaecati corrupti magni debitis nihil. Natus omnis quo voluptates voluptas sunt dolorem? Soluta, quos, commodi quod cum tempora modi perspiciatis ab cupiditate maxime, sint doloribus repudiandae iure ipsum! Dolor nobis deleniti velit amet dignissimos, dolorum aliquam suscipit magni corporis. Nostrum quia et a. Corporis, expedita similique! A omnis labore dignissimos quisquam laudantium iusto tempore voluptates modi vel, magni deserunt voluptate atque cumque et architecto molestias, rem libero asperiores nulla quia doloribus quis inventore. Eos veniam, tempore corrupti ipsam aliquid est sint beatae labore nesciunt deleniti iure aperiam in nostrum, modi ad quia aut consectetur? Beatae, iure voluptatibus similique quidem debitis cum eius praesentium provident eligendi ullam hic temporibus dolores mollitia deserunt esse corrupti dolore excepturi fugit ex in doloribus nulla veniam porro explicabo! Ipsam eos, commodi sunt repellat rem quam blanditiis nisi, voluptates reiciendis vel, quisquam cupiditate ullam molestias cum! Nisi iusto unde ducimus amet rem modi ratione dolorem hic, voluptas doloribus nulla eveniet veniam perferendis asperiores! Voluptates recusandae tempore repellat ex explicabo quae, culpa enim, voluptas nesciunt nihil veniam. Debitis culpa rerum sit soluta molestiae alias exercitationem sunt? Minima, itaque. Harum non commodi labore deleniti ipsa cum tenetur architecto magnam enim, fugit perspiciatis! Delectus, ratione adipisci! Numquam dolorum unde eligendi, pariatur odio asperiores praesentium laborum facilis adipisci incidunt dolorem laudantium a perspiciatis et deserunt temporibus sapiente quam reiciendis atque doloribus impedit! Amet accusamus illum, quidem totam quos, sequi enim alias nam ad sunt nulla repellendus nostrum fugiat officiis consectetur? Odit nostrum unde explicabo at accusantium, quibusdam pariatur est maiores officiis eligendi enim assumenda.
                </p>
            </div>
        </div>
    );
}
export { BottomSheet };
