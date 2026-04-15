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
var format_ParksOpenSpaces_3 = new ol.format.GeoJSON();
var features_ParksOpenSpaces_3 = format_ParksOpenSpaces_3.readFeatures(json_ParksOpenSpaces_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParksOpenSpaces_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParksOpenSpaces_3.addFeatures(features_ParksOpenSpaces_3);
var lyr_ParksOpenSpaces_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParksOpenSpaces_3, 
                style: style_ParksOpenSpaces_3,
                popuplayertitle: 'Parks & Open Spaces',
                interactive: true,
                title: '<img src="styles/legend/ParksOpenSpaces_3.png" /> Parks & Open Spaces'
            });
var format_BikewaysCountyData_4 = new ol.format.GeoJSON();
var features_BikewaysCountyData_4 = format_BikewaysCountyData_4.readFeatures(json_BikewaysCountyData_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BikewaysCountyData_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BikewaysCountyData_4.addFeatures(features_BikewaysCountyData_4);
var lyr_BikewaysCountyData_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BikewaysCountyData_4, 
                style: style_BikewaysCountyData_4,
                popuplayertitle: 'Bikeways (County Data)',
                interactive: true,
                title: '<img src="styles/legend/BikewaysCountyData_4.png" /> Bikeways (County Data)'
            });
