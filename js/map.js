var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  controls: ol.control.defaults({
    attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
      collapsible: false
    })
  }),
  //renderer: exampleNS.getRendererFromQueryString(),
  target: 'map',
  view: new ol.View({
    center: ol.proj.transform([-4.126241, 50.412724], 'EPSG:4326', 'EPSG:3857'),
    zoom: 18
  })
});
