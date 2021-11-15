var Bee = function() {
  Grub.call(this);
  //creating a new isntance of Grub to call all of its properties for Bee to use
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
//calling all of the grub's methods
//so by doing the above line, are we setting the cosntructor to be Grub so we have to reset the constsructor?
Bee.prototype.constructor = Bee;
//resetting the constructor back to bee