var format_Bikeways_CityData_5 = new ol.format.GeoJSON();
var features_Bikeways_CityData_5 = format_Bikeways_CityData_5.readFeatures(json_Bikeways_CityData_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bikeways_CityData_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bikeways_CityData_5.addFeatures(features_Bikeways_CityData_5);
var lyr_Bikeways_CityData_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bikeways_CityData_5, 
                style: style_Bikeways_CityData_5,
                popuplayertitle: 'Bikeways_(City Data)',
                interactive: true,
                title: '<img src="styles/legend/Bikeways_CityData_5.png" /> Bikeways_(City Data)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Light_1.setVisible(true);lyr_Dark_2.setVisible(true);lyr_ParksOpenSpaces_3.setVisible(true);lyr_BikewaysCountyData_4.setVisible(true);lyr_Bikeways_CityData_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Light_1,lyr_Dark_2,lyr_ParksOpenSpaces_3,lyr_BikewaysCountyData_4,lyr_Bikeways_CityData_5];
lyr_ParksOpenSpaces_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UNIT_ID': 'UNIT_ID', 'PARK_NAME': 'PARK_NAME', 'PARK_LBL': 'PARK_LBL', 'ACCESS_TYP': 'ACCESS_TYP', 'RPT_ACRES': 'RPT_ACRES', 'GIS_ACRES': 'GIS_ACRES', 'AGNCY_NAME': 'AGNCY_NAME', 'AGNCY_LEV': 'AGNCY_LEV', 'AGNCY_TYP': 'AGNCY_TYP', 'AGNCY_WEB': 'AGNCY_WEB', 'MNG_AGENCY': 'MNG_AGENCY', 'COGP_TYP': 'COGP_TYP', 'NDS_AN_TYP': 'NDS_AN_TYP', 'NEEDS_ANLZ': 'NEEDS_ANLZ', 'TKIT_SUM': 'TKIT_SUM', 'AMEN_RPT': 'AMEN_RPT', 'PRKINF_CND': 'PRKINF_CND', 'AM_OPNSP': 'AM_OPNSP', 'AM_TRLS': 'AM_TRLS', 'TRLS_MI': 'TRLS_MI', 'TENIS': 'TENIS', 'BSKTB': 'BSKTB', 'BASEB': 'BASEB', 'SOCCR': 'SOCCR', 'MPFLD': 'MPFLD', 'FITZN': 'FITZN', 'SK8PK': 'SK8PK', 'PCNIC': 'PCNIC', 'PLGND': 'PLGND', 'POOLS': 'POOLS', 'SPPAD': 'SPPAD', 'DGPRK': 'DGPRK', 'GYM': 'GYM', 'COMCT': 'COMCT', 'SNRCT': 'SNRCT', 'RSTRM': 'RSTRM', 'TOTAL_GOOD': 'TOTAL_GOOD', 'TOTAL_FAIR': 'TOTAL_FAIR', 'TOTAL_POOR': 'TOTAL_POOR', 'TYPE': 'TYPE', 'LMS_ID': 'LMS_ID', 'CENTER_LAT': 'CENTER_LAT', 'CENTER_LON': 'CENTER_LON', 'ADDRESS': 'ADDRESS', 'CITY': 'CITY', 'ZIP': 'ZIP', 'HOURS': 'HOURS', 'PHONES': 'PHONES', 'IS_COUNTY': 'IS_COUNTY', });
lyr_BikewaysCountyData_4.set('fieldAliases', {'FID': 'FID', 'class': 'class', 'name': 'name', 'Caltrans_D': 'Caltrans_D', 'MPOs': 'MPOs', 'miles': 'miles', 'FID_bikewa': 'FID_bikewa', 'county': 'county', 'FID_SCAG': 'FID_SCAG', 'STATEFP10': 'STATEFP10', 'COUNTYFP10': 'COUNTYFP10', 'COUNTYNS10': 'COUNTYNS10', 'GEOID10': 'GEOID10', 'NAME10': 'NAME10', 'NAMELSAD10': 'NAMELSAD10', 'LSAD10': 'LSAD10', 'CLASSFP10': 'CLASSFP10', 'MTFCC10': 'MTFCC10', 'CSAFP10': 'CSAFP10', 'CBSAFP10': 'CBSAFP10', 'METDIVFP10': 'METDIVFP10', 'FUNCSTAT10': 'FUNCSTAT10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', 'INTPTLAT10': 'INTPTLAT10', 'INTPTLON10': 'INTPTLON10', 'x': 'x', 'y': 'y', 'ct_ver': 'ct_ver', 'Shape__Len': 'Shape__Len', 'DCR': 'DCR', 'DCR_date': 'DCR_date', 'Shape__L_1': 'Shape__L_1', 'Shape__Length': 'Shape__Length', });
lyr_Bikeways_CityData_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Install_Date': 'Install_Date', 'Network': 'Network', 'Bikeway': 'Bikeway', 'Region': 'Region', 'Street': 'Street', 'From_': 'From_', 'To_': 'To_', 'Datasource_DT': 'Datasource_DT', 'Bikeway_Type': 'Bikeway_Type', });
lyr_ParksOpenSpaces_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'UNIT_ID': 'Range', 'PARK_NAME': 'TextEdit', 'PARK_LBL': 'TextEdit', 'ACCESS_TYP': 'TextEdit', 'RPT_ACRES': 'TextEdit', 'GIS_ACRES': 'TextEdit', 'AGNCY_NAME': 'TextEdit', 'AGNCY_LEV': 'TextEdit', 'AGNCY_TYP': 'TextEdit', 'AGNCY_WEB': 'TextEdit', 'MNG_AGENCY': 'TextEdit', 'COGP_TYP': 'TextEdit', 'NDS_AN_TYP': 'TextEdit', 'NEEDS_ANLZ': 'TextEdit', 'TKIT_SUM': 'TextEdit', 'AMEN_RPT': 'TextEdit', 'PRKINF_CND': 'TextEdit', 'AM_OPNSP': 'TextEdit', 'AM_TRLS': 'TextEdit', 'TRLS_MI': 'TextEdit', 'TENIS': 'TextEdit', 'BSKTB': 'TextEdit', 'BASEB': 'TextEdit', 'SOCCR': 'TextEdit', 'MPFLD': 'TextEdit', 'FITZN': 'TextEdit', 'SK8PK': 'TextEdit', 'PCNIC': 'TextEdit', 'PLGND': 'TextEdit', 'POOLS': 'TextEdit', 'SPPAD': 'TextEdit', 'DGPRK': 'TextEdit', 'GYM': 'TextEdit', 'COMCT': 'TextEdit', 'SNRCT': 'TextEdit', 'RSTRM': 'TextEdit', 'TOTAL_GOOD': 'Range', 'TOTAL_FAIR': 'Range', 'TOTAL_POOR': 'Range', 'TYPE': 'TextEdit', 'LMS_ID': 'Range', 'CENTER_LAT': 'TextEdit', 'CENTER_LON': 'TextEdit', 'ADDRESS': 'TextEdit', 'CITY': 'TextEdit', 'ZIP': 'TextEdit', 'HOURS': 'TextEdit', 'PHONES': 'TextEdit', 'IS_COUNTY': 'TextEdit', });
lyr_BikewaysCountyData_4.set('fieldImages', {'FID': 'TextEdit', 'class': 'TextEdit', 'name': 'TextEdit', 'Caltrans_D': 'TextEdit', 'MPOs': 'TextEdit', 'miles': 'TextEdit', 'FID_bikewa': 'TextEdit', 'county': 'TextEdit', 'FID_SCAG': 'TextEdit', 'STATEFP10': 'TextEdit', 'COUNTYFP10': 'TextEdit', 'COUNTYNS10': 'TextEdit', 'GEOID10': 'TextEdit', 'NAME10': 'TextEdit', 'NAMELSAD10': 'TextEdit', 'LSAD10': 'TextEdit', 'CLASSFP10': 'TextEdit', 'MTFCC10': 'TextEdit', 'CSAFP10': 'TextEdit', 'CBSAFP10': 'TextEdit', 'METDIVFP10': 'TextEdit', 'FUNCSTAT10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', 'INTPTLAT10': 'TextEdit', 'INTPTLON10': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'ct_ver': 'TextEdit', 'Shape__Len': 'TextEdit', 'DCR': 'TextEdit', 'DCR_date': 'DateTime', 'Shape__L_1': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_Bikeways_CityData_5.set('fieldImages', {'OBJECTID': 'Range', 'Shape_Leng': 'TextEdit', 'Install_Date': 'DateTime', 'Network': 'TextEdit', 'Bikeway': 'TextEdit', 'Region': 'TextEdit', 'Street': 'TextEdit', 'From_': 'TextEdit', 'To_': 'TextEdit', 'Datasource_DT': 'DateTime', 'Bikeway_Type': 'TextEdit', });
lyr_ParksOpenSpaces_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'UNIT_ID': 'hidden field', 'PARK_NAME': 'header label - always visible', 'PARK_LBL': 'hidden field', 'ACCESS_TYP': 'hidden field', 'RPT_ACRES': 'hidden field', 'GIS_ACRES': 'hidden field', 'AGNCY_NAME': 'hidden field', 'AGNCY_LEV': 'hidden field', 'AGNCY_TYP': 'hidden field', 'AGNCY_WEB': 'hidden field', 'MNG_AGENCY': 'hidden field', 'COGP_TYP': 'hidden field', 'NDS_AN_TYP': 'hidden field', 'NEEDS_ANLZ': 'hidden field', 'TKIT_SUM': 'hidden field', 'AMEN_RPT': 'hidden field', 'PRKINF_CND': 'hidden field', 'AM_OPNSP': 'hidden field', 'AM_TRLS': 'hidden field', 'TRLS_MI': 'hidden field', 'TENIS': 'hidden field', 'BSKTB': 'hidden field', 'BASEB': 'hidden field', 'SOCCR': 'hidden field', 'MPFLD': 'hidden field', 'FITZN': 'hidden field', 'SK8PK': 'hidden field', 'PCNIC': 'hidden field', 'PLGND': 'hidden field', 'POOLS': 'hidden field', 'SPPAD': 'hidden field', 'DGPRK': 'hidden field', 'GYM': 'hidden field', 'COMCT': 'hidden field', 'SNRCT': 'hidden field', 'RSTRM': 'hidden field', 'TOTAL_GOOD': 'hidden field', 'TOTAL_FAIR': 'hidden field', 'TOTAL_POOR': 'hidden field', 'TYPE': 'header label - always visible', 'LMS_ID': 'hidden field', 'CENTER_LAT': 'hidden field', 'CENTER_LON': 'hidden field', 'ADDRESS': 'header label - always visible', 'CITY': 'header label - always visible', 'ZIP': 'header label - always visible', 'HOURS': 'hidden field', 'PHONES': 'hidden field', 'IS_COUNTY': 'hidden field', });
lyr_BikewaysCountyData_4.set('fieldLabels', {'FID': 'hidden field', 'class': 'header label - always visible', 'name': 'hidden field', 'Caltrans_D': 'hidden field', 'MPOs': 'hidden field', 'miles': 'hidden field', 'FID_bikewa': 'hidden field', 'county': 'hidden field', 'FID_SCAG': 'hidden field', 'STATEFP10': 'hidden field', 'COUNTYFP10': 'hidden field', 'COUNTYNS10': 'hidden field', 'GEOID10': 'hidden field', 'NAME10': 'hidden field', 'NAMELSAD10': 'hidden field', 'LSAD10': 'hidden field', 'CLASSFP10': 'hidden field', 'MTFCC10': 'hidden field', 'CSAFP10': 'hidden field', 'CBSAFP10': 'hidden field', 'METDIVFP10': 'hidden field', 'FUNCSTAT10': 'hidden field', 'ALAND10': 'hidden field', 'AWATER10': 'hidden field', 'INTPTLAT10': 'hidden field', 'INTPTLON10': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'ct_ver': 'hidden field', 'Shape__Len': 'hidden field', 'DCR': 'hidden field', 'DCR_date': 'hidden field', 'Shape__L_1': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_Bikeways_CityData_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Shape_Leng': 'hidden field', 'Install_Date': 'hidden field', 'Network': 'hidden field', 'Bikeway': 'hidden field', 'Region': 'hidden field', 'Street': 'hidden field', 'From_': 'hidden field', 'To_': 'hidden field', 'Datasource_DT': 'hidden field', 'Bikeway_Type': 'header label - always visible', });
lyr_Bikeways_CityData_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});