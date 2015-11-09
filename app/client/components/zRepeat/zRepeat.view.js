//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');

class zRepeatView{

    render(actions,element){

        actions.subscribe((list)=>{
            var repeatedElement = this.findElement(element);
            list.map((item)=>{
                repeatedElement.parent().append(item._id);
            });
        })
    }

    findElement(element){
        return $(element+">*[zrepeat]");
    }
	constructor() {
		this.template = "z-repeat";
	}
}


module.exports = new zRepeatView();
