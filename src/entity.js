class entity {

    constructor() {
		
		this.x, this.y, this.z = 0;
		this.direction = 0;
		
		if (new.target === entity)
            throw new TypeError("Cannot construct Entity instances directly");
		
    }

    setPosition(x, y, z) {
		this.x = x;	
		this.y = y;	
		this.z = z;	
    }

    setDirection(d) {
        this.direction = d;
    }
    
    getPosition() {
		return [this.x, this.y, this.z];	
    }
    
    getDirection() {
        return this.direction;
    }
}