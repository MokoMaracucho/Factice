Player = function(game, canvas) {
    // _this est l'accès à la caméraà l'interieur de Player
    var _this = this;

    // Le jeu, chargé dans l'objet Player
    this.game = game;

    // Axe de mouvement X et Z
    this.axisMovement = [false,false,false,false];

    window.addEventListener("keyup", function(evt) {
        
        switch(evt.keyCode){
            case 90:
            _this.camera.axisMovement[0] = false;
            break;
            case 83:
            _this.camera.axisMovement[1] = false;
            break;
            case 81:
            _this.camera.axisMovement[2] = false;
            break;
            case 68:
            _this.camera.axisMovement[3] = false;
            break;
        }
    }, false);
    
    // Quand les touches sont relachés
    window.addEventListener("keydown", function(evt) {
        switch(evt.keyCode){
            case 90:
            _this.camera.axisMovement[0] = true;
            break;
            case 83:
            _this.camera.axisMovement[1] = true;
            break;
            case 81:
            _this.camera.axisMovement[2] = true;
            break;
            case 68:
            _this.camera.axisMovement[3] = true;
            break;
        }
    }, false);
    
    // Initialisation de la caméra
    this._initCamera(this.game.scene, canvas); 
};

Player.prototype = {
	_initCamera : function(scene, canvas) {
	    // On crée la caméra
	    this.camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(-20, 5, 0), scene);
	    
	    // Axe de mouvement X et Z
	    this.camera.axisMovement = [false,false,false,false];
	    
	    // Si le joueur est en vie ou non
	    this.isAlive = true;
	    
	    // On demande à la caméra de regarder au point zéro de la scène
	    this.camera.setTarget(BABYLON.Vector3.Zero());
	}
};