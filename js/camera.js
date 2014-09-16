var canvas, ctx;

window.addEventListener("load", function(){
                        /*
                         Create a canvas and add it to the body. We will use this canvas later to render the camera.
                         */
                        canvas = document.createElement("canvas");
                        canvas.width = window.innerWidth;
                        canvas.height = window.innerHeight;
                        
                        ctx = canvas.getContext("2d");
                        document.body.appendChild(canvas);
                        
                        if (CocoonJS.Camera.getNumberOfCameras() > 0)
                        {
                            var front_camera_index = 1;
                            var camera_information = CocoonJS.Camera.getAllCamerasInfo();
                            console.log("Number of cameras found: "+camera_information.length);
                            camera_information.forEach(function(data,i){
                                                       
                                                   console.log("Camera index: " + data.cameraIndex);
                                                   console.log("Camera Type: " + data.cameraType);
                                                   console.log("Supported Video Frame Rates: " + data.supportedVideoFrameRates);
                                                   console.log("Supported Video Capture Image Formats: " + data.supportedVideoCaptureImageFormats);
                                                   });
                        
                            var camera_image = CocoonJS.Camera.startCapturing(front_camera_index, 50, 50, 30);

                            /*
                             Draw the image into the canvas, easy./Users/abradley/Dropbox/programming/CocoonJS/camera-canvas/Archive.zip
                             */
                            if (camera_image != null)
                            {
                            setInterval( function() {
                                    ctx.drawImage( camera_image, 0, 0, canvas.width, canvas.height );
                                    }, 1000 / 60 );
                            }
                        }
                        
}, false);