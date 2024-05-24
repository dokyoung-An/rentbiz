// Garden Gnome Software - Skin
// Pano2VR 7.0.10/20025
// Filename: ?? ?? ???? 84A.ggsk
// Generated 2024-05-24T12:08:15

function pano2vrSkin(player,base) {
	player.addVariable('vis_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_icon', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobilemenu', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobileside', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobilemap', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mapangle', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floor', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_onefloor', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_secondfloor', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_roomMobile', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__43=document.createElement('div');
		el.ggId="\ud5e4\ub4dc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__43.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__43.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 1024))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__43.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__43.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__43.style.transition='';
				if (me.__43.ggCurrentLogicStateVisible == 0) {
					me.__43.style.visibility="hidden";
					me.__43.ggVisible=false;
				}
				else {
					me.__43.style.visibility=(Number(me.__43.style.opacity)>0||!me.__43.style.opacity)?'inherit':'hidden';
					me.__43.ggVisible=true;
				}
			}
		}
		me.__43.logicBlock_visible();
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		el=me.__212=document.createElement('div');
		el.ggId="\ud5e4\ub4dc \ubc30\uacbd-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #1b2025;';
		hs+='border-color : #00557f;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='bottom : 2px;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__212.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__212.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me.__212);
		el=me.__61=document.createElement('div');
		el.ggId="\ud5e4\ub4dc \ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #00557f;';
		hs+='border-radius : 0px 0px 28px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 15%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__61.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__61.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me.__61);
		el=me.__113=document.createElement('div');
		el.ggId="\ud5e4\ub4dc \ubc30\uacbd-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -1;';
		hs+='background : #ffffff;';
		hs+='border-color : #00557f;';
		hs+='border-radius : 0px 0px 50px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__113.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__113.ggUpdatePosition=function (useTransition) {
		}
		me.__43.appendChild(me.__113);
		el=me.__59=document.createElement('div');
		el.ggId="\ub85c\uace0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 155px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__59.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.__59.appendChild(me._image_1);
		me.__43.appendChild(me.__59);
		el=me.__45=document.createElement('div');
		el.ggId="\uce74\ud14c\uace0\ub9ac";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__45.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 600))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__45.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__45.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__45.style.transition='';
				if (me.__45.ggCurrentLogicStateVisible == 0) {
					me.__45.style.visibility="hidden";
					me.__45.ggVisible=false;
				}
				else {
					me.__45.style.visibility=(Number(me.__45.style.opacity)>0||!me.__45.style.opacity)?'inherit':'hidden';
					me.__45.ggVisible=true;
				}
			}
		}
		me.__45.logicBlock_visible();
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		el=me.__bg=document.createElement('div');
		el.ggId="\uce74\ud14c\uace0\ub9ac_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -1;';
		hs+='background : #1b2025;';
		hs+='border-color : #000000;';
		hs+='border-radius : 28px 0px 0px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__bg.ggUpdatePosition=function (useTransition) {
		}
		me.__45.appendChild(me.__bg);
		el=me.__47=document.createElement('div');
		el.ggId="\uce74\ud14c\uace0\ub9ac \ud56d\ubaa9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 560px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__47.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		el=me.__57=document.createElement('div');
		el.ggId="\ud604\uad00 \ubc30\uacbd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 720px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px; line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__57.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__57.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uc695\uc2e4") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__57.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__57.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__57.style.transition='background-color 0s';
				if (me.__57.ggCurrentLogicStateBackgroundColor == 0) {
					me.__57.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me.__57.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__57.logicBlock_backgroundcolor();
		me.__57.ggUpdatePosition=function (useTransition) {
		}
		el=me.__58=document.createElement('div');
		els=me.__58__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uad00";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__58.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud604\uad00", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__58.ggUpdateText();
		el.appendChild(els);
		me.__58.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__58.onclick=function (e) {
			player.openNext("{node22}","");
		}
		me.__58.ggUpdatePosition=function (useTransition) {
		}
		me.__57.appendChild(me.__58);
		me.__47.appendChild(me.__57);
		el=me.__2_2=document.createElement('div');
		el.ggId="\uc695\uc2e42 \ubc30\uacbd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 640px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px; line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uc695\uc2e4") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2_2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2_2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2_2.style.transition='background-color 0s';
				if (me.__2_2.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2_2.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me.__2_2.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__2_2.logicBlock_backgroundcolor();
		me.__2_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__211=document.createElement('div');
		els=me.__211__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e42";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__211.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc548\ubc29\uc695\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__211.ggUpdateText();
		el.appendChild(els);
		me.__211.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__211.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me.__211.ggUpdatePosition=function (useTransition) {
		}
		me.__2_2.appendChild(me.__211);
		me.__47.appendChild(me.__2_2);
		el=me.__1_0=document.createElement('div');
		el.ggId="\uc695\uc2e41 \ubc30\uacbd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 560px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px; line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uc695\uc2e4") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1_0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1_0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1_0.style.transition='background-color 0s';
				if (me.__1_0.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1_0.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me.__1_0.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__1_0.logicBlock_backgroundcolor();
		me.__1_0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__112=document.createElement('div');
		els=me.__112__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e41";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__112.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uc6a9\uc695\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__112.ggUpdateText();
		el.appendChild(els);
		me.__112.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__112.onclick=function (e) {
			player.openNext("{node17}","");
		}
		me.__112.ggUpdatePosition=function (useTransition) {
		}
		me.__1_0.appendChild(me.__112);
		me.__47.appendChild(me.__1_0);
		el=me.__55=document.createElement('div');
		el.ggId="\ud32c\ud2b8\ub9ac \ubc30\uacbd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 480px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px; line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__55.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__55.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uc695\uc2e4") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__55.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__55.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__55.style.transition='background-color 0s';
				if (me.__55.ggCurrentLogicStateBackgroundColor == 0) {
					me.__55.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me.__55.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__55.logicBlock_backgroundcolor();
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		el=me.__56=document.createElement('div');
		els=me.__56__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud32c\ud2b8\ub9ac";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__56.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud30c\uc6b0\ub354\ub8f8\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__56.ggUpdateText();
		el.appendChild(els);
		me.__56.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__56.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me.__56);
		me.__47.appendChild(me.__55);
		el=me.__53=document.createElement('div');
		el.ggId="\uc8fc\ubc29\ubc30\uacbd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 400px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px; line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__53.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uc8fc\ubc29") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__53.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__53.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__53.style.transition='background-color 0s';
				if (me.__53.ggCurrentLogicStateBackgroundColor == 0) {
					me.__53.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me.__53.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__53.logicBlock_backgroundcolor();
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		el=me.__54=document.createElement('div');
		els=me.__54__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\ubc29";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__54.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\ubc29", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__54.ggUpdateText();
		el.appendChild(els);
		me.__54.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__54.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uc8fc\ubc29") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__54.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__54.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__54.style.transition='background-color 0s';
				if (me.__54.ggCurrentLogicStateBackgroundColor == 0) {
					me.__54.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me.__54.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__54.logicBlock_backgroundcolor();
		me.__54.onclick=function (e) {
			player.openNext("{node15}","");
		}
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		me.__53.appendChild(me.__54);
		me.__47.appendChild(me.__53);
		el=me.__51=document.createElement('div');
		el.ggId="\ub4dc\ub808\uc2a4\ub8f8 \ubc30\uacbd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 320px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px; line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__51.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\ub2e4\ub77d2") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__51.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__51.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__51.style.transition='background-color 0s';
				if (me.__51.ggCurrentLogicStateBackgroundColor == 0) {
					me.__51.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me.__51.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__51.logicBlock_backgroundcolor();
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		el=me.__52=document.createElement('div');
		els=me.__52__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub4dc\ub808\uc2a4\ub8f8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__52.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub4dc\ub808\uc2a4\ub8f8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__52.ggUpdateText();
		el.appendChild(els);
		me.__52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__52.onclick=function (e) {
			player.openNext("{node3}","");
		}
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		me.__51.appendChild(me.__52);
		me.__47.appendChild(me.__51);
		el=me.__3_1=document.createElement('div');
		el.ggId="\uce68\uc2e43 \ubc30\uacbd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 240px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px; line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3_1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\ub2e4\ub77d1") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__3_1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__3_1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__3_1.style.transition='background-color 0s';
				if (me.__3_1.ggCurrentLogicStateBackgroundColor == 0) {
					me.__3_1.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me.__3_1.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__3_1.logicBlock_backgroundcolor();
		me.__3_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__310=document.createElement('div');
		els=me.__310__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e43";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__310.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e42", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__310.ggUpdateText();
		el.appendChild(els);
		me.__310.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__310.onclick=function (e) {
			player.openNext("{node20}","");
		}
		me.__310.ggUpdatePosition=function (useTransition) {
		}
		me.__3_1.appendChild(me.__310);
		me.__47.appendChild(me.__3_1);
		el=me.__2_1=document.createElement('div');
		el.ggId="\uce68\uc2e42 \ubc30\uacbd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px; line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uce68\uc2e42") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2_1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2_1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2_1.style.transition='background-color 0s';
				if (me.__2_1.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2_1.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me.__2_1.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__2_1.logicBlock_backgroundcolor();
		me.__2_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__210=document.createElement('div');
		els=me.__210__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e42";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__210.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e41", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__210.ggUpdateText();
		el.appendChild(els);
		me.__210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__210.onclick=function (e) {
			player.openNext("{node19}","");
		}
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		me.__2_1.appendChild(me.__210);
		me.__47.appendChild(me.__2_1);
		el=me.__1_=document.createElement('div');
		el.ggId="\uce68\uc2e41 \ubc30\uacbd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 80px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uce68\uc2e41") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1_.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1_.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1_.style.transition='background-color 0s';
				if (me.__1_.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1_.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me.__1_.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__1_.logicBlock_backgroundcolor();
		me.__1_.ggUpdatePosition=function (useTransition) {
		}
		el=me.__111=document.createElement('div');
		els=me.__111__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e41";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px; line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__111.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e41", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__111.ggUpdateText();
		el.appendChild(els);
		me.__111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__111.onclick=function (e) {
			player.openNext("{node6}","");
		}
		me.__111.ggUpdatePosition=function (useTransition) {
		}
		me.__1_.appendChild(me.__111);
		me.__47.appendChild(me.__1_);
		el=me.__48=document.createElement('div');
		el.ggId="\uac70\uc2e4\ubc30\uacbd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px; line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__48.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__48.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uac70\uc2e4") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__48.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__48.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__48.style.transition='background-color 0s';
				if (me.__48.ggCurrentLogicStateBackgroundColor == 0) {
					me.__48.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me.__48.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__48.logicBlock_backgroundcolor();
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		el=me.__49=document.createElement('div');
		els=me.__49__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac70\uc2e4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__49.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac70\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__49.ggUpdateText();
		el.appendChild(els);
		me.__49.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__49.onclick=function (e) {
			player.openNext("{node10}","");
		}
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		me.__48.appendChild(me.__49);
		me.__47.appendChild(me.__48);
		me.__45.appendChild(me.__47);
		el=me.__46=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 -\ubc84\ud2bc";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : calc(50% - ((28px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__46.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_6=document.createElement('div');
		el.ggId="Rectangle 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #026df3;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_6.onclick=function (e) {
			me.__26.ggVisible = !me.__26.ggVisible;
			var flag=me.__26.ggVisible;
			me.__26.style.transition='none';
			me.__26.style.visibility=((flag)&&(Number(me.__26.style.opacity)>0||!me.__26.style.opacity))?'inherit':'hidden';
		}
		me._rectangle_6.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlPSIjZmZmZmZmIiBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biIgd2lkdGg9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiA8cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPgo8L3N2Zz4K';
		me._svg_4__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='position : absolute;';
		hs+='right : 11px;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_4.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_4.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_4.style.transition='transform 0s';
				if (me._svg_4.ggCurrentLogicStateAngle == 0) {
					me._svg_4.ggParameter.a = 180;
					me._svg_4.style.transform=parameterToTransform(me._svg_4.ggParameter);
				}
				else {
					me._svg_4.ggParameter.a = 0;
					me._svg_4.style.transform=parameterToTransform(me._svg_4.ggParameter);
				}
			}
		}
		me._svg_4.logicBlock_angle();
		me._svg_4.onclick=function (e) {
			player.setVariableValue('vis_floorplan', !player.getVariableValue('vis_floorplan'));
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_6.appendChild(me._svg_4);
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0);';
		hs+='border-radius : 5px 0px 0px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf4\uace0\uc11c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4.ggUpdateText();
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_6.appendChild(me._text_4);
		me.__46.appendChild(me._rectangle_6);
		me.__45.appendChild(me.__46);
		me.__43.appendChild(me.__45);
		el=me.__44=document.createElement('div');
		el.ggId="\ud0c0\uc785";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 50px;';
		hs+='left : 14%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 4px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 30px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("84\u33a1A", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me.__44.appendChild(me._text_1);
		me.__43.appendChild(me.__44);
		me.divSkin.appendChild(me.__43);
		el=me._footer=document.createElement('div');
		el.ggId="Footer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 80px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._footer.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._footer.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 540))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._footer.ggCurrentLogicStateSize != newLogicStateSize) {
				me._footer.ggCurrentLogicStateSize = newLogicStateSize;
				me._footer.style.transition='width 0s, height 0s';
				if (me._footer.ggCurrentLogicStateSize == 0) {
					me._footer.style.width='100%';
					me._footer.style.height='100px';
					skin.updateSize(me._footer);
				}
				else {
					me._footer.style.width='100%';
					me._footer.style.height='80px';
					skin.updateSize(me._footer);
				}
			}
		}
		me._footer.logicBlock_size();
		me._footer.ggUpdatePosition=function (useTransition) {
		}
		el=me._footer_bg=document.createElement('div');
		el.ggId="footer_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border-color : #1b2025;';
		hs+='border-style : solid;';
		hs+='border-width : 2px 0px 0px 0px;';
		hs+='bottom : -2px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._footer_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._footer_bg.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1024))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._footer_bg.ggCurrentLogicStateSize != newLogicStateSize) {
				me._footer_bg.ggCurrentLogicStateSize = newLogicStateSize;
				me._footer_bg.style.transition='width 0s, height 0s';
				if (me._footer_bg.ggCurrentLogicStateSize == 0) {
					me._footer_bg.style.width='100%';
					me._footer_bg.style.height='100%';
					skin.updateSize(me._footer_bg);
				}
				else {
					me._footer_bg.style.width='100%';
					me._footer_bg.style.height='100%';
					skin.updateSize(me._footer_bg);
				}
			}
		}
		me._footer_bg.logicBlock_size();
		me._footer_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._footer_info=document.createElement('div');
		el.ggId="footer_info";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._footer_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._footer_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width > 540))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._footer_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._footer_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._footer_info.style.transition='';
				if (me._footer_info.ggCurrentLogicStateVisible == 0) {
					me._footer_info.style.visibility=(Number(me._footer_info.style.opacity)>0||!me._footer_info.style.opacity)?'inherit':'hidden';
					me._footer_info.ggVisible=true;
				}
				else {
					me._footer_info.style.visibility="hidden";
					me._footer_info.ggVisible=false;
				}
			}
		}
		me._footer_info.logicBlock_visible();
		me._footer_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_30=document.createElement('div');
		els=me._text_30__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(145,145,145,1);';
		hs+='height : auto;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : 1000px;';
		hs+='pointer-events:auto;';
		hs+='line-height:16px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 0px 0px 15px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_30.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u203b \uc704 VR\uc744 2024.05.06\uc77c 00 \uc544\ud30c\ud2b8 \uc0ac\uc804\uc810\uac80 \ud604\uc7a5\uc5d0\uc11c \ucd2c\uc601\ud55c \uac83\uc785\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_30.ggUpdateText();
		el.appendChild(els);
		me._text_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_30.ggUpdatePosition=function (useTransition) {
		}
		me._footer_info.appendChild(me._text_30);
		me._footer_bg.appendChild(me._footer_info);
		el=me._footer_infom=document.createElement('div');
		el.ggId="footer_info-M";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 85%;';
		hs+='left : calc(50% - ((96% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 96%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._footer_infom.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._footer_infom.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 540))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._footer_infom.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._footer_infom.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._footer_infom.style.transition='';
				if (me._footer_infom.ggCurrentLogicStateVisible == 0) {
					me._footer_infom.style.visibility=(Number(me._footer_infom.style.opacity)>0||!me._footer_infom.style.opacity)?'inherit':'hidden';
					me._footer_infom.ggVisible=true;
				}
				else {
					me._footer_infom.style.visibility="hidden";
					me._footer_infom.ggVisible=false;
				}
			}
		}
		me._footer_infom.logicBlock_visible();
		me._footer_infom.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_3m=document.createElement('div');
		els=me._text_3m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-M";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(145,145,145,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='line-height:16px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3m.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u203b \uc704 VR\uc744 2024.05.06\uc77c 00 \uc544\ud30c\ud2b8 \uc0ac\uc804\uc810\uac80 \ud604\uc7a5\uc5d0\uc11c \ucd2c\uc601\ud55c \uac83\uc785\ub2c8\ub2e4.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3m.ggUpdateText();
		el.appendChild(els);
		me._text_3m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3m.ggUpdatePosition=function (useTransition) {
		}
		me._footer_infom.appendChild(me._text_3m);
		me._footer_bg.appendChild(me._footer_infom);
		el=me.__39=document.createElement('div');
		el.ggId="\ubd84\uc591 \ubb38\uc758";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__39.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__39.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 1024))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__39.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__39.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__39.style.transition='';
				if (me.__39.ggCurrentLogicStateVisible == 0) {
					me.__39.style.visibility="hidden";
					me.__39.ggVisible=false;
				}
				else {
					me.__39.style.visibility=(Number(me.__39.style.opacity)>0||!me.__39.style.opacity)?'inherit':'hidden';
					me.__39.ggVisible=true;
				}
			}
		}
		me.__39.logicBlock_visible();
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		el=me.__42=document.createElement('div');
		els=me.__42__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubd84\uc591\ubb38\uc758\ud0dd\uc2a4\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 900;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__42.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0ac\uc804\uc810\uac80\ub300\ud589 \ud558\ubc29", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__42.ggUpdateText();
		el.appendChild(els);
		me.__42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		me.__39.appendChild(me.__42);
		el=me.__41=document.createElement('div');
		els=me.__41__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc804\ud654\ubc88\ud638";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 9px;';
		hs+='color : rgba(27,32,37,1);';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 900;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__41.ggUpdateText=function() {
			var params = [];
			var hs = player._("1566-2384", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__41.ggUpdateText();
		el.appendChild(els);
		me.__41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		me.__39.appendChild(me.__41);
		me._footer_bg.appendChild(me.__39);
		me._footer.appendChild(me._footer_bg);
		me.divSkin.appendChild(me._footer);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=false;
		el.ggTimeout=3600000;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 141px;';
		hs+='position : absolute;';
		hs+='top : 73px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style.transition='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility="hidden";
					me._timer_1.ggVisible=false;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.logicBlock_visible();
		me._timer_1.ggActivate=function () {
			player.setVariableValue('vis_icon', !player.getVariableValue('vis_icon'));
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me.__37=document.createElement('div');
		el.ggId="\uc548\ub0b4\ubb38\uad6c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__37.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.627451);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(145,145,145,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((calc(70% + 8px) + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 8px) / 2) + 0px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : calc(70% + 8px);';
		hs+='pointer-events:auto;';
		hs+='line-height:16px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #ffffff;';
		hs+='border : 4px solid #a1a1a1;';
		hs+='border-radius : 15px;';
		hs+='cursor : default;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 33px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u203b \uc704 VR\uc740 \uc2e4\uc81c \uacac\ubcf8\uc8fc\ud0dd\uc744 \ucd2c\uc601\ud55c \uc601\uc0c1\uc73c\ub85c \uc2dc\uacf5 \ud6c4, \ub2e4\uc18c \ucc28\uc774\uac00 \ub0a0 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\u203b \uc704 VR\uc740 \uc785\uc8fc\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uac01\uc885 \uc804\uc2dc\ubb3c, \uc5f0\ucd9c\uc6a9 \uc870\uba85 \ub4f1\uc744 \ud65c\uc6a9\ud574 \uc2dc\uacf5\ud55c \ubd80\ubd84\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \n\u203b \uacac\ubcf8\uc8fc\ud0dd\uc5d0 \uc2dc\uacf5\ub41c, \ubc14\ub2e5\uc7ac, \ubcbd\uc9c0\ub958, \ud0c0\uc77c\ub958, \uae30\uae30\ub958 \ubc0f \uae30\ud0c0 \uc81c\ud488\uc740 \uc785\uc8fc \uc2dc \ub3d9\uc9c8, \ub3d9\uac00\uc758 \uc81c\ud488\uc73c\ub85c \ubcc0\uacbd\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.  ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 45px;';
		hs+='left : calc(50% - ((45px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -45px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.onclick=function (e) {
			me.__37.style.transition='none';
			me.__37.style.visibility='hidden';
			me.__37.ggVisible=false;
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1wbHVzIiB3aWR0aD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KIDxsaW5lIHkyPSIxOSIgeTE9IjUiIHgyPSIxMiIgeDE9IjEyIi8+CiA8bGluZSB5Mj0iMTIiIHkxPSIxMiIgeDI9IjE5IiB4MT0iNSIvPgo8L3N2Zz4K';
		me._svg_3__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_3.appendChild(me._svg_3);
		me._text_3.appendChild(me._rectangle_3);
		me._rectangle_4.appendChild(me._text_3);
		me.__37.appendChild(me._rectangle_4);
		me.divSkin.appendChild(me.__37);
		el=me._timer_2=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=500;
		el.ggId="Timer 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 195px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_2.ggIsActive=function() {
			return (me._timer_2.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_2.ggTimestamp) / me._timer_2.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_2.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_2.style.transition='';
				if (me._timer_2.ggCurrentLogicStateVisible == 0) {
					me._timer_2.style.visibility="hidden";
					me._timer_2.ggVisible=false;
				}
				else {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
			}
		}
		me._timer_2.logicBlock_visible();
		me._timer_2.ggActivate=function () {
			player.setVariableValue('vis_mobilemenu', !player.getVariableValue('vis_mobilemenu'));
		}
		me._timer_2.ggCurrentLogicStateVisible = -1;
		me._timer_2.ggUpdateConditionTimer=function () {
			me._timer_2.logicBlock_visible();
		}
		me._timer_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_2);
		el=me.__28=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud5e4\ub4dc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 90px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__28.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__28.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width > 1024))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__28.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__28.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__28.style.transition='';
				if (me.__28.ggCurrentLogicStateVisible == 0) {
					me.__28.style.visibility="hidden";
					me.__28.ggVisible=false;
				}
				else {
					me.__28.style.visibility=(Number(me.__28.style.opacity)>0||!me.__28.style.opacity)?'inherit':'hidden';
					me.__28.ggVisible=true;
				}
			}
		}
		me.__28.logicBlock_visible();
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		el=me.__36=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud5e4\ub4dc - \ud0c0\uc785";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -1;';
		hs+='background : #1b2025;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__36.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me.__36);
		el=me.__35=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud5e4\ub4dc-3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__35.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me.__35);
		el=me.__110=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud5e4\ub4dc-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -1;';
		hs+='background : #1b2025;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 50px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 82%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me.__110);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDy=-67;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 67px);';
		hs+='visibility : inherit;';
		hs+='width : 83.4%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me._rectangle_1);
		el=me._rectangle_11=document.createElement('div');
		el.ggId="Rectangle 1-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -1;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 50px 0px;';
		hs+='cursor : default;';
		hs+='height : 22px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : inherit;';
		hs+='width : 76%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.style.transformOrigin='50% 50%';
		me._rectangle_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_11.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me._rectangle_11);
		el=me.__32=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \uacf5\uac04\uc120\ud0dd";
		el.ggDy=23;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 9999;';
		hs+='height : 35.5556%;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35.5556% + 0px) / 2) + 23px);';
		hs+='visibility : inherit;';
		hs+='width : 65%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		el=me.__m0=document.createElement('div');
		el.ggId="\uce74\ud14c\uace0\ub9ac \ud56d\ubaa9-M";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__m0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__m0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__34=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__34.onclick=function (e) {
			player.setVariableValue('vis_roomMobile', !player.getVariableValue('vis_roomMobile'));
		}
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 1px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc120\ud0dd", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me.__34.appendChild(me._text_2);
		el=me._svg_5m=document.createElement('div');
		els=me._svg_5m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlPSIjZmZmZmZmIiBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biIgd2lkdGg9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiA8cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPgo8L3N2Zz4K';
		me._svg_5m__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5-M";
		el.ggDx=37;
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 37px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 3px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_5m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_5m.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_roomMobile') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_5m.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_5m.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_5m.style.transition='transform 0s';
				if (me._svg_5m.ggCurrentLogicStateAngle == 0) {
					me._svg_5m.ggParameter.a = 180;
					me._svg_5m.style.transform=parameterToTransform(me._svg_5m.ggParameter);
				}
				else {
					me._svg_5m.ggParameter.a = 0;
					me._svg_5m.style.transform=parameterToTransform(me._svg_5m.ggParameter);
				}
			}
		}
		me._svg_5m.logicBlock_angle();
		me._svg_5m.onclick=function (e) {
			player.setVariableValue('vis_floorplan', !player.getVariableValue('vis_floorplan'));
		}
		me._svg_5m.ggUpdatePosition=function (useTransition) {
		}
		me.__34.appendChild(me._svg_5m);
		me.__m0.appendChild(me.__34);
		el=me.__33=document.createElement('div');
		el.ggId="\uacf5\uac04\uc120\ud0dd \uce74\ud14c\uace0\ub9ac";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -320px;';
		hs+='height : 310px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__33.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_roomMobile') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__33.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__33.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__33.style.transition='';
				if (me.__33.ggCurrentLogicStateVisible == 0) {
					me.__33.style.visibility=(Number(me.__33.style.opacity)>0||!me.__33.style.opacity)?'inherit':'hidden';
					me.__33.ggVisible=true;
				}
				else {
					me.__33.style.visibility="hidden";
					me.__33.ggVisible=false;
				}
			}
		}
		me.__33.logicBlock_visible();
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -1;';
		hs+='background : rgba(161,161,161,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		me.__33.appendChild(me._rectangle_2);
		el=me.__m1=document.createElement('div');
		el.ggId="\uce74\ud14c\uace0\ub9ac \ud56d\ubaa9-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__m1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__m1.ggUpdatePosition=function (useTransition) {
		}
		el=me._m10=document.createElement('div');
		el.ggId="\ud604\uad00\ubc30\uacbd-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 270px;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px; line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m10.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uc695\uc2e4") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._m10.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._m10.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._m10.style.transition='background-color 0s';
				if (me._m10.ggCurrentLogicStateBackgroundColor == 0) {
					me._m10.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me._m10.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._m10.logicBlock_backgroundcolor();
		me._m10.ggUpdatePosition=function (useTransition) {
		}
		el=me._m11=document.createElement('div');
		els=me._m11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud604\uad00-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m11.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud604\uad00", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m11.ggUpdateText();
		el.appendChild(els);
		me._m11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m11.onclick=function (e) {
			player.openNext("{node22}","");
		}
		me._m11.ggUpdatePosition=function (useTransition) {
		}
		me._m10.appendChild(me._m11);
		me.__m1.appendChild(me._m10);
		el=me.__2m0=document.createElement('div');
		el.ggId="\uc695\uc2e42\ubc30\uacbd-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 240px;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px; line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2m0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2m0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uc695\uc2e4") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2m0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2m0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2m0.style.transition='background-color 0s';
				if (me.__2m0.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2m0.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me.__2m0.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__2m0.logicBlock_backgroundcolor();
		me.__2m0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2m1=document.createElement('div');
		els=me.__2m1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e42-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2m1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc548\ubc29\uc695\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2m1.ggUpdateText();
		el.appendChild(els);
		me.__2m1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2m1.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me.__2m1.ggUpdatePosition=function (useTransition) {
		}
		me.__2m0.appendChild(me.__2m1);
		me.__m1.appendChild(me.__2m0);
		el=me._m8=document.createElement('div');
		el.ggId="\uc695\uc2e4\ubc30\uacbd-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 210px;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px; line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m8.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uc695\uc2e4") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._m8.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._m8.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._m8.style.transition='background-color 0s';
				if (me._m8.ggCurrentLogicStateBackgroundColor == 0) {
					me._m8.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me._m8.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._m8.logicBlock_backgroundcolor();
		me._m8.ggUpdatePosition=function (useTransition) {
		}
		el=me._m9=document.createElement('div');
		els=me._m9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e4-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m9.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uc6a9\uc695\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m9.ggUpdateText();
		el.appendChild(els);
		me._m9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m9.onclick=function (e) {
			player.openNext("{node17}","");
		}
		me._m9.ggUpdatePosition=function (useTransition) {
		}
		me._m8.appendChild(me._m9);
		me.__m1.appendChild(me._m8);
		el=me._m6=document.createElement('div');
		el.ggId="\ud32c\ud2b8\ub9ac\ubc30\uacbd-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 180px;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px; line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m6.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uc695\uc2e4") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._m6.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._m6.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._m6.style.transition='background-color 0s';
				if (me._m6.ggCurrentLogicStateBackgroundColor == 0) {
					me._m6.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me._m6.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._m6.logicBlock_backgroundcolor();
		me._m6.ggUpdatePosition=function (useTransition) {
		}
		el=me._m7=document.createElement('div');
		els=me._m7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud32c\ud2b8\ub9ac-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m7.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud30c\uc6b0\ub354\ub8f8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m7.ggUpdateText();
		el.appendChild(els);
		me._m7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m7.onclick=function (e) {
			player.openNext("{node4}","");
		}
		me._m7.ggUpdatePosition=function (useTransition) {
		}
		me._m6.appendChild(me._m7);
		me.__m1.appendChild(me._m6);
		el=me._m4=document.createElement('div');
		el.ggId="\uc8fc\ubc29\ubc30\uacbd-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 150px;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px; line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m4.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uc8fc\ubc29") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._m4.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._m4.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._m4.style.transition='background-color 0s';
				if (me._m4.ggCurrentLogicStateBackgroundColor == 0) {
					me._m4.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me._m4.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._m4.logicBlock_backgroundcolor();
		me._m4.ggUpdatePosition=function (useTransition) {
		}
		el=me._m5=document.createElement('div');
		els=me._m5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\ubc29-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m5.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\ubc29", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m5.ggUpdateText();
		el.appendChild(els);
		me._m5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m5.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uc8fc\ubc29") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._m5.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._m5.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._m5.style.transition='background-color 0s';
				if (me._m5.ggCurrentLogicStateBackgroundColor == 0) {
					me._m5.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me._m5.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._m5.logicBlock_backgroundcolor();
		me._m5.onclick=function (e) {
			player.openNext("{node15}","");
		}
		me._m5.ggUpdatePosition=function (useTransition) {
		}
		me._m4.appendChild(me._m5);
		me.__m1.appendChild(me._m4);
		el=me.__m2=document.createElement('div');
		el.ggId="\ub4dc\ub808\uc2a4\ub8f8 \ubc30\uacbd-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 120px;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px; line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__m2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__m2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\ub2e4\ub77d2") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__m2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__m2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__m2.style.transition='background-color 0s';
				if (me.__m2.ggCurrentLogicStateBackgroundColor == 0) {
					me.__m2.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me.__m2.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__m2.logicBlock_backgroundcolor();
		me.__m2.ggUpdatePosition=function (useTransition) {
		}
		el=me._m3=document.createElement('div');
		els=me._m3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub4dc\ub808\uc2a4\ub8f8-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub4dc\ub808\uc2a4\ub8f8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m3.ggUpdateText();
		el.appendChild(els);
		me._m3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m3.onclick=function (e) {
			player.openNext("{node3}","");
		}
		me._m3.ggUpdatePosition=function (useTransition) {
		}
		me.__m2.appendChild(me._m3);
		me.__m1.appendChild(me.__m2);
		el=me.__3_m=document.createElement('div');
		el.ggId="\uce68\uc2e43 \ubc30\uacbd-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px; line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3_m.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\ub2e4\ub77d1") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__3_m.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__3_m.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__3_m.style.transition='background-color 0s';
				if (me.__3_m.ggCurrentLogicStateBackgroundColor == 0) {
					me.__3_m.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me.__3_m.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__3_m.logicBlock_backgroundcolor();
		me.__3_m.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3m=document.createElement('div');
		els=me.__3m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e43-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__3m.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e42", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__3m.ggUpdateText();
		el.appendChild(els);
		me.__3m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3m.onclick=function (e) {
			player.openNext("{node20}","");
		}
		me.__3m.ggUpdatePosition=function (useTransition) {
		}
		me.__3_m.appendChild(me.__3m);
		me.__m1.appendChild(me.__3_m);
		el=me.__2_m=document.createElement('div');
		el.ggId="\uce68\uc2e42 \ubc30\uacbd-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px; line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_m.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uce68\uc2e42") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2_m.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2_m.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2_m.style.transition='background-color 0s';
				if (me.__2_m.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2_m.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me.__2_m.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__2_m.logicBlock_backgroundcolor();
		me.__2_m.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2m=document.createElement('div');
		els=me.__2m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e42-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2m.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e41", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2m.ggUpdateText();
		el.appendChild(els);
		me.__2m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2m.onclick=function (e) {
			player.openNext("{node19}","");
		}
		me.__2m.ggUpdatePosition=function (useTransition) {
		}
		me.__2_m.appendChild(me.__2m);
		me.__m1.appendChild(me.__2_m);
		el=me.__1_m=document.createElement('div');
		el.ggId="\uce68\uc2e41 \ubc30\uacbd-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_m.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uce68\uc2e41") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1_m.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1_m.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1_m.style.transition='background-color 0s';
				if (me.__1_m.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1_m.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me.__1_m.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__1_m.logicBlock_backgroundcolor();
		me.__1_m.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1m=document.createElement('div');
		els=me.__1m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e41-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px; line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1m.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e41", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1m.ggUpdateText();
		el.appendChild(els);
		me.__1m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1m.onclick=function (e) {
			player.openNext("{node6}","");
		}
		me.__1m.ggUpdatePosition=function (useTransition) {
		}
		me.__1_m.appendChild(me.__1m);
		me.__m1.appendChild(me.__1_m);
		el=me._m1=document.createElement('div');
		el.ggId="\uac70\uc2e4\ubc30\uacbd-m";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:2px; line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("\uac70\uc2e4") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._m1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._m1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._m1.style.transition='background-color 0s';
				if (me._m1.ggCurrentLogicStateBackgroundColor == 0) {
					me._m1.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me._m1.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._m1.logicBlock_backgroundcolor();
		me._m1.ggUpdatePosition=function (useTransition) {
		}
		el=me._m2=document.createElement('div');
		els=me._m2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac70\uc2e4-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac70\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m2.ggUpdateText();
		el.appendChild(els);
		me._m2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m2.onclick=function (e) {
			player.openNext("{node10}","");
		}
		me._m2.ggUpdatePosition=function (useTransition) {
		}
		me._m1.appendChild(me._m2);
		me.__m1.appendChild(me._m1);
		me.__33.appendChild(me.__m1);
		me.__m0.appendChild(me.__33);
		me.__32.appendChild(me.__m0);
		me.__28.appendChild(me.__32);
		el=me._m0=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4-M";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -130px;';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m0.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_1m=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1-M";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\ub2e4\ub77d") == -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_1m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_1m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_1m.style.transition='opacity 500ms linear 0ms';
				if (me._map_1m.ggCurrentLogicStateVisible == 0) {
					me._map_1m.style.visibility=(Number(me._map_1m.style.opacity)>0||!me._map_1m.style.opacity)?'inherit':'hidden';
					if (me._map_1m.ggMapNotLoaded && me._map_1m.ggInitMap) {
						me._map_1m.ggInitMap(false);
						me._map_1m.ggInitMapMarkers(true);
					}
					me._map_1m.ggVisible=true;
				}
				else {
					me._map_1m.style.visibility="hidden";
					if (me._map_1m.ggClearMap) me._map_1m.ggClearMap();
					me._map_1m.ggVisible=false;
				}
			}
		}
		me._map_1m.logicBlock_visible();
		me._map_1m.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_1m.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_1m.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_1m.style.transition='opacity 500ms linear 0ms';
				if (me._map_1m.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_1m.style.opacity == 0.0) { me._map_1m.style.visibility="hidden"; } }, 505);
					if (me._map_1m.ggClearMap) me._map_1m.ggClearMap();
					me._map_1m.style.opacity=0;
				}
				else {
					me._map_1m.style.visibility=me._map_1m.ggVisible?'inherit':'hidden';
					if (me._map_1m.ggMapNotLoaded && me._map_1m.ggInitMap) {
						me._map_1m.ggInitMap(false);
						me._map_1m.ggInitMapMarkers(true);
					}
					me._map_1m.style.opacity=1;
				}
			}
		}
		me._map_1m.logicBlock_alpha();
		me._map_1m.ggCurrentLogicStateVisible = -1;
		me._map_1m.ggCurrentLogicStateAlpha = -1;
		me._map_1m.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1m.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1m.ggCalculateFloorplanSize(mapDetails);
				me._map_1m.ggShowSimpleFloorplan(mapDetails);
				me._map_1m.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1m.ggRadar) me._map_1m.ggRadar.update();
		}
		me._map_1m.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_1m.ggMarkerInstances.length; i++) {
				me._map_1m.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_1m.ggUpdateConditionResize();
		}
		me._m0.appendChild(me._map_1m);
		el=me._map_2m=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2-M";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_2m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_2m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("\ub2e4\ub77d") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_2m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_2m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_2m.style.transition='opacity 500ms linear 0ms';
				if (me._map_2m.ggCurrentLogicStateVisible == 0) {
					me._map_2m.style.visibility=(Number(me._map_2m.style.opacity)>0||!me._map_2m.style.opacity)?'inherit':'hidden';
					if (me._map_2m.ggMapNotLoaded && me._map_2m.ggInitMap) {
						me._map_2m.ggInitMap(false);
						me._map_2m.ggInitMapMarkers(true);
					}
					me._map_2m.ggVisible=true;
				}
				else {
					me._map_2m.style.visibility="hidden";
					if (me._map_2m.ggClearMap) me._map_2m.ggClearMap();
					me._map_2m.ggVisible=false;
				}
			}
		}
		me._map_2m.logicBlock_visible();
		me._map_2m.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_2m.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_2m.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_2m.style.transition='opacity 500ms linear 0ms';
				if (me._map_2m.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_2m.style.opacity == 0.0) { me._map_2m.style.visibility="hidden"; } }, 505);
					if (me._map_2m.ggClearMap) me._map_2m.ggClearMap();
					me._map_2m.style.opacity=0;
				}
				else {
					me._map_2m.style.visibility=me._map_2m.ggVisible?'inherit':'hidden';
					if (me._map_2m.ggMapNotLoaded && me._map_2m.ggInitMap) {
						me._map_2m.ggInitMap(false);
						me._map_2m.ggInitMapMarkers(true);
					}
					me._map_2m.style.opacity=1;
				}
			}
		}
		me._map_2m.logicBlock_alpha();
		me._map_2m.ggCurrentLogicStateVisible = -1;
		me._map_2m.ggCurrentLogicStateAlpha = -1;
		me._map_2m.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_2m.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2m.ggCalculateFloorplanSize(mapDetails);
				me._map_2m.ggShowSimpleFloorplan(mapDetails);
				me._map_2m.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2m.ggRadar) me._map_2m.ggRadar.update();
		}
		me._map_2m.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_2m.ggMarkerInstances.length; i++) {
				me._map_2m.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_2m.ggUpdateConditionResize();
		}
		me._m0.appendChild(me._map_2m);
		me.__28.appendChild(me._m0);
		el=me._m=document.createElement('div');
		el.ggId="\ub85c\uace0-M";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 132px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1m=document.createElement('div');
		els=me._image_1m__img=document.createElement('img');
		els.className='ggskin ggskin_image_1m';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1-M";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1m.ggUpdatePosition=function (useTransition) {
		}
		me._m.appendChild(me._image_1m);
		me.__28.appendChild(me._m);
		el=me.__29=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud5e4\ub4dc-2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 999;';
		hs+='background : #1b2025;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 28px 0px 0px 0px;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 24%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		el=me.__31=document.createElement('div');
		els=me.__31__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c \ud0c0\uc785";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0%);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__31.ggUpdateText=function() {
			var params = [];
			var hs = player._("84\u33a1A", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__31.ggUpdateText();
		el.appendChild(els);
		me.__31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me.__31);
		el=me.__m=document.createElement('div');
		el.ggId="\ud3c9\uba74\ub3c4 -\ubc84\ud2bc-M";
		el.ggDx=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='bottom : -38px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__m.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_6m=document.createElement('div');
		el.ggId="Rectangle 6-M";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_6m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_6m.onclick=function (e) {
			me.__26.ggVisible = !me.__26.ggVisible;
			var flag=me.__26.ggVisible;
			me.__26.style.transition='none';
			me.__26.style.visibility=((flag)&&(Number(me.__26.style.opacity)>0||!me.__26.style.opacity))?'inherit':'hidden';
		}
		me._rectangle_6m.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_4m=document.createElement('div');
		els=me._svg_4m__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlPSIjZmZmZmZmIiBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biIgd2lkdGg9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiA8cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSIvPgo8L3N2Zz4K';
		me._svg_4m__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4-M";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_4m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4m.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_4m.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_4m.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_4m.style.transition='transform 0s';
				if (me._svg_4m.ggCurrentLogicStateAngle == 0) {
					me._svg_4m.ggParameter.a = 180;
					me._svg_4m.style.transform=parameterToTransform(me._svg_4m.ggParameter);
				}
				else {
					me._svg_4m.ggParameter.a = 0;
					me._svg_4m.style.transform=parameterToTransform(me._svg_4m.ggParameter);
				}
			}
		}
		me._svg_4m.logicBlock_angle();
		me._svg_4m.onclick=function (e) {
			player.setVariableValue('vis_floorplan', !player.getVariableValue('vis_floorplan'));
		}
		me._svg_4m.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_6m.appendChild(me._svg_4m);
		el=me._text_4m=document.createElement('div');
		els=me._text_4m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4-M";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0);';
		hs+='border-radius : 5px 0px 0px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4m.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf4\uace0\uc11c", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4m.ggUpdateText();
		el.appendChild(els);
		me._text_4m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4m.onclick=function (e) {
			player.setVariableValue('vis_floorplan', !player.getVariableValue('vis_floorplan'));
		}
		me._text_4m.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_6m.appendChild(me._text_4m);
		me.__m.appendChild(me._rectangle_6m);
		me.__29.appendChild(me.__m);
		me.__28.appendChild(me.__29);
		me.divSkin.appendChild(me.__28);
		el=me._markertemplate=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="markertemplate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markertemplate.ggUpdatePosition=function (useTransition) {
			me._markertemplate__normalInst.ggEvent_sizechanged();
			me._markertemplate__activeInst.ggEvent_sizechanged();
		}
		me.divSkin.appendChild(me._markertemplate);
		el=me.__26=document.createElement('div');
		el.ggId="\ud558\uc790\ubaa9\ub85d";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 500px;';
		hs+='left : calc(50% - ((380px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((500px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 380px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__26.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__26.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__26.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__26.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__26.style.transition='transform 0s';
				if (me.__26.ggCurrentLogicStateScaling == 0) {
					me.__26.ggParameter.sx = 0.8;
					me.__26.ggParameter.sy = 0.8;
					me.__26.style.transform=parameterToTransform(me.__26.ggParameter);
					skin.updateSize(me.__26);
				}
				else {
					me.__26.ggParameter.sx = 1;
					me.__26.ggParameter.sy = 1;
					me.__26.style.transform=parameterToTransform(me.__26.ggParameter);
					skin.updateSize(me.__26);
				}
			}
		}
		me.__26.logicBlock_scaling();
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		el=me.__27=document.createElement('div');
		el.ggId="\ud558\uc790\ubaa9\ub85d \ud31d\uc5c5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me._pdf_1=document.createElement('div');
		els=me._pdf_1__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._pdf_1__pdf.setAttribute('frameborder', '0');
		me._pdf_1__pdf.setAttribute('width', '100%');
		me._pdf_1__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._pdf_1.ggInitPdf = function(file) {
			if (file) {
				if (me._pdf_1.ggPdfSource == file) return;
				me._pdf_1.pdfNotLoaded = false;
				me._pdf_1.ggPdfSource = file;
				let pdfUrl = (me._pdf_1.ggPdfSource.indexOf(':') != -1 || me._pdf_1.ggPdfSource.startsWith('/') || me._pdf_1.ggPdfSource.startsWith('./')) ? me._pdf_1.ggPdfSource : window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')) + '/' + me._pdf_1.ggPdfSource;
				me._pdf_1__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&tools=true&enablelinks=true#page=1');
				me._pdf_1__pdf.style.display = 'block';
			} else {
				me._pdf_1__pdf.setAttribute('src', '');
				me._pdf_1__pdf.style.display = 'none';
				me._pdf_1.pdfNotLoaded = true;
				me._pdf_1.ggPdfSource = '';
			}
		}
		me._pdf_1.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0) me._pdf_1__pdf.contentWindow.PDFViewerApplication.page = page;
		}
		me._pdf_1.ggInitPdf('media/1월9일_결과보고서 (1).pdf');
		el.ggId="Pdf 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((90% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 2px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_1.ggUpdatePosition=function (useTransition) {
		}
		me.__27.appendChild(me._pdf_1);
		me.__26.appendChild(me.__27);
		me.divSkin.appendChild(me.__26);
		el=me.__25=document.createElement('div');
		el.ggId="\ud0a4\ud070\uc7a5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 337px;';
		hs+='left : calc(50% - ((600px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((337px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 600px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__25.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__25.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__25.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__25.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__25.style.transition='transform 0s';
				if (me.__25.ggCurrentLogicStateScaling == 0) {
					me.__25.ggParameter.sx = 0.8;
					me.__25.ggParameter.sy = 0.8;
					me.__25.style.transform=parameterToTransform(me.__25.ggParameter);
					skin.updateSize(me.__25);
				}
				else {
					me.__25.ggParameter.sx = 1;
					me.__25.ggParameter.sy = 1;
					me.__25.style.transform=parameterToTransform(me.__25.ggParameter);
					skin.updateSize(me.__25);
				}
			}
		}
		me.__25.logicBlock_scaling();
		me.__25.onclick=function (e) {
			if (me._video_1.ggApiPlayer) {
				if (me._video_1.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_1.ggApiPlayer.pauseVideo();
						me._video_1.ggApiPlayer.seekTo(0);
					};
					if (me._video_1.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_1.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_1.ggApiPlayerType == 'vimeo') {
					me._video_1.ggApiPlayer.pause();
					me._video_1.ggApiPlayer.setCurrentTime(0);
				}
			} else {
				player.stopSound("Video 1");
			}
			me.__25.style.transition='none';
			me.__25.style.visibility='hidden';
			me.__25.ggVisible=false;
		}
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_8=document.createElement('div');
		el.ggId="Rectangle 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_8.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_1=document.createElement('div');
		me._video_1.seekbars = [];
		me._video_1.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_1.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_1.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_1.hasChildNodes()) {
				me._video_1.removeChild(me._video_1.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_1.ggVideoNotLoaded == false && me._video_1.ggDeactivate && player.isPlaying('video_1')) { me._video_1.ggDeactivate(); }
				me._video_1.ggVideoNotLoaded = true;
				return;
			}
			me._video_1.ggVideoNotLoaded = false;
			me._video_1__vid=document.createElement('iframe');
			me._video_1__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=0&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._video_1__vid.setAttribute('src', ggVideoUrl);
			me._video_1__vid.setAttribute('width', '100%');
			me._video_1__vid.setAttribute('height', '100%');
			me._video_1__vid.setAttribute('allow', 'autoplay');
			me._video_1__vid.setAttribute('allowfullscreen', 'true');
			me._video_1__vid.setAttribute('style', 'border:none; ; ;');
			me._video_1.appendChild(me._video_1__vid);
			me._video_1.ggApiPlayerType = 'vimeo';
			me._video_1.ggApiPlayer = new Vimeo.Player(me._video_1__vid);
			me._video_1.ggVideoSource = media;
		}
		el.ggId="Video 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 79.822%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((79.822% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_8.appendChild(me._video_1);
		me.__25.appendChild(me._rectangle_8);
		me.divSkin.appendChild(me.__25);
		el=me.__23=document.createElement('div');
		el.ggId="\ud604\uad00\ucc3d\uace0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 337px;';
		hs+='left : calc(50% - ((600px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((337px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 600px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__23.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__23.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__23.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__23.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__23.style.transition='transform 0s';
				if (me.__23.ggCurrentLogicStateScaling == 0) {
					me.__23.ggParameter.sx = 0.8;
					me.__23.ggParameter.sy = 0.8;
					me.__23.style.transform=parameterToTransform(me.__23.ggParameter);
					skin.updateSize(me.__23);
				}
				else {
					me.__23.ggParameter.sx = 1;
					me.__23.ggParameter.sy = 1;
					me.__23.style.transform=parameterToTransform(me.__23.ggParameter);
					skin.updateSize(me.__23);
				}
			}
		}
		me.__23.logicBlock_scaling();
		me.__23.onclick=function (e) {
			if (me.__24.ggApiPlayer) {
				if (me.__24.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me.__24.ggApiPlayer.pauseVideo();
						me.__24.ggApiPlayer.seekTo(0);
					};
					if (me.__24.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me.__24.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me.__24.ggApiPlayerType == 'vimeo') {
					me.__24.ggApiPlayer.pause();
					me.__24.ggApiPlayer.setCurrentTime(0);
				}
			} else {
				player.stopSound("\ud604\uad00\ucc3d\uace0\uc601\uc0c1");
			}
			me.__23.style.transition='none';
			me.__23.style.visibility='hidden';
			me.__23.ggVisible=false;
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_9=document.createElement('div');
		el.ggId="Rectangle 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_9.ggUpdatePosition=function (useTransition) {
		}
		el=me.__24=document.createElement('div');
		me.__24.seekbars = [];
		me.__24.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me.__24.seekbars.length; i++) {
					var seekbar = me.findElements(me.__24.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me.__24.hasChildNodes()) {
				me.__24.removeChild(me.__24.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me.__24.ggVideoNotLoaded == false && me.__24.ggDeactivate && player.isPlaying('_24')) { me.__24.ggDeactivate(); }
				me.__24.ggVideoNotLoaded = true;
				return;
			}
			me.__24.ggVideoNotLoaded = false;
			me.__24__vid=document.createElement('iframe');
			me.__24__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=0&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me.__24__vid.setAttribute('src', ggVideoUrl);
			me.__24__vid.setAttribute('width', '100%');
			me.__24__vid.setAttribute('height', '100%');
			me.__24__vid.setAttribute('allow', 'autoplay');
			me.__24__vid.setAttribute('allowfullscreen', 'true');
			me.__24__vid.setAttribute('style', 'border:none; ; ;');
			me.__24.appendChild(me.__24__vid);
			me.__24.ggApiPlayerType = 'vimeo';
			me.__24.ggApiPlayer = new Vimeo.Player(me.__24__vid);
			me.__24.ggVideoSource = media;
		}
		el.ggId="\ud604\uad00\ucc3d\uace0\uc601\uc0c1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 79.822%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((79.822% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_9.appendChild(me.__24);
		me.__23.appendChild(me._rectangle_9);
		me.divSkin.appendChild(me.__23);
		el=me.__3_=document.createElement('div');
		el.ggId="\uce68\uc2e43 \uc637\uc7a5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 337px;';
		hs+='left : calc(50% - ((600px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((337px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 600px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3_.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__3_.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__3_.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__3_.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__3_.style.transition='transform 0s';
				if (me.__3_.ggCurrentLogicStateScaling == 0) {
					me.__3_.ggParameter.sx = 0.8;
					me.__3_.ggParameter.sy = 0.8;
					me.__3_.style.transform=parameterToTransform(me.__3_.ggParameter);
					skin.updateSize(me.__3_);
				}
				else {
					me.__3_.ggParameter.sx = 1;
					me.__3_.ggParameter.sy = 1;
					me.__3_.style.transform=parameterToTransform(me.__3_.ggParameter);
					skin.updateSize(me.__3_);
				}
			}
		}
		me.__3_.logicBlock_scaling();
		me.__3_.onclick=function (e) {
			if (me.__3_0.ggApiPlayer) {
				if (me.__3_0.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me.__3_0.ggApiPlayer.pauseVideo();
						me.__3_0.ggApiPlayer.seekTo(0);
					};
					if (me.__3_0.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me.__3_0.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me.__3_0.ggApiPlayerType == 'vimeo') {
					me.__3_0.ggApiPlayer.pause();
					me.__3_0.ggApiPlayer.setCurrentTime(0);
				}
			} else {
				player.stopSound("\uce68\uc2e43 \uc637\uc7a5 \uc601\uc0c1");
			}
			me.__3_.style.transition='none';
			me.__3_.style.visibility='hidden';
			me.__3_.ggVisible=false;
		}
		me.__3_.ggUpdatePosition=function (useTransition) {
		}
		el=me.__22=document.createElement('div');
		el.ggId="\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3_0=document.createElement('div');
		me.__3_0.seekbars = [];
		me.__3_0.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me.__3_0.seekbars.length; i++) {
					var seekbar = me.findElements(me.__3_0.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me.__3_0.hasChildNodes()) {
				me.__3_0.removeChild(me.__3_0.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me.__3_0.ggVideoNotLoaded == false && me.__3_0.ggDeactivate && player.isPlaying('_3_0')) { me.__3_0.ggDeactivate(); }
				me.__3_0.ggVideoNotLoaded = true;
				return;
			}
			me.__3_0.ggVideoNotLoaded = false;
			me.__3_0__vid=document.createElement('iframe');
			me.__3_0__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=0&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me.__3_0__vid.setAttribute('src', ggVideoUrl);
			me.__3_0__vid.setAttribute('width', '100%');
			me.__3_0__vid.setAttribute('height', '100%');
			me.__3_0__vid.setAttribute('allow', 'autoplay');
			me.__3_0__vid.setAttribute('allowfullscreen', 'true');
			me.__3_0__vid.setAttribute('style', 'border:none; ; ;');
			me.__3_0.appendChild(me.__3_0__vid);
			me.__3_0.ggApiPlayerType = 'vimeo';
			me.__3_0.ggApiPlayer = new Vimeo.Player(me.__3_0__vid);
			me.__3_0.ggVideoSource = media;
		}
		el.ggId="\uce68\uc2e43 \uc637\uc7a5 \uc601\uc0c1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 79.822%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((79.822% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3_0.ggUpdatePosition=function (useTransition) {
		}
		me.__22.appendChild(me.__3_0);
		me.__3_.appendChild(me.__22);
		me.divSkin.appendChild(me.__3_);
		el=me.__2_=document.createElement('div');
		el.ggId="\uce68\uc2e42 \uc637\uc7a5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 337px;';
		hs+='left : calc(50% - ((600px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((337px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 600px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__2_.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__2_.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__2_.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__2_.style.transition='transform 0s';
				if (me.__2_.ggCurrentLogicStateScaling == 0) {
					me.__2_.ggParameter.sx = 0.8;
					me.__2_.ggParameter.sy = 0.8;
					me.__2_.style.transform=parameterToTransform(me.__2_.ggParameter);
					skin.updateSize(me.__2_);
				}
				else {
					me.__2_.ggParameter.sx = 1;
					me.__2_.ggParameter.sy = 1;
					me.__2_.style.transform=parameterToTransform(me.__2_.ggParameter);
					skin.updateSize(me.__2_);
				}
			}
		}
		me.__2_.logicBlock_scaling();
		me.__2_.onclick=function (e) {
			if (me.__2_0.ggApiPlayer) {
				if (me.__2_0.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me.__2_0.ggApiPlayer.pauseVideo();
						me.__2_0.ggApiPlayer.seekTo(0);
					};
					if (me.__2_0.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me.__2_0.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me.__2_0.ggApiPlayerType == 'vimeo') {
					me.__2_0.ggApiPlayer.pause();
					me.__2_0.ggApiPlayer.setCurrentTime(0);
				}
			} else {
				player.stopSound("\uce68\uc2e42 \uc637\uc7a5 \uc601\uc0c1");
			}
			me.__2_.style.transition='none';
			me.__2_.style.visibility='hidden';
			me.__2_.ggVisible=false;
		}
		me.__2_.ggUpdatePosition=function (useTransition) {
		}
		el=me.__21=document.createElement('div');
		el.ggId="\ubc30\uacbd2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2_0=document.createElement('div');
		me.__2_0.seekbars = [];
		me.__2_0.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me.__2_0.seekbars.length; i++) {
					var seekbar = me.findElements(me.__2_0.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me.__2_0.hasChildNodes()) {
				me.__2_0.removeChild(me.__2_0.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me.__2_0.ggVideoNotLoaded == false && me.__2_0.ggDeactivate && player.isPlaying('_2_0')) { me.__2_0.ggDeactivate(); }
				me.__2_0.ggVideoNotLoaded = true;
				return;
			}
			me.__2_0.ggVideoNotLoaded = false;
			me.__2_0__vid=document.createElement('iframe');
			me.__2_0__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=0&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me.__2_0__vid.setAttribute('src', ggVideoUrl);
			me.__2_0__vid.setAttribute('width', '100%');
			me.__2_0__vid.setAttribute('height', '100%');
			me.__2_0__vid.setAttribute('allow', 'autoplay');
			me.__2_0__vid.setAttribute('allowfullscreen', 'true');
			me.__2_0__vid.setAttribute('style', 'border:none; ; ;');
			me.__2_0.appendChild(me.__2_0__vid);
			me.__2_0.ggApiPlayerType = 'vimeo';
			me.__2_0.ggApiPlayer = new Vimeo.Player(me.__2_0__vid);
			me.__2_0.ggVideoSource = media;
		}
		el.ggId="\uce68\uc2e42 \uc637\uc7a5 \uc601\uc0c1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 79.822%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((79.822% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_0.ggUpdatePosition=function (useTransition) {
		}
		me.__21.appendChild(me.__2_0);
		me.__2_.appendChild(me.__21);
		me.divSkin.appendChild(me.__2_);
		el=me.__18=document.createElement('div');
		el.ggId="\uc8fc\ubc29 \ud558\ubd80\uc7a5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 337px;';
		hs+='left : calc(50% - ((600px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((337px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 600px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__18.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__18.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__18.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__18.style.transition='transform 0s';
				if (me.__18.ggCurrentLogicStateScaling == 0) {
					me.__18.ggParameter.sx = 0.8;
					me.__18.ggParameter.sy = 0.8;
					me.__18.style.transform=parameterToTransform(me.__18.ggParameter);
					skin.updateSize(me.__18);
				}
				else {
					me.__18.ggParameter.sx = 1;
					me.__18.ggParameter.sy = 1;
					me.__18.style.transform=parameterToTransform(me.__18.ggParameter);
					skin.updateSize(me.__18);
				}
			}
		}
		me.__18.logicBlock_scaling();
		me.__18.onclick=function (e) {
			if (me.__19.ggApiPlayer) {
				if (me.__19.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me.__19.ggApiPlayer.pauseVideo();
						me.__19.ggApiPlayer.seekTo(0);
					};
					if (me.__19.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me.__19.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me.__19.ggApiPlayerType == 'vimeo') {
					me.__19.ggApiPlayer.pause();
					me.__19.ggApiPlayer.setCurrentTime(0);
				}
			} else {
				player.stopSound("\uc8fc\ubc29\ud558\ubd80\uc7a5 \uc601\uc0c1");
			}
			me.__18.style.transition='none';
			me.__18.style.visibility='hidden';
			me.__18.ggVisible=false;
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me.__30=document.createElement('div');
		el.ggId="\ubc30\uacbd3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		el=me.__19=document.createElement('div');
		me.__19.seekbars = [];
		me.__19.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me.__19.seekbars.length; i++) {
					var seekbar = me.findElements(me.__19.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me.__19.hasChildNodes()) {
				me.__19.removeChild(me.__19.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me.__19.ggVideoNotLoaded == false && me.__19.ggDeactivate && player.isPlaying('_19')) { me.__19.ggDeactivate(); }
				me.__19.ggVideoNotLoaded = true;
				return;
			}
			me.__19.ggVideoNotLoaded = false;
			me.__19__vid=document.createElement('iframe');
			me.__19__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=0&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me.__19__vid.setAttribute('src', ggVideoUrl);
			me.__19__vid.setAttribute('width', '100%');
			me.__19__vid.setAttribute('height', '100%');
			me.__19__vid.setAttribute('allow', 'autoplay');
			me.__19__vid.setAttribute('allowfullscreen', 'true');
			me.__19__vid.setAttribute('style', 'border:none; ; ;');
			me.__19.appendChild(me.__19__vid);
			me.__19.ggApiPlayerType = 'vimeo';
			me.__19.ggApiPlayer = new Vimeo.Player(me.__19__vid);
			me.__19.ggVideoSource = media;
		}
		el.ggId="\uc8fc\ubc29\ud558\ubd80\uc7a5 \uc601\uc0c1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 79.822%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((79.822% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me.__19);
		me.__18.appendChild(me.__30);
		me.divSkin.appendChild(me.__18);
		el=me.__16=document.createElement('div');
		el.ggId="\ud30c\uc6b0\ub354\ub8f8 \ud558\ubd80\uc7a5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 337px;';
		hs+='left : calc(50% - ((600px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((337px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 600px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__16.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__16.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__16.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__16.style.transition='transform 0s';
				if (me.__16.ggCurrentLogicStateScaling == 0) {
					me.__16.ggParameter.sx = 0.8;
					me.__16.ggParameter.sy = 0.8;
					me.__16.style.transform=parameterToTransform(me.__16.ggParameter);
					skin.updateSize(me.__16);
				}
				else {
					me.__16.ggParameter.sx = 1;
					me.__16.ggParameter.sy = 1;
					me.__16.style.transform=parameterToTransform(me.__16.ggParameter);
					skin.updateSize(me.__16);
				}
			}
		}
		me.__16.logicBlock_scaling();
		me.__16.onclick=function (e) {
			if (me.__17.ggApiPlayer) {
				if (me.__17.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me.__17.ggApiPlayer.pauseVideo();
						me.__17.ggApiPlayer.seekTo(0);
					};
					if (me.__17.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me.__17.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me.__17.ggApiPlayerType == 'vimeo') {
					me.__17.ggApiPlayer.pause();
					me.__17.ggApiPlayer.setCurrentTime(0);
				}
			} else {
				player.stopSound("\ud30c\uc6b0\ub354\ub8f8 \uc601\uc0c1");
			}
			me.__16.style.transition='none';
			me.__16.style.visibility='hidden';
			me.__16.ggVisible=false;
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me.__40=document.createElement('div');
		el.ggId="\ubc30\uacbd4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__17=document.createElement('div');
		me.__17.seekbars = [];
		me.__17.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me.__17.seekbars.length; i++) {
					var seekbar = me.findElements(me.__17.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me.__17.hasChildNodes()) {
				me.__17.removeChild(me.__17.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me.__17.ggVideoNotLoaded == false && me.__17.ggDeactivate && player.isPlaying('_17')) { me.__17.ggDeactivate(); }
				me.__17.ggVideoNotLoaded = true;
				return;
			}
			me.__17.ggVideoNotLoaded = false;
			me.__17__vid=document.createElement('iframe');
			me.__17__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=0&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me.__17__vid.setAttribute('src', ggVideoUrl);
			me.__17__vid.setAttribute('width', '100%');
			me.__17__vid.setAttribute('height', '100%');
			me.__17__vid.setAttribute('allow', 'autoplay');
			me.__17__vid.setAttribute('allowfullscreen', 'true');
			me.__17__vid.setAttribute('style', 'border:none; ; ;');
			me.__17.appendChild(me.__17__vid);
			me.__17.ggApiPlayerType = 'vimeo';
			me.__17.ggApiPlayer = new Vimeo.Player(me.__17__vid);
			me.__17.ggVideoSource = media;
		}
		el.ggId="\ud30c\uc6b0\ub354\ub8f8 \uc601\uc0c1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 79.822%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((79.822% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		me.__40.appendChild(me.__17);
		me.__16.appendChild(me.__40);
		me.divSkin.appendChild(me.__16);
		el=me.__14=document.createElement('div');
		el.ggId="\uc544\uc77c\ub79c\ub4dc \ud558\ubd80\uc7a5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 337px;';
		hs+='left : calc(50% - ((600px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((337px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 600px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__14.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__14.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__14.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__14.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__14.style.transition='transform 0s';
				if (me.__14.ggCurrentLogicStateScaling == 0) {
					me.__14.ggParameter.sx = 0.8;
					me.__14.ggParameter.sy = 0.8;
					me.__14.style.transform=parameterToTransform(me.__14.ggParameter);
					skin.updateSize(me.__14);
				}
				else {
					me.__14.ggParameter.sx = 1;
					me.__14.ggParameter.sy = 1;
					me.__14.style.transform=parameterToTransform(me.__14.ggParameter);
					skin.updateSize(me.__14);
				}
			}
		}
		me.__14.logicBlock_scaling();
		me.__14.onclick=function (e) {
			if (me.__15.ggApiPlayer) {
				if (me.__15.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me.__15.ggApiPlayer.pauseVideo();
						me.__15.ggApiPlayer.seekTo(0);
					};
					if (me.__15.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me.__15.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me.__15.ggApiPlayerType == 'vimeo') {
					me.__15.ggApiPlayer.pause();
					me.__15.ggApiPlayer.setCurrentTime(0);
				}
			} else {
				player.stopSound("\uc544\uc77c\ub79c\ub4dc\ud558\ubd80\uc7a5 \uc601\uc0c1");
			}
			me.__14.style.transition='none';
			me.__14.style.visibility='hidden';
			me.__14.ggVisible=false;
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me.__50=document.createElement('div');
		el.ggId="\ubc30\uacbd5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15=document.createElement('div');
		me.__15.seekbars = [];
		me.__15.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me.__15.seekbars.length; i++) {
					var seekbar = me.findElements(me.__15.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me.__15.hasChildNodes()) {
				me.__15.removeChild(me.__15.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me.__15.ggVideoNotLoaded == false && me.__15.ggDeactivate && player.isPlaying('_15')) { me.__15.ggDeactivate(); }
				me.__15.ggVideoNotLoaded = true;
				return;
			}
			me.__15.ggVideoNotLoaded = false;
			me.__15__vid=document.createElement('iframe');
			me.__15__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=0&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me.__15__vid.setAttribute('src', ggVideoUrl);
			me.__15__vid.setAttribute('width', '100%');
			me.__15__vid.setAttribute('height', '100%');
			me.__15__vid.setAttribute('allow', 'autoplay');
			me.__15__vid.setAttribute('allowfullscreen', 'true');
			me.__15__vid.setAttribute('style', 'border:none; ; ;');
			me.__15.appendChild(me.__15__vid);
			me.__15.ggApiPlayerType = 'vimeo';
			me.__15.ggApiPlayer = new Vimeo.Player(me.__15__vid);
			me.__15.ggVideoSource = media;
		}
		el.ggId="\uc544\uc77c\ub79c\ub4dc\ud558\ubd80\uc7a5 \uc601\uc0c1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 79.822%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((79.822% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		me.__50.appendChild(me.__15);
		me.__14.appendChild(me.__50);
		me.divSkin.appendChild(me.__14);
		el=me.__12=document.createElement('div');
		el.ggId="\uc8fc\ubc29 \uc0c1\ubd80\uc7a5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 337px;';
		hs+='left : calc(50% - ((600px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((337px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 600px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__12.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__12.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__12.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__12.style.transition='transform 0s';
				if (me.__12.ggCurrentLogicStateScaling == 0) {
					me.__12.ggParameter.sx = 0.8;
					me.__12.ggParameter.sy = 0.8;
					me.__12.style.transform=parameterToTransform(me.__12.ggParameter);
					skin.updateSize(me.__12);
				}
				else {
					me.__12.ggParameter.sx = 1;
					me.__12.ggParameter.sy = 1;
					me.__12.style.transform=parameterToTransform(me.__12.ggParameter);
					skin.updateSize(me.__12);
				}
			}
		}
		me.__12.logicBlock_scaling();
		me.__12.onclick=function (e) {
			if (me.__13.ggApiPlayer) {
				if (me.__13.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me.__13.ggApiPlayer.pauseVideo();
						me.__13.ggApiPlayer.seekTo(0);
					};
					if (me.__13.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me.__13.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me.__13.ggApiPlayerType == 'vimeo') {
					me.__13.ggApiPlayer.pause();
					me.__13.ggApiPlayer.setCurrentTime(0);
				}
			} else {
				player.stopSound("\uc8fc\ubc29\uc0c1\ubd80\uc7a5 \uc601\uc0c1");
			}
			me.__12.style.transition='none';
			me.__12.style.visibility='hidden';
			me.__12.ggVisible=false;
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me.__60=document.createElement('div');
		el.ggId="\ubc30\uacbd6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		el=me.__13=document.createElement('div');
		me.__13.seekbars = [];
		me.__13.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me.__13.seekbars.length; i++) {
					var seekbar = me.findElements(me.__13.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me.__13.hasChildNodes()) {
				me.__13.removeChild(me.__13.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me.__13.ggVideoNotLoaded == false && me.__13.ggDeactivate && player.isPlaying('_13')) { me.__13.ggDeactivate(); }
				me.__13.ggVideoNotLoaded = true;
				return;
			}
			me.__13.ggVideoNotLoaded = false;
			me.__13__vid=document.createElement('iframe');
			me.__13__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=0&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me.__13__vid.setAttribute('src', ggVideoUrl);
			me.__13__vid.setAttribute('width', '100%');
			me.__13__vid.setAttribute('height', '100%');
			me.__13__vid.setAttribute('allow', 'autoplay');
			me.__13__vid.setAttribute('allowfullscreen', 'true');
			me.__13__vid.setAttribute('style', 'border:none; ; ;');
			me.__13.appendChild(me.__13__vid);
			me.__13.ggApiPlayerType = 'vimeo';
			me.__13.ggApiPlayer = new Vimeo.Player(me.__13__vid);
			me.__13.ggVideoSource = media;
		}
		el.ggId="\uc8fc\ubc29\uc0c1\ubd80\uc7a5 \uc601\uc0c1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 79.822%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((79.822% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		me.__60.appendChild(me.__13);
		me.__12.appendChild(me.__60);
		me.divSkin.appendChild(me.__12);
		el=me.__7=document.createElement('div');
		el.ggId="\uac70\uc2e4\uc7a5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 179px;';
		hs+='left : calc(50% - ((320px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((179px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 320px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__7.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width >= 640))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__7.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__7.ggCurrentLogicStateSize = newLogicStateSize;
				me.__7.style.transition='width 0s, height 0s';
				if (me.__7.ggCurrentLogicStateSize == 0) {
					me.__7.style.width='800px';
					me.__7.style.height='449px';
					me.__7.style.left = 'calc(50% - (800px / 2))';
					me.__7.style.top = 'calc(50% - (449px / 2))';
					skin.updateSize(me.__7);
				}
				else {
					me.__7.style.width='320px';
					me.__7.style.height='179px';
					me.__7.style.left = 'calc(50% - (320px / 2))';
					me.__7.style.top = 'calc(50% - (179px / 2))';
					skin.updateSize(me.__7);
				}
			}
		}
		me.__7.logicBlock_size();
		me.__7.onclick=function (e) {
			if (me.__11.ggApiPlayer) {
				if (me.__11.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me.__11.ggApiPlayer.pauseVideo();
						me.__11.ggApiPlayer.seekTo(0);
					};
					if (me.__11.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me.__11.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me.__11.ggApiPlayerType == 'vimeo') {
					me.__11.ggApiPlayer.pause();
					me.__11.ggApiPlayer.setCurrentTime(0);
				}
			} else {
				player.stopSound("\uac70\uc2e4\uc7a5 \uc601\uc0c1");
			}
			me.__7.style.transition='none';
			me.__7.style.visibility='hidden';
			me.__7.ggVisible=false;
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me.__70=document.createElement('div');
		el.ggId="\ubc30\uacbd7";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__70.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__70.ggUpdatePosition=function (useTransition) {
		}
		el=me.__11=document.createElement('div');
		me.__11.seekbars = [];
		me.__11.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me.__11.seekbars.length; i++) {
					var seekbar = me.findElements(me.__11.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me.__11.hasChildNodes()) {
				me.__11.removeChild(me.__11.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me.__11.ggVideoNotLoaded == false && me.__11.ggDeactivate && player.isPlaying('_11')) { me.__11.ggDeactivate(); }
				me.__11.ggVideoNotLoaded = true;
				return;
			}
			me.__11.ggVideoNotLoaded = false;
			me.__11__vid=document.createElement('iframe');
			me.__11__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=0&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me.__11__vid.setAttribute('src', ggVideoUrl);
			me.__11__vid.setAttribute('width', '100%');
			me.__11__vid.setAttribute('height', '100%');
			me.__11__vid.setAttribute('allow', 'autoplay');
			me.__11__vid.setAttribute('allowfullscreen', 'true');
			me.__11__vid.setAttribute('style', 'border:none; ; ;');
			me.__11.appendChild(me.__11__vid);
			me.__11.ggApiPlayerType = 'vimeo';
			me.__11.ggApiPlayer = new Vimeo.Player(me.__11__vid);
			me.__11.ggVideoSource = media;
		}
		el.ggId="\uac70\uc2e4\uc7a5 \uc601\uc0c1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 79.822%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((79.822% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		me.__70.appendChild(me.__11);
		me.__7.appendChild(me.__70);
		me.divSkin.appendChild(me.__7);
		el=me.__5=document.createElement('div');
		el.ggId="\ub4dc\ub808\uc2a4\ub8f8 \ud558\ubd80\uc7a5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 337px;';
		hs+='left : calc(50% - ((600px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((337px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 600px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__5.style.transition='transform 0s';
				if (me.__5.ggCurrentLogicStateScaling == 0) {
					me.__5.ggParameter.sx = 0.8;
					me.__5.ggParameter.sy = 0.8;
					me.__5.style.transform=parameterToTransform(me.__5.ggParameter);
					skin.updateSize(me.__5);
				}
				else {
					me.__5.ggParameter.sx = 1;
					me.__5.ggParameter.sy = 1;
					me.__5.style.transform=parameterToTransform(me.__5.ggParameter);
					skin.updateSize(me.__5);
				}
			}
		}
		me.__5.logicBlock_scaling();
		me.__5.onclick=function (e) {
			if (me.__6.ggApiPlayer) {
				if (me.__6.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me.__6.ggApiPlayer.pauseVideo();
						me.__6.ggApiPlayer.seekTo(0);
					};
					if (me.__6.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me.__6.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me.__6.ggApiPlayerType == 'vimeo') {
					me.__6.ggApiPlayer.pause();
					me.__6.ggApiPlayer.setCurrentTime(0);
				}
			} else {
				player.stopSound("\ub4dc\ub808\uc2a4\ub8f8 \uc601\uc0c1");
			}
			me.__5.style.transition='none';
			me.__5.style.visibility='hidden';
			me.__5.ggVisible=false;
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__8=document.createElement('div');
		el.ggId="\ubc30\uacbd8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__6=document.createElement('div');
		me.__6.seekbars = [];
		me.__6.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me.__6.seekbars.length; i++) {
					var seekbar = me.findElements(me.__6.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me.__6.hasChildNodes()) {
				me.__6.removeChild(me.__6.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me.__6.ggVideoNotLoaded == false && me.__6.ggDeactivate && player.isPlaying('_6')) { me.__6.ggDeactivate(); }
				me.__6.ggVideoNotLoaded = true;
				return;
			}
			me.__6.ggVideoNotLoaded = false;
			me.__6__vid=document.createElement('iframe');
			me.__6__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=0&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me.__6__vid.setAttribute('src', ggVideoUrl);
			me.__6__vid.setAttribute('width', '100%');
			me.__6__vid.setAttribute('height', '100%');
			me.__6__vid.setAttribute('allow', 'autoplay');
			me.__6__vid.setAttribute('allowfullscreen', 'true');
			me.__6__vid.setAttribute('style', 'border:none; ; ;');
			me.__6.appendChild(me.__6__vid);
			me.__6.ggApiPlayerType = 'vimeo';
			me.__6.ggApiPlayer = new Vimeo.Player(me.__6__vid);
			me.__6.ggVideoSource = media;
		}
		el.ggId="\ub4dc\ub808\uc2a4\ub8f8 \uc601\uc0c1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 79.822%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((79.822% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		me.__8.appendChild(me.__6);
		me.__5.appendChild(me.__8);
		me.divSkin.appendChild(me.__5);
		el=me.__1=document.createElement('div');
		el.ggId="\uc2e0\ubc1c\uc7a5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 337px;';
		hs+='left : calc(50% - ((600px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((337px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 600px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__1.style.transition='transform 0s';
				if (me.__1.ggCurrentLogicStateScaling == 0) {
					me.__1.ggParameter.sx = 0.8;
					me.__1.ggParameter.sy = 0.8;
					me.__1.style.transform=parameterToTransform(me.__1.ggParameter);
					skin.updateSize(me.__1);
				}
				else {
					me.__1.ggParameter.sx = 1;
					me.__1.ggParameter.sy = 1;
					me.__1.style.transform=parameterToTransform(me.__1.ggParameter);
					skin.updateSize(me.__1);
				}
			}
		}
		me.__1.logicBlock_scaling();
		me.__1.onclick=function (e) {
			if (me.__2.ggApiPlayer) {
				if (me.__2.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me.__2.ggApiPlayer.pauseVideo();
						me.__2.ggApiPlayer.seekTo(0);
					};
					if (me.__2.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me.__2.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me.__2.ggApiPlayerType == 'vimeo') {
					me.__2.ggApiPlayer.pause();
					me.__2.ggApiPlayer.setCurrentTime(0);
				}
			} else {
				player.stopSound("\uc2e0\ubc1c\uc7a5 \uc601\uc0c1");
			}
			me.__1.style.transition='none';
			me.__1.style.visibility='hidden';
			me.__1.ggVisible=false;
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__9=document.createElement('div');
		el.ggId="\ubc30\uacbd9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2=document.createElement('div');
		me.__2.seekbars = [];
		me.__2.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me.__2.seekbars.length; i++) {
					var seekbar = me.findElements(me.__2.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me.__2.hasChildNodes()) {
				me.__2.removeChild(me.__2.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me.__2.ggVideoNotLoaded == false && me.__2.ggDeactivate && player.isPlaying('_2')) { me.__2.ggDeactivate(); }
				me.__2.ggVideoNotLoaded = true;
				return;
			}
			me.__2.ggVideoNotLoaded = false;
			me.__2__vid=document.createElement('iframe');
			me.__2__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=0&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me.__2__vid.setAttribute('src', ggVideoUrl);
			me.__2__vid.setAttribute('width', '100%');
			me.__2__vid.setAttribute('height', '100%');
			me.__2__vid.setAttribute('allow', 'autoplay');
			me.__2__vid.setAttribute('allowfullscreen', 'true');
			me.__2__vid.setAttribute('style', 'border:none; ; ;');
			me.__2.appendChild(me.__2__vid);
			me.__2.ggApiPlayerType = 'vimeo';
			me.__2.ggApiPlayer = new Vimeo.Player(me.__2__vid);
			me.__2.ggVideoSource = media;
		}
		el.ggId="\uc2e0\ubc1c\uc7a5 \uc601\uc0c1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 79.822%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((79.822% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		me.__9.appendChild(me.__2);
		me.__1.appendChild(me.__9);
		me.divSkin.appendChild(me.__1);
		el=me.__=document.createElement('div');
		el.ggId="\uc2e0\ubc1c\uc7a5 \uc120\ubc18";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 337px;';
		hs+='left : calc(50% - ((600px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((337px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 600px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__.style.transition='transform 0s';
				if (me.__.ggCurrentLogicStateScaling == 0) {
					me.__.ggParameter.sx = 0.8;
					me.__.ggParameter.sy = 0.8;
					me.__.style.transform=parameterToTransform(me.__.ggParameter);
					skin.updateSize(me.__);
				}
				else {
					me.__.ggParameter.sx = 1;
					me.__.ggParameter.sy = 1;
					me.__.style.transform=parameterToTransform(me.__.ggParameter);
					skin.updateSize(me.__);
				}
			}
		}
		me.__.logicBlock_scaling();
		me.__.onclick=function (e) {
			if (me.__0.ggApiPlayer) {
				if (me.__0.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me.__0.ggApiPlayer.pauseVideo();
						me.__0.ggApiPlayer.seekTo(0);
					};
					if (me.__0.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me.__0.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me.__0.ggApiPlayerType == 'vimeo') {
					me.__0.ggApiPlayer.pause();
					me.__0.ggApiPlayer.setCurrentTime(0);
				}
			} else {
				player.stopSound("\uc2e0\ubc1c\uc7a5 \uc120\ubc18 \uc601\uc0c1");
			}
			me.__.style.transition='none';
			me.__.style.visibility='hidden';
			me.__.ggVisible=false;
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__10=document.createElement('div');
		el.ggId="\ubc30\uacbd10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__0=document.createElement('div');
		me.__0.seekbars = [];
		me.__0.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me.__0.seekbars.length; i++) {
					var seekbar = me.findElements(me.__0.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me.__0.hasChildNodes()) {
				me.__0.removeChild(me.__0.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me.__0.ggVideoNotLoaded == false && me.__0.ggDeactivate && player.isPlaying('_0')) { me.__0.ggDeactivate(); }
				me.__0.ggVideoNotLoaded = true;
				return;
			}
			me.__0.ggVideoNotLoaded = false;
			me.__0__vid=document.createElement('iframe');
			me.__0__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=0&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me.__0__vid.setAttribute('src', ggVideoUrl);
			me.__0__vid.setAttribute('width', '100%');
			me.__0__vid.setAttribute('height', '100%');
			me.__0__vid.setAttribute('allow', 'autoplay');
			me.__0__vid.setAttribute('allowfullscreen', 'true');
			me.__0__vid.setAttribute('style', 'border:none; ; ;');
			me.__0.appendChild(me.__0__vid);
			me.__0.ggApiPlayerType = 'vimeo';
			me.__0.ggApiPlayer = new Vimeo.Player(me.__0__vid);
			me.__0.ggVideoSource = media;
		}
		el.ggId="\uc2e0\ubc1c\uc7a5 \uc120\ubc18 \uc601\uc0c1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 79.822%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((79.822% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me.__0);
		me.__.appendChild(me.__10);
		me.divSkin.appendChild(me.__);
		me.__43.logicBlock_visible();
		me.__45.logicBlock_visible();
		me.__57.logicBlock_backgroundcolor();
		me.__2_2.logicBlock_backgroundcolor();
		me.__1_0.logicBlock_backgroundcolor();
		me.__55.logicBlock_backgroundcolor();
		me.__53.logicBlock_backgroundcolor();
		me.__54.logicBlock_backgroundcolor();
		me.__51.logicBlock_backgroundcolor();
		me.__3_1.logicBlock_backgroundcolor();
		me.__2_1.logicBlock_backgroundcolor();
		me.__1_.logicBlock_backgroundcolor();
		me.__48.logicBlock_backgroundcolor();
		me._svg_4.logicBlock_angle();
		me._footer.logicBlock_size();
		me._footer_bg.logicBlock_size();
		me._footer_info.logicBlock_visible();
		me._footer_infom.logicBlock_visible();
		me.__39.logicBlock_visible();
		me._timer_1.logicBlock_visible();
		me._timer_2.logicBlock_visible();
		me.__28.logicBlock_visible();
		me._svg_5m.logicBlock_angle();
		me.__33.logicBlock_visible();
		me._m10.logicBlock_backgroundcolor();
		me.__2m0.logicBlock_backgroundcolor();
		me._m8.logicBlock_backgroundcolor();
		me._m6.logicBlock_backgroundcolor();
		me._m4.logicBlock_backgroundcolor();
		me._m5.logicBlock_backgroundcolor();
		me.__m2.logicBlock_backgroundcolor();
		me.__3_m.logicBlock_backgroundcolor();
		me.__2_m.logicBlock_backgroundcolor();
		me.__1_m.logicBlock_backgroundcolor();
		me._m1.logicBlock_backgroundcolor();
		me._map_1m.ggMarkerInstances=[];
		me._map_1m.ggLastNodeId=null;
		me._map_1m.ggSimpleFloorplanMarkerArray=[];
		me._map_1m.ggFloorplanWidth=0;
		me._map_1m.ggFloorplanHeight=0;
		me._map_1m__mapdiv=document.createElement('div');
		me._map_1m__mapdiv.className='ggskin ggskin_map';
		me._map_1m.appendChild(me._map_1m__mapdiv);
		me._map_1m__img=document.createElement('img');
		me._map_1m__img.className='ggskin ggskin_map';
		me._map_1m__mapdiv.appendChild(me._map_1m__img);
		me._map_1m.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1m.ggRadar.update=function() {
			var radar=me._map_1m.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1m.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1m.ggFilteredIds.length > 0 && me._map_1m.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1m.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1m.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1m__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',50);
				radar.radarElement.setAttributeNS(null,'height',50);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 50 50');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 25 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 25 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 25 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 25 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 25;
				arcY1 += 25;
				arcX2 += 25;
				arcY2 += 25;
				var radarPathString = 'M25,25 L' + arcX1 + ',' + arcY1 + ' A 25 25 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#026df3');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#026df3');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1m__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 25;
				var radarYPos = activeMarker.radarYPos - 25;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1m.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1m__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1m.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1m.clientWidth;
			var mapHeight = me._map_1m.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1m.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1m__img.setAttribute('src', imageFilename);
		me._map_1m__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_1m.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_1m.ggFloorplanHeight / 2 + 'px;width:' + me._map_1m.ggFloorplanWidth + 'px;height:' + me._map_1m.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_1m__img.setAttribute('style','width:' + me._map_1m.ggFloorplanWidth + 'px;height:' + me._map_1m.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_1m.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1m.clientWidth / me._map_1m.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1m.ggFloorplanHeight = me._map_1m.clientHeight;
				me._map_1m.ggFloorplanWidth = me._map_1m.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1m.ggFloorplanWidth = me._map_1m.clientWidth;
				me._map_1m.ggFloorplanHeight = me._map_1m.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1m.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_1m.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_1m.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1m.ggPermeableMap = true;
			} else {
				me._map_1m.ggPermeableMap = false;
			}
			me._map_1m.ggCalculateFloorplanSize(mapDetails);
			me._map_1m.ggShowSimpleFloorplan(mapDetails);
			me._map_1m.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_1m.ggMapNotLoaded = false;
		}
		me._map_1m.ggClearMap=function() {
			me._map_1m.ggClearMapMarkers();
			me._map_1m.ggMapNotLoaded = true;
		}
		me._map_1m.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1m.ggMapId = mapId;
			if (!me._map_1m.ggMapNotLoaded) {
				me._map_1m.ggClearMap();
				me._map_1m.ggInitMap();
				me._map_1m.ggInitMapMarkers();
			}
		}
		me._map_1m.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1m.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1m.ggMapId);
					var xPos = (me._map_1m.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1m.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1m.ggHMarkerAnchorOffset;
					yPos -= me._map_1m.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1m.style['z-index'] + 2;
				}
			}
		}
		me._map_1m.ggInitMapMarkers=function() {
			me._map_1m.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1m.ggFilteredIds = [];
			if (me._map_1m.ggFilter != '') {
				var filter = me._map_1m.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1m.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1m.ggFilteredIds.length > 0) ids = me._map_1m.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1m.ggMapId);
				if (coords.length>=2) {
					me._map_1m.ggHMarkerAnchorOffset = 12;
					me._map_1m.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_1m.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_1m.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1m__mapdiv.appendChild(marker);
				}
			}
			me._map_1m.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1m);
		}
		me._map_1m.ggClearMapMarkers=function() {
			for (id in me._map_1m.ggSimpleFloorplanMarkerArray) {
				if (me._map_1m.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1m__mapdiv.removeChild(me._map_1m.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1m.ggMarkerInstances=[];
			me._map_1m.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_1m.logicBlock_visible();
		me._map_1m.logicBlock_alpha();
		me._map_2m.ggMarkerInstances=[];
		me._map_2m.ggLastNodeId=null;
		me._map_2m.ggSimpleFloorplanMarkerArray=[];
		me._map_2m.ggFloorplanWidth=0;
		me._map_2m.ggFloorplanHeight=0;
		me._map_2m__mapdiv=document.createElement('div');
		me._map_2m__mapdiv.className='ggskin ggskin_map';
		me._map_2m.appendChild(me._map_2m__mapdiv);
		me._map_2m__img=document.createElement('img');
		me._map_2m__img.className='ggskin ggskin_map';
		me._map_2m__mapdiv.appendChild(me._map_2m__img);
		me._map_2m.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_2m.ggRadar.update=function() {
			var radar=me._map_2m.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_2m.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_2m.ggFilteredIds.length > 0 && me._map_2m.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_2m.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_2m.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_2m__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',50);
				radar.radarElement.setAttributeNS(null,'height',50);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 50 50');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 25 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 25 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 25 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 25 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 25;
				arcY1 += 25;
				arcX2 += 25;
				arcY2 += 25;
				var radarPathString = 'M25,25 L' + arcX1 + ',' + arcY1 + ' A 25 25 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#026df3');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#026df3');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_2m__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 25;
				var radarYPos = activeMarker.radarYPos - 25;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_2m.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_2m__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_2m.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_2m.clientWidth;
			var mapHeight = me._map_2m.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_2m.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_2m__img.setAttribute('src', imageFilename);
		me._map_2m__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_2m.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_2m.ggFloorplanHeight / 2 + 'px;width:' + me._map_2m.ggFloorplanWidth + 'px;height:' + me._map_2m.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_2m__img.setAttribute('style','width:' + me._map_2m.ggFloorplanWidth + 'px;height:' + me._map_2m.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_2m.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_2m.clientWidth / me._map_2m.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_2m.ggFloorplanHeight = me._map_2m.clientHeight;
				me._map_2m.ggFloorplanWidth = me._map_2m.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_2m.ggFloorplanWidth = me._map_2m.clientWidth;
				me._map_2m.ggFloorplanHeight = me._map_2m.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_2m.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_2m.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_2m.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_2m.ggPermeableMap = true;
			} else {
				me._map_2m.ggPermeableMap = false;
			}
			me._map_2m.ggCalculateFloorplanSize(mapDetails);
			me._map_2m.ggShowSimpleFloorplan(mapDetails);
			me._map_2m.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_2m.ggMapNotLoaded = false;
		}
		me._map_2m.ggClearMap=function() {
			me._map_2m.ggClearMapMarkers();
			me._map_2m.ggMapNotLoaded = true;
		}
		me._map_2m.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_2m.ggMapId = mapId;
			if (!me._map_2m.ggMapNotLoaded) {
				me._map_2m.ggClearMap();
				me._map_2m.ggInitMap();
				me._map_2m.ggInitMapMarkers();
			}
		}
		me._map_2m.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_2m.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_2m.ggMapId);
					var xPos = (me._map_2m.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_2m.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_2m.ggHMarkerAnchorOffset;
					yPos -= me._map_2m.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_2m.style['z-index'] + 2;
				}
			}
		}
		me._map_2m.ggInitMapMarkers=function() {
			me._map_2m.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_2m.ggFilteredIds = [];
			if (me._map_2m.ggFilter != '') {
				var filter = me._map_2m.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_2m.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_2m.ggFilteredIds.length > 0) ids = me._map_2m.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_2m.ggMapId);
				if (coords.length>=2) {
					me._map_2m.ggHMarkerAnchorOffset = 12;
					me._map_2m.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_2m.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_2m.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_2m__mapdiv.appendChild(marker);
				}
			}
			me._map_2m.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_2m);
		}
		me._map_2m.ggClearMapMarkers=function() {
			for (id in me._map_2m.ggSimpleFloorplanMarkerArray) {
				if (me._map_2m.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_2m__mapdiv.removeChild(me._map_2m.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_2m.ggMarkerInstances=[];
			me._map_2m.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_2m.logicBlock_visible();
		me._map_2m.logicBlock_alpha();
		me._svg_4m.logicBlock_angle();
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__normal = clonedNormalElement._map_pin;
		me._markertemplate__normalInst = clonedNormalElement;
		me._markertemplate__normal.style.visibility='inherit';
		me._markertemplate__normal.style.left='-12px';
		me._markertemplate__normal.style.top='-20px';
		me._markertemplate.ggMarkerNormal=me._markertemplate__normal;
		me._markertemplate.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__active = clonedActiveElement._map_pin;
		me._markertemplate__activeInst = clonedActiveElement;
		me._markertemplate__active.style.visibility='hidden';
		me._markertemplate__active.style.left='-12px';
		me._markertemplate__active.style.top='-20px';
		me._markertemplate.ggMarkerActive=me._markertemplate__active;
		me._markertemplate.ggMarkerInstances.push(clonedActiveElement);
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__active,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__active);
		}
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__normal,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__normal);
		}
		for (var i = 0; i < me._markertemplate.childNodes.length; i++) {
			me._markertemplate.ggMarkerInstances.push(me._markertemplate.childNodes[i]);
		}
		me.__26.logicBlock_scaling();
		me.__25.logicBlock_scaling();
		me._video_1.ggInitMedia('949753406');
		me.__23.logicBlock_scaling();
		me.__24.ggInitMedia('949754540');
		me.__3_.logicBlock_scaling();
		me.__3_0.ggInitMedia('949756621');
		me.__2_.logicBlock_scaling();
		me.__2_0.ggInitMedia('949756471');
		me.__18.logicBlock_scaling();
		me.__19.ggInitMedia('949754563/3a4e06e675');
		me.__16.logicBlock_scaling();
		me.__17.ggInitMedia('949756790');
		me.__14.logicBlock_scaling();
		me.__15.ggInitMedia('949754563');
		me.__12.logicBlock_scaling();
		me.__13.ggInitMedia('949753393');
		me.__7.logicBlock_size();
		me.__11.ggInitMedia('949753114');
		me.__5.logicBlock_scaling();
		me.__6.ggInitMedia('949753393');
		me.__1.logicBlock_scaling();
		me.__2.ggInitMedia('949753406');
		me.__.logicBlock_scaling();
		me.__0.ggInitMedia('949753406');
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me.__57.logicBlock_backgroundcolor();
			me.__2_2.logicBlock_backgroundcolor();
			me.__1_0.logicBlock_backgroundcolor();
			me.__55.logicBlock_backgroundcolor();
			me.__53.logicBlock_backgroundcolor();
			me.__54.logicBlock_backgroundcolor();
			me.__51.logicBlock_backgroundcolor();
			me.__3_1.logicBlock_backgroundcolor();
			me.__2_1.logicBlock_backgroundcolor();
			me.__1_.logicBlock_backgroundcolor();
			me.__48.logicBlock_backgroundcolor();
			me._svg_4.logicBlock_angle();
			me._timer_1.logicBlock_visible();
			me._timer_2.logicBlock_visible();
			me._svg_5m.logicBlock_angle();
			me.__33.logicBlock_visible();
			me._m10.logicBlock_backgroundcolor();
			me.__2m0.logicBlock_backgroundcolor();
			me._m8.logicBlock_backgroundcolor();
			me._m6.logicBlock_backgroundcolor();
			me._m4.logicBlock_backgroundcolor();
			me._m5.logicBlock_backgroundcolor();
			me.__m2.logicBlock_backgroundcolor();
			me.__3_m.logicBlock_backgroundcolor();
			me.__2_m.logicBlock_backgroundcolor();
			me.__1_m.logicBlock_backgroundcolor();
			me._m1.logicBlock_backgroundcolor();
			me._map_1m.logicBlock_visible();
			me._map_1m.logicBlock_alpha();
			for (var i=0; i < me._map_1m.ggMarkerInstances.length; i++) {
				me._map_1m.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_1m.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1m.ggCalculateFloorplanSize(mapDetails);
				me._map_1m.ggShowSimpleFloorplan(mapDetails);
				me._map_1m.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1m.ggRadar) me._map_1m.ggRadar.update();
			if (me._map_1m.ggLastNodeId) {
				var lastActiveMarker = me._map_1m.ggSimpleFloorplanMarkerArray[me._map_1m.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1m.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1m.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1m.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1m.ggChangeMap(mapId);
					}
				}
			}
			me._map_1m.ggLastNodeId = id;
			me._map_1m.ggRadar.update();
			me._map_2m.logicBlock_visible();
			me._map_2m.logicBlock_alpha();
			for (var i=0; i < me._map_2m.ggMarkerInstances.length; i++) {
				me._map_2m.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_2m.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2m.ggCalculateFloorplanSize(mapDetails);
				me._map_2m.ggShowSimpleFloorplan(mapDetails);
				me._map_2m.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2m.ggRadar) me._map_2m.ggRadar.update();
			if (me._map_2m.ggLastNodeId) {
				var lastActiveMarker = me._map_2m.ggSimpleFloorplanMarkerArray[me._map_2m.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_2m.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_2m.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_2m.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_2m.ggChangeMap(mapId);
					}
				}
			}
			me._map_2m.ggLastNodeId = id;
			me._map_2m.ggRadar.update();
			me._svg_4m.logicBlock_angle();
			me._markertemplate__normalInst.ggEvent_changenode();
			me._markertemplate__activeInst.ggEvent_changenode();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me._svg_4.logicBlock_angle();
			me._timer_1.ggTimestamp=skin.ggCurrentTime;
			me._timer_1.ggTimeout=1000;
			me._svg_5m.logicBlock_angle();
			me.__33.logicBlock_visible();
			me._map_1m.logicBlock_alpha();
			for (var i=0; i < me._map_1m.ggMarkerInstances.length; i++) {
				me._map_1m.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_1m.ggVisible) {
				me._map_1m.ggClearMap();
				me._map_1m.ggInitMap(false);
				me._map_1m.ggInitMapMarkers(true);
			}
			me._map_2m.logicBlock_alpha();
			for (var i=0; i < me._map_2m.ggMarkerInstances.length; i++) {
				me._map_2m.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_2m.ggVisible) {
				me._map_2m.ggClearMap();
				me._map_2m.ggInitMap(false);
				me._map_2m.ggInitMapMarkers(true);
			}
			me._svg_4m.logicBlock_angle();
			me._markertemplate__normalInst.ggEvent_configloaded();
			me._markertemplate__activeInst.ggEvent_configloaded();
		});
		player.addListener('positionchanged', function(event) {
			me._map_1m.ggRadar.update();
			me._map_2m.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me.__43.logicBlock_visible();
			me.__45.logicBlock_visible();
			me._footer.logicBlock_size();
			me._footer_bg.logicBlock_size();
			me._footer_info.logicBlock_visible();
			me._footer_infom.logicBlock_visible();
			me.__39.logicBlock_visible();
			me.__28.logicBlock_visible();
			me.__26.logicBlock_scaling();
			me.__25.logicBlock_scaling();
			me.__23.logicBlock_scaling();
			me.__3_.logicBlock_scaling();
			me.__2_.logicBlock_scaling();
			me.__18.logicBlock_scaling();
			me.__16.logicBlock_scaling();
			me.__14.logicBlock_scaling();
			me.__12.logicBlock_scaling();
			me.__7.logicBlock_size();
			me.__5.logicBlock_scaling();
			me.__1.logicBlock_scaling();
			me.__.logicBlock_scaling();
		});
		player.addListener('varchanged_vis_floorplan', function(event) {
			me._svg_4.logicBlock_angle();
			me._map_1m.logicBlock_alpha();
			me._map_2m.logicBlock_alpha();
			me._svg_4m.logicBlock_angle();
		});
		player.addListener('varchanged_vis_icon', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_icon();
				}
			}
		});
		player.addListener('varchanged_vis_roomMobile', function(event) {
			me._svg_5m.logicBlock_angle();
			me.__33.logicBlock_visible();
		});
	};
	function SkinHotspotClass__3(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__3=document.createElement('div');
		el.ggId="\ud558\uc790 \ub3d9\uc601\uc0c1-3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__3.onclick=function (e) {
			if (
				(
					((me.ggUserdata.tags.indexOf("\uc8fc\ubc29") != -1))
				)
			) {
				skin.__12.ggVisible = !skin.__12.ggVisible;
				var flag=skin.__12.ggVisible;
				skin.__12.style.transition='none';
				skin.__12.style.visibility=((flag)&&(Number(skin.__12.style.opacity)>0||!skin.__12.style.opacity))?'inherit':'hidden';
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__3.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__3.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_3']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__3.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_3']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_7=document.createElement('div');
		el.ggId="Rectangle 7";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_7.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1wbGF5LWNpcmNsZSIgd2lkdGg9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiA8Y2lyY2xlIHI9IjEwIiBjeT0iMTIiIGN4PSIxMiIvPgogPHBvbHlnb24gcG9pbnRzPSIxMCA4IDE2IDEyIDEwIDE2IDEwIDgiLz4KPC9zdmc+Cg==';
		me._svg_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_7.appendChild(me._svg_1);
		me.__3.appendChild(me._rectangle_7);
			me.__div = me.__3;
	};
	function SkinHotspotClass__4(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__4=document.createElement('div');
		el.ggId="\ud558\uc790 \ub3d9\uc601\uc0c1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__4.onclick=function (e) {
			if (
				(
					((me.ggUserdata.tags.indexOf("\ud0a4\ud070\uc7a5") != -1))
				)
			) {
				skin.__25.ggVisible = !skin.__25.ggVisible;
				var flag=skin.__25.ggVisible;
				skin.__25.style.transition='none';
				skin.__25.style.visibility=((flag)&&(Number(skin.__25.style.opacity)>0||!skin.__25.style.opacity))?'inherit':'hidden';
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("\ud604\uad00\ucc3d\uace0") != -1))
				)
			) {
				skin.__23.ggVisible = !skin.__23.ggVisible;
				var flag=skin.__23.ggVisible;
				skin.__23.style.transition='none';
				skin.__23.style.visibility=((flag)&&(Number(skin.__23.style.opacity)>0||!skin.__23.style.opacity))?'inherit':'hidden';
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("\uce68\uc2e43") != -1))
				)
			) {
				skin.__3_.ggVisible = !skin.__3_.ggVisible;
				var flag=skin.__3_.ggVisible;
				skin.__3_.style.transition='none';
				skin.__3_.style.visibility=((flag)&&(Number(skin.__3_.style.opacity)>0||!skin.__3_.style.opacity))?'inherit':'hidden';
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("\uce68\uc2e42") != -1))
				)
			) {
				skin.__2_.ggVisible = !skin.__2_.ggVisible;
				var flag=skin.__2_.ggVisible;
				skin.__2_.style.transition='none';
				skin.__2_.style.visibility=((flag)&&(Number(skin.__2_.style.opacity)>0||!skin.__2_.style.opacity))?'inherit':'hidden';
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("\uc8fc\ubc29") != -1))
				)
			) {
				skin.__18.ggVisible = !skin.__18.ggVisible;
				var flag=skin.__18.ggVisible;
				skin.__18.style.transition='none';
				skin.__18.style.visibility=((flag)&&(Number(skin.__18.style.opacity)>0||!skin.__18.style.opacity))?'inherit':'hidden';
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("\ud30c\uc6b0\ub354\ub8f8") != -1))
				)
			) {
				skin.__16.ggVisible = !skin.__16.ggVisible;
				var flag=skin.__16.ggVisible;
				skin.__16.style.transition='none';
				skin.__16.style.visibility=((flag)&&(Number(skin.__16.style.opacity)>0||!skin.__16.style.opacity))?'inherit':'hidden';
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("\uac70\uc2e4\uc7a5") != -1))
				)
			) {
				skin.__7.ggVisible = !skin.__7.ggVisible;
				var flag=skin.__7.ggVisible;
				skin.__7.style.transition='none';
				skin.__7.style.visibility=((flag)&&(Number(skin.__7.style.opacity)>0||!skin.__7.style.opacity))?'inherit':'hidden';
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("\ub4dc\ub808\uc2a4\ub8f8") != -1))
				)
			) {
				skin.__5.ggVisible = !skin.__5.ggVisible;
				var flag=skin.__5.ggVisible;
				skin.__5.style.transition='none';
				skin.__5.style.visibility=((flag)&&(Number(skin.__5.style.opacity)>0||!skin.__5.style.opacity))?'inherit':'hidden';
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__4.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__4.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_4']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__4.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_4']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_70=document.createElement('div');
		el.ggId="Rectangle 7";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_70.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_70.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_10=document.createElement('div');
		els=me._svg_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1wbGF5LWNpcmNsZSIgd2lkdGg9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiA8Y2lyY2xlIHI9IjEwIiBjeT0iMTIiIGN4PSIxMiIvPgogPHBvbHlnb24gcG9pbnRzPSIxMCA4IDE2IDEyIDEwIDE2IDEwIDgiLz4KPC9zdmc+Cg==';
		me._svg_10__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_10.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_70.appendChild(me._svg_10);
		me.__4.appendChild(me._rectangle_70);
			me.__div = me.__4;
	};
	function SkinHotspotClass__20(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__20=document.createElement('div');
		el.ggId="\ud558\uc790 \ub3d9\uc601\uc0c1-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__20.onclick=function (e) {
			if (
				(
					((me.ggUserdata.tags.indexOf("\uc8fc\ubc29") != -1))
				)
			) {
				skin.__14.ggVisible = !skin.__14.ggVisible;
				var flag=skin.__14.ggVisible;
				skin.__14.style.transition='none';
				skin.__14.style.visibility=((flag)&&(Number(skin.__14.style.opacity)>0||!skin.__14.style.opacity))?'inherit':'hidden';
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("\ud604\uad00") != -1))
				)
			) {
				skin.__.ggVisible = !skin.__.ggVisible;
				var flag=skin.__.ggVisible;
				skin.__.style.transition='none';
				skin.__.style.visibility=((flag)&&(Number(skin.__.style.opacity)>0||!skin.__.style.opacity))?'inherit':'hidden';
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__20.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__20.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_20']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__20.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_20']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_71=document.createElement('div');
		el.ggId="Rectangle 7";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_71.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_71.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_11=document.createElement('div');
		els=me._svg_11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1wbGF5LWNpcmNsZSIgd2lkdGg9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiA8Y2lyY2xlIHI9IjEwIiBjeT0iMTIiIGN4PSIxMiIvPgogPHBvbHlnb24gcG9pbnRzPSIxMCA4IDE2IDEyIDEwIDE2IDEwIDgiLz4KPC9zdmc+Cg==';
		me._svg_11__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_11.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_71.appendChild(me._svg_11);
		me.__20.appendChild(me._rectangle_71);
			me.__div = me.__20;
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((41px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_active.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateSize == 0) {
					me._map_pin_active.style.width='13px';
					me._map_pin_active.style.height='13px';
					me._map_pin_active.style.left = 'calc(50% - (13px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (13px / 2))';
					skin.updateSize(me._map_pin_active);
				}
				else if (me._map_pin_active.ggCurrentLogicStateSize == 1) {
					me._map_pin_active.style.width='13px';
					me._map_pin_active.style.height='13px';
					me._map_pin_active.style.left = 'calc(50% - (13px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (13px / 2))';
					skin.updateSize(me._map_pin_active);
				}
				else {
					me._map_pin_active.style.width='15px';
					me._map_pin_active.style.height='15px';
					me._map_pin_active.style.left = 'calc(50% - (15px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (15px / 2))';
					skin.updateSize(me._map_pin_active);
				}
			}
		}
		me._map_pin_active.logicBlock_size();
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
			}
		}
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active.style.opacity == 0.0) { me._map_pin_active.style.visibility="hidden"; } }, 505);
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_active.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((13px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_normal.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateSize == 0) {
					me._map_pin_normal.style.width='10px';
					me._map_pin_normal.style.height='19px';
					me._map_pin_normal.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (19px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
				else if (me._map_pin_normal.ggCurrentLogicStateSize == 1) {
					me._map_pin_normal.style.width='10px';
					me._map_pin_normal.style.height='19px';
					me._map_pin_normal.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (19px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
				else {
					me._map_pin_normal.style.width='13px';
					me._map_pin_normal.style.height='22px';
					me._map_pin_normal.style.left = 'calc(50% - (13px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (22px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
			}
		}
		me._map_pin_normal.logicBlock_size();
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.1;
					me._map_pin_normal.ggParameter.sy = 1.1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
			}
		}
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha();
		me._map_pin_normal.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_normal);
		me._map_pin_active.logicBlock_size();
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_normal.logicBlock_size();
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._map_pin_active.logicBlock_alpha();
				me._map_pin_normal.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._map_pin_active.logicBlock_size();
				me._map_pin_normal.logicBlock_size();
			};
			me.ggEvent_sizechanged=function() {
				me._map_pin_active.logicBlock_size();
				me._map_pin_normal.logicBlock_size();
			};
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 56px;';
		hs+='position : absolute;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node.style.transition='transform 0s';
				if (me._ht_node.ggCurrentLogicStateScaling == 0) {
					me._ht_node.ggParameter.sx = 0.7;
					me._ht_node.ggParameter.sy = 0.7;
					me._ht_node.style.transform=parameterToTransform(me._ht_node.ggParameter);
					skin.updateSize(me._ht_node);
				}
				else {
					me._ht_node.ggParameter.sx = 1;
					me._ht_node.ggParameter.sy = 1;
					me._ht_node.style.transform=parameterToTransform(me._ht_node.ggParameter);
					skin.updateSize(me._ht_node);
				}
			}
		}
		me._ht_node.logicBlock_scaling();
		me._ht_node.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_2=document.createElement('div');
		els=me._external_2__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_2.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_2.ggSubElement.setAttribute('alt', player._(me._external_2.ggAltText));
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_2.ggText_untranslated = img;
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_2.ggSubElement.style.width = '0px';
			me._external_2.ggSubElement.style.height = '0px';
			me._external_2.ggSubElement.src='';
			me._external_2.ggSubElement.src=me._external_2.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_2.ggText != player._(me._external_2.ggText_untranslated)) {
				me._external_2.ggText = player._(me._external_2.ggText_untranslated);
				me._external_2.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_2.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._external_2.onmouseover=function (e) {
			me.elementMouseOver['external_2']=true;
			me._image_3.logicBlock_alpha();
			me._rectangle_5.logicBlock_alpha();
			me._rectangle_5.logicBlock_scaling();
		}
		me._external_2.onmouseout=function (e) {
			me.elementMouseOver['external_2']=false;
			me._image_3.logicBlock_alpha();
			me._rectangle_5.logicBlock_alpha();
			me._rectangle_5.logicBlock_scaling();
		}
		me._external_2.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_2.clientWidth;
			var parentHeight = me._external_2.clientHeight;
			var img = me._external_2__img;
			var aspectRatioDiv = me._external_2.clientWidth / me._external_2.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			if (!me._external_2.ggScrollbars || currentWidth < me._external_2.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_2.ggScrollbars || currentHeight < me._external_2.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAABGdBTUEAALGPC/xhBQAACklpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAAEiJnVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQG'+
			'AAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6c'+
			'wR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCa'+
			'IkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj'+
			'9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj'+
			'1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisr'+
			'kw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUO'+
			'ihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/stRzjPAAAAIGNI'+
			'Uk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAJcEhZcwAACxMAAAsTAQCanBgAABkASURBVHic7d13lF1lvcbx76SRIFGaEMFIFwEpgqGKSBcMghAVxQoKFy8IoqigiPRLkyaCggEEQSGgCKLCQgN4KVKsQEwImAuX3tIbybl/PJmbIc6QmTl77/f97f181mItXJJzfknmPOfdb/m9Ha1WCzOzCAakLsDMrLccWGYWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFoYDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWGYWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFo'+
			'YDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWGYWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFoYDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWGYWhgPLzMJwYJlZGA4sMwvDgWXt2gmYAMwFXgNaXf5ZAMwDpgPjgLUS1Wg10dFqtVLXYPGsBPwK2Lafv/4uYH/g6cIqskZwYFlfrIKCaquCXu9eYF/gmYJez2rOgWW99Q9go5Je+y/A7sDzJb2+1YQDy5bmfuC9Fb3XZGALYGpF72fBeNLdurMi8Ds0cV5VWAGsA7wK/AnNk5m9'+
			'jgPLuhqCguolYLeEdYwCXgTGA6smrMMy40dCA+gAbgI+lLqQHjyERnr+YW04j7CabRm06reQfMMKYHNU4wOpC7G0HFjNtCwKqjnAXolr6Yst0Cjrj8BbEtdiCTiwmmUocAUwk1hBtaTt0OT8HcDKaUuxKjmwmmEYcDEwG/hM4lqK9H7gBeBGtLJpNedJ9/obC3yWZnw5/Rr4JDAtdSFWDgdWPQ0EzgcORSuATdICbkM7561mmvCt2ySDgPNQ14Qv0bywAv2ed0PB9UtgeNJqrFAeYdXHRcAhNDOklua3wGjU7sYC8wgrvtPQHqX/wGHVkw+iUeetqQux9jiwYhoAnADMB76Jg6q3dkXhfj06hmTB+JEwnuOAE1MXURO3kPcOf1uCAyuOI4FzUhdRU+OAj6YuwpbOj4R5GwAchR5jHFblGYNWFa9B5ystUw6sfB2IVr'+
			'XOJt4c1W1oW0U0+6PzldemLsS650fC/HwOuATtqYrmRWBdXt8x9ErgU2nKadvlwOdTF2GLObDy8WngJ6mL6Kc5wA6oU2h3lkONAft7y05qPyVu6NaKHwnTG4Me/SKG1Xx0dm8YPYcVwAzUYWFNYGL5ZRXuADTHdWnqQprOgZXOx9Cj03XE/Hs4Du1luqYPv2YKsD6wCQq7aA5CCyA/Jt68Yi34kbB6HwGuRr2pIhqHWtTMbvN1BqA7Ca9ru6I0FqLeYgemLqRJIn6zR/VhdO/eDcQMq4eA9dB+pXbDCvSBH4cWF05ER2ciGYAm5Ftoy8ngtOU0g0dY5dsXNc97a+pC+ulxtCBwd8nvMxxt4fhiye9Tlvlojivido4wHFjl6EDn1q4hbifMuWiy+fqK33ck2tYRuZ/VqcDJFDMStS4cWMXbFe3fWS1xHf01B3WAOIm0'+
			'12ptiPpZrZewhnYsBM4CvpG6kDpxYBWjA9gSXYoQ9WhHC42mcjtTNxp9AUS+CfpYFF4RV0az4kn39m2OLkK4l7hhdRewCvmFFcDNaP7vC2g/V0SnokfsE4m54JINj7D6bwPgPmK34H0OXQv/ZOpC+uB04Oupi2jTyWgfm/WRR1h9txEwCXiE2GG1I/A2YoUVaE5oRXS1V1TfRnOFx+MNqH3iwOq9LYBHgX+gA74RzQS+hj4k40k7qd6OV4B90N/DHWlL6bdlgO+ix9yT0pYShx8Jl+7daDL6nakLadO56FGqjhO/o1BXiPVTF9KmI4Hv48syeuTA6tmGwM9RYEW1EPWm2heYlbiWKuyN9r4NS11IG+ajVcVzibf7v3QOrH/3ZmACmt+J7BlgU7SC2TRHAWegC2Uj+zJwQeoicuI5rMXeiVb9phI7rP4XbV5djWaGFc'+
			'D30BfPWakLadP5aGT8rdSF5MIjLFgLdU/YOnUhbVqA9ipdnriO3KyCznLuQ+wVuYXAEcCPgHmJa0mmyYG1OurdHbULZqd56Jv46NSFZO7t6CLVDVIX0qY5aPHkBzRwcr6JgTUc7ezeNHUhBbgZ9dfy5GzvjQJ+TdzuGV0dBIxNXUSVmhRYqwGXofmdyI8GAH9El1VMTlxHp6HA+9GV8BugHu4LgWnAv9AXxG1o/1QOBgB7ocPV0U1HG1HPT11IFZoQWKujdiV7pC6kAJNQUJXdm6o3VkfdNg9Gj1u9MQcF11h0KUUO7VdORXNDy6YupE1zUC+uq6jnXjug3oG1DHATGlFFNx810ft56kLQHqcrgf3afJ0FwDHAhaTfIzYUuAj1/4reOXQOcCgKrtpNFdQxsIaiNsR1GFG10CbC80g/GhmEAuZYiu048Ar6gOUQxm9G'+
			'81vvS11IAeah7q0Rb2PqUZ32Yb0VfavMoh5h9QNgZeC/SB9Wo4EnKKc9ygrAz4A/k/5UwTRge+C96MxoZEPQJRnTqNFlsHUYYQ0EvrPonzp4EG21yGGvzVpo5DOqwve8Cu0nm1vhe/ZkD7TvqbdzdLnbBvVtCyt6YI1Ee2velbqQAkwE9kcjjRyMRRP8KVZUZ6I2MheTx16jj5HHI2sR7kXBFVLkR8LtgYeJH1Yvol3Y65M+rAai0Ox8jEi1/eNNqGvBBGCXRDV0dS2awzuT9I/n7doazY1unLqQ/og6whqDJhMjn8oH+Co695aDtYHfkuelD3ehUc6zqQtBYXoZ2rA7KHEt7doZ+H3qIvoi4ghrG3ReLnJYXYAmm3MIq6HoLOVk8gwr0Gj6SbRamtpMFJ5vJ/h8EHA7wc7QRhxhhSu4i3HAV4CnUheCvqwORyt/b0'+
			'5cS1/MQ4GRS4vkrdFqXOQGj+ugC3OzFy2wLkErSNE8xeLbdXKwPvAAOkIT1aNou0UuH7QPAT8F3pK6kH64B9Wfy9GpHkV6JNwC7faO5AnUBXMkeYTVSNTu+RFihxXozOJktIcrh0Z9vwZWRZtgo+0w3wY1PcxepBHWdWiyPYJX0GUPl5HHI+ww9Ch6SupCStJCQXEJOnSdg0vQtpBIE/PZNwWIFFhRCj0BXfWew8ZH0AjvImJ3Ue2NFuoM8QnUOTYHI4Bz0FaRCD6JeuJnK0pgbYHmXHJ2A/oLzyGoOtAVWJcTv0Fhf9yE+qH/K3EdndZAe7lGkfcoJvtNpVHmsLYh33mBh1Crlf3II6xAI6qJNDOsQL2u/olGNzmYAmwFbId67ucq+2vSogTWDPKbC5gM7IQOyj6duJZO+6PD34ekLiQDQ9A9f8+gP5ccfn7uQfu3'+
			'DkAnHHIzlfQH0N9QlMDK4Yet03T0AVgX+AN5zK2tj0YU0e/kK8MI9OcyAY2Ec3A16i7yjdSFLGFN9HOUrSiBlUOHTVDz/1XJ5yDscPTD/yixNy5WYR20H+5H6JRBDs5AR30uTl3IIn9HP9/ZihJY00h7MHgcmizN6fDrwejP5RPkPZGbmy+ix8QjUheyyCy0JWNZNGJPaTp5nMLoUZTAegqt/FTtFjRy+WiC9+7JB1BzuR8mriOyZdBV8JPQPGQOgT+bxXOiDyWq4WLy+LPoUZRtDaD5h3FUc1jzSdTWZGIF79VbI9A2hd0T11FHd6DuCzkdTfkAamZY1bzbFDSHlbUoIyzQcvDhlLu68iR6xFqLfMKqAzgdeAyHVVl2AF5G7ahzMR61/DkQPfqX6XmCnNGNNMLqtBnahLcuxQ1fZ7P4soec/kC2R9/+WQ/Ta2Y2+t'+
			'LKpRtEp1PReb9lSnjt0egsZPYijbA6/QV9kC+m/euhZgHHo70x55JPWL0b3dt3Jw6rqg0DfoF2fW+SuJaujkU75ou8MPVB9FkKEVYQc4TV1TvQru49+/jrHkePl7cUXlF7BqEfyEOI+WVSR1egC0pT3524pDPRAfv+mLPo159GPqvevRI9sDqthr4pRqEWKiujTpoL0F/Ic+hc2YOoJez0JFX2bDDwWdRMr+6HlCOagQ61n5W6kG7sir6wN0f3G6zSzX8zF20InYh2219L5tsXelKXwOrUgUYmAxf9e2vRP6+Rz+PektZGrWrXTFyHLd0rwI7AX1MX0o1BaH5rIPqyHo5+7qey+DMwl3zP5PZK3QIrkrehEVWI1Zk+mo3mGjcmfqPA7tyINp5OSV1I03ieJI1jUNfPOobVy+jasm2B95BPC+Mi7Y2umDs9dSFN4xFW'+
			'dTpQm5xf0P08Q3Svod/bx7r5/76DQrroa+5z8BxawLmBPC59rTWPsKqxFvqBHk89w+pRNKrqqbPmSagJ451VFVShzsPwdwMbJa6l9hxY5RoGfBc9Fu2DVgPrZC66Y3FjtJenp37qLfQIvAPasjGjkuqq0wFsic54XgYsn7SaGvMjYTkGoEejU9AqYB09hG6uHt+PX/t2tN/sI0UWlJGpaFR5dupC6saBVbxVgFuBTVMXUqJvocBpZ6Q0GN2FdwWxLnLti+fRHqkHUxdSF34kLM6KaGPhc9QzrBYC9wMbonNt7T7WzQd+ic6EXrHof9fNKujylJvRqNLa5BFWMf4T+DZqAVNHM9Go6tJF/16GHVFwjSzp9VObjw7XH526kMgcWO1ZG6185dIrvAx/Rb2ZXq3o/S4ADqvovVKYh+Y3c+sGEYIfCftnBBptTKa+YfUiml'+
			'TfjOrCCrSnaSu04lZHQ9Cj8J/I/IaaHHmE1XffRKfkV0pdSIluRr2XHiPdGcw3AV9Bj6J13HAK2mh6FQrp3A7kZ8mB1Xtbob7yb01dSIleQGfkcrqufF10M9Co1IWUaA6a2/p+6kJy50fCpVsbHTn5b+odVlegs385hRVolLclGoW8lLiWsgxFc3ePoc211gOPsHo2GHUj/TJq1VFX04H9gNtSF9ILa6CVtr1TF1KiheiR/AjUw826cGB178PAJdTz3F9XV6FLDqLtgdoHNaGr21GnrrwNohsOrNfbCPWK345691KfhPaO3U7P5/9ytzy6xXkf6h1crwAHAb/C3SA8h7XISmgO4QHgfdQ3rOYC56A5oduIG1agrRYHoD1Nk9KWUqoVgOvRl0udFx56xSMsNdE7k/qfsJ8MjEGdQOtmKArig6n3l/AC9Ch8APm2/C5V'+
			'nf9y30gHuhL8YTRXtXzSaso1FV0Qui71DCvQtoBDgd3QQePII8c3MhDdmTgbfdHWdX9aj5oYWGsCP0bbFDZMW0rp7kAf4mNSF1KR24Gd0LnO0JctLMUy6Iv2Hvp+xV1oTXskPBbt4K7zLvVOhwFjCXbvXIHWRPdObpC4jrItQF9M+1HtEaokmhJY26EWxXXfpgBaONgLeDZ1IZn4OmqmNyR1IRU4ATiZGo8u6/5IuB5wHfBH6h9Wz6Gzd9vjsOrqDDTKuj11IRU4Hl2Q2t1FILVQ5xHWGeiK8TelLqQCN6KRxCQaunrUCwOAz6OruZowJfAn4IvA31IXUqQ6BtbewOXUe+Wv04toVPVTHFS9tTrwPWo8ClnC1WhFsRZzmXUKrLXRPFUd2xMvaQEwDp03ey5xLRF1oNW1H6NruuquhRZhfkLwG4vqMIc1Au1Sn0z9w6'+
			'oFTESjg/1xWPVXC11LtinaHjArbTml6wAuRHO5exL4KFPkEdZgtFnwGOrbS72ruajL6SnAM4lrqZPBwM5obmuTxLVUYR7a7vEN9OUXStTA2gz4GbB+4jqq8gw6VnN36kJqbDjacHo09T1L2tV0NOo6lkDzn9ECazU0Yfrx1IVUZBZqrPel1IU0yGZobmvzxHVU5VXUYugXievolShzWMuib75/0JywegAYjcOqan8BtkW9+19NWkk1lkeLVfcAG6ctZekijLA+iK783oBmDNVfQ7uVz6AmS9GBbYRG9LsQ58u9XZcAx5Hpgk7OgbUOahkymmYEFehb7lB0F6DlYRjwKXTs5W2Ja6nKy6jDx3lokj4buQbWueiD24TzX52+jCZB69oaJbrVgR+g9tlN8QTwGbQdIgs5BdYQ1ArlBgLvE+mjhah/02jg+cS1WO+MQSOP'+
			'1VIXUqHfoOaIT6UuJIfn8gGoZe9v0L1/TQmrp9FemC1xWEUyDrUqHktmj0sl2gOYgA5XL5eykNQjrBHAd4DPobmCprgW/b7/mboQa8sewFnUvxFkV08DX0X7ICuXMrA+guaq3pGqgAReROf/rk5diBVmZbT58hC0/aYp7kTdLx6v8k1TBdaF6C94YIo3T6CFOip8jUyXi60tA9FtS2egR/ymmIe6hVxKRY/HVQfWUOAPwNZVvmliU4GPEuNmZWvPcqgrwmmpC6nYDWg1cWbZb1RlYK2H+lRtW9UbJjYbTdB+JnUhVrm1gZ+jm5maYgqayyu180VVq4Qro148TQirhWjj58dxWDXV4+gR8UhgWtpSKrMGmpBfo8w3qWqE9RDwnireKLGZaHPhaeiKcbM1gIvREbMm+Bs6GfD3Ml687BHWMOBUmhFW9wMfQr3VHVbWaQ'+
			'ra/nAw2jled5ugbhelKHuEdRBaQaizV4DzF/3zcuJaLG/roK4jh6QupAKXo20PhSozsJZHrTpKfaZN7E70A/gg6rNutjQDgA8AV1L/4z37oRXEwpT1SDgQ7eSua1i9hvZU7YmuU3JYWW8tBH4PrIvuIpibtpxSHQ+sVeQLlhVY7wMOKOm1U7sL9Uk6mwr2nVhtzUYdOnYAHk1cS1k2QU8ghSkrsL5A/W5anocmTncmYPN+y9Z9qNPnScCcxLWU4VMUuB+tjDmsDmA+9Tl2Mx+Nqsbg1T8r16ZoC0TdToKMRQtwbStjhDWG+oTVZHTUYmccVla+vwK7orZDdVpxLmwDdRmBVYdLIuahnfk7Aj9KXIs1ywzgTGAr6nP+dBCwVxEvVEZgbVXCa1ZpAnru/izwZOJarJlawGOoA+9h1GPD6f5FvEjRgfVe4j4OTkfHanYH'+
			'rktci1mnC9GxnkuJvQWikHm5ogNrBDEvUfgz8GngKOB/EtditqSJaHf8x6m4YV6BBlPA01fRgTUH3S4SydnoEogbif0NZvW2EP2Mbo9WEqP9rA4AVijiRYqUtEF9Hz2IVv+ORm0xzCJ4Gm043Q/dDh7F6sBLtHnHaNGBNRR4tuDXLNprqKPCruiIRDb3nJn10nzgFmBv4LtpS+m1FrAmbX7eig6se9E8Vq7uR5vzzsT7qiy2FhptnYiOwPw5bTlL9SwaYbWljBHWfQW/ZhGmAt8EtgMeSVyLWZFaqFneKHQgP9cv4pUoYMGg6MCagPaP5OR3aKLydDSUNqujBWgBaTvg9sS1dOc2CuhqUsbG0StLeM3+OhBNTpbSrtUsQ4+iVe+DyOcw9Tx0zX3bG7HLCKyJ6Nr5lG4FVkVdD90CxppmDnAZur3n5sS1AAxBA5m2Vg'+
			'ihnMB6AgVFiq0CL6A+XLsDz+MVQGuuFvAMOsP3YdIepv4JWhRo+/NYVj+sa1GRVboGNdbzNfBmr3cTMBK4gupPojwFnEVB9xWWeWvOmagFbNleQN8gn1z072b272YBn0M3+FR1vKeFWqX/s6gXLDOwXkZ9fS6g+Mm/zqHlD9Fz+k0Fv75ZXd0KbIZWFMs0AzgGzaXNK+pFq7pI9XCUtCvSXki20G9+PHAEBSa3WQO9E02Gb456VhWhheaPTwAuKug1/19VgQWaXzoO2JfFfzi9WTVoLfrvpgLXo0fNCWUUaNZQu6ALjzdHA4r+rOZ1fk7vA45Et0kVPl9WZWB1ehcKrT3RMZnl6Pk3NgW4A03i30FBE3dm1q2NgK+gz+cKvH5Vr7sQ6wypFvAw6t11DRpclCJFYHU1HM1BjUTX2ncA09CWiEnoKiQzq9YgdD7xg6gp'+
			'57vQGeHOEJuBPqMT0fnc8cDdVHA/Z+rAMjPrtTJXCc3MCuXAMrMwHFhmFoYDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWGYWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFoYDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWGYWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFoYDy8zCcGCZWRgOLDMLw4FlZmE4sMwsDAeWmYXhwDKzMBxYZhaGA8vMwnBgmVkYDiwzC8OBZWZhOLDMLAwHlpmF4cAyszAcWG'+
			'YWhgPLzMJwYJlZGA4sMwvDgWVmYTiwzCwMB5aZheHAMrMwHFhmFoYDy8zCcGCZWRj/B97bAOXmjYO6AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_icon') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_3.style.transition='left 800ms linear 0ms, top 800ms linear 0ms, opacity 0s';
				if (me._image_3.ggCurrentLogicStatePosition == 0) {
					me._image_3.style.left='0px';
					me._image_3.style.top='20px';
				}
				else {
					me._image_3.style.left='0px';
					me._image_3.style.top='0px';
				}
			}
		}
		me._image_3.logicBlock_position();
		me._image_3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['external_2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_3.style.transition='left 800ms linear 0ms, top 800ms linear 0ms, opacity 0s';
				if (me._image_3.ggCurrentLogicStateAlpha == 0) {
					me._image_3.style.visibility="hidden";
					me._image_3.style.opacity=0;
				}
				else {
					me._image_3.style.visibility=me._image_3.ggVisible?'inherit':'hidden';
					me._image_3.style.opacity=1;
				}
			}
		}
		me._image_3.logicBlock_alpha();
		me._image_3.onmouseover=function (e) {
			me.elementMouseOver['image_3']=true;
			me._text_6.logicBlock_alpha();
		}
		me._image_3.onmouseout=function (e) {
			me.elementMouseOver['image_3']=false;
			me._text_6.logicBlock_alpha();
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_6=document.createElement('div');
		els=me._text_6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='bottom : -20px;';
		hs+='color : rgba(255,255,255,0.705882);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_6.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_6.ggUpdateText();
		});
		el.appendChild(els);
		me._text_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_6.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_3'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_6.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_6.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_6.style.transition='opacity 0s';
				if (me._text_6.ggCurrentLogicStateAlpha == 0) {
					me._text_6.style.visibility="hidden";
					me._text_6.style.opacity=0;
				}
				else {
					me._text_6.style.visibility=me._text_6.ggVisible?'inherit':'hidden';
					me._text_6.style.opacity=1;
				}
			}
		}
		me._text_6.logicBlock_alpha();
		me._text_6.ggUpdatePosition=function (useTransition) {
		}
		me._image_3.appendChild(me._text_6);
		me._external_2.appendChild(me._image_3);
		el=me._rectangle_5=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border : 3px solid rgba(34,30,31,0.705882);';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['external_2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_5.style.transition='transform 0s, opacity 800ms linear 0ms';
				if (me._rectangle_5.ggCurrentLogicStateScaling == 0) {
					me._rectangle_5.ggParameter.sx = 1.1;
					me._rectangle_5.ggParameter.sy = 1.1;
					me._rectangle_5.style.transform=parameterToTransform(me._rectangle_5.ggParameter);
					skin.updateSize(me._rectangle_5);
				}
				else {
					me._rectangle_5.ggParameter.sx = 1;
					me._rectangle_5.ggParameter.sy = 1;
					me._rectangle_5.style.transform=parameterToTransform(me._rectangle_5.ggParameter);
					skin.updateSize(me._rectangle_5);
				}
			}
		}
		me._rectangle_5.logicBlock_scaling();
		me._rectangle_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_5.style.transition='transform 0s, opacity 800ms linear 0ms';
				if (me._rectangle_5.ggCurrentLogicStateVisible == 0) {
					me._rectangle_5.style.visibility="hidden";
					me._rectangle_5.ggVisible=false;
				}
				else {
					me._rectangle_5.style.visibility=(Number(me._rectangle_5.style.opacity)>0||!me._rectangle_5.style.opacity)?'inherit':'hidden';
					me._rectangle_5.ggVisible=true;
				}
			}
		}
		me._rectangle_5.logicBlock_visible();
		me._rectangle_5.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['external_2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_5.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_5.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_5.style.transition='transform 0s, opacity 800ms linear 0ms';
				if (me._rectangle_5.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_5.style.visibility=me._rectangle_5.ggVisible?'inherit':'hidden';
					me._rectangle_5.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._rectangle_5.style.opacity == 0.0) { me._rectangle_5.style.visibility="hidden"; } }, 805);
					me._rectangle_5.style.opacity=0;
				}
			}
		}
		me._rectangle_5.logicBlock_alpha();
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__38=document.createElement('div');
		els=me.__38__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/_38_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 50px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubc29 \uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__38.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me.__38);
		me._external_2.appendChild(me._rectangle_5);
		me._ht_node.appendChild(me._external_2);
		me._ht_node.logicBlock_scaling();
		me._image_3.logicBlock_position();
		me._image_3.logicBlock_alpha();
		me._text_6.logicBlock_alpha();
		me._rectangle_5.logicBlock_scaling();
		me._rectangle_5.logicBlock_visible();
		me._rectangle_5.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._image_3.logicBlock_position();
			};
			me.ggEvent_configloaded=function() {
				me._image_3.logicBlock_position();
			};
			me.ggEvent_sizechanged=function() {
				me._ht_node.logicBlock_scaling();
				me._rectangle_5.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_icon=function() {
				me._image_3.logicBlock_position();
			};
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='하자 동영상-2') {
				hotspot.skinid = '하자 동영상-2';
				hsinst = new SkinHotspotClass__20(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='하자 동영상') {
				hotspot.skinid = '하자 동영상';
				hsinst = new SkinHotspotClass__4(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = '하자 동영상-3';
				hsinst = new SkinHotspotClass__3(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._timer_1.ggUpdateConditionTimer();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('vis_icon', !player.getVariableValue('vis_icon'));
			} else {
			}
		}
		me._timer_2.ggUpdateConditionTimer();
		if (me._timer_2.ggLastIsActive!=me._timer_2.ggIsActive()) {
			me._timer_2.ggLastIsActive=me._timer_2.ggIsActive();
			if (me._timer_2.ggLastIsActive) {
				player.setVariableValue('vis_mobilemenu', !player.getVariableValue('vis_mobilemenu'));
			} else {
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap") .ggskin { font-family: "Noto Sans KR", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};