AFRAME.registerComponent('drive', {
    init: function () {
        var gameStateValue = this.el.getAttribute("game")
        if (gameStateValue == "play") {
            this.driveCar()
        }
    },
    isVelocityActive: function () {
        return Math.random() < 0.25
    },
    driveCar: function () {
        var multiply = 10
        var wheelRotation = 0

        // key down events

        window.addEventListener("keydown", function (e) {

            // steering wheel rotation on right and left arrow keys

            var wheel = document.querySelector("#control-wheel")

            if (e.code == "ArrowRight" && wheelRotation > -40) {
                wheelRotation -= 5
                wheel.setAttribute("rotation", { x: 0, y: 0, z: wheelRotation })
            }

            if (e.code == "ArrowLeft" && wheelRotation < 40) {
                wheelRotation += 5
                wheel.setAttribute("rotation", { x: 0, y: 0, z: wheelRotation })
            }

            // camera movement control rotation and direction on right and left arrow keyup

            var cameraRig = document.querySelector("#camera-rig")
            var cameraRotation = cameraRig.getAttribute("rotation")
            var cameraPosition = cameraRig.getAttribute("position")
            var cameraMoveControl = cameraRig.getAttribute("movement-control")

            cameraRig.setAttribute("movement-controls", { "speed": cameraMoveControl.speed + 0.005 })

            var cameraDirection = new THREE.Vector3();
            cameraRig.object3D.getWorldDirection(cameraDirection);


            if (e.code == "ArrowRight") {
                cameraRotation.y -= 5
                cameraRig.setAttribute("rotation", { x: 0, y: cameraRotation.y, z: 0 })
                cameraRig.setAttribute("movement-controls", { "speed": cameraMoveControl.speed + 0.005 })

            }


            if (e.code == "ArrowLeftt") {
                cameraRotation.y += 5
                cameraRig.setAttribute("rotation", { x: 0, y: cameraRotation.y, z: 0 })
                cameraRig.setAttribute("movement-controls", { "speed": cameraMoveControl.speed + 0.005 })

            }

            // speed up/accelerate on up arrow
            if (e.code == "ArrowUp") {
                multiply += 0.5

                if (multiply <= 100 && cameraPosition.z > -500) {
                    cameraRig.setAttribute("movement-controls", { "speed": cameraMoveControl.speed + 0.005 })
                    var accelerateCar = document.querySelector("#control-acce")
                    accelerateCar.setAttribute("material", "color", "green")
                    var carSpeed = document.querySelector("#speed")
                    carSpeed.setAttribute("text", { value: multiply })

                }
            }

            //  stop /brake on space keydown
            if (e.code == "space") {
                cameraRig.setAttribute("movement-controls", { "speed": 0 })
                var stopCar = document.querySelector("#control-break")
                stopCar.setAttribute("material", "color", "red")
            }



        })

        //Key Up Events

window.addEventListener("keyup",function(e){

var cameraRig = document.querySelector("#camera-rig")
var cameraDirection = new THREE.Vector3()
cameraRig.object3D.getWorldDirection(cameraDirection)
var cameraMoveControl= cameraRig.getAttribute("movement-controls")

if(e.code == "Space"){
    var startCar = docu
}


})



    },

})
