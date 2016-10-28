(function(){var k=false;var m=this;var d=function(v){if(v instanceof d){return v}if(!(this instanceof d)){return new d(v)}this.EXIFwrapped=v};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=d}exports.EXIF=d}else{m.EXIF=d}var r=d.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"};var u=d.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"};var j=d.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"};var h=d.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};
function o(v,x,w){if(v.addEventListener){v.addEventListener(x,w,false)}else{if(v.attachEvent){v.attachEvent("on"+x,w)}}}function g(v){return !!(v.exifdata)}function c(y,B){B=B||y.match(/^data\:([^\;]+)\;base64,/mi)[1]||"";y=y.replace(/^data\:([^\;]+)\;base64,/gmi,"");var A=atob(y);var v=A.length;var x=new ArrayBuffer(v);var w=new Uint8Array(x);for(var z=0;z<v;z++){w[z]=A.charCodeAt(z)}return x}function s(w,x){var v=new XMLHttpRequest();v.open("GET",w,true);v.responseType="blob";v.onload=function(y){if(this.status==200||this.status===0){x(this.response)}};v.send()}function b(w,A){function y(D){var C=f(D);var B=e(D);w.exifdata=C||{};w.iptcdata=B||{};if(A){A.call(w)}}if(w.src){if(/^data\:/i.test(w.src)){var z=c(w.src);y(z)}else{if(/^blob\:/i.test(w.src)){var v=new FileReader();v.onload=function(B){y(B.target.result)};s(w.src,function(B){v.readAsArrayBuffer(B)})}else{var x=new XMLHttpRequest();x.onload=function(){if(this.status==200||this.status===0){y(x.response)}else{throw"Could not load image"}x=null};x.open("GET",w.src,true);x.responseType="arraybuffer";x.send(null)}}}else{if(window.FileReader&&(w instanceof window.Blob||w instanceof window.File)){var v=new FileReader();v.onload=function(B){if(k){console.log("Got file of length "+B.target.result.byteLength)}y(B.target.result)};v.readAsArrayBuffer(w)}}}function f(w){var z=new DataView(w);if(k){console.log("Got file of length "+w.byteLength)}if((z.getUint8(0)!=255)||(z.getUint8(1)!=216)){if(k){console.log("Not a valid JPEG")}return false}var y=2,x=w.byteLength,v;while(y<x){if(z.getUint8(y)!=255){if(k){console.log("Not a valid marker at offset "+y+", found: "+z.getUint8(y))}return false}v=z.getUint8(y+1);if(k){console.log(v)}if(v==225){if(k){console.log("Found 0xFFE1 marker")}return q(z,y+4,z.getUint16(y+2)-2)}else{y+=2+z.getUint16(y+2)}}}function e(z){var C=new DataView(z);if(k){console.log("Got file of length "+z.byteLength)}if((C.getUint8(0)!=255)||(C.getUint8(1)!=216)){if(k){console.log("Not a valid JPEG")}return false}var B=2,A=z.byteLength;var w=function(E,D){return(E.getUint8(D)===56&&E.getUint8(D+1)===66&&E.getUint8(D+2)===73&&E.getUint8(D+3)===77&&E.getUint8(D+4)===4&&E.getUint8(D+5)===4)};while(B<A){if(w(C,B)){var y=C.getUint8(B+7);if(y%2!==0){y+=1}if(y===0){y=4}var v=B+8+y;var x=C.getUint16(B+6+y);return t(z,v,x);break}B++}}var a={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};function t(z,C,B){var D=new DataView(z);var A={};var w,F,v,E,x;var y=C;while(y<C+B){if(D.getUint8(y)===28&&D.getUint8(y+1)===2){E=D.getUint8(y+2);if(E in a){v=D.getInt16(y+3);x=v+5;F=a[E];w=l(D,y+5,v);if(A.hasOwnProperty(F)){if(A[F] instanceof Array){A[F].push(w)}else{A[F]=[A[F],w]}}else{A[F]=w}}}y++}return A}function p(v,B,D,A,x){var y=v.getUint16(D,!x),E={},z,C,w;for(w=0;w<y;w++){z=D+w*12+2;C=A[v.getUint16(z,!x)];if(!C&&k){console.log("Unknown tag: "+v.getUint16(z,!x))}E[C]=i(v,z,B,D,x)}return E}function i(A,E,H,I,C){var D=A.getUint16(E+2,!C),G=A.getUint32(E+4,!C),w=A.getUint32(E+8,!C)+H,B,F,z,y,v,x;switch(D){case 1:case 7:if(G==1){return A.getUint8(E+8,!C)}else{B=G>4?w:(E+8);F=[];for(y=0;y<G;y++){F[y]=A.getUint8(B+y)}return F}case 2:B=G>4?w:(E+8);return l(A,B,G-1);case 3:if(G==1){return A.getUint16(E+8,!C)}else{B=G>2?w:(E+8);F=[];for(y=0;y<G;y++){F[y]=A.getUint16(B+2*y,!C)}return F}case 4:if(G==1){return A.getUint32(E+8,!C)}else{F=[];for(y=0;y<G;y++){F[y]=A.getUint32(w+4*y,!C)}return F}case 5:if(G==1){v=A.getUint32(w,!C);x=A.getUint32(w+4,!C);z=new Number(v/x);z.numerator=v;z.denominator=x;return z}else{F=[];for(y=0;y<G;y++){v=A.getUint32(w+8*y,!C);x=A.getUint32(w+4+8*y,!C);F[y]=new Number(v/x);F[y].numerator=v;F[y].denominator=x}return F}case 9:if(G==1){return A.getInt32(E+8,!C)}else{F=[];for(y=0;y<G;y++){F[y]=A.getInt32(w+4*y,!C)}return F}case 10:if(G==1){return A.getInt32(w,!C)/A.getInt32(w+4,!C)}else{F=[];for(y=0;y<G;y++){F[y]=A.getInt32(w+8*y,!C)/A.getInt32(w+4+8*y,!C)}return F}}}function l(w,y,x){var v="";for(n=y;n<y+x;n++){v+=String.fromCharCode(w.getUint8(n))}return v}function q(z,w){if(l(z,w,4)!="Exif"){if(k){console.log("Not valid EXIF data! "+l(z,w,4))}return false}var A,C,D,y,x,B=w+6;if(z.getUint16(B)==18761){A=false}else{if(z.getUint16(B)==19789){A=true}else{if(k){console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)")}return false}}if(z.getUint16(B+2,!A)!=42){if(k){console.log("Not valid TIFF data! (no 0x002A)")}return false}var v=z.getUint32(B+4,!A);if(v<8){if(k){console.log("Not valid TIFF data! (First offset less than 8)",z.getUint32(B+4,!A))}return false}C=p(z,B,B+v,u,A);if(C.ExifIFDPointer){y=p(z,B,B+C.ExifIFDPointer,r,A);for(D in y){switch(D){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":y[D]=h[D][y[D]];break;case"ExifVersion":case"FlashpixVersion":y[D]=String.fromCharCode(y[D][0],y[D][1],y[D][2],y[D][3]);
break;case"ComponentsConfiguration":y[D]=h.Components[y[D][0]]+h.Components[y[D][1]]+h.Components[y[D][2]]+h.Components[y[D][3]];break}C[D]=y[D]}}if(C.GPSInfoIFDPointer){x=p(z,B,B+C.GPSInfoIFDPointer,j,A);for(D in x){switch(D){case"GPSVersionID":x[D]=x[D][0]+"."+x[D][1]+"."+x[D][2]+"."+x[D][3];break}C[D]=x[D]}}return C}d.getData=function(v,w){if((v instanceof Image||v instanceof HTMLImageElement)&&!v.complete){return false}if(!g(v)){b(v,w)}else{if(w){w.call(v)}}return true};d.getTag=function(w,v){if(!g(w)){return}return w.exifdata[v]};d.getAllTags=function(w){if(!g(w)){return{}}var v,y=w.exifdata,x={};for(v in y){if(y.hasOwnProperty(v)){x[v]=y[v]}}return x};d.pretty=function(w){if(!g(w)){return""}var v,y=w.exifdata,x="";for(v in y){if(y.hasOwnProperty(v)){if(typeof y[v]=="object"){if(y[v] instanceof Number){x+=v+" : "+y[v]+" ["+y[v].numerator+"/"+y[v].denominator+"]\r\n"}else{x+=v+" : ["+y[v].length+" values]\r\n"}}else{x+=v+" : "+y[v]+"\r\n"}}}return x};d.readFromBinaryFile=function(v){return f(v)};if(typeof define==="function"&&define.amd){define("exif-js",[],function(){return d})}}.call(this));