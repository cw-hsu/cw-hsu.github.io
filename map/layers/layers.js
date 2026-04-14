var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_lacc_latlong_1 = new ol.format.GeoJSON();
var features_lacc_latlong_1 = format_lacc_latlong_1.readFeatures(json_lacc_latlong_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lacc_latlong_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lacc_latlong_1.addFeatures(features_lacc_latlong_1);
var lyr_lacc_latlong_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lacc_latlong_1, 
                style: style_lacc_latlong_1,
                popuplayertitle: 'lacc_latlong',
                interactive: true,
                title: '<img src="styles/legend/lacc_latlong_1.png" /> lacc_latlong'
            });
var format_lacc_new_apartments_2 = new ol.format.GeoJSON();
var features_lacc_new_apartments_2 = format_lacc_new_apartments_2.readFeatures(json_lacc_new_apartments_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lacc_new_apartments_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lacc_new_apartments_2.addFeatures(features_lacc_new_apartments_2);
var lyr_lacc_new_apartments_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lacc_new_apartments_2, 
                style: style_lacc_new_apartments_2,
                popuplayertitle: 'lacc_new_apartments',
                interactive: true,
                title: '<img src="styles/legend/lacc_new_apartments_2.png" /> lacc_new_apartments'
            });

lyr_Positron_0.setVisible(true);lyr_lacc_latlong_1.setVisible(true);lyr_lacc_new_apartments_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_lacc_latlong_1,lyr_lacc_new_apartments_2];
lyr_lacc_latlong_1.set('fieldAliases', {'College': 'College', 'lat': 'lat', 'long': 'long', });
lyr_lacc_new_apartments_2.set('fieldAliases', {'fid': 'fid', 'PERMIT_NBR': 'PERMIT_NBR', 'PRIMARY_ADDRESS': 'PRIMARY_ADDRESS', 'ZIP_CODE': 'ZIP_CODE', 'CD': 'CD', 'PIN_NBR': 'PIN_NBR', 'APN': 'APN', 'ZONE': 'ZONE', 'APC': 'APC', 'CPA': 'CPA', 'CNC': 'CNC', 'HL': 'HL', 'CT': 'CT', 'PERMIT_GROUP': 'PERMIT_GROUP', 'PERMIT_TYPE': 'PERMIT_TYPE', 'PERMIT_SUB_TYPE': 'PERMIT_SUB_TYPE', 'USE_CODE': 'USE_CODE', 'USE_DESC': 'USE_DESC', 'SUBMITTED_DATE': 'SUBMITTED_DATE', 'ISSUE_DATE': 'ISSUE_DATE', 'COFO_DATE': 'COFO_DATE', 'DU_CHANGED': 'DU_CHANGED', 'ADU_CHANGED': 'ADU_CHANGED', 'JUNIOR_ADU': 'JUNIOR_ADU', 'SQUARE_FOOTAGE': 'SQUARE_FOOTAGE', 'STATUS_DESC': 'STATUS_DESC', 'STATUS_DATE': 'STATUS_DATE', 'VALUATION': 'VALUATION', 'CONSTRUCTION': 'CONSTRUCTION', 'HEIGHT': 'HEIGHT', 'TYPE_LAT_LON': 'TYPE_LAT_LON', 'WORK_DESC': 'WORK_DESC', 'EV': 'EV', 'Solar': 'Solar', 'Business Unit': 'Business Unit', 'REFRESH_TIME': 'REFRESH_TIME', });
lyr_lacc_latlong_1.set('fieldImages', {'College': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', });
lyr_lacc_new_apartments_2.set('fieldImages', {'fid': '', 'PERMIT_NBR': '', 'PRIMARY_ADDRESS': '', 'ZIP_CODE': '', 'CD': '', 'PIN_NBR': '', 'APN': '', 'ZONE': '', 'APC': '', 'CPA': '', 'CNC': '', 'HL': '', 'CT': '', 'PERMIT_GROUP': '', 'PERMIT_TYPE': '', 'PERMIT_SUB_TYPE': '', 'USE_CODE': '', 'USE_DESC': '', 'SUBMITTED_DATE': '', 'ISSUE_DATE': '', 'COFO_DATE': '', 'DU_CHANGED': '', 'ADU_CHANGED': '', 'JUNIOR_ADU': '', 'SQUARE_FOOTAGE': '', 'STATUS_DESC': '', 'STATUS_DATE': '', 'VALUATION': '', 'CONSTRUCTION': '', 'HEIGHT': '', 'TYPE_LAT_LON': '', 'WORK_DESC': '', 'EV': '', 'Solar': '', 'Business Unit': '', 'REFRESH_TIME': '', });
lyr_lacc_latlong_1.set('fieldLabels', {'College': 'inline label - visible with data', 'lat': 'inline label - visible with data', 'long': 'inline label - visible with data', });
lyr_lacc_new_apartments_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'PERMIT_NBR': 'inline label - visible with data', 'PRIMARY_ADDRESS': 'inline label - visible with data', 'ZIP_CODE': 'inline label - visible with data', 'CD': 'inline label - visible with data', 'PIN_NBR': 'inline label - visible with data', 'APN': 'inline label - visible with data', 'ZONE': 'inline label - visible with data', 'APC': 'inline label - visible with data', 'CPA': 'inline label - visible with data', 'CNC': 'inline label - visible with data', 'HL': 'inline label - visible with data', 'CT': 'inline label - visible with data', 'PERMIT_GROUP': 'inline label - visible with data', 'PERMIT_TYPE': 'inline label - visible with data', 'PERMIT_SUB_TYPE': 'inline label - visible with data', 'USE_CODE': 'inline label - visible with data', 'USE_DESC': 'inline label - visible with data', 'SUBMITTED_DATE': 'inline label - visible with data', 'ISSUE_DATE': 'inline label - visible with data', 'COFO_DATE': 'inline label - visible with data', 'DU_CHANGED': 'inline label - visible with data', 'ADU_CHANGED': 'inline label - visible with data', 'JUNIOR_ADU': 'inline label - visible with data', 'SQUARE_FOOTAGE': 'inline label - visible with data', 'STATUS_DESC': 'inline label - visible with data', 'STATUS_DATE': 'inline label - visible with data', 'VALUATION': 'inline label - visible with data', 'CONSTRUCTION': 'inline label - visible with data', 'HEIGHT': 'inline label - visible with data', 'TYPE_LAT_LON': 'inline label - visible with data', 'WORK_DESC': 'inline label - visible with data', 'EV': 'inline label - visible with data', 'Solar': 'inline label - visible with data', 'Business Unit': 'inline label - visible with data', 'REFRESH_TIME': 'inline label - visible with data', });
lyr_lacc_new_apartments_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});