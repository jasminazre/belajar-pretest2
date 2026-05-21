var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_Batas_Administrasi_1 = new ol.format.GeoJSON();
var features_Batas_Administrasi_1 = format_Batas_Administrasi_1.readFeatures(json_Batas_Administrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_1.addFeatures(features_Batas_Administrasi_1);
var lyr_Batas_Administrasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Administrasi_1, 
                style: style_Batas_Administrasi_1,
                popuplayertitle: 'Batas_Administrasi',
                interactive: true,
                title: '<img src="styles/legend/Batas_Administrasi_1.png" /> Batas_Administrasi'
            });
var format_perumahanpenggunaan_lahan_2 = new ol.format.GeoJSON();
var features_perumahanpenggunaan_lahan_2 = format_perumahanpenggunaan_lahan_2.readFeatures(json_perumahanpenggunaan_lahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_perumahanpenggunaan_lahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_perumahanpenggunaan_lahan_2.addFeatures(features_perumahanpenggunaan_lahan_2);
var lyr_perumahanpenggunaan_lahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_perumahanpenggunaan_lahan_2, 
                style: style_perumahanpenggunaan_lahan_2,
                popuplayertitle: 'perumahan — penggunaan_lahan',
                interactive: true,
                title: '<img src="styles/legend/perumahanpenggunaan_lahan_2.png" /> perumahan — penggunaan_lahan'
            });
var format_zonakomersilpenggunaan_lahan_3 = new ol.format.GeoJSON();
var features_zonakomersilpenggunaan_lahan_3 = format_zonakomersilpenggunaan_lahan_3.readFeatures(json_zonakomersilpenggunaan_lahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonakomersilpenggunaan_lahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonakomersilpenggunaan_lahan_3.addFeatures(features_zonakomersilpenggunaan_lahan_3);
var lyr_zonakomersilpenggunaan_lahan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zonakomersilpenggunaan_lahan_3, 
                style: style_zonakomersilpenggunaan_lahan_3,
                popuplayertitle: 'zona komersil — penggunaan_lahan',
                interactive: true,
                title: '<img src="styles/legend/zonakomersilpenggunaan_lahan_3.png" /> zona komersil — penggunaan_lahan'
            });
var format_areapublikpenggunaan_lahan_4 = new ol.format.GeoJSON();
var features_areapublikpenggunaan_lahan_4 = format_areapublikpenggunaan_lahan_4.readFeatures(json_areapublikpenggunaan_lahan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areapublikpenggunaan_lahan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areapublikpenggunaan_lahan_4.addFeatures(features_areapublikpenggunaan_lahan_4);
var lyr_areapublikpenggunaan_lahan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areapublikpenggunaan_lahan_4, 
                style: style_areapublikpenggunaan_lahan_4,
                popuplayertitle: 'area publik — penggunaan_lahan',
                interactive: true,
                title: '<img src="styles/legend/areapublikpenggunaan_lahan_4.png" /> area publik — penggunaan_lahan'
            });
var format_Exploded_5 = new ol.format.GeoJSON();
var features_Exploded_5 = format_Exploded_5.readFeatures(json_Exploded_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Exploded_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Exploded_5.addFeatures(features_Exploded_5);
var lyr_Exploded_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Exploded_5, 
                style: style_Exploded_5,
                popuplayertitle: 'Exploded',
                interactive: true,
                title: '<img src="styles/legend/Exploded_5.png" /> Exploded'
            });
var format_Trans_Fixedgeometries_6 = new ol.format.GeoJSON();
var features_Trans_Fixedgeometries_6 = format_Trans_Fixedgeometries_6.readFeatures(json_Trans_Fixedgeometries_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trans_Fixedgeometries_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trans_Fixedgeometries_6.addFeatures(features_Trans_Fixedgeometries_6);
var lyr_Trans_Fixedgeometries_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trans_Fixedgeometries_6, 
                style: style_Trans_Fixedgeometries_6,
                popuplayertitle: 'Trans_Fixed geometries',
                interactive: true,
                title: '<img src="styles/legend/Trans_Fixedgeometries_6.png" /> Trans_Fixed geometries'
            });
