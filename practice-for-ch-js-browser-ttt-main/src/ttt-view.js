class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
  }

  setupBoard() {
    const ul = document.createElement('ul');
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let liElement = document.createElement('li');
        liElement.dataset.position = [i, j];
        ul.appendChild(liElement);
      }
    }

    this.el.appendChild(ul);
    // this.el.addEventListener('click', this.handleClick.bind(this));
    // this.onclick = (e) => this.handleClick(e)
    this.el.addEventListener('click', (e) => this.handleClick(e));
  }

  handleClick(e) {
    e.preventDefault();
    let selected = e.target;
    let pos = [];
    pos.push(selected.dataset.position[0], selected.dataset.position[2]);
    this.game.playMove(pos);
  }

  makeMove(square) {}

  handleGameOver() {}
}

export default View;
