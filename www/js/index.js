/*var app = {
    
  //funcion incial para llamar a las demas
    
    initialize: function(){
        
     this.bindEvents();   
    },
    
    //Esta funcion añade listeners para cada evento que podamos necesitar en cosas como apretar un boton o que el device este ready.
    bindEvents: function(){
        
        document.addEventListener('deviceready', this.onDeviceReady, false);   
        document.addEventListener('backbutton', this.onBackButton, false);   
        document.addEventListener('menubutton', this.onMenuButton, false);   
    },
    
    //Aqui hay que colocar por cada listener una funcion, que sera la que se ejecute cuando pase lo que escucha el listener.
    onDeviceReady: function(){
     //ParserRSS();
    },
    
     onBackButton: function(){
     
    },
    
     onMenuButton: function(){
     
    }
    
   
    
};*/

var seleccionNoticia;

function ParserRSS(){
    
    var posicion = document.getElementById("topics");
    var Cadena="";
    
    $(function(){
        url = 'http://www.3djuegos.com/universo/rss/rss.php?plats=1-2-3-4-5-6-7-34&tipos=noticia-analisis-avance-video-imagenes-demo&fotos=no&limit=20';
        $.ajax({
            type: "GET",
            url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(url),
            dataType: 'json',
            error: function(){
                alert('Unable to load feed, Incorrect path or invalid feed');
            },
            success: function(xml){
                values = xml.responseData.feed.entries;

                for(entradas=0;entradas<values.length;entradas++){
                    Cadena += "<li data-role='list-divider'> "+values[entradas].title+"</li>";
                    Cadena += "<li><a href="+values[entradas].link+">";
                    Cadena += "<p>"+values[entradas].content+"</p></a></li>";

                }

                posicion.innerHTML=""+Cadena;   
                $("#topics").listview('refresh');

            }
        });
    });
};