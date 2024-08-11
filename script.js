let students={
	name: "John",
	age: 20,
	grade: "A",
};

Object.prototype.getKeys= function(){
	return Object.keys(this);
}