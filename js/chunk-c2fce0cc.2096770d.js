(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c2fce0cc"],{"13b3":function(e,t,a){},"62ad":function(e,t,a){"use strict";var i=a("ade3"),n=a("5530"),s=(a("d3b7"),a("a9e3"),a("b64b"),a("ac1f"),a("5319"),a("4ec9"),a("3ca3"),a("ddb0"),a("caad"),a("159b"),a("2ca0"),a("4b85"),a("2b0e")),o=a("d9f7"),r=a("80d2"),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),d=function(){return c.reduce((function(e,t){return e["offset"+Object(r["A"])(t)]={type:[String,Number],default:null},e}),{})}(),u=function(){return c.reduce((function(e,t){return e["order"+Object(r["A"])(t)]={type:[String,Number],default:null},e}),{})}(),h={col:Object.keys(l),offset:Object.keys(d),order:Object.keys(u)};function p(e,t,a){var i=e;if(null!=a&&!1!==a){if(t){var n=t.replace(e,"");i+="-".concat(n)}return"col"!==e||""!==a&&!0!==a?(i+="-".concat(a),i.toLowerCase()):i.toLowerCase()}}var v=new Map;t["a"]=s["a"].extend({name:"v-col",functional:!0,props:Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},d),{},{order:{type:[String,Number],default:null}},u),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var a=t.props,n=t.data,s=t.children,r=(t.parent,"");for(var c in a)r+=String(a[c]);var l=v.get(r);return l||function(){var e,t;for(t in l=[],h)h[t].forEach((function(e){var i=a[e],n=p(t,e,i);n&&l.push(n)}));var n=l.some((function(e){return e.startsWith("col-")}));l.push((e={col:!n||!a.cols},Object(i["a"])(e,"col-".concat(a.cols),a.cols),Object(i["a"])(e,"offset-".concat(a.offset),a.offset),Object(i["a"])(e,"order-".concat(a.order),a.order),Object(i["a"])(e,"align-self-".concat(a.alignSelf),a.alignSelf),e)),v.set(r,l)}(),e(a.tag,Object(o["a"])(n,{class:l}),s)}})},"63b7":function(e,t,a){},"8aec":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-main",{staticClass:"ma-0 pa-0"},[e.$store.getters.darkMode?e._e():a("div",{staticStyle:{background:"#d9d9d9"}},[a("div",{staticClass:"pt-5 d-flex justify-center px-16"},[a("v-carousel",{staticClass:"rounded-lg flat",attrs:{cycle:"","show-arrows-on-hover":"","hide-delimiter-background":"",height:"400"}},e._l(e.imagesCarousel,(function(e,t){return a("v-carousel-item",{key:t,attrs:{src:e.src}})})),1)],1),"es"===e.$store.getters.currentLenguaje?a("div",e._l(e.bodegas,(function(t,i){return a("div",{key:i,staticClass:"pt-9 d-flex justify-center"},[a("v-card",{staticClass:"rounded-lg",staticStyle:{background:"#dedede","box-shadow":"5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff"},attrs:{width:"1600"}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("v-avatar",{staticClass:"ma-3",attrs:{size:"200",tile:""}},[a("v-img",{staticClass:"rounded-lg",attrs:{src:t.src}})],1),a("v-col",{attrs:{cols:"3"}},[a("div",[a("v-card-title",{staticClass:"text-h5",domProps:{textContent:e._s(t.nombre)}}),a("v-card-subtitle",{staticClass:"pb-0 body-1"},[e._v(e._s(t.localizacion))]),a("v-card-subtitle",{staticClass:"pt-0 body-1"},[e._v(e._s(t.provincia))]),a("v-card-actions",{staticClass:"ml-2"},[a("div",[a("v-btn",{staticClass:"custom_button",attrs:{text:"",router:"",to:"/Tienda"}},[e._v(" visitar ")])],1)])],1)]),a("v-col",[a("div",[a("v-card-text",{staticClass:" body-1"},[e._v(" "+e._s(t.descripcion)+" ")])],1)])],1)])],1)})),0):e._e(),"en"===e.$store.getters.currentLenguaje?a("div",e._l(e.bodegas_en,(function(t,i){return a("div",{key:i,staticClass:"pt-9 d-flex justify-center"},[a("v-card",{staticClass:"rounded-lg",staticStyle:{background:"#dedede","box-shadow":"5px 5px 10px #b4b4b4, -5px -5px 10px #ffffff"},attrs:{width:"1600"}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("v-avatar",{staticClass:"ma-3",attrs:{size:"200",tile:""}},[a("v-img",{staticClass:"rounded-lg",attrs:{src:t.src}})],1),a("v-col",{attrs:{cols:"3"}},[a("div",[a("v-card-title",{staticClass:"text-h5",domProps:{textContent:e._s(t.nombre)}}),a("v-card-subtitle",{staticClass:"pb-0 body-1"},[e._v(e._s(t.localizacion))]),a("v-card-subtitle",{staticClass:"pt-0 body-1"},[e._v(e._s(t.provincia))]),a("v-card-actions",{staticClass:"ml-2"},[a("div",[a("v-btn",{staticClass:"custom_button",attrs:{text:"",router:"",to:"/Tienda"}},[e._v(" visit ")])],1)])],1)]),a("v-col",[a("div",[a("v-card-text",{staticClass:" body-1"},[e._v(" "+e._s(t.descripcion)+" ")])],1)])],1)])],1)})),0):e._e()]),e.$store.getters.darkMode?a("div",{staticStyle:{background:"#292929"}},[a("div",{staticClass:"pt-5 d-flex justify-center px-16"},[a("v-carousel",{staticClass:"rounded-lg",staticStyle:{background:"#292929","box-shadow":"5px 5px 10px #1a1a1a,-5px -5px 10px #383838"},attrs:{cycle:"","show-arrows-on-hover":"","hide-delimiter-background":"",height:"400"}},e._l(e.imagesCarousel,(function(e,t){return a("v-carousel-item",{key:t,attrs:{src:e.src}})})),1)],1),"es"===e.$store.getters.currentLenguaje?a("div",e._l(e.bodegas,(function(t,i){return a("div",{key:i,staticClass:"pt-9 d-flex justify-center"},[a("v-card",{staticClass:"rounded-lg",staticStyle:{background:"#292929","box-shadow":"5px 5px 10px #1a1a1a,-5px -5px 10px #383838"},attrs:{height:"230",width:"1600"}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("v-avatar",{staticClass:"ma-3",attrs:{size:"200",tile:""}},[a("v-img",{staticClass:"rounded-lg",attrs:{src:t.src}})],1),a("v-col",{attrs:{cols:"3"}},[a("div",[a("v-card-title",{staticClass:"text-h5 grey--text text--lighten-2",domProps:{textContent:e._s(t.nombre)}}),a("v-card-subtitle",{staticClass:"pb-0 grey--text body-1"},[e._v(e._s(t.localizacion))]),a("v-card-subtitle",{staticClass:"pt-0 grey--text body-1"},[e._v(e._s(t.provincia))]),a("v-card-actions",{staticClass:"ml-2"},[a("div",[a("v-btn",{staticClass:"custom_buttonb grey--text",attrs:{text:"",router:"",to:"/Tienda"}},[e._v(" visitar ")])],1)])],1)]),a("v-col",[a("div",[a("v-card-text",{staticClass:"body-1 grey--text text--lighten-1"},[e._v(" "+e._s(t.descripcion)+" ")])],1)])],1)])],1)})),0):e._e(),"en"===e.$store.getters.currentLenguaje?a("div",e._l(e.bodegas_en,(function(t,i){return a("div",{key:i,staticClass:"pt-9 d-flex justify-center"},[a("v-card",{staticClass:"rounded-lg",staticStyle:{background:"#292929","box-shadow":"5px 5px 10px #1a1a1a,-5px -5px 10px #383838"},attrs:{height:"230",width:"1600"}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("v-avatar",{staticClass:"ma-3",attrs:{size:"200",tile:""}},[a("v-img",{staticClass:"rounded-lg",attrs:{src:t.src}})],1),a("v-col",{attrs:{cols:"3"}},[a("div",[a("v-card-title",{staticClass:"text-h5 grey--text text--lighten-2",domProps:{textContent:e._s(t.nombre)}}),a("v-card-subtitle",{staticClass:"pb-0 grey--text body-1"},[e._v(e._s(t.localizacion))]),a("v-card-subtitle",{staticClass:"pt-0 grey--text body-1"},[e._v(e._s(t.provincia))]),a("v-card-actions",{staticClass:"ml-2"},[a("div",[a("v-btn",{staticClass:"custom_buttonb grey--text",attrs:{text:"",router:"",to:"/Tienda"}},[e._v(" visit ")])],1)])],1)]),a("v-col",[a("div",[a("v-card-text",{staticClass:"body-1 grey--text text--lighten-1"},[e._v(" "+e._s(t.descripcion)+" ")])],1)])],1)])],1)})),0):e._e()]):e._e()])},n=[],s={name:"Principal",mounted:function(){},data:function(){return{imagesCarousel:[{src:"https://rutadelvinocigales.com/wp-content/uploads/2019/01/Bodegas-Concejo-1.jpg"},{src:"https://theluxonomist.es/wp-content/uploads/2019/10/bodega.jpg"},{src:"https://s1.eestatic.com/2020/07/15/curiosidades/cuerpo-humano/dieta-salud-verano_505461235_155807843_1706x960.jpg"},{src:"https://www.fincasdeazabache.com/modules/sphomeslider/images/72d5e486321de61febf34a0f7f16da3d0c716675_LAPLANILLA.jpg"},{src:"https://www.mancomunidaddetentudia.com/portal/wp-content/uploads/2019/07/Sumilleres1.jpg"},{src:"https://www.hogarmania.com/archivos/202105/maridaje-tipos-de-vinos-segun-comidas-y-alimentos-1280x720x80xX.jpg"}],bodegas:[{src:"https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615546391879-0GO55P7LCOE6YYKRJQZW/bodegas-arguaza-navarro-2w.jpg?format=1000w",nombre:"Bodegas Arzuaga Navarro",localizacion:"Quintanilla de Onésimo",provincia:"Valladolid",descripcion:"En plena Denominación de Origen Ribera del Duero se encuentra una de las mejores bodegas para visitar en España: Arguaza Navarro. Situada en la localidad de Quintanilla de Onésimo, esta bodega ofrece al visitante todo lo necesario para disfrutar de una maravillosa estancia conociendo la cultura del vino. Una extensa finca en la que la flora, la fauna y, por supuesto, los viñedos son protagonistas; dos restaurantes en los que disfrutar de la exquisita gastronomía de la zona, un spa con tratamientos exclusivos de vinoterapia, un acogedor y confortable hotel ideal para descansar y diversas actividades relacionadas con el mundo del vino. Ingredientes que dan lugar a una fantástica experiencia enoturística. ¿Te animas a disfrutar de ella en primera persona?"},{src:"https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615546631262-ZHCBUSN7180F2CV9U6T8/mejores-bogegas-vivistar-espana-regina.jpg?format=1000w",nombre:"Bodegas Regina Viarum",localizacion:"Ribera Sacra",provincia:"Lugo",descripcion:"En el corazón de la Ribera Sacra se encuentra Bodegas Regina Viarum. Una bonita bodega que se asoma al maravilloso Cañón del Sil, un maravilloso enclave natural que la enmarca y que es uno de los mejores lugares que ven en Galicia. La uva con la que producen sus vinos, principalmente la mencia y godello, procede de cultivos situados en vertiginosos niveles que desafían la gravedad y que representan la conocida como ‘Viticultura Heroica’. Todos estos factores hacen que Regina Viarum sea una de las mejores bodegas para visitar en España y la convierten en una visita imprescindible para conocer todos los secretos de la elaboración de los vinos de la Denominación de Origen Ribera Sacra y la Viticultura Heroica."},{src:"https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615803092379-2DD8W4FX2TDWW5WSVKWR/mejores-bodegas-visitar-espana-baigorri.jpg?format=1000w",nombre:"Bodegas BAIGORRI",localizacion:"Samaniego",provincia:"Álava",descripcion:"En la localidad alavesa de Samaniego, al cobijo de la Sierra de Cantabria, se encuentra Bodegas BAIGORRI, una caja de cristal que encaja a la perfección con el entorno que la enmarca. Diseñada por el arquitecto Iñaki Aspiazu, está orientada al peculiar modo de elaboración de sus vinos y referente de la arquitectura en el paisaje respetando al medio donde se enclava. Un edificio que se adapta a la topografía existente y desarrolla de manera armoniosa todo su programa bajo la superficie a través de sus 7 plantas subterráneas. Un lugar donde se puede contemplar desde cualquier punto y de forma didáctica, cómo se desarrolla el proceso de elaboración del vino en plena vendimia. Sin duda, una de las mejores bodegas para visitar en España, en la que podrás conocer una manera muy especial de elaborar el vino. ¿Te animas a conocerla?"},{src:"https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615808503353-1JO2TRNNF6RMTJO2OQNM/mejores-bodegas-visitar-espana-gran-bazan.jpg?format=1000w",nombre:"Bodegas GRANBAZÁN",localizacion:"Valle del Salnés",provincia:"Pontevedra",descripcion:"Ubicada en el Valle del Salnés, en pleno corazón de las Rías Baixas y a solo 3 kilómetros de Cambados, se encuentra otra de las mejores bodegas para visitar en España: Bodegas GRANBAZÁN. La bodega está semienterrada y es de estilo neoclásico con influencia de Chateau francés y recubierta de azulejos azules haciendo un guiño a las casas indianas gallegas. Su plantación se extiende en una finca con 14 hectáreas de viñedo para el que se utiliza el sistema de “parra”, tan típico las Rías Baixas y de la uva albariño. Ofrece una amplia gama de posibilidades enoturísticas para acercarse al mundo del vino y relajarse mientras se pasea por su viñedo o descubriendo la relevancia de la bodega como pionera en la elaboración de sus vinos. Además, pone a disposición del visitante un amplio abanico de opciones para disfrutar de la fusión entre la enología y la exquisita gastronomía gallega. ¿Qué más se puede pedir?"},{src:"https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615818826889-55X8XH2BAATB6SXRYR5N/mejores-bodegas-visitar-espana-berroja.jpg?format=1000w",nombre:"Bodega Berroja",localizacion:"Reserva de la Biosfera Urdaibai",provincia:"Bizkaia",descripcion:"Enmarcada por la maravillosa Reserva de la Biosfera Urdaibai se encuentra Bodega Berroja. La singularidad y la belleza del paisaje que la rodea la convierten en una de las mejores bodegas para visitar en España. Su edificio, semienterrado, se integra perfectamente con el entorno, respetando el medio natural y rural y ofreciendo unas magníficas vistas de Urdaibai. Cuenta con un extenso viñedo de montaña, con zonas de terrazas, del que surge la uva con la que se elaboran distintos tipos de Txakoli artesanal. Bodega Berroja ofrece múltiples actividades enoturísticas y enogastronómicas, a través de las cuales podrás conocer más de cerca la elaboración de sus Txakolis, con Denominación de Origen Bizkaiko Txakolina, y disfrutar de sus sabores y de la gastronomía de la zona. Un entorno único, una exquisita gastronomía, unas maravillosas vistas y un Txakoli artesanal, ¡está claro que visitarla merece la pena!"},{src:"https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615897575268-L4E80XYPCU3BX1SWW1N5/mejores-bodegas-visitar-espana-luis.jpg?format=1000w",nombre:"Bodegas Luis Cañas",localizacion:"Villabuena de Álava",provincia:"Álava",descripcion:"Localizada en Villabuena de Álava, en el corazón de la Rioja Alavesa, se encuentra Bodegas Luis Cañas. Una bodega que se ha situado por méritos propios en la élite de la Denominación de Origen Calificada Rioja y en la que la viña es la protagonista indiscutible y clave en la calidad de sus vinos, disponiendo de un viñedo privilegiado. Bodegas Luis Cañas abre sus puertas a todo aquel que quiera conocer sus grandes caldos y su filosofía, desde el viñedo hasta la copa. Dispone de tienda, un Wine Bar para degustar aperitivos y vinos, sala de catas a pie de viña… Es un lugar perfecto para esos espíritus curiosos que desean vivir una experiencia completa descubriendo los secretos que esconden los grandes vinos."}],bodegas_en:[{src:"https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615546391879-0GO55P7LCOE6YYKRJQZW/bodegas-arguaza-navarro-2w.jpg?format=1000w",nombre:"Arzuaga Navarro Winery",localizacion:"Quintanilla de Onésimo",provincia:"Valladolid",descripcion:"In the heart of the Ribera del Duero Denomination of Origin is one of the best wineries to visit in Spain: Arguaza Navarro. Located in the town of Quintanilla de Onésimo, this winery offers visitors everything they need to enjoy a wonderful stay and learn about the culture of wine. An extensive estate where the flora, fauna and, of course, the vineyards are the protagonists; two restaurants where you can enjoy the exquisite gastronomy of the area, a spa with exclusive wine therapy treatments, a cozy and comfortable hotel ideal for relaxing and various activities related to the world of wine. Ingredients that give rise to a fantastic wine tourism experience. Do you dare to enjoy it in first person?"},{src:"https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615546631262-ZHCBUSN7180F2CV9U6T8/mejores-bogegas-vivistar-espana-regina.jpg?format=1000w",nombre:"Regina Viarum Winery",localizacion:"Ribera Sacra",provincia:"Lugo",descripcion:"In the heart of the Ribera Sacra is Bodegas Regina Viarum. A beautiful winery that overlooks the wonderful Sil Canyon, a wonderful natural enclave that frames it and is one of the best places to see in Galicia. The grapes with which they produce their wines, mainly mencia and godello, come from crops located on vertiginous levels that defy gravity and represent what is known as 'Heroic Viticulture'. All these factors make Regina Viarum one of the best wineries to visit in Spain and make it an essential visit to learn all the secrets of the elaboration of the wines of the Ribera Sacra Designation of Origin and the Heroic Viticulture."},{src:"https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615803092379-2DD8W4FX2TDWW5WSVKWR/mejores-bodegas-visitar-espana-baigorri.jpg?format=1000w",nombre:"BAIGORRI Winery",localizacion:"Samaniego",provincia:"Álava",descripcion:"In the town of Samaniego, in the shelter of the Sierra de Cantabria, is located Bodegas BAIGORRI, a glass box that fits perfectly with the environment that frames it. Designed by the architect Iñaki Aspiazu, it is oriented to the peculiar way of elaboration of its wines and a reference of architecture in the landscape respecting the environment where it is located. A building that adapts to the existing topography and harmoniously develops its entire program below the surface through its 7 subway floors. A place where you can contemplate from any point and in a didactic way, how the winemaking process takes place in the middle of the harvest. Undoubtedly, one of the best wineries to visit in Spain, where you can learn about a very special way of making wine. Do you dare to visit it?"},{src:"https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615808503353-1JO2TRNNF6RMTJO2OQNM/mejores-bodegas-visitar-espana-gran-bazan.jpg?format=1000w",nombre:"GRANBAZÁN Winery",localizacion:"Valle del Salnés",provincia:"Pontevedra",descripcion:"Located in the Salnés Valley, in the heart of the Rías Baixas and only 3 kilometers from Cambados, is another of the best wineries to visit in Spain: Bodegas GRANBAZÁN. The winery is half-buried and is neoclassical style with influence of French Chateau and covered with blue tiles in a nod to the Galician Indian houses. Its plantation extends over an estate with 14 hectares of vineyard for which the vine system is used, so typical of the Rías Baixas and of the Albariño grape. It offers a wide range of wine tourism possibilities to approach the world of wine and relax while strolling through the vineyard or discovering the relevance of the winery as a pioneer in the production of its wines. In addition, it offers visitors a wide range of options to enjoy the fusion between oenology and the exquisite Galician gastronomy. What more could you ask for?"},{src:"https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615818826889-55X8XH2BAATB6SXRYR5N/mejores-bodegas-visitar-espana-berroja.jpg?format=1000w",nombre:"Berroja Winery",localizacion:"Urdaibai Biosphere Reserve",provincia:"Bizkaia",descripcion:"Framed by the wonderful Urdaibai Biosphere Reserve is Bodega Berroja. The uniqueness and beauty of the surrounding landscape make it one of the best wineries to visit in Spain. Its building, half buried, is perfectly integrated with the environment, respecting the natural and rural environment and offering magnificent views of Urdaibai. It has an extensive mountain vineyard, with terraced areas, from which the grapes used to produce different types of artisanal Txakoli are grown. Bodega Berroja offers multiple wine tourism and enogastronomic activities, through which you can learn more about the elaboration of its Txakolis, with Denomination of Origin Bizkaiko Txakolina, and enjoy its flavors and the gastronomy of the area. A unique environment, an exquisite gastronomy, wonderful views and an artisanal Txakoli, it is clear that visiting it is worth it!"},{src:"https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1615897575268-L4E80XYPCU3BX1SWW1N5/mejores-bodegas-visitar-espana-luis.jpg?format=1000w",nombre:"Luis Cañas Winery",localizacion:"Villabuena de Álava",provincia:"Álava",descripcion:"Located in Villabuena de Álava, in the heart of the Rioja Alavesa, is Bodegas Luis Cañas. A winery that has positioned itself on its own merits in the elite of the Rioja Qualified Designation of Origin and in which the vineyard is the undisputed protagonist and key to the quality of its wines, having a privileged vineyard. Bodegas Luis Cañas opens its doors to anyone who wants to know its great wines and its philosophy, from the vineyard to the glass. It has a store, a Wine Bar to taste appetizers and wines, a tasting room at the foot of the vineyard... It is a perfect place for those curious spirits who want to live a complete experience discovering the secrets that hide the great wines."}]}},methods:{}},o=s,r=a("2877"),c=a("6544"),l=a.n(c),d=a("8212"),u=a("8336"),h=a("b0af"),p=a("99d9"),v=a("5530"),f=(a("a9e3"),a("63b7"),a("99af"),a("7db0"),a("d3b7"),a("c740"),a("13b3"),a("c3f0")),g=a("afdd"),m=a("9d26"),b=a("604c"),w=b["a"].extend({name:"v-window",directives:{Touch:f["a"]},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(v["a"])(Object(v["a"])({},b["a"].options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var e=this.vertical?"y":"x",t=this.internalReverse?!this.isReverse:this.isReverse,a=t?"-reverse":"";return"v-window-".concat(e).concat(a,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(e){return!e.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var e=this;return this.items.findIndex((function(t,a){return e.internalValue===e.getValue(t,a)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(e,t){this.isReverse=this.updateReverse(e,t)}},mounted:function(){var e=this;window.requestAnimationFrame((function(){return e.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var e=[this.genDefaultSlot()];return this.showArrows&&e.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},e)},genIcon:function(e,t,a){var i,n,s,o=this,r={click:function(e){e.stopPropagation(),o.changedByDelimiters=!0,a()}},c={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(e))},l=null!=(i=null==(n=(s=this.$scopedSlots)[e])?void 0:n.call(s,{on:r,attrs:c}))?i:[this.$createElement(g["a"],{props:{icon:!0},attrs:c,on:r},[this.$createElement(m["a"],{props:{large:!0}},t)])];return this.$createElement("div",{staticClass:"v-window__".concat(e)},l)},genControlIcons:function(){var e=[],t=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&t&&"string"===typeof t){var a=this.genIcon("prev",t,this.prev);a&&e.push(a)}var i=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&i&&"string"===typeof i){var n=this.genIcon("next",i,this.next);n&&e.push(n)}return e},getNextIndex:function(e){var t=(e+1)%this.items.length,a=this.items[t];return a.disabled?this.getNextIndex(t):t},getPrevIndex:function(e){var t=(e+this.items.length-1)%this.items.length,a=this.items[t];return a.disabled?this.getPrevIndex(t):t},next:function(){if(this.hasActiveItems&&this.hasNext){var e=this.getNextIndex(this.internalIndex),t=this.items[e];this.internalValue=this.getValue(t,e)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var e=this.getPrevIndex(this.internalIndex),t=this.items[e];this.internalValue=this.getValue(t,e)}},updateReverse:function(e,t){var a=this.items.length,i=a-1;return a<=2?e<t:e===i&&0===t||(0!==e||t!==i)&&e<t}},render:function(e){var t=this,a={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var i=this.touch||{left:function(){t.$vuetify.rtl?t.prev():t.next()},right:function(){t.$vuetify.rtl?t.next():t.prev()},end:function(e){e.stopPropagation()},start:function(e){e.stopPropagation()}};a.directives.push({name:"touch",value:i})}return e("div",a,[this.genContainer()])}}),y=a("37c6"),x=b["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return b["a"].options.computed.classes.call(this)}},methods:{genData:b["a"].options.methods.genData}}),C=a("80d2"),j=a("d9bd"),B=w.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(e){return e>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(v["a"])(Object(v["a"])({},w.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(e,t){e!==t&&e&&(this.internalHeight=e)},cycle:function(e){e?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(j["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:w.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var e=this,t=this.items.length,a=[],i=0;i<t;i++){var n=this.$createElement(g["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,t)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(m["a"],{props:{size:18}},this.delimiterIcon)]);a.push(n)}return this.$createElement(x,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(t){e.internalValue=t}}},a)},genProgress:function(){return this.$createElement(y["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(e){var t=w.options.render.call(this,e);return t.data.style="height: ".concat(Object(C["g"])(this.height),";"),this.hideDelimiters||t.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&t.children.push(this.genProgress()),t}}),_=a("9d65"),T=a("4e82"),S=a("58df"),O=Object(S["a"])(_["a"],Object(T["a"])("windowGroup","v-window-item","v-window")),I=O.extend().extend().extend({name:"v-window-item",directives:{Touch:f["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(C["g"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(e){var t=this;this.inTransition&&this.$nextTick((function(){t.computedTransition&&t.inTransition&&(t.windowGroup.transitionHeight=Object(C["g"])(e.clientHeight))}))}},render:function(e){var t=this;return e("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[t.genWindowItem()]})))}}),k=a("adda"),A=a("1c87"),R=Object(S["a"])(I,A["a"]),q=R.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(k["a"],{staticClass:"v-carousel__item",props:Object(v["a"])(Object(v["a"])({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(C["p"])(this))]},genWindowItem:function(){var e=this.generateRouteLink(),t=e.tag,a=e.data;return a.staticClass="v-window-item",a.directives.push({name:"show",value:this.isActive}),this.$createElement(t,a,this.genDefaultSlot())}}}),z=a("62ad"),V=a("f6c4"),D=Object(r["a"])(o,i,n,!1,null,null,null);t["default"]=D.exports;l()(D,{VAvatar:d["a"],VBtn:u["a"],VCard:h["a"],VCardActions:p["a"],VCardSubtitle:p["b"],VCardText:p["c"],VCardTitle:p["d"],VCarousel:B,VCarouselItem:q,VCol:z["a"],VImg:k["a"],VMain:V["a"]})},"99d9":function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return r})),a.d(t,"d",(function(){return c}));var i=a("b0af"),n=a("80d2"),s=Object(n["i"])("v-card__actions"),o=Object(n["i"])("v-card__subtitle"),r=Object(n["i"])("v-card__text"),c=Object(n["i"])("v-card__title");i["a"]},afdd:function(e,t,a){"use strict";var i=a("8336");t["a"]=i["a"]}}]);
//# sourceMappingURL=chunk-c2fce0cc.2096770d.js.map