import React from 'react'
import Square from './Square'
import '../App.css'

    const Board = ({ squares, onClick, background }) => {
    const renderSquare = (i) => (
        <Square value={squares[i]} onClick={() => onClick(i)} />
    )


    const getBackgroundImage = (background) => {
        switch (background) {
            case 'background 1':
                return 'https://i.postimg.cc/R03YxTgz/trees.jpg'
            case 'background 2': 
                return 'https://i.postimg.cc/L8V9ZmSs/Cartoon-Astronaut-Wallpapers-For-Phone-Free-Download-844x1500.jpg'
            case 'background 3':
                return 'https://i.postimg.cc/7Ykr1jmJ/rectangle.jpg'
        }
    }

    // const boardStyle = {
    //     background: `url(${getBackgroundImage(background)})`,
    // }

    return (
    <>

        <div className='board-background' style={{ backgroundImage: `url(${getBackgroundImage(background)})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
            <div className="board-row" >
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    </>    
    )
    }

export default Board;