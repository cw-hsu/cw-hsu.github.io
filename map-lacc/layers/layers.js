var wms_layers = [];


        var lyr_Satellite_0 = new ol.layer.Tile({
            'title': 'Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Road_1 = new ol.layer.Tile({
            'title': 'Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_LACCcampuses_2 = new ol.format.GeoJSON();
var features_LACCcampuses_2 = format_LACCcampuses_2.readFeatures(json_LACCcampuses_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LACCcampuses_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LACCcampuses_2.addFeatures(features_LACCcampuses_2);
var lyr_LACCcampuses_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LACCcampuses_2, 
                style: style_LACCcampuses_2,
                popuplayertitle: 'LACC campuses',
                interactive: true,
                title: '<img src="styles/legend/LACCcampuses_2.png" /> LACC campuses'
            });
var format_14milerings_3 = new ol.format.GeoJSON();
var features_14milerings_3 = format_14milerings_3.readFeatures(json_14milerings_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_14milerings_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_14milerings_3.addFeatures(features_14milerings_3);
var lyr_14milerings_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_14milerings_3, 
                style: style_14milerings_3,
                popuplayertitle: '1/4 mile rings',
                interactive: true,
                title: '<img src="styles/legend/14milerings_3.png" /> 1/4 mile rings'
            });
var format_Buildingpermits_4 = new ol.format.GeoJSON();
var features_Buildingpermits_4 = format_Buildingpermits_4.readFeatures(json_Buildingpermits_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildingpermits_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildingpermits_4.addFeatures(features_Buildingpermits_4);
var lyr_Buildingpermits_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildingpermits_4, 
                style: style_Buildingpermits_4,
                popuplayertitle: 'Building permits',
                interactive: true,
                title: '<img src="styles/legend/Buildingpermits_4.png" /> Building permits'
            });

