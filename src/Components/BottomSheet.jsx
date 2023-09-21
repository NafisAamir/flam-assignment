import React, { useState } from 'react';
import './BottomSheet.css';
import { AiFillCloseSquare } from 'react-icons/ai'

const BottomSheet = () => {
    const [sheetState, setSheetState] = useState('closed');

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

    return (
        <div className={`bottom-sheet ${sheetState}`}>
            <div className="sheet-header">
                <div className="handle" onClick={toggleSheet}></div>
                <div className="close-button-container">
                    <AiFillCloseSquare onClick={handleCloseClick} className="close-button" />
                </div>
            </div>
            <div className="content">
                <h1 style={{display:"flex", justifyContent:"center"}}>Made by Nafis Aamir</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima, repellat vitae amet deleniti accusantium? Aliquid odio asperiores eius tempora perspiciatis nobis voluptatem exercitationem repellendus! Aut temporibus ipsa hic sit qui. Ex molestias porro, provident doloremque fugiat magnam molestiae consequuntur aliquam et laudantium sit facilis accusamus ipsa optio magni laborum unde, non deserunt. Ducimus possimus excepturi iste consectetur laboriosam voluptatibus voluptate culpa, unde sit, nulla eum porro dignissimos obcaecati dicta? Quam maiores beatae asperiores dolor nisi quaerat. Iste dolor omnis repellat quidem ullam ut deleniti repellendus laudantium tenetur! Modi delectus, praesentium repellendus distinctio dicta recusandae magnam impedit totam veritatis, similique fuga voluptatibus! Distinctio expedita vel blanditiis, perspiciatis amet quae laborum quisquam minus voluptatibus ipsa repellat unde assumenda! Assumenda magni eius tempora iusto in, quas dolor non ex impedit veniam illum, quis harum quasi exercitationem totam alias dignissimos sit suscipit laboriosam aspernatur molestiae expedita! Quam omnis, assumenda, cupiditate nemo officia dolor veritatis enim repellat eligendi laboriosam exercitationem nesciunt sint praesentium optio odit odio vero aliquam iste perspiciatis voluptatum excepturi blanditiis rerum voluptates! Esse, quasi mollitia ea tempore laborum adipisci eius doloremque aut sapiente soluta cupiditate pariatur quia amet, aperiam, possimus magni nisi. Perspiciatis suscipit culpa nulla sed quia repudiandae itaque asperiores totam, deserunt harum eum ut, rem optio officiis aliquid? Dicta omnis, architecto expedita amet maiores commodi dolorum labore explicabo ex, rem corrupti quisquam, id eaque pariatur beatae tenetur? Consequatur itaque, aliquid sint laborum enim repellendus dolor nesciunt, unde, quis odio cumque provident tenetur suscipit ex accusantium? Et inventore aperiam id minus nostrum repudiandae quaerat praesentium amet. Tempora rem aliquid ipsa, debitis quae maxime neque minima pariatur reiciendis vel hic eum cupiditate deleniti ex cum accusantium dolores consectetur natus alias quia voluptatibus molestiae quam aut delectus. Veniam ut omnis modi aperiam sed. Exercitationem est pariatur enim error numquam odio in alias veniam sit totam unde amet dolorem dolores animi, vitae maiores assumenda tempore, distinctio tenetur cupiditate, illo iusto. A quas saepe esse totam quaerat fugiat placeat, possimus perspiciatis ex nisi rem assumenda quam ut! Suscipit, eos. Iure a vel ipsam reprehenderit delectus cupiditate inventore nesciunt nihil hic exercitationem totam odit, voluptates earum ea. Ut eveniet praesentium, repellendus reiciendis repellat tempore vero totam, magni consequatur dolorem, earum veniam impedit! Cumque est quis velit alias nesciunt necessitatibus iure autem iste repellat, aut temporibus natus, deserunt eaque ipsa vero animi aliquid repudiandae ab delectus illo laboriosam officiis vel aliquam eius! Ducimus magni nemo natus id voluptatum dicta facere nulla doloribus quis distinctio, ipsum enim similique. Qui pariatur nobis quis, in, recusandae eius sint magni sequi commodi libero enim quia saepe? Dolore quo soluta distinctio ipsam inventore omnis quasi aliquid quas. Magnam distinctio exercitationem harum ullam ratione molestiae officiis nostrum, maiores provident quasi quos impedit nam sint dolores autem quaerat, sit doloremque. Dolore provident repellat quas? Reprehenderit ea cum officiis asperiores? Voluptatum illum ipsa ab exercitationem nam. Consequatur rerum ea provident non possimus in nostrum minus, architecto velit neque, tenetur ipsum commodi beatae voluptas doloremque exercitationem quidem vitae, expedita atque. Doloribus nihil ab non neque.</p>
            </div>
        </div>
    );
};

export { BottomSheet };
