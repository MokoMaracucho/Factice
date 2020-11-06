Player = function(game, canvas) {
    this.scene = game.scene;

    this._initCamera(this.scene, canvas);
    
};

Player.prototype = {
	_initCamera : function(scene, canvas) {
	    // On crée la caméra
	    this.camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(-20, 5, 0), scene);
	    
	    // On demande à la caméra de regarder au point zéro de la scène
	    this.camera.setTarget(BABYLON.Vector3.Zero());

	    // On affecte le mouvement de la caméra au canvas
	    this.camera.attachControl(canvas, true);
	}
};