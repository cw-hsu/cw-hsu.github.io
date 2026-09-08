var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png?key=cb1_317d_1_9193175cd9d84a63ef4dcd9d'
            })
        });
var format_auction_1 = new ol.format.GeoJSON();
var features_auction_1 = format_auction_1.readFeatures(json_auction_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_auction_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_auction_1.addFeatures(features_auction_1);
var lyr_auction_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_auction_1, 
                style: style_auction_1,
                popuplayertitle: 'auction',
                interactive: false,
                title: '<img src="styles/legend/auction_1.png" /> auction'
            });
var format_Centroids_2 = new ol.format.GeoJSON();
var features_Centroids_2 = format_Centroids_2.readFeatures(json_Centroids_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centroids_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centroids_2.addFeatures(features_Centroids_2);
var lyr_Centroids_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centroids_2, 
                style: style_Centroids_2,
                popuplayertitle: 'Centroids',
                interactive: true,
                title: '<img src="styles/legend/Centroids_2.png" /> Centroids'
            });

lyr_Positron_0.setVisible(true);lyr_auction_1.setVisible(true);lyr_Centroids_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_auction_1,lyr_Centroids_2];
lyr_auction_1.set('fieldAliases', {'fid': 'fid', 'APN': 'APN', 'Item': 'Item', 'Purchase.Price': 'Purchase.Price', 'Excess.Proceeds': 'Excess.Proceeds', });
lyr_Centroids_2.set('fieldAliases', {'fid': 'fid', 'APN': 'APN', 'Item': 'Item', 'Purchase.Price': 'Purchase.Price', 'Excess.Proceeds': 'Excess.Proceeds', });
lyr_auction_1.set('fieldImages', {'fid': 'TextEdit', 'APN': 'TextEdit', 'Item': 'Range', 'Purchase.Price': 'TextEdit', 'Excess.Proceeds': 'TextEdit', });
lyr_Centroids_2.set('fieldImages', {'fid': 'TextEdit', 'APN': 'TextEdit', 'Item': 'Range', 'Purchase.Price': 'TextEdit', 'Excess.Proceeds': 'TextEdit', });
lyr_auction_1.set('fieldLabels', {'fid': 'inline label - always visible', 'APN': 'inline label - always visible', 'Item': 'inline label - always visible', 'Purchase.Price': 'inline label - always visible', 'Excess.Proceeds': 'inline label - always visible', });
lyr_Centroids_2.set('fieldLabels', {'fid': 'inline label - always visible', 'APN': 'inline label - always visible', 'Item': 'inline label - always visible', 'Purchase.Price': 'inline label - always visible', 'Excess.Proceeds': 'inline label - always visible', });
lyr_Centroids_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});