webpackJsonp([1],{29:function(e,i,a){"use strict";var t=a(37),n=a.n(t),s=a(15),r=a(79),o=a(80),l=a.n(o);s.a.use(r.a);var c=new r.a.Store({state:{db:l.a},mutations:{disableFamily:function(e,i){e.db[i].enabled=!1},enableFamily:function(e,i){e.db[i].enabled=!0}},getters:{enabledAnimals:function(e){var i,a=[];return a=e.db.filter(function(e){return e.enabled}).map(function(e){return e.units}),(i=[]).concat.apply(i,n()(a))},families:function(e){return e.db.map(function(e){return e.family})}}});i.a=c},30:function(e,i,a){function t(e){a(69)}var n=a(7)(a(32),a(77),t,null,null);e.exports=n.exports},31:function(e,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=a(15),n=a(30),s=a.n(n),r=a(29);t.a.config.productionTip=!1,new t.a({el:"#app",store:r.a,template:"<App/>",components:{App:s.a}})},32:function(e,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=a(65),n=(a.n(t),a(64)),s=(a.n(n),a(73)),r=a.n(s),o=a(72),l=a.n(o);i.default={name:"app",components:{Toolbar:r.a,CardBoard:l.a}}},33:function(e,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"card",props:["img","species","about","wikiLink"],computed:{animalImage:function(){return"static/"+this.img}}}},34:function(e,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=a(71),n=a.n(t);i.default={name:"card-board",components:{Card:n.a}}},35:function(e,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t=a(70),n=a.n(t);i.default={name:"toolbar",methods:{handleClick:function(e){var i=this.$store,a=e.target.innerText.toLowerCase(),t=i.getters.families.indexOf(a);a===i.state.db[t].family&&i.state.db[t].enabled?i.commit("disableFamily",t):i.commit("enableFamily",t)},buttonState:function(e,i){var a=[],t=this.$store.state.db;switch(e===t[i].family&&t[i].enabled?a.push("button-family--enabled"):a.push("button-family--disabled"),e){case"penguin":a.push("icon-penguin");break;case"armadillo":a.push("icon-armadillo");break;case"mackerel":a.push("icon-mackerel");break;default:a.push("")}return a},capitalize:function(e){return n()(e)}}}},64:function(e,i){},65:function(e,i){},66:function(e,i){},67:function(e,i){},68:function(e,i){},69:function(e,i){},71:function(e,i,a){function t(e){a(66)}var n=a(7)(a(33),a(74),t,"data-v-0974a3e1",null);e.exports=n.exports},72:function(e,i,a){function t(e){a(67)}var n=a(7)(a(34),a(75),t,"data-v-1ce652b5",null);e.exports=n.exports},73:function(e,i,a){function t(e){a(68)}var n=a(7)(a(35),a(76),t,"data-v-8eb0988c",null);e.exports=n.exports},74:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("article",{staticClass:"card"},[a("a",{staticClass:"card_image",attrs:{href:e.wikiLink}},[a("img",{staticClass:"card__img",attrs:{src:e.animalImage,alt:""}})]),e._v(" "),a("a",{staticClass:"card__species",attrs:{href:e.wikiLink}},[e._v(e._s(e.species))]),e._v(" "),a("p",{staticClass:"card__about"},[e._v(e._s(e.about))])])},staticRenderFns:[]}},75:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("div",{staticClass:"card-board"},[a("div",{staticClass:"row"},[e._l(e.$store.getters.enabledAnimals,function(e,i){return a("div",{staticClass:"col-12 col-md-6 col-lg-4"},[a("card",{key:"key",attrs:{img:e.img,species:e.species,about:e.about,wikiLink:e.wikiLink}})],1)}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.$store.getters.enabledAnimals[0],expression:"!$store.getters.enabledAnimals[0]"}],staticClass:"card-board__no-animals"},[e._v("\n      There's no animals here : (\n    ")])],2)])},staticRenderFns:[]}},76:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("div",{staticClass:"toolbar"},e._l(e.$store.getters.families,function(i,t,n){return a("button",{key:"key",staticClass:"button-family",class:e.buttonState(i,t),on:{click:e.handleClick}},[e._v("\n    "+e._s(e.capitalize(i))+"\n  ")])}))},staticRenderFns:[]}},77:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,a=e._self._c||i;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container-fluid"},[a("toolbar"),e._v(" "),a("card-board")],1)])},staticRenderFns:[]}},80:function(e,i){e.exports=[{family:"penguin",enabled:!0,units:[{species:"Aptenodytes forsteri",img:"penguin1.jpg",about:"The emperor penguin is the tallest and heaviest of all living penguin species and is endemic to Antarctica.",wikiLink:"https://en.wikipedia.org/wiki/Emperor_penguin"}]},{family:"armadillo",enabled:!0,units:[{species:"Dasypus novemcinctus",img:"armadillo1.jpg",about:"The nine-banded armadillo, or the nine-banded, long-nosed armadillo, is a medium-sized mammal found in North, Central, and South America, making it the most widespread of the armadillos.",wikiLink:"https://en.wikipedia.org/wiki/Nine-banded_armadillo"},{species:"Euphractus sexcinctus",img:"armadillo2.jpg",about:"The six-banded armadillo, also known as the yellow armadillo, is an armadillo found in South America. The sole member of its genus, it was first described by Swedish zoologist Carl Linnaeus in 1758.",wikiLink:"https://en.wikipedia.org/wiki/Six-banded_armadillo"},{species:"Zaedyus pichiy",img:"armadillo3.jpg",about:"The pichi or dwarf armadillo is a small armadillo native to Argentina and Chile. It is the only living member of the genus Zaedyus, and the only armadillo to hibernate.",wikiLink:"https://en.wikipedia.org/wiki/Pichi"}]},{family:"mackerel",enabled:!0,units:[{species:"Rastrelliger brachysoma",img:"mackerel1.jpg",about:"The short mackerel or shortbodied mackerel is a species of mackerel in the family Scombridae. Its habitat is the shallow waters of Southeast Asia and Melanesia, feeding mainly on small zooplankton.",wikiLink:"https://en.wikipedia.org/wiki/Short_mackerel"},{species:"Rastrelliger kanagurta",img:"mackerel2.jpg",about:"The Indian mackerel is a species of mackerel in the scombrid family (family Scombridae) of order Perciformes. It is commonly found in the Indian and West Pacific oceans, and their surrounding seas.",wikiLink:"https://en.wikipedia.org/wiki/Indian_mackerel"},{species:"Scomber colias",img:"mackerel3.jpg",about:"Atlantic chub mackerel is a pelagic schooling species of mackerel found in the Atlantic Ocean, the Mediterranean Sea, and the Black Sea.",wikiLink:"https://en.wikipedia.org/wiki/Atlantic_chub_mackerel"},{species:"Scomber japonicus",img:"mackerel4.jpg",about:"The chub mackerel, Pacific mackerel, or Pacific chub mackerel is a mackerel which closely resembles the Atlantic chub mackerel.",wikiLink:"https://en.wikipedia.org/wiki/Chub_mackerel"},{species:"Scomber scombrus",img:"mackerel5.jpg",about:"The Atlantic mackerel, also known as Boston mackerel, Norwegian mackerel, Scottish mackerel or just mackerel. The fish's dorsum is steel-blue and marked with wavy black lines, while the belly is silvery-white.",wikiLink:"https://en.wikipedia.org/wiki/Atlantic_mackerel"}]}]}},[31]);
//# sourceMappingURL=app.cf671534724598b15a26.js.map