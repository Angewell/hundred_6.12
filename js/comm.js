$(function(){$(".lazy_tip,.lazy_cover").hide();var b=[{width:100,height:50,padding:10,stepsPerFrame:2,trailLength:1,pointDistance:0.03,strokeColor:"#FF7B24",step:"fader",multiplier:2,setup:function(){this._.lineWidth=5},path:[["arc",10,10,10,-270,-90],["bezier",10,0,40,20,20,0,30,20],["arc",40,10,10,90,-90],["bezier",40,0,10,20,30,0,20,20]]},{width:30,height:30,stepsPerFrame:2,trailLength:0.3,pointDistance:0.1,padding:10,fillColor:"#D4FF00",strokeColor:"#FFF",setup:function(){this._.lineWidth=20},path:[["line",0,0,30,0],["line",30,0,30,30],["line",30,30,0,30],["line",0,30,0,0]]},{width:100,height:100,stepsPerFrame:1,trailLength:1,pointDistance:0.025,strokeColor:"#05E2FF",fps:20,setup:function(){this._.lineWidth=2},step:function(d,i){var a=this.padding+50,k=this.padding+50,h=this._,j=(Math.PI/180)*(d.progress*360);this._.globalAlpha=Math.max(0.5,this.alpha);h.beginPath();h.moveTo(d.x,d.y);h.lineTo((Math.cos(j)*35)+a,(Math.sin(j)*35)+k);h.closePath();h.stroke();h.beginPath();h.moveTo((Math.cos(-j)*32)+a,(Math.sin(-j)*32)+k);h.lineTo((Math.cos(-j)*27)+a,(Math.sin(-j)*27)+k);h.closePath();h.stroke()},path:[["arc",50,50,40,0,360]]},{width:100,height:50,stepsPerFrame:1,trailLength:1,pointDistance:0.1,fps:15,padding:10,fillColor:"#FF2E82",setup:function(){this._.lineWidth=20},path:[["line",0,20,100,20],["line",100,20,0,20]]},{width:100,height:100,stepsPerFrame:7,trailLength:0.7,pointDistance:0.01,fps:30,setup:function(){this._.lineWidth=10},path:[["line",20,70,50,20],["line",50,20,80,70],["line",80,70,20,70]]},{width:100,height:100,stepsPerFrame:4,trailLength:1,pointDistance:0.01,fps:25,fillColor:"#FF7B24",setup:function(){this._.lineWidth=10},step:function(a,k,l){var h=a.progress,m=360*h,n=Math.PI/180*m,d=Math.PI/180*(m-180),j=k*5;this._.fillRect(Math.cos(n)*25+(50-j/2),Math.sin(n)*15+(50-j/2),j,j);this._.fillStyle="#63D3FF";this._.fillRect(Math.cos(d)*15+(50-j/2),Math.sin(d)*25+(50-j/2),j,j);if(a.progress==1){this._.globalAlpha=l<0.5?1-l:l;this._.fillStyle="#EEE";this._.beginPath();this._.arc(50,50,5,0,360,0);this._.closePath();this._.fill()}},path:[["line",40,10,60,90]]},{width:100,height:100,stepsPerFrame:3,trailLength:1,pointDistance:0.01,fps:30,step:"fader",strokeColor:"#D4FF00",setup:function(){this._.lineWidth=6},path:[["arc",50,50,20,360,0]]},{width:100,height:100,stepsPerFrame:1,trailLength:1,pointDistance:0.02,fps:30,fillColor:"#05E2FF",step:function(a,d){this._.beginPath();this._.moveTo(a.x,a.y);this._.arc(a.x,a.y,d*7,0,Math.PI*2,false);this._.closePath();this._.fill()},path:[["arc",50,50,30,0,360]]},{width:100,height:100,stepsPerFrame:1,trailLength:1,pointDistance:0.05,strokeColor:"#FF2E82",fps:20,setup:function(){this._.lineWidth=4},step:function(d,i){var a=this.padding+50,l=this.padding+50,h=this._,k=(Math.PI/180)*(d.progress*360),j=i===1?10:25;h.beginPath();h.moveTo(d.x,d.y);h.lineTo((Math.cos(k)*j)+a,(Math.sin(k)*j)+l);h.closePath();h.stroke()},path:[["arc",50,50,40,0,360]]}];var g,e,c=document.getElementById("lazy_tip");var f=2;g=document.createElement("div");g.className="l";e=new Sonic(b[f]);g.appendChild(e.canvas);e.canvas.style.marginTop="0px";c.appendChild(g);e.play()});