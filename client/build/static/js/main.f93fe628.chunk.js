(this["webpackJsonpfoodfinder-client"]=this["webpackJsonpfoodfinder-client"]||[]).push([[0],{60:function(e,t,n){e.exports=n(71)},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),l=n(43),i=n(44),s=n(53),u=n(52),d=n(116),h=n(118),m=n(109),f=n(110),g=n(117),p=n(111),v=n(115),y=n(114),b=n(49),E=n.n(b),j=["Apples","Bananas","Butter","Bread","Carrots","Cheese","Eggs","Flour","Ground Beef","Lettuce","Milk","Orange Juice","Pasta","Rice","Salt","Sugar","Spinach"],k=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={currentProduct:"",vendorMatches:{}},a}return Object(i.a)(n,[{key:"selectedProduct",value:function(e){var t=this;this.setState({currentProduct:e}),console.log("Trying..."),fetch("http://localhost:8081/find-product/"+e).then((function(e){return e.json()})).then((function(e){console.log("hiiii"),console.log(e),t.setState({vendorMatches:e})})).catch(console.log),console.log("done?")}},{key:"getVendorList",value:function(e){return 0===Object.keys(e).length?r.a.createElement(h.a,null,"The item you have selected is out of stock at all of our vendors."):Object.keys(e).map((function(t,n){return r.a.createElement(m.a,null,r.a.createElement(f.a,null,r.a.createElement(E.a,null)),r.a.createElement(g.a,{primary:t,secondary:"Price: $"+e[t].price+", Quantity: "+e[t].quantity}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(h.a,{id:"demo-simple-select-label"},"Available Products"),r.a.createElement(d.a,{id:"combo-box-demo",options:j,style:{width:300,justifyContent:"center",alignItems:"center"},onChange:function(t,n){e.selectedProduct(n)},renderInput:function(e){return r.a.createElement(v.a,Object.assign({},e,{variant:"outlined"}))}}),r.a.createElement(y.a,null,this.getVendorList(this.state.vendorMatches)))}}]),n}(r.a.Component);c.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.f93fe628.chunk.js.map