import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as $ from 'jquery';
declare var ol: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    img: boolean;
    image: boolean = true;
    data: HTMLInputElement;
  

 @ViewChild("mapElement") mapElement: ElementRef;

    public map: any;
       username: string;
       ol: any;
    constructor(private router: Router){}




  ngOnInit() {

this.username = localStorage.getItem("username");

 
  }

  

  logout()
  {
    this.router.navigate(['']);
  }
  
  tile()
  {
      this.img = false
     this.image = true
      this.mapfunc();
    
  }

   raster()
  {
     this.image = false
    this.img = true
  }

  mapfunc()
  {
    
      // Loading geo vector source
      var assets_vectors = new ol.source.Vector({
        url: '../app/assetsgeo.json',
        format: new ol.format.GeoJSON()
      });

      // Create vectors layout
      var points_vector = new ol.layer.Vector({
        title: 'map',
        source: assets_vectors,
        style: new ol.style.Style({
          image: new ol.style.Circle({
            radius: 5,
            stroke: new ol.style.Stroke({
              color: 'white',
              width: 2
            }),
            fill: new ol.style.Fill({
              color: 'green'
            })
          })
        })
      });

      // Map layer
      var map_tile = new ol.layer.Tile({
        source: new ol.source.OSM()
      });

      // Map control
      var controls = ol.control.defaults({
        attributionOptions: ({
          collapsible: false
        })
      });

      // View defaults
      var view = new ol.View({
          center: [0, 0],
          zoom: 5
      });

      // Interaction (click event on any geo point) -> change point color
      var map_interaction = new ol.interaction.Select({
        style: new ol.style.Style({
          image: new ol.style.Circle({
            radius: 5,
            fill: new ol.style.Fill({
              color: "white"
            }),
            stroke: new ol.style.Stroke({
              color: "green",
              width: 3
            })
          })
        })
      });

      // Define map
      var map = new ol.Map({
        target: 'map',
        interactions: ol.interaction.defaults().extend([ map_interaction ]),
        layers: [ map_tile, points_vector ],
        controls: controls,
        view: view
      });

      // Click event function
      var display_name = function(pixel) {
        var display_array = [];
        map.forEachFeatureAtPixel(pixel, function(feature, layer){
          display_array.push(feature);
        });

        display_array.forEach(element => {
          console.log("Asset Name: " + element.getId());
          console.log(element.getGeometry());          
        });
      }

      // Map click event handler
      map.on('click', function(evt){
        var pixel = evt.pixel;
        display_name(pixel);
      })
  }

}
