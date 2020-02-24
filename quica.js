function Quica(){
	this.x = 310;
	this.y = 215;
	this.img = $("#arriba")[0];	
		
	this.velocidadX = 0;
	this.velocidadY = 0;
	
	while(this.velocidadX == 0)
		this.velocidadX=aleatorio(-3,3);
	while(this.velocidadY == 0)
		this.velocidadY=aleatorio(-3,3);
			
	this.dibujar = function(ctx){
		var img = this.img;
		ctx.drawImage(img,this.x,this.y);
	}

	
	this.actualizar = function(){
		if (this.x > 15 && this.x < 600){
			this.x += this.velocidadX;
		}
		if (this.y > 15 && this.y < 390){
			this.y += this.velocidadY;	
		}
		if(this.x == 16 || this.x == 550){
				this.velocidadX = (this.velocidadX * -1);
		}
		if(this.y == 16 || this.y == 360){
				this.velocidadY = (this.velocidadY * -1);
		}
		
	
	}
	
	
}
