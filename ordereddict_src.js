function OrderedDict (){
	this.odict ={};
	this.arr = [];
}

OrderedDict.prototype.put = function(key, val){
    if ( !( key in this.odict ) ) {
                this.arr.push( key );
            }
            this.odict[ key ] = val;
};

OrderedDict.prototype.get = function(key){

	return this.odict[key];
};

OrderedDict.prototype.getItems = function(){
	var arr = [];

	for (var key in this.odict) {
	    if (this.odict.hasOwnProperty(key)) {
	        arr.push( [ key, this.odict[key] ] );
	    }
	}
	return 	arr;

};