var format_transsnap_7 = new ol.format.GeoJSON();
var features_transsnap_7 = format_transsnap_7.readFeatures(json_transsnap_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_transsnap_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_transsnap_7.addFeatures(features_transsnap_7);
var lyr_transsnap_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_transsnap_7, 
                style: style_transsnap_7,
                popuplayertitle: 'trans snap',
                interactive: true,
                title: '<img src="styles/legend/transsnap_7.png" /> trans snap'
            });
var format_Boundinggeometry_800_8 = new ol.format.GeoJSON();
var features_Boundinggeometry_800_8 = format_Boundinggeometry_800_8.readFeatures(json_Boundinggeometry_800_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundinggeometry_800_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundinggeometry_800_8.addFeatures(features_Boundinggeometry_800_8);
var lyr_Boundinggeometry_800_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundinggeometry_800_8, 
                style: style_Boundinggeometry_800_8,
                popuplayertitle: 'Bounding geometry_800',
                interactive: true,
                title: '<img src="styles/legend/Boundinggeometry_800_8.png" /> Bounding geometry_800'
            });
var format_Boundinggeometry_400_9 = new ol.format.GeoJSON();
var features_Boundinggeometry_400_9 = format_Boundinggeometry_400_9.readFeatures(json_Boundinggeometry_400_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundinggeometry_400_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundinggeometry_400_9.addFeatures(features_Boundinggeometry_400_9);
var lyr_Boundinggeometry_400_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundinggeometry_400_9, 
                style: style_Boundinggeometry_400_9,
                popuplayertitle: 'Bounding geometry_400',
                interactive: true,
                title: '<img src="styles/legend/Boundinggeometry_400_9.png" /> Bounding geometry_400'
            });
var format_halteyeahhalte_reprojected_10 = new ol.format.GeoJSON();
var features_halteyeahhalte_reprojected_10 = format_halteyeahhalte_reprojected_10.readFeatures(json_halteyeahhalte_reprojected_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_halteyeahhalte_reprojected_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_halteyeahhalte_reprojected_10.addFeatures(features_halteyeahhalte_reprojected_10);
var lyr_halteyeahhalte_reprojected_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_halteyeahhalte_reprojected_10, 
                style: style_halteyeahhalte_reprojected_10,
                popuplayertitle: 'halte yeah — halte_reprojected',
                interactive: true,
                title: '<img src="styles/legend/halteyeahhalte_reprojected_10.png" /> halte yeah — halte_reprojected'
            });

