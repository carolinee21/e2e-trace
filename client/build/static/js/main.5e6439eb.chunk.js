(this["webpackJsonpfoodfinder-client"]=this["webpackJsonpfoodfinder-client"]||[]).push([[0],{61:function(e,t,n){e.exports=n(72)},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),i=n(44),l=n(45),s=n(54),u=n(53),d=n(119),m=n(107),h=n(120),f=n(111),p=n(112),g=n(113),v=n(114),E=n(36),y=n(118),b=n(117),j=n(50),P=n.n(j),k=["Apples","Bananas","Butter","Bread","Carrots","Cheese","Eggs","Flour","Ground Beef","Lettuce","Milk","Orange Juice","Pasta","Peanut Butter","Rice","Salt","Sugar","Spinach"],O=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={currentProduct:"",vendorMatches:{},isLoading:!1},a}return Object(l.a)(n,[{key:"selectedProduct",value:function(e){var t=this;this.setState({isLoading:!0}),fetch("https://server-dot-ardent-fusion-279020.wl.r.appspot.com/find-product/"+e).then((function(e){return e.json()})).then((function(n){console.log(n),t.setState({vendorMatches:n,currentProduct:e,isLoading:!1})})).catch(console.log)}},{key:"getVendorList",value:function(){var e=this.state.vendorMatches;return this.state.isLoading?r.a.createElement(m.a,null):this.state.currentProduct?0===Object.keys(e).length?r.a.createElement(h.a,null,"The item you have selected is currently out of stock at all vendors."):Object.keys(e).map((function(t,n){return r.a.createElement(f.a,null,r.a.createElement(p.a,null,r.a.createElement(P.a,null)),r.a.createElement(g.a,{primary:t,secondary:"Price: $"+e[t].price+", Quantity: "+e[t].quantity}))})):r.a.createElement(h.a,null,"Please select an item.")}},{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(E.a,{variant:"h2",gutterBottom:!0},"FoodFinder"),r.a.createElement(h.a,{id:"demo-simple-select-label"},"Available Products"),r.a.createElement(d.a,{id:"combo-box-demo",options:k,style:{width:300,justifyContent:"center",alignItems:"center"},onChange:function(t,n){e.selectedProduct(n)},renderInput:function(e){return r.a.createElement(y.a,Object.assign({},e,{variant:"outlined"}))}}),r.a.createElement(b.a,null,this.getVendorList()))}}]),n}(r.a.Component);o.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.5e6439eb.chunk.js.map