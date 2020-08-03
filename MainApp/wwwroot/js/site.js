// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
(function () {

    var x = document.getElementsByClassName("employe");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].addEventListener("click",event=>{

            var isOpen=true;
          var d = event.currentTarget.getElementsByClassName("inputPunishment");
            var width="100%";
            anime({
                targets: d[0],
                width: width,
                height:width,
                padding:"5px",
                zIndex:1,
                background: 'red',
                easing: 'easeInOutQuad'
            });



            var btns = event.currentTarget.getElementsByClassName("btn");
            btns[0].addEventListener("click",event=>{
                anime({
                    targets: d[0],
                    width: "0px",
                    height:"0px",
                    padding:"0px",
                    zIndex:-100,
                    background: 'red',
                    easing: 'easeInOutQuad'
                });
            })

              
      })
    }



    
    window.addEventListener("paste", function(e){
    
        // Handle the event
        retrieveImageFromClipboardAsBlob(e, function(imageBlob){
            // If there's an image, display it in the canvas
            if(imageBlob){
                var canvas = document.getElementById("canvas");
                var ctx = canvas.getContext('2d');
                
                // Create an image to render the blob on the canvas
                var img = new Image();
    
                // Once the image loads, render the img on the canvas
                img.onload = function(){
                    // Update dimensions of the canvas with the dimensions of the image
                    canvas.width = this.width;
                    canvas.height = this.height;
    
                    // Draw the image
                    ctx.drawImage(img, 0, 0);
                };
    
                // Crossbrowser support for URL
                var URLObj = window.URL || window.webkitURL;
    
                // Creates a DOMString containing a URL representing the object given in the parameter
                // namely the original Blob
                img.src = URLObj.createObjectURL(imageBlob);

                saveAction();
            }
        });


    }, false);
    setTimeout(x => {
        var screens = document.querySelectorAll("#screen1");
        var vendorUrl = window.URL || window.webkitURL;
        navigator.getMedia = navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia;

        navigator.getMedia({ video: true, audio: false }, (stream) => {

            screens.forEach(x => {
                x.addEventListener("click", capture);
                x.srcObject = stream;
                x.play();
            });

        }, (err) => {
            console.log(err);
        });

        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
              
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive:true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });



       var dataDounat = {
            datasets: [{
                data: [10, 20, 30],
                 backgroundColor: [
                '#CD6155',
                '#5DADE2',
                '#F5B041'
            ],
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Ringan',
                'Sedang',
                'Berat'
            ],
           
        };

        var ctxdounatChart = document.getElementById('dounatChart').getContext('2d');
        var dounatChart = new Chart(ctxdounatChart, {
            type: 'doughnut',
            data: dataDounat,
            options: {
                responsive:true,
                maintainAspectRatio: false,
				legend: {
                    display: false,
				},
				
				animation: {
					animateScale: true,
					animateRotate: true
				}
			}
           
        });



    }, 3000);


    function capture() {
      
        var canvas = document.getElementById('canvas');
        var video = document.getElementById('screen1');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        canvas.toBlob() = (blob) => {
            const img = new Image();
            img.src = window.URL.createObjectUrl(blob);
        };
    }
})();



function saveAction(){
var elemen = document.getElementById("employes");
var width="0px";
if(elemen.offsetWidth<=0)
  {
    var width="350px";

    anime({
        targets: '.employes',
        width: width,
        backgroundColor: 'red',
        easing: 'easeInOutQuad'
      });
  }

}


function retrieveImageFromClipboardAsBlob(pasteEvent, callback){
	if(pasteEvent.clipboardData == false){
        if(typeof(callback) == "function"){
            callback(undefined);
        }
    };

    var items = pasteEvent.clipboardData.items;

    if(items == undefined){
        if(typeof(callback) == "function"){
            callback(undefined);
        }
    };

    for (var i = 0; i < items.length; i++) {
        // Skip content if not image
        if (items[i].type.indexOf("image") == -1) continue;
        // Retrieve image on clipboard as blob
        var blob = items[i].getAsFile();

        if(typeof(callback) == "function"){
            callback(blob);
        }
    }
}

