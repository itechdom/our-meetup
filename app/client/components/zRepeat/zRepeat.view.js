//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');

class zRepeatView{

    render(elements){
        elements.map((element)=>{
            element.actions.subscribe((data)=>{
                var repeatedElement = this.findElement(element.view.template);
                repeatedElement.append(data[0]._id);
            })
        })
    }
    findElement(element){
        return $(element+">*[zrepeat]");
    }
    filterData(){

    }
	constructor() {
		this.template = "zrepeat";
	}
}


module.exports = new zRepeatView();
