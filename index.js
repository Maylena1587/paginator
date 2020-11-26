const Paginator = function(data){
  this.page = 1;
  this.length = data.length;
  this.data = data;
  this.perPage = 10;
}
Paginator.prototype.show = function(){
  return this.data.slice(this.perPage*(this.page-1), this.page*this.perPage);
}

Paginator.prototype.next = function(){
 this.page = Math.min(++this.page, Math.ceil(this.length/this.perPage));
 return this;
}

Paginator.prototype.prev = function(){
  // this.page =  Math.max(1, --this.page);
  
  this.page = --this.page || 1;


 return this;
}

const data = new Array(100).fill(0).map((value, index) => index+1);

const P = new Paginator(data);