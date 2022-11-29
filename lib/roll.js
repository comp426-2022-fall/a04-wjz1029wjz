export function roll(sidesnum, dicenum, rollnum){
	const result = [];
	for(var i = 0; i < rollnum; i++){
		let cur = 0;
		for(var j = 0; j < dicenum; j++){
			cur += randdice(sidesnum);
		}
	result.push(cur);
	}

	const res = {
		sides: sidesnum,
		dice: dicenum,
		rolls: rollnum,
		results: result
	};
	return res;
}

function randdice(side){
	var result = Math.floor(Math.random() * side) + 1;
	return result;
}