lyr_Satellite_0.setVisible(true);lyr_Road_1.setVisible(true);lyr_LACCcampuses_2.setVisible(true);lyr_14milerings_3.setVisible(true);lyr_Buildingpermits_4.setVisible(true);
var layersList = [lyr_Satellite_0,lyr_Road_1,lyr_LACCcampuses_2,lyr_14milerings_3,lyr_Buildingpermits_4];
lyr_LACCcampuses_2.set('fieldAliases', {'fid': 'fid', 'College': 'College', 'lat': 'lat', 'long': 'long', });
lyr_14milerings_3.set('fieldAliases', {'fid': 'fid', 'College': 'College', 'lat': 'lat', 'long': 'long', 'layer': 'layer', 'path': 'path', });
lyr_Buildingpermits_4.set('fieldAliases', {'fid': 'fid', 'PERMIT_NBR': 'PERMIT_NBR', 'PRIMARY_ADDRESS': 'PRIMARY_ADDRESS', 'ZIP_CODE': 'ZIP_CODE', 'CD': 'CD', 'PIN_NBR': 'PIN_NBR', 'APN': 'APN', 'ZONE': 'ZONE', 'APC': 'APC', 'CPA': 'CPA', 'CNC': 'CNC', 'HL': 'HL', 'CT': 'CT', 'PERMIT_GROUP': 'PERMIT_GROUP', 'PERMIT_TYPE': 'PERMIT_TYPE', 'PERMIT_SUB_TYPE': 'PERMIT_SUB_TYPE', 'USE_CODE': 'USE_CODE', 'USE_DESC': 'USE_DESC', 'SUBMITTED_DATE': 'SUBMITTED_DATE', 'ISSUE_DATE': 'ISSUE_DATE', 'COFO_DATE': 'COFO_DATE', 'DU_CHANGED': 'DU_CHANGED', 'ADU_CHANGED': 'ADU_CHANGED', 'JUNIOR_ADU': 'JUNIOR_ADU', 'SQUARE_FOOTAGE': 'SQUARE_FOOTAGE', 'STATUS_DESC': 'STATUS_DESC', 'STATUS_DATE': 'STATUS_DATE', 'VALUATION': 'VALUATION', 'CONSTRUCTION': 'CONSTRUCTION', 'HEIGHT': 'HEIGHT', 'TYPE_LAT_LON': 'TYPE_LAT_LON', 'WORK_DESC': 'WORK_DESC', 'EV': 'EV', 'Solar': 'Solar', 'Business Unit': 'Business Unit', 'REFRESH_TIME': 'REFRESH_TIME', });
lyr_LACCcampuses_2.set('fieldImages', {'fid': 'TextEdit', 'College': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', });
lyr_14milerings_3.set('fieldImages', {'fid': 'TextEdit', 'College': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Buildingpermits_4.set('fieldImages', {'fid': 'TextEdit', 'PERMIT_NBR': 'TextEdit', 'PRIMARY_ADDRESS': 'TextEdit', 'ZIP_CODE': 'Range', 'CD': 'Range', 'PIN_NBR': 'TextEdit', 'APN': 'TextEdit', 'ZONE': 'TextEdit', 'APC': 'TextEdit', 'CPA': 'TextEdit', 'CNC': 'TextEdit', 'HL': 'TextEdit', 'CT': 'TextEdit', 'PERMIT_GROUP': 'TextEdit', 'PERMIT_TYPE': 'TextEdit', 'PERMIT_SUB_TYPE': 'TextEdit', 'USE_CODE': 'Range', 'USE_DESC': 'TextEdit', 'SUBMITTED_DATE': 'TextEdit', 'ISSUE_DATE': 'TextEdit', 'COFO_DATE': 'TextEdit', 'DU_CHANGED': 'Range', 'ADU_CHANGED': 'Range', 'JUNIOR_ADU': 'Range', 'SQUARE_FOOTAGE': 'TextEdit', 'STATUS_DESC': 'TextEdit', 'STATUS_DATE': 'TextEdit', 'VALUATION': 'TextEdit', 'CONSTRUCTION': 'TextEdit', 'HEIGHT': 'TextEdit', 'TYPE_LAT_LON': 'TextEdit', 'WORK_DESC': 'TextEdit', 'EV': 'TextEdit', 'Solar': 'TextEdit', 'Business Unit': 'TextEdit', 'REFRESH_TIME': 'TextEdit', });
lyr_LACCcampuses_2.set('fieldLabels', {'fid': 'hidden field', 'College': 'inline label - always visible', 'lat': 'hidden field', 'long': 'hidden field', });
lyr_14milerings_3.set('fieldLabels', {'fid': 'inline label - always visible', 'College': 'inline label - always visible', 'lat': 'inline label - always visible', 'long': 'inline label - always visible', 'layer': 'inline label - always visible', 'path': 'inline label - always visible', });
lyr_Buildingpermits_4.set('fieldLabels', {'fid': 'hidden field', 'PERMIT_NBR': 'inline label - always visible', 'PRIMARY_ADDRESS': 'inline label - always visible', 'ZIP_CODE': 'inline label - always visible', 'CD': 'inline label - always visible', 'PIN_NBR': 'inline label - always visible', 'APN': 'inline label - always visible', 'ZONE': 'inline label - always visible', 'APC': 'inline label - always visible', 'CPA': 'inline label - always visible', 'CNC': 'inline label - always visible', 'HL': 'inline label - always visible', 'CT': 'inline label - always visible', 'PERMIT_GROUP': 'inline label - always visible', 'PERMIT_TYPE': 'inline label - always visible', 'PERMIT_SUB_TYPE': 'inline label - always visible', 'USE_CODE': 'inline label - always visible', 'USE_DESC': 'inline label - always visible', 'SUBMITTED_DATE': 'inline label - always visible', 'ISSUE_DATE': 'inline label - always visible', 'COFO_DATE': 'inline label - always visible', 'DU_CHANGED': 'inline label - always visible', 'ADU_CHANGED': 'inline label - always visible', 'JUNIOR_ADU': 'inline label - always visible', 'SQUARE_FOOTAGE': 'inline label - always visible', 'STATUS_DESC': 'inline label - always visible', 'STATUS_DATE': 'inline label - always visible', 'VALUATION': 'inline label - always visible', 'CONSTRUCTION': 'inline label - always visible', 'HEIGHT': 'inline label - always visible', 'TYPE_LAT_LON': 'inline label - always visible', 'WORK_DESC': 'inline label - always visible', 'EV': 'inline label - always visible', 'Solar': 'inline label - always visible', 'Business Unit': 'inline label - always visible', 'REFRESH_TIME': 'inline label - always visible', });
lyr_Buildingpermits_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});