/**
 * 
 */

function Player() {
	
	var _ammo = 20;
	var _hit = 0;
	var _missed = 0;
	
	this.getAmmo = function () {
		return _ammo;
	}
	this.setAmmo = function (amount) {
		_ammo = amount;
	}
	
	this.getHit = function () {
		return _hit;
	}
	this.setHit = function (amount) {
		_hit = amount;
	}	
	
	this.getMissed = function () {
		return _missed;
	}
	this.setMissed = function (amount) {
		_missed = amount;
	}
}

Player.prototype.shoot = function (positionX, positionY, grid) {
	if(grid.isCellTaken(positionX, positionY)){
		grid.getCell(positionX, positionY).style.backgroundColor = 'red';
	}else{
		grid.getCell(positionX, positionY).style.backgroundColor = 'grey';
	}

}
