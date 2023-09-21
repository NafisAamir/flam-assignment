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
        } else if (deltaY < -threshold1) {
          setSheetState('fully-open');
        }
        // else if(deltaY < -threshold1){
        //     setSheetState('closed');
        // }

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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam commodi facilis recusandae earum qui voluptas autem esse enim adipisci. Reiciendis reprehenderit facere delectus voluptate eum veniam. Exercitationem repudiandae alias mollitia quibusdam dolor aliquam laboriosam assumenda ea voluptatem pariatur tempore modi veritatis dolorum debitis tempora, eligendi labore hic ex. Nemo, libero harum aliquid eligendi ullam neque, eveniet nesciunt consectetur officia ducimus sapiente provident ea exercitationem soluta. Deleniti vero sed magni molestiae assumenda incidunt, id ad iure aspernatur consequuntur quasi, cumque numquam quis a ratione hic. Sint expedita illo officiis odit libero, illum eos facilis hic quis natus ipsum voluptate eaque molestiae soluta maiores aliquid! Sapiente quia veniam suscipit eligendi vero, libero et. Ipsum quas quis laboriosam! Provident doloribus nam perferendis debitis possimus ut commodi, doloremque ab aperiam a? Facere corrupti cupiditate atque in itaque, nemo non officiis minima suscipit, corporis, velit unde ea libero iusto dignissimos soluta. Tenetur officiis recusandae quos praesentium itaque, sint laborum dignissimos iusto eos aspernatur assumenda dolorem quo tempora ratione quaerat pariatur, modi, odit placeat veniam. Dolore tempore quod magnam ea minima repudiandae commodi, iste repellendus rerum, vero quae reiciendis quam recusandae nulla modi numquam alias, voluptatem exercitationem labore odit itaque reprehenderit earum officiis minus? Quo sed sunt, doloribus vero, exercitationem consequatur odit quaerat eaque, cumque impedit fuga dicta asperiores vitae natus assumenda id consectetur dolores totam ullam maxime quasi eveniet ab? Eaque fugit ipsa sunt. Laboriosam illo sed maxime, eos illum odit? Quaerat optio nostrum, incidunt totam molestias animi labore, similique adipisci ratione, aspernatur dolores molestiae dignissimos voluptates quidem corporis sit placeat saepe expedita iusto quibusdam. Commodi, vel, nisi unde repudiandae distinctio mollitia ipsum enim omnis ab id fuga consequatur corporis? Quis autem molestias dignissimos quos, et voluptas doloremque iusto, excepturi necessitatibus eaque porro explicabo, accusantium ducimus nulla pariatur eum magni quod voluptatum! Error aliquid repellat asperiores voluptates perspiciatis optio. Sit quae dignissimos ea! Eaque vero aut, cum dolorum, reiciendis aspernatur consequatur sit officiis cumque odit totam, ipsum libero excepturi alias molestias! Eum ullam obcaecati animi aperiam nulla modi provident, sit quasi ipsa harum eligendi, assumenda rerum aliquid nam vero! Voluptate praesentium sit adipisci. Aperiam dolores quidem laborum possimus sapiente accusamus placeat, quaerat neque est omnis odit minima optio cum dolor, temporibus quae provident aliquam quibusdam quis odio laudantium. Aperiam, quisquam perferendis. Harum voluptas officia quis neque doloremque molestias id, sint dolorem minima atque repellendus aperiam itaque ut. Tempora similique ex aut, sapiente sunt error minus assumenda, recusandae laudantium perspiciatis voluptatum animi voluptatem autem a facere perferendis ipsa vel laboriosam soluta numquam, consequuntur iure aliquam debitis vero. Pariatur maxime dolor porro sequi ad. Vitae similique doloribus quaerat quos? Quo doloremque, tenetur quisquam illum harum corporis? Non dicta quis est amet debitis fugiat? Quasi consequatur dignissimos voluptatum aliquid. Aut ipsam doloremque expedita architecto non facilis perferendis eos dolor cupiditate voluptatibus itaque nam unde delectus, in nulla adipisci a ad minima impedit pariatur atque! Temporibus sint doloremque assumenda. Dolor, explicabo sequi? Deserunt, nisi nostrum magnam beatae atque officiis non. Totam accusantium illo quisquam eveniet facere culpa sed eius?</p>
      </div>
    </div>
  );
};

export { BottomSheet };
