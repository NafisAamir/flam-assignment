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
        // const threshold2 = 100;
        if (deltaY > threshold1 ) {
          setSheetState('half-open');
        } else if (sheetState=='half-open' && deltaY < -threshold1) {
          setSheetState('fully-open');
        }
        else if(sheetState=='closed'&& deltaY > threshold1){
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
  }, [dragging, initialMouseY]);

  return (
 
    <div className={`bottom-sheet ${sheetState}`}>
      <div
        className="sheet-header"
        onMouseDown={(e) => {
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus delectus aliquid nesciunt reprehenderit hic! Rerum, soluta nostrum vero nesciunt consequuntur delectus ab tempora voluptas nam sit corrupti eius voluptates quis culpa exercitationem vitae ducimus impedit dolore ipsam ut voluptatibus aliquam beatae adipisci iure! Error perspiciatis sequi quae incidunt ex dolores suscipit voluptas maiores quidem laboriosam distinctio odio fugit ut eos ipsam vero labore minus obcaecati perferendis corporis inventore, itaque rerum alias velit? Explicabo culpa ratione dignissimos cumque? Pariatur nam maxime doloribus, corporis consequatur ab aliquid cumque esse quibusdam unde in ipsum repellendus. Provident enim itaque ea. Dolore alias iure earum, sapiente architecto molestias modi veritatis sit deserunt accusantium eos! Eligendi vero voluptas numquam dolorum nulla ab, necessitatibus voluptatibus nam, ratione qui possimus ea nisi placeat. Voluptatibus consequuntur repellat fugit quasi dolores, placeat aliquam sed eligendi, repudiandae suscipit quisquam modi magnam eaque nisi quo necessitatibus quis natus cum, animi accusantium. Itaque doloremque vero culpa impedit rerum magni libero omnis quas deserunt illum eligendi, temporibus deleniti quam. Provident molestiae veritatis repellendus culpa corrupti commodi iste. Nostrum, saepe vero fugit placeat quisquam molestiae repellendus est animi facilis deleniti. Modi quis dicta odio non vitae obcaecati, iste neque eos quos eaque blanditiis ut libero inventore reiciendis alias molestiae quisquam veritatis quibusdam tempore. Quos aut delectus a et impedit dolorem voluptatibus architecto molestiae dolorum sequi exercitationem nulla enim rem provident, facilis omnis placeat, porro nam quas perferendis voluptate qui doloremque pariatur. Illo officiis maiores aliquid magnam recusandae nesciunt omnis facilis ut similique vero enim molestiae, ex corporis error voluptatum animi repellendus voluptatem? Quibusdam libero voluptates nostrum, qui iusto excepturi quos veritatis eligendi, nesciunt sint praesentium saepe harum. Qui laborum minima, voluptas sunt necessitatibus nesciunt. Obcaecati, delectus ipsum? At pariatur reprehenderit quos sapiente sequi ullam quaerat asperiores quae laboriosam itaque cum, ut eius consequatur commodi obcaecati.</p>
      </div>
    </div>
 
  
  );
};

export { BottomSheet };
