function initialize() {
    var propertiPeta = {
      center:new google.maps.LatLng(2.3566546585831394, 99.1830931175401),
      zoom:15,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    
    var peta = new google.maps.Map(document.getElementById("googleMap"), propertiPeta);
    
    // membuat Marker
    var marker=new google.maps.Marker({
        position: new google.maps.LatLng(2.3566546585831394, 99.1830931175401),
        map: peta,
        animation: google.maps.Animation.BOUNCE
    });
  
  }
  
  // event jendela di-load  
  google.maps.event.addDomListener(window, 'load', initialize);