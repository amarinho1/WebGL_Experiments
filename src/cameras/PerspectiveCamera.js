class PerspectiveCamera extends Entity {

    constructor(){
        super();
        
        this.zNear = 1;
        this.zFar = 2000;
        this.at = [0,0,0];
        this.up = [0,1,0];

    }

    computeProjectionMatrix(aspect) {
        return m4.perspective(this.degToRad(60), aspect, this.zNear, this.zFar);
    }

    computeViewProjectionMatrix(projectionMatrix){
        var cameraMatrix = m4.lookAt(this.getPosition(), this.at, this.up);
        // Make a view matrix from the camera matrix.
        var viewMatrix = m4.inverse(cameraMatrix);
        // Compute a view projection matrix
        return m4.multiply(projectionMatrix, viewMatrix);
    }
    
    /*
    ######################
    Helper Functions
    ######################
    */
    radToDeg(r) {
        return r * 180 / Math.PI;
    }
  
    degToRad(d) {
        return d * Math.PI / 180;
    }
    

}