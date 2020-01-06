class Spreadsheet {
  constructor(columns = 5, rows = 5, className = "sheet") {
    this.rows = rows;
    this.columns = columns;
    this.form = document.createElement("form");
    this.table = document.createElement("table");
    this.table.className = className;
    this.form.appendChild(this.table);
  }

  init(node = document) {
    for (let x = 0; x < this.rows; x++) {
      const tag = x == 0 ? "th" : "td";
      this.table.appendChild(this.createRow(this.columns, tag));
    }
    const button = document.createElement("button");
    button.addEventListener("click", () => {
      console.log("chuj");
      let row = this.createRow(this.columns, "td");
      this.table.appendChild(row);
    });
    button.type = "button";
    button.innerHTML = "+";
    const button_2 = document.createElement("button");
    button_2.addEventListener("click", () => {
      this.renderResult();
    });
    button_2.type = "button";
    this.dragAndSelect(this.table);
    this.form.appendChild(button);
    this.form.appendChild(button_2);
    node.appendChild(this.form);
  }

  createRow(columns, cell_tag = "th") {
    let row = document.createElement("tr");
    for (let y = 0; y < this.columns; y++) {
      let input = document.createElement("input");
      input.type = "text";
      let column = document.createElement(cell_tag);
      column.appendChild(input);
      input.placeholder = "chuj";
      row.appendChild(column);
    }
    return row;
  }

  dragAndSelect(node) {
    let isMouseDown = true;
    let start_pos = {};
    let start_value;
    node.addEventListener("mousedown", click_target => {
      isMouseDown = true;
      start_pos = {
        x: click_target.clientX,
        y: click_target.clientY
      };
      start_value = document.elementFromPoint(start_pos.x, start_pos.y).value;
    });
    node.addEventListener("mouseup", end_target => {
      const end_pos = { x: end_target.clientX, y: end_target.clientY };
      console.log(end_pos);
      if (
        isMouseDown &&
        start_pos.x <= end_pos.x && // x mniejsze, y większe
        start_pos.y <= end_pos.y
      ) {
        for (let i = start_pos.x; i <= end_target.x; i += 5) {
          for (let j = start_pos.y; j <= end_pos.y; j += 5) {
            document.elementFromPoint(i, j).value = start_value;
          }
        }
      } else if (
        isMouseDown &&
        start_pos.x <= end_pos.x && //x mniejsze y mniejsze
        start_pos.y >= end_pos.y
      ) {
        for (let i = start_pos.x; i <= end_target.x; i += 5) {
          for (let j = start_pos.y; j >= end_pos.y; j -= 5) {
            document.elementFromPoint(i, j).value = start_value;
          }
        }
      } else if (
        isMouseDown &&
        start_pos.x >= end_pos.x && // x większe , y mniejsze
        start_pos.y >= end_pos.y
      ) {
        for (let i = start_pos.x; i >= end_target.x; i -= 5) {
          for (let j = start_pos.y; j >= end_pos.y; j -= 5) {
            document.elementFromPoint(i, j).value = start_value;
          }
        }
      } else if (
        isMouseDown &&
        start_pos.x >= end_pos.x && // x większe, y wieksze
        start_pos.y <= end_pos.y
      ) {
        for (let i = start_pos.x; i >= end_target.x; i -= 5) {
          for (let j = start_pos.y; j <= end_pos.y; j += 5) {
            document.elementFromPoint(i, j).value = start_value;
          }
        }
      }
    });
  }

  renderResult() {
    const elements = [
      ...this.table.getElementsByTagName("th"),
      ...this.table.getElementsByTagName("td")
    ];
    console.log(elements);
    let row;
    for (let index = 0; index <= elements.length; index++) {
      if (index % this.columns == 0) {
        if (row != null) this.table.appendChild(row);
        row = document.createElement("tr");
      }
      const cell = document.createElement(elements[index].tagName);
      cell.innerHTML =
        elements[index].firstChild.value == null
          ? " "
          : elements[index].firstChild.value;
      row.appendChild(cell);
    }
  }

  computeField(){
    
  }
}
