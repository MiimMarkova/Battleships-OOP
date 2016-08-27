/**
 * 
 */

function Grid (gridHTML) {
	
	var grid = [];
	var shipPositions = [];
	
	
	
	this.getGrid = function (x, y) {
		return grid;
	}
	this.getShipPositions = function() {
		return shipPositions;
	}
	this.setShipPositions = function (newValue) {
		shipPositions.push(newValue);
	}
	this.getCell = function (x,y) {
		return grid[x][y];
	}
	
}

Grid.prototype.newCell =function (gridHtml, x, y) {
	
	var newDiv = document.createElement('div');
	newDiv.className = 'cell';
	newDiv.setAttribute('x', x);
	newDiv.setAttribute('y', y);
	gridHtml.appendChild(newDiv);
	return newDiv;
}
Grid.prototype.init = function (gridHtml) {
	
	for (var i = 0; i < 10; i++){
		var row = [];
		for (var j = 0; j < 10; j++){
			
			row.push(this.newCell(gridHtml, i, j));	
		}
		this.getGrid().push(row);
	}
	
}
Grid.prototype.isCellTaken = function (positionX, positionY) {
	var isHit = false
	for (var i = 0; i < this.getShipPositions().length; i++){
		if (this.getShipPositions()[i].x == positionX &&
			this.getShipPositions()[i].y == positionY){
			isHit = true;
		} 
	}	
	console.log(this.getShipPositions());
	return isHit;

}

Grid.prototype.isCellHit = function (x, y) {
	if (this.getCell(x, y).style.backgroundColor) {
		return true;
	} else {
		return false;
	}
}

