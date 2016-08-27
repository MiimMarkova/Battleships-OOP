/**
 * 
 */

function Game () {
	
	var countShips = 3;
	var countShots = 20;
	var ships = [];
	this.grid = new Grid;

	this.player = new Player;
	
	this.getCountShips = function (){
		return countShips;
	}
	this.setCountShips = function () {
		countShips--;
	}
	
	this.getCountShots = function (){
		return countShots;
	}
	this.setCountShots = function () {
		countShots--;
	}
	
	this.getShips = function (){
		return ships;
	}
	this.setShips = function (newValue) {
		ships.push(newValue);
	}
	

}


Game.prototype.addShips = function () {
	
	function randomNumber() {
		x = Math.floor(Math.random() * 6);
		return x;
	}
	for (var i = 0; i < 3; i++) {
	
		x = randomNumber();
		y = randomNumber();
		
			var ship = new Ship(x, y);
			this.setShips(ship);
			
			for(var j = 0; j < 3; j++){
				this.grid.setShipPositions(ship.getCell(j));
			}
		
	}
	
}

Game.prototype.init = function (gridHtml) {

	this.grid.init(gridHtml);
	this.addShips();
}