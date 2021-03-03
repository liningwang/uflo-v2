!function(t){var r={};function e(a){if(r[a])return r[a].exports;var n=r[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,e),n.l=!0,n.exports}e.m=t,e.c=r,e.d=function(t,r,a){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:a})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=266)}({266:function(t,r,e){"use strict";window.ProcessDiagram=function(){},ProcessDiagram.prototype.show=function(t,r,e){this.containerId=t,r||alert("parameters can not be null.");var a=this;e||(e=""),this.contextPath=e;var n=e+"/diagram/loadDiagramData";$.ajax({url:n,data:r,type:"POST",success:function(t){a._buildDiagram(t)},error:function(t,r,e){alert("Error:"+r)}})},ProcessDiagram.prototype._buildDiagram=function(t){var r={};this.paper=new Raphael(document.getElementById(this.containerId),t.width,t.height);for(var e=t.nodeDiagrams,a=0;a<e.length;a++){var n=e[a],o=this._buildNode(n,t.showTime);r[n.name]=o}for(a=0;a<e.length;a++){var i=(n=e[a]).sequenceFlowDiagrams;if(i)for(var s=0;s<i.length;s++){var h=i[s],c=h.to,u=r[c];if(!u)throw new Error("Node "+c+" is not exist.");var l=r[n.name];if(!l)throw new Error("Node "+l+" is not exist.");this._buildConnection(l,u,h)}}},ProcessDiagram.prototype._buildConnection=function(t,r,e){var a=t.attr("x")+t.attr("width")/2,n=t.attr("y")+t.attr("height")/2,o=r.attr("x")+r.attr("width")/2,i=r.attr("y")+r.attr("height")/2,s=o,h=i,c=e.points;c&&c.length>0&&(s=c[0].x,h=c[0].y);var u="M "+a+" "+n+" L "+s+" "+h,l=this._getRectEdgePathInfo(t),p=Raphael.pathIntersection(u,l),g="M "+p[0].x+" "+p[0].y,f=[];if(f.push({x:p[0].x,y:p[0].y}),c)for(var d=0;d<c.length;d++)g+=" L "+(b=c[d]).x+" "+b.y,f.push(b);c&&c.length>0&&(a=(B=c[c.length-1]).x,n=B.y);var x="M "+a+" "+n+" L "+o+" "+i,y=this._getRectEdgePathInfo(r),v=Raphael.pathIntersection(x,y);f.push({x:v[0].x,y:v[0].y}),g+=" L "+v[0].x+" "+v[0].y;var b,m=e.labelPosition;if(m&&2==(b=m.split(",")).length){var w,P,I=f.length;if(I%2==0){var _=f[I/2-1],D=f[I/2];w=Math.abs(_.x-D.x)/2+(_.x>D.x?D.x:_.x)+parseInt(b[0]),P=Math.abs(_.y-D.y)/2+(_.y>D.y?D.y:_.y)+parseInt(b[1])}else{var B;w=(B=f[parseInt(I/2)]).x+parseInt(b[0]),P=B.y+parseInt(b[1])}var L=e.name;if(L){var M=this.paper.text(w,P,L);M.attr("font-size",parseInt(e.fontSize));var E=M.getBBox().width,C=M.getBBox().height;M.attr({x:w+E/2,y:P+C/2,fill:"rgb("+e.borderColor+")"})}}var R=this.paper.path(g);return R.attr({"arrow-end":"block-wide-long","stroke-width":e.borderWidth,stroke:"rgb("+e.borderColor+")"}),R},ProcessDiagram.prototype._getRectEdgePathInfo=function(t){var r=t.attr("x"),e=t.attr("y");return"M "+r+" "+e+" L "+(t.attr("x")+t.attr("width"))+" "+t.attr("y")+" L "+(t.attr("x")+t.attr("width"))+" "+(t.attr("y")+t.attr("height"))+" L "+t.attr("x")+"  "+(t.attr("y")+t.attr("height"))+" L "+r+"  "+e},ProcessDiagram.prototype._buildNode=function(t,r){var e=t.width,a=t.height,n=t.icon;n=this.contextPath+"/res"+n;var o,i,s=this.paper.rect(t.x,t.y,e,a,5),h=t.x+e/2,c=t.y+a/2,u=function(t){switch(t){case 0:return 0;case 1:return"①";case 2:return"②";case 3:return"③";case 4:return"④";case 5:return"⑤";case 6:return"⑥";case 7:return"⑦";case 8:return"⑧";case 9:return"⑨";case 10:return"⑩";case 11:return"⑪";case 12:return"⑫";case 13:return"⑬";case 14:return"⑭";case 15:return"⑮";case 16:return"⑯";case 17:return"⑰";case 18:return"⑱";case 19:return"⑲";case 20:return"⑳"}return t}(t.time),l=t.name;t.label&&t.label.length>0&&(l=t.label),s.attr("stroke-width","0"),(o=this.paper.text(h,c+16,l)).attr("font-size",parseInt(t.fontSize));var p=h-16,g=c-o.getBBox().height/2-16;return i=this.paper.image(n,p,g,32,32),0!=u&&r&&this.paper.text(t.x+e-15,t.y,u).attr("font-size","16"),o.attr({fill:"rgb("+t.fontColor+")"}),t.fontBold&&this._buildTextUnderline(o).attr("stroke","rgb("+t.fontColor+")"),t.info&&(i.attr("title",t.info),s.attr("title",t.info)),s},ProcessDiagram.prototype._buildTextUnderline=function(t){var r=t.getBBox();return this.paper.path("M"+r.x+" "+(r.y+r.height)+"L"+(r.x+r.width)+" "+(r.y+r.height))}}});