/**
 * 
 */

function Ship (positionX, positionY) {
	
	var cell1 = {x: positionX, y: positionY};
	var cell2 = {x: positionX + 1, y: positionY};
	var cell3 = {x: positionX + 2, y: positionY};
	var shipCells = [cell1, cell2, cell3];
	
	this.getPosition = function () {
		
		return shipCells;
		
	}
	this.getCell = function(i){
		return shipCells[i];
	}

 }


Ship.prototype.isCellHit = function (x, y, grid){
	if (grid.getCell(x, y).style.backgroundColor == 'red' ) {
		return true;
	}
}

Ship.prototype.isSunk = function(grid) {
	var flag = false;
	if (this.isCellHit(this.getCell(0).x, this.getCell(0).y, grid) &&
		this.isCellHit(this.getCell(1).x, this.getCell(1).y, grid) &&
		this.isCellHit(this.getCell(2).x, this.getCell(2).y, grid)){
		
		flag = true;
	}
	return flag;
}