lyr_Positronretina_0.setVisible(true);lyr_Batas_Administrasi_1.setVisible(true);lyr_perumahanpenggunaan_lahan_2.setVisible(true);lyr_zonakomersilpenggunaan_lahan_3.setVisible(true);lyr_areapublikpenggunaan_lahan_4.setVisible(true);lyr_Exploded_5.setVisible(true);lyr_Trans_Fixedgeometries_6.setVisible(true);lyr_transsnap_7.setVisible(true);lyr_Boundinggeometry_800_8.setVisible(true);lyr_Boundinggeometry_400_9.setVisible(true);lyr_halteyeahhalte_reprojected_10.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_Batas_Administrasi_1,lyr_perumahanpenggunaan_lahan_2,lyr_zonakomersilpenggunaan_lahan_3,lyr_areapublikpenggunaan_lahan_4,lyr_Exploded_5,lyr_Trans_Fixedgeometries_6,lyr_transsnap_7,lyr_Boundinggeometry_800_8,lyr_Boundinggeometry_400_9,lyr_halteyeahhalte_reprojected_10];
lyr_Batas_Administrasi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SUMBER': 'SUMBER', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_perumahanpenggunaan_lahan_2.set('fieldAliases', {'fid': 'fid', 'NAMZON': 'NAMZON', });
lyr_zonakomersilpenggunaan_lahan_3.set('fieldAliases', {'fid': 'fid', 'NAMZON': 'NAMZON', });
lyr_areapublikpenggunaan_lahan_4.set('fieldAliases', {'fid': 'fid', 'NAMZON': 'NAMZON', });
lyr_Exploded_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Trans_Fixedgeometries_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'ID': 'ID', });
lyr_transsnap_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'ID': 'ID', 'id_1': 'id_1', });
lyr_Boundinggeometry_800_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'area': 'area', 'perimeter': 'perimeter', });
lyr_Boundinggeometry_400_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'area': 'area', 'perimeter': 'perimeter', });
lyr_halteyeahhalte_reprojected_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Foto': 'Foto', });
lyr_Batas_Administrasi_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SUMBER': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_perumahanpenggunaan_lahan_2.set('fieldImages', {'fid': '', 'NAMZON': '', });
lyr_zonakomersilpenggunaan_lahan_3.set('fieldImages', {'fid': 'TextEdit', 'NAMZON': 'TextEdit', });
lyr_areapublikpenggunaan_lahan_4.set('fieldImages', {'fid': 'TextEdit', 'NAMZON': 'TextEdit', });
lyr_Exploded_5.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'ORDE01': '', 'ORDE02': '', 'ORDE03': '', 'ORDE04': '', 'JNSRSR': '', 'STSJRN': '', 'WADMPR': '', 'WADMKK': '', 'REMARK': '', 'SBDATA': '', 'SHAPE_Leng': '', 'Shape_Le_1': '', });
lyr_Trans_Fixedgeometries_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'ID': 'Range', });
lyr_transsnap_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE01': 'TextEdit', 'ORDE02': 'TextEdit', 'ORDE03': 'TextEdit', 'ORDE04': 'TextEdit', 'JNSRSR': 'TextEdit', 'STSJRN': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'REMARK': 'TextEdit', 'SBDATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'ID': 'TextEdit', 'id_1': 'TextEdit', });
lyr_Boundinggeometry_800_8.set('fieldImages', {'id': 'Range', 'Name': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_Boundinggeometry_400_9.set('fieldImages', {'id': 'Range', 'Name': 'TextEdit', 'area': 'TextEdit', 'perimeter': 'TextEdit', });
lyr_halteyeahhalte_reprojected_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Batas_Administrasi_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SUMBER': 'no label', 'LUASHA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_perumahanpenggunaan_lahan_2.set('fieldLabels', {'fid': 'no label', 'NAMZON': 'no label', });
lyr_zonakomersilpenggunaan_lahan_3.set('fieldLabels', {'fid': 'no label', 'NAMZON': 'no label', });
lyr_areapublikpenggunaan_lahan_4.set('fieldLabels', {'fid': 'no label', 'NAMZON': 'no label', });
lyr_Exploded_5.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'ORDE01': 'no label', 'ORDE02': 'no label', 'ORDE03': 'no label', 'ORDE04': 'no label', 'JNSRSR': 'no label', 'STSJRN': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'REMARK': 'no label', 'SBDATA': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_Trans_Fixedgeometries_6.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'ORDE01': 'no label', 'ORDE02': 'no label', 'ORDE03': 'no label', 'ORDE04': 'no label', 'JNSRSR': 'no label', 'STSJRN': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'REMARK': 'no label', 'SBDATA': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'ID': 'no label', });
lyr_transsnap_7.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'ORDE01': 'no label', 'ORDE02': 'no label', 'ORDE03': 'no label', 'ORDE04': 'no label', 'JNSRSR': 'no label', 'STSJRN': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'REMARK': 'no label', 'SBDATA': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'ID': 'no label', 'id_1': 'no label', });
lyr_Boundinggeometry_800_8.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'area': 'no label', 'perimeter': 'no label', });
lyr_Boundinggeometry_400_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'area': 'no label', 'perimeter': 'no label', });
lyr_halteyeahhalte_reprojected_10.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'Foto': 'no label', });
lyr_halteyeahhalte_reprojected_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});