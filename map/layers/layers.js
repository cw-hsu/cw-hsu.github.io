var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Light_1 = new ol.layer.Tile({
            'title': 'Light',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_Dark_2 = new ol.layer.Tile({
            'title': 'Dark',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_Parks_3 = new ol.format.GeoJSON();
var features_Parks_3 = format_Parks_3.readFeatures(json_Parks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parks_3.addFeatures(features_Parks_3);
var lyr_Parks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parks_3, 
                style: style_Parks_3,
                popuplayertitle: 'Parks',
                interactive: true,
                title: '<img src="styles/legend/Parks_3.png" /> Parks'
            });
var format_Bikeways_CityData_4 = new ol.format.GeoJSON();
var features_Bikeways_CityData_4 = format_Bikeways_CityData_4.readFeatures(json_Bikeways_CityData_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bikeways_CityData_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bikeways_CityData_4.addFeatures(features_Bikeways_CityData_4);
var lyr_Bikeways_CityData_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bikeways_CityData_4, 
                style: style_Bikeways_CityData_4,
                popuplayertitle: 'Bikeways_(City Data)',
                interactive: true,
                title: '<img src="styles/legend/Bikeways_CityData_4.png" /> Bikeways_(City Data)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Light_1.setVisible(true);lyr_Dark_2.setVisible(true);lyr_Parks_3.setVisible(true);lyr_Bikeways_CityData_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Light_1,lyr_Dark_2,lyr_Parks_3,lyr_Bikeways_CityData_4];
lyr_Parks_3.set('fieldAliases', {'Name_Alpha': 'Name_Alpha', 'Address': 'Address', 'OBJECTID': 'OBJECTID', });
lyr_Bikeways_CityData_4.set('fieldAliases', {'Bikeway': 'Bikeway', 'Region': 'Region', 'Street': 'Street', 'Bikeway_Type': 'Bikeway_Type', });
lyr_Parks_3.set('fieldImages', {'Name_Alpha': 'TextEdit', 'Address': 'TextEdit', 'OBJECTID': 'TextEdit', });
lyr_Bikeways_CityData_4.set('fieldImages', {'Bikeway': 'TextEdit', 'Region': 'TextEdit', 'Street': 'TextEdit', 'Bikeway_Type': 'TextEdit', });
lyr_Parks_3.set('fieldLabels', {'Name_Alpha': 'no label', 'Address': 'no label', 'OBJECTID': 'no label', });
lyr_Bikeways_CityData_4.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Install_Date': 'no label', 'Network': 'no label', 'Bikeway': 'no label', 'Region': 'no label', 'Street': 'no label', 'From_': 'no label', 'To_': 'no label', 'Datasource_DT': 'no label', 'Bikeway_Type': 'no label', });
lyr_Bikeways_CityData_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});