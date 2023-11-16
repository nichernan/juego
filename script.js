const board = document.getElementById('board');
let currentPlayer = 'X';
let gameBoard = Array(9).fill('');

function handleClick(event) {
    const cellIndex = event.target.dataset.index;
    if (gameBoard[cellIndex] === '' && !checkWinner()) {
        gameBoard[cellIndex] = currentPlayer;
        renderBoard();
        if (!checkWinner()) {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            alert(`Player ${currentPlayer} wins!`);
            resetGame();
            return true;
        }
    }

    if (!gameBoard.includes('')) {
        alert('It\'s a tie!');
        resetGame();
        return true;
    }

    return false;
}

function renderBoard() {
    gameBoard.forEach((value, index) => {
        board.children[index].textContent = value;
    });
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = Array(9).fill('');
    renderBoard();
}

board.addEventListener('click', handleClick);






