(this["webpackJsonpmulti-form"]=this["webpackJsonpmulti-form"]||[]).push([[0],{14:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var i=a(0),c=a(1),n=a.n(c),s=a(17),r=a.n(s),l=(a(25),a(26),a(6)),o=a(7),d=a(9),j=a(8),h=(a(14),a(31)),b=a(33),p=a(18),u=a(34),x=(a(15),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={Validated:!1},e.handleSubmit=function(t){var a=t.currentTarget;!1===a.checkValidity()&&(t.preventDefault(),t.stopPropagation()),!0===a.checkValidity()&&e.continue(t),e.setState({Validated:!0})},e.continue=function(t){t.preventDefault(),e.props.nextStep()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.inputChange;return Object(i.jsx)("div",{id:"infoDiv",className:"form-container",children:Object(i.jsxs)(h.a,{children:[Object(i.jsx)("div",{id:"formLabel",className:"text-center",children:" Taxpayer Information "}),Object(i.jsx)("hr",{}),Object(i.jsxs)(b.a,{noValidate:!0,validated:this.state.Validated,onSubmit:this.handleSubmit,children:[Object(i.jsxs)(b.a.Row,{children:[Object(i.jsxs)(b.a.Group,{as:p.a,md:"5",controlId:"FirstName",children:[Object(i.jsx)(b.a.Label,{children:"First name:"}),Object(i.jsx)(b.a.Control,{required:!0,name:"firstName",onChange:a("firstName"),value:t.firstName,type:"text"})]}),Object(i.jsxs)(b.a.Group,{as:p.a,md:"4",controlId:"MiddleInitial",children:[Object(i.jsx)(b.a.Label,{children:"Middle Initial:"}),Object(i.jsx)(b.a.Control,{required:!0,name:"middleInitial",onChange:a("middleInitial"),value:t.middleInitial,type:"text"})]})]}),Object(i.jsxs)(b.a.Row,{children:[Object(i.jsxs)(b.a.Group,{as:p.a,md:"5",controlId:"LastName",children:[Object(i.jsx)(b.a.Label,{children:"Last name:"}),Object(i.jsx)(b.a.Control,{required:!0,name:"lastName",onChange:a("lastName"),value:t.lastName,type:"text"})]}),Object(i.jsxs)(b.a.Group,{as:p.a,md:"4",controlId:"Occupation",children:[Object(i.jsx)(b.a.Label,{children:"Occupation:"}),Object(i.jsx)(b.a.Control,{required:!0,name:"occupation",onChange:a("occupation"),value:t.occupation,type:"text"})]})]}),Object(i.jsxs)(b.a.Row,{children:[Object(i.jsxs)(b.a.Group,{as:p.a,md:"5",controlId:"SocialId",children:[Object(i.jsx)(b.a.Label,{children:"Social Security Number:"}),Object(i.jsx)(b.a.Control,{required:!0,name:"socialId",onChange:a("socialId"),value:t.socialId,type:"text"})]}),Object(i.jsxs)(b.a.Group,{as:p.a,md:"4",controlId:"Birth",children:[Object(i.jsx)(b.a.Label,{children:"Date of Birth:"}),Object(i.jsx)(b.a.Control,{required:!0,name:"birth",onChange:a("birth"),value:t.birth,type:"date"})]})]}),Object(i.jsx)(b.a.Row,{children:Object(i.jsxs)(b.a.Group,{controlId:"exampleForm.SelectCustom",children:[Object(i.jsx)(b.a.Label,{children:"Jr., Sr., III:"}),Object(i.jsxs)(b.a.Control,{as:"select",custom:!0,children:[Object(i.jsx)("option",{disabled:!0,selected:!0,children:"Choose an option"}),Object(i.jsx)("option",{children:"JR"}),Object(i.jsx)("option",{children:"SR"}),Object(i.jsx)("option",{children:"II"}),Object(i.jsx)("option",{children:"III"}),Object(i.jsx)("option",{children:"IV"}),Object(i.jsx)("option",{children:"V"}),Object(i.jsx)("option",{children:"VI"})]})]})}),Object(i.jsx)("hr",{}),Object(i.jsxs)(b.a.Row,{children:[Object(i.jsxs)(b.a.Group,{as:p.a,md:"5",controlId:"streetAddress",children:[Object(i.jsx)(b.a.Label,{children:"Street Address:"}),Object(i.jsx)(b.a.Control,{type:"text",required:!0}),Object(i.jsx)(b.a.Control.Feedback,{type:"invalid",children:"Please provide a valid Address."})]}),Object(i.jsxs)(b.a.Group,{as:p.a,md:"4",controlId:"Aptno",children:[Object(i.jsx)(b.a.Label,{children:"Apt No:"}),Object(i.jsx)(b.a.Control,{type:"text",required:!0}),Object(i.jsx)(b.a.Control.Feedback,{type:"invalid",children:"Please provide a valid city."})]})]}),Object(i.jsxs)(b.a.Row,{children:[Object(i.jsxs)(b.a.Group,{as:p.a,md:"4",controlId:"City",children:[Object(i.jsx)(b.a.Label,{children:"City:"}),Object(i.jsx)(b.a.Control,{type:"text",required:!0}),Object(i.jsx)(b.a.Control.Feedback,{type:"invalid",children:"Please provide a valid city."})]}),Object(i.jsxs)(b.a.Group,{as:p.a,md:"3",controlId:"State",children:[Object(i.jsx)(b.a.Label,{children:"State:"}),Object(i.jsx)(b.a.Control,{type:"text",required:!0}),Object(i.jsx)(b.a.Control.Feedback,{type:"invalid",children:"Please provide a valid state."})]}),Object(i.jsxs)(b.a.Group,{as:p.a,md:"2",controlId:"Zip",children:[Object(i.jsx)(b.a.Label,{children:"Zip:"}),Object(i.jsx)(b.a.Control,{type:"text",required:!0}),Object(i.jsx)(b.a.Control.Feedback,{type:"invalid",children:"Please provide a valid zip."})]})]}),Object(i.jsx)("hr",{}),Object(i.jsx)(b.a.Check,{type:"switch",id:"switch1",label:"Can a parent (or somebody else) claim you as a dependent on their tax return?"}),Object(i.jsx)(b.a.Check,{type:"switch",id:"switch2",label:"Do you want to contribute $3 to the Presidential Election Campaign Fund?"}),Object(i.jsx)(b.a.Check,{type:"switch",id:"switch3",label:"Is this person legally blind?"}),Object(i.jsx)(b.a.Check,{type:"switch",id:"switch4",label:"Has this person passed away before the filing of this tax return?"}),Object(i.jsx)(b.a.Check,{type:"switch",id:"switch5",label:"Were you impacted by a qualified disaster in 2019?"}),Object(i.jsx)("hr",{}),Object(i.jsx)(b.a.Group,{children:Object(i.jsx)(b.a.Check,{required:!0,label:"Agree to terms and conditions",feedback:"You must agree before submitting."})}),Object(i.jsx)(u.a,{className:"float-right",id:"nextBtn",type:"submit",children:"Save and Continue"})]})]})})}}]),a}(c.Component)),O=a(19),m=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={radio:1},e.onCheck=function(t){return function(){e.setState({radio:t})}},e.continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props;e.values,e.inputChange;return Object(i.jsx)("div",{id:"filingStatusMainDiv",className:"form-container",children:Object(i.jsxs)(h.a,{children:[Object(i.jsx)("div",{id:"formLabel",className:"text-center",children:"Filing Status"}),Object(i.jsx)("hr",{}),Object(i.jsxs)(b.a,{children:[Object(i.jsx)("label",{id:"filingLabel",children:"Choose your filing status."}),Object(i.jsx)("div",{className:"radio ml-2 p-2",children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{onClick:this.onCheck(1),checked:1===this.state.radio,type:"radio",id:"radio1"}),"Single"]})}),Object(i.jsx)("div",{className:"radio  ml-2 p-2",children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{value:"option2",onClick:this.onCheck(2),checked:2===this.state.radio,type:"radio",id:"radio2"}),"Married Filing Jointly"]})}),Object(i.jsx)("div",{className:"radio  ml-2 p-2",children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{value:"option3",onClick:this.onCheck(3),checked:3===this.state.radio,type:"radio",id:"radio3"}),"Married Filing Separately"]})}),Object(i.jsx)("div",{className:"radio ml-2 p-2",children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{value:"option4",onClick:this.onCheck(4),checked:4===this.state.radio,type:"radio",id:"radio4"}),"Head of Household"]})}),Object(i.jsx)("div",{className:"radio  ml-2 p-2",children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{value:"option5",onClick:this.onCheck(5),checked:5===this.state.radio,type:"radio",id:"radio5"}),"Qualifying Widow(er)"]})}),Object(i.jsx)("div",{className:"radio  ml-2 p-2",children:Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{value:"option6",onClick:this.onCheck(6),checked:6===this.state.radio,type:"radio",id:"radio6"}),"I'm not sure - help me decide"]})}),Object(i.jsx)("hr",{}),Object(i.jsx)(u.a,{className:"float-right",id:"nextBtn",onClick:this.continue,children:"Save and Continue"}),Object(i.jsx)(u.a,{className:"float-left",id:"backBtn",onClick:this.back,children:"Previous Page"})]})]})})}}]),a}(c.Component),v=(c.Component,function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.values,t=e.firstName,a=e.lastName,c=e.middleInitial,n=e.occupation,s=e.socialId,r=e.birth;return Object(i.jsx)("div",{id:"confirmDiv",className:"form-container",children:Object(i.jsxs)(h.a,{children:[Object(i.jsx)("div",{id:"formLabel",className:"text-center",children:"Confirm"}),Object(i.jsx)("hr",{}),Object(i.jsxs)(b.a,{children:[Object(i.jsx)(b.a.Row,{children:Object(i.jsxs)("ul",{class:"list-group",children:[Object(i.jsxs)("li",{class:"list-group-item",children:["Name:",a," ",c," ",t," "]}),Object(i.jsxs)("li",{class:"list-group-item",children:["Occupation:",n]}),Object(i.jsxs)("li",{class:"list-group-item",children:["Social Security Number:",s]}),Object(i.jsxs)("li",{class:"list-group-item",children:["Date Of Birth: ",r]})]})}),Object(i.jsx)("hr",{}),Object(i.jsx)(u.a,{className:"float-right",id:"nextBtn",onClick:this.continue,children:"Save and Continue"}),Object(i.jsx)(u.a,{className:"float-left",id:"backBtn",onClick:this.back,children:"Previous Page"})]})]})})}}]),a}(c.Component)),f=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={step:1,firstName:"",lastName:"",middleInitial:"",occupation:"",socialId:"",birth:""},e.nextStep=function(){var t=e.state.step;e.setState({step:t+1})},e.prevStep=function(){var t=e.state.step;e.setState({step:t-1})},e.inputChange=function(t){return function(a){e.setState(Object(O.a)({},t,a.target.value))}},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.step,t=this.state,a={firstName:t.firstName,lastName:t.lastName,middleInitial:t.middleInitial,occupation:t.occupation,socialId:t.socialId,birth:t.birth};switch(e){case 1:return Object(i.jsx)(x,{nextStep:this.nextStep,inputChange:this.inputChange,values:a});case 2:return Object(i.jsx)(m,{nextStep:this.nextStep,prevStep:this.prevStep,inputChange:this.inputChange,values:a});case 3:return Object(i.jsx)(v,{nextStep:this.nextStep,prevStep:this.prevStep,values:a})}}}]),a}(c.Component),C=a(32);var y=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(h.a,{className:"p-4",children:Object(i.jsxs)(C.a,{children:[Object(i.jsx)(p.a,{xs:1}),Object(i.jsxs)(p.a,{children:[" ",Object(i.jsx)(f,{})," "]}),Object(i.jsx)(p.a,{xs:1})]})})})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.88339d95.chunk.js.map