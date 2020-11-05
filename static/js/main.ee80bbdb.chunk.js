(this["webpackJsonpmulti-form"]=this["webpackJsonpmulti-form"]||[]).push([[0],{12:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),s=a.n(i),c=a(18),l=a.n(c),r=(a(25),a(26),a(7)),o=a(8),d=a(10),j=a(9),b=(a(12),a(31)),p=a(32),h=a(19),u=a(33),x=(a(13),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={Validated:!1},e.handleSubmit=function(t){var a=t.currentTarget;!1===a.checkValidity()&&(t.preventDefault(),t.stopPropagation()),!0===a.checkValidity()&&e.continue(t),e.setState({Validated:!0})},e.continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.inputChange;return Object(n.jsx)("div",{id:"infoDiv",className:"form-container",children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)("div",{id:"formLabel",className:"text-center",children:" Taxpayer Information "}),Object(n.jsx)("hr",{}),Object(n.jsxs)(p.a,{noValidate:!0,validated:this.state.Validated,onSubmit:this.handleSubmit,children:[Object(n.jsxs)(p.a.Row,{children:[Object(n.jsxs)(p.a.Group,{className:"taxInput",as:h.a,md:"5",controlId:"FirstName",children:[Object(n.jsx)(p.a.Label,{className:"taxPayerLabels",children:"First name:"}),Object(n.jsx)(p.a.Control,{required:!0,name:"firstName",onChange:a("firstName"),value:t.firstName,type:"text",className:"taxInput3"})]}),Object(n.jsxs)(p.a.Group,{className:"taxInput",as:h.a,md:"4",controlId:"MiddleInitial",children:[Object(n.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Middle Initial:"}),Object(n.jsx)(p.a.Control,{className:"taxInput3",name:"middleInitial",onChange:a("middleInitial"),value:t.middleInitial,type:"text"})]})]}),Object(n.jsxs)(p.a.Row,{children:[Object(n.jsxs)(p.a.Group,{className:"taxInput",as:h.a,md:"5",controlId:"LastName",children:[Object(n.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Last name:"}),Object(n.jsx)(p.a.Control,{required:!0,className:"taxInput3",name:"lastName",onChange:a("lastName"),value:t.lastName,type:"text"})]}),Object(n.jsxs)(p.a.Group,{className:"taxInput",as:h.a,md:"4",controlId:"Occupation",children:[Object(n.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Occupation:"}),Object(n.jsx)(p.a.Control,{required:!0,className:"taxInput3",name:"occupation",onChange:a("occupation"),value:t.occupation,type:"text"})]})]}),Object(n.jsxs)(p.a.Row,{children:[Object(n.jsxs)(p.a.Group,{className:"taxInput",as:h.a,md:"5",controlId:"SocialId",children:[Object(n.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Social Security Number:"}),Object(n.jsx)(p.a.Control,{required:!0,className:"taxInput3",name:"socialId",onChange:a("socialId"),value:t.socialId,type:"text"})]}),Object(n.jsxs)(p.a.Group,{className:"taxInput",as:h.a,md:"4",controlId:"Birth",children:[Object(n.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Date of Birth:"}),Object(n.jsx)(p.a.Control,{required:!0,className:"taxInput3",name:"birth",onChange:a("birth"),value:t.birth,type:"date"})]})]}),Object(n.jsxs)(p.a.Group,{className:"taxInput2",controlId:"exampleForm.SelectCustom",children:[Object(n.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Jr., Sr., III:"}),Object(n.jsxs)(p.a.Control,{as:"select",custom:!0,children:[Object(n.jsx)("option",{disabled:!0,selected:!0}),Object(n.jsx)("option",{children:"JR"}),Object(n.jsx)("option",{children:"SR"}),Object(n.jsx)("option",{children:"II"}),Object(n.jsx)("option",{children:"III"}),Object(n.jsx)("option",{children:"IV"}),Object(n.jsx)("option",{children:"V"}),Object(n.jsx)("option",{children:"VI"})]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)(p.a.Row,{children:[Object(n.jsxs)(p.a.Group,{className:"taxInput",as:h.a,md:"5",controlId:"streetAddress",children:[Object(n.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Street Address:"}),Object(n.jsx)(p.a.Control,{type:"text",className:"taxInput3",required:!0,name:"streetAddress",onChange:a("streetAddress"),value:t.streetAddress}),Object(n.jsx)(p.a.Control.Feedback,{type:"invalid",children:"Please provide a valid Address."})]}),Object(n.jsxs)(p.a.Group,{className:"taxInput",as:h.a,md:"4",controlId:"Aptno",children:[Object(n.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Apt No:"}),Object(n.jsx)(p.a.Control,{type:"number",name:"aptNo",className:"taxInput3",onChange:a("aptNo"),value:t.aptNo}),Object(n.jsx)(p.a.Control.Feedback,{type:"invalid",children:"Please provide a valid city."})]})]}),Object(n.jsxs)(p.a.Row,{children:[Object(n.jsxs)(p.a.Group,{className:"taxInput",as:h.a,md:"4",controlId:"City",children:[Object(n.jsx)(p.a.Label,{className:"taxPayerLabels",children:"City:"}),Object(n.jsx)(p.a.Control,{type:"text",className:"taxInput3",required:!0,name:"city",onChange:a("city"),value:t.city}),Object(n.jsx)(p.a.Control.Feedback,{type:"invalid",children:"Please provide a valid city."})]}),Object(n.jsxs)(p.a.Group,{className:"taxInput",as:h.a,md:"3",controlId:"State",children:[Object(n.jsx)(p.a.Label,{className:"taxPayerLabels",children:"State:"}),Object(n.jsx)(p.a.Control,{type:"text",required:!0,className:"taxInput3",name:"state",onChange:a("state"),value:t.state}),Object(n.jsx)(p.a.Control.Feedback,{type:"invalid",children:"Please provide a valid state."})]}),Object(n.jsxs)(p.a.Group,{className:"taxInput",as:h.a,md:"2",controlId:"Zip",children:[Object(n.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Zip:"}),Object(n.jsx)(p.a.Control,{type:"text",required:!0,className:"taxInput3",name:"zip",onChange:a("zip"),value:t.zip}),Object(n.jsx)(p.a.Control.Feedback,{type:"invalid",children:"Please provide a valid zip."})]})]}),Object(n.jsx)("hr",{}),Object(n.jsx)(p.a.Check,{type:"switch",id:"switch1",label:"Can a parent (or somebody else) claim you as a dependent on their tax return?"}),Object(n.jsx)(p.a.Check,{type:"switch",id:"switch2",label:"Do you want to contribute $3 to the Presidential Election Campaign Fund?"}),Object(n.jsx)(p.a.Check,{type:"switch",id:"switch3",label:"Is this person legally blind?"}),Object(n.jsx)(p.a.Check,{type:"switch",id:"switch4",label:"Has this person passed away before the filing of this tax return?"}),Object(n.jsx)(p.a.Check,{type:"switch",id:"switch5",label:"Were you impacted by a qualified disaster in 2019?"}),Object(n.jsx)("hr",{}),Object(n.jsx)(p.a.Group,{children:Object(n.jsx)(p.a.Check,{required:!0,label:"Agree to terms and conditions",feedback:"You must agree before submitting."})}),Object(n.jsx)(u.a,{className:"float-right",id:"nextBtn",type:"submit",children:"Save and Continue"}),Object(n.jsx)(u.a,{className:"float-left",id:"backBtn",onClick:this.back,children:"Previous Page"})]})]})})}}]),a}(i.Component)),O=a(6),m=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={radio:0},e.onCheck=function(t){return function(){e.setState({radio:t})}},e.continue=function(t){2==e.state.radio||3==e.state.radio?(t.preventDefault(),e.props.nextStep()):e.props.doubleStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(o.a)(a,[{key:"render",value:function(){var e,t,a,i,s=this.props,c=(s.values,s.inputChange);return Object(n.jsx)("div",{id:"filingStatusMainDiv",className:"form-container",children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)("div",{id:"formLabel",className:"text-center",children:"Filing Status"}),Object(n.jsx)("hr",{}),Object(n.jsxs)(p.a,{children:[Object(n.jsx)("label",{id:"filingLabel",children:"Choose your filing status."}),Object(n.jsx)("div",{className:"radio ml-2 p-2",children:Object(n.jsxs)("label",{children:[Object(n.jsx)("input",{name:"Single",onClick:this.onCheck(1),onChange:c("filingStatus"),value:"Single",checked:1===this.state.radio,type:"radio",id:"Single"}),"Single"]})}),Object(n.jsx)("div",{className:"radio  ml-2 p-2",children:Object(n.jsxs)("label",{children:[Object(n.jsx)("input",(e={value:"option2",onClick:this.onCheck(2),onChange:c("filingStatus")},Object(O.a)(e,"value","Married Filing Jointly"),Object(O.a)(e,"checked",2===this.state.radio),Object(O.a)(e,"type","radio"),Object(O.a)(e,"id","radio2"),e)),"Married Filing Jointly"]})}),Object(n.jsx)("div",{className:"radio  ml-2 p-2",children:Object(n.jsxs)("label",{children:[Object(n.jsx)("input",(t={value:"option3",onClick:this.onCheck(3),onChange:c("filingStatus")},Object(O.a)(t,"value","Married Filing Separately"),Object(O.a)(t,"checked",3===this.state.radio),Object(O.a)(t,"type","radio"),Object(O.a)(t,"id","radio3"),t)),"Married Filing Separately"]})}),Object(n.jsx)("div",{className:"radio ml-2 p-2",children:Object(n.jsxs)("label",{children:[Object(n.jsx)("input",(a={value:"option4",onClick:this.onCheck(4),onChange:c("filingStatus")},Object(O.a)(a,"value","Head of Household"),Object(O.a)(a,"checked",4===this.state.radio),Object(O.a)(a,"type","radio"),Object(O.a)(a,"id","radio4"),a)),"Head of Household"]})}),Object(n.jsx)("div",{className:"radio  ml-2 p-2",children:Object(n.jsxs)("label",{children:[Object(n.jsx)("input",(i={value:"option5",onClick:this.onCheck(5),onChange:c("filingStatus")},Object(O.a)(i,"value","Qualifying Widow(er)"),Object(O.a)(i,"checked",5===this.state.radio),Object(O.a)(i,"type","radio"),Object(O.a)(i,"id","radio5"),i)),"Qualifying Widow(er)"]})}),Object(n.jsx)("hr",{}),Object(n.jsx)(u.a,{className:"float-right",id:"nextBtn",onClick:this.continue,children:"Save and Continue"}),Object(n.jsx)(u.a,{className:"float-left",id:"backBtn",onClick:this.back,children:"Previous Page"})]})]})})}}]),a}(i.Component),f=function(e){var t=s.a.useRef(null);return Object(n.jsx)("div",{id:"chooseDiv",className:"form-container",children:Object(n.jsxs)(b.a,{style:{width:"100%"},children:[Object(n.jsx)("div",{id:"formLabel",className:"text-center",children:"Identification"}),Object(n.jsx)("hr",{}),Object(n.jsxs)(p.a,{children:[Object(n.jsxs)(p.a.Group,{children:[Object(n.jsx)("label",{className:"chooseLabels",children:"Upload last year PDF file:"}),Object(n.jsxs)(p.a.Row,{children:[Object(n.jsx)(u.a,{id:"manuallyBtn",style:{backgroundColor:"white",color:"black",border:"0"},onClick:function(e){t.current.click()},children:"Upload a file"}),Object(n.jsx)("input",{type:"file",ref:t,onChange:function(t){e.confirmPage()},style:{display:"none"}})]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)(p.a.Group,{children:[Object(n.jsx)("label",{className:"chooseLabels",children:"Or you can manually fill out your info:"}),Object(n.jsx)(u.a,{className:"float-right",id:"manuallyBtn",onClick:function(t){e.nextStep()},children:"Fill your information manually"})]})]})]})})},y=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.values,t=e.firstName,a=e.lastName,i=e.middleInitial,s=e.occupation,c=e.socialId,l=e.birth,r=e.streetAddress,o=e.aptNo,d=e.city,j=e.state,h=e.zip,x=e.filingStatus,O=e.dependentFirstName,m=e.dependentLastName,f=e.dependentMiddleInitial,y=e.dependentSocialId,g=e.dependentBirth,v=e.spouseFirstName,N=e.spouseLastName,I=e.spouseMiddleInitial,S=e.spouseSocialId,C=e.spouseBirth;return Object(n.jsx)("div",{id:"confirmDiv",className:"form-container",children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)("div",{id:"formLabel",className:"text-center",children:"Personal Information Summary"}),Object(n.jsx)("hr",{}),Object(n.jsx)("label",{children:"Let's make sure your personal information is correct."}),Object(n.jsxs)(p.a,{children:[Object(n.jsx)(p.a.Row,{children:Object(n.jsx)("div",{id:"confirmlb",children:"YOUR INFORMATION"})}),Object(n.jsx)("hr",{id:"heavyHr"}),Object(n.jsxs)(p.a.Row,{children:[Object(n.jsx)("label",{style:{fontWeight:"bold",color:"gray",marginLeft:"5px",paddingRight:"10px"},children:"Name : "}),Object(n.jsxs)("label",{style:{textTransform:"uppercase"},children:[" ",t," ",i," ",a," "]})]}),Object(n.jsxs)(p.a.Row,{children:[Object(n.jsx)("label",{style:{fontWeight:"bold",color:"gray",marginLeft:"5px",paddingRight:"10px"},children:"Occupation : "}),Object(n.jsxs)("label",{children:[" ",s," "]})]}),Object(n.jsxs)(p.a.Row,{children:[Object(n.jsx)("label",{style:{fontWeight:"bold",color:"gray",marginLeft:"5px",paddingRight:"10px"},children:"Social Security Number: "}),Object(n.jsxs)("label",{children:[" ",c," "]})]}),Object(n.jsxs)(p.a.Row,{children:[Object(n.jsx)("label",{style:{fontWeight:"bold",color:"gray",marginLeft:"5px",paddingRight:"10px"},children:"Date Of Birth: "}),Object(n.jsxs)("label",{children:[" ",l," "]})]}),Object(n.jsxs)(p.a.Row,{children:[Object(n.jsx)("label",{style:{fontWeight:"bold",color:"gray",marginLeft:"5px",paddingRight:"10px"},children:"Address: "}),Object(n.jsxs)("label",{children:[" ",r,"  ",o,"  , ",d," , ",j," ",h]})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)(p.a.Row,{children:[Object(n.jsx)("label",{style:{fontWeight:"bold",color:"gray",marginLeft:"5px",paddingRight:"10px"},children:"Filing Status: "}),Object(n.jsxs)("label",{children:[" ",x," "]})]}),O?Object(n.jsxs)("div",{children:[Object(n.jsx)("hr",{}),Object(n.jsx)(p.a.Row,{children:Object(n.jsxs)("div",{style:{textTransform:"uppercase",fontSize:"x-large",color:"rgb(59, 142, 80)"},children:[O," Information"]})}),Object(n.jsx)("hr",{id:"heavyHr"}),Object(n.jsxs)(p.a.Row,{children:[Object(n.jsx)("label",{style:{fontWeight:"bold",color:"gray",marginLeft:"5px",paddingRight:"10px"},children:"Name : "}),Object(n.jsxs)("label",{style:{textTransform:"uppercase"},children:[" ",O," ",f," ",m," "]})]}),Object(n.jsxs)(p.a.Row,{children:[Object(n.jsx)("label",{style:{fontWeight:"bold",color:"gray",marginLeft:"5px",paddingRight:"10px"},children:"Social Security Number: "}),Object(n.jsxs)("label",{children:[" ",y," "]})]}),Object(n.jsxs)(p.a.Row,{children:[Object(n.jsx)("label",{style:{fontWeight:"bold",color:"gray",marginLeft:"5px",paddingRight:"10px"},children:"Date Of Birth: "}),Object(n.jsxs)("label",{children:[" ",g," "]})]})]}):null,v?Object(n.jsxs)("div",{children:[Object(n.jsx)("hr",{}),Object(n.jsx)(p.a.Row,{children:Object(n.jsxs)("div",{style:{textTransform:"uppercase",fontSize:"x-large",color:"rgb(59, 142, 80)"},children:[v," Information"]})}),Object(n.jsx)("hr",{id:"heavyHr"}),Object(n.jsxs)(p.a.Row,{children:[Object(n.jsx)("label",{style:{fontWeight:"bold",color:"gray",marginLeft:"5px",paddingRight:"10px"},children:"Name : "}),Object(n.jsxs)("label",{style:{textTransform:"uppercase"},children:[" ",v," ",I," ",N," "]})]}),Object(n.jsxs)(p.a.Row,{children:[Object(n.jsx)("label",{style:{fontWeight:"bold",color:"gray",marginLeft:"5px",paddingRight:"10px"},children:"Social Security Number: "}),Object(n.jsxs)("label",{children:[" ",S," "]})]}),Object(n.jsxs)(p.a.Row,{children:[Object(n.jsx)("label",{style:{fontWeight:"bold",color:"gray",marginLeft:"5px",paddingRight:"10px"},children:"Date Of Birth: "}),Object(n.jsxs)("label",{children:[" ",C," "]})]})]}):null,Object(n.jsx)(u.a,{className:"float-right",id:"nextBtn",onClick:this.continue,children:"Confirm"}),Object(n.jsx)(u.a,{className:"float-left",id:"backBtn",onClick:this.back,children:"Previous Page"})]})]})})}}]),a}(i.Component),g=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)(b.a,{className:"form-container",children:Object(n.jsx)(p.a,{children:Object(n.jsx)("h1",{children:"Successfull Page!"})})})}}]),a}(i.Component),v=function(e){return Object(n.jsx)("div",{id:"confirmDiv",className:"form-container",children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)("div",{id:"formLabel",className:"text-center",children:"Dependents and Qualifying Children"}),Object(n.jsx)("hr",{}),Object(n.jsxs)(p.a,{children:[Object(n.jsxs)(p.a.Row,{children:[Object(n.jsx)("label",{children:"Do you have any dependents or qualifying children?"}),Object(n.jsx)("label",{style:{fontSize:"small",color:"gray"},children:"If you aren't sure if someone qualifies, answer Yes and we'll help you figure it out."})]}),Object(n.jsx)("hr",{}),Object(n.jsx)(u.a,{className:"float-left",id:"backBtn",onClick:function(t){t.preventDefault(),e.prevStep()},children:"Previous Page"}),Object(n.jsx)(u.a,{className:"float-right",id:"nextBtn",onClick:function(t){e.confirmPage()},type:"submit",children:"No, Continue"}),Object(n.jsx)(u.a,{style:{marginRight:"2px"},className:"float-right",id:"manuallyBtn",onClick:function(t){t.preventDefault(),e.nextStep()},children:"Yes"})]})]})})},N=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={Validated:!1},e.handleSubmit=function(t){var a=t.currentTarget;!1===a.checkValidity()&&(t.preventDefault(),t.stopPropagation()),!0===a.checkValidity()&&e.continue(t),e.setState({Validated:!0})},e.continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.inputChange;return Object(n.jsx)("div",{id:"infoDiv",className:"form-container",children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)("div",{id:"formLabel",className:"text-center",children:" Dependent Information "}),Object(n.jsx)("hr",{}),Object(n.jsxs)(p.a,{noValidate:!0,validated:this.state.Validated,onSubmit:this.handleSubmit,children:[Object(n.jsxs)(p.a.Row,{children:[Object(n.jsxs)(p.a.Group,{as:h.a,md:"5",controlId:"DependentFirstName",children:[Object(n.jsx)(p.a.Label,{children:"First name:"}),Object(n.jsx)(p.a.Control,{required:!0,name:"dependentFirstName",onChange:a("dependentFirstName"),value:t.dependentFirstName,type:"text"})]}),Object(n.jsxs)(p.a.Group,{as:h.a,md:"4",controlId:"DependentMiddleInitial",children:[Object(n.jsx)(p.a.Label,{children:"Middle Initial:"}),Object(n.jsx)(p.a.Control,{name:"dependentMiddleInitial",onChange:a("dependentMiddleInitial"),value:t.dependentMiddleInitial,type:"text"})]})]}),Object(n.jsxs)(p.a.Row,{children:[Object(n.jsxs)(p.a.Group,{as:h.a,md:"5",controlId:"DependentLastName",children:[Object(n.jsx)(p.a.Label,{children:"Last name:"}),Object(n.jsx)(p.a.Control,{required:!0,name:"dependentLastName",onChange:a("dependentLastName"),value:t.dependentLastName,type:"text"})]}),Object(n.jsxs)(p.a.Group,{as:h.a,md:"4",children:[Object(n.jsx)(p.a.Label,{children:"Jr., Sr., III:"}),Object(n.jsxs)(p.a.Control,{as:"select",custom:!0,children:[Object(n.jsx)("option",{disabled:!0,selected:!0,children:"Choose an option"}),Object(n.jsx)("option",{children:"JR"}),Object(n.jsx)("option",{children:"SR"}),Object(n.jsx)("option",{children:"II"}),Object(n.jsx)("option",{children:"III"}),Object(n.jsx)("option",{children:"IV"}),Object(n.jsx)("option",{children:"V"}),Object(n.jsx)("option",{children:"VI"})]})]})]}),Object(n.jsxs)(p.a.Row,{children:[Object(n.jsxs)(p.a.Group,{as:h.a,md:"5",controlId:"DependentSocialId",children:[Object(n.jsx)(p.a.Label,{children:"Social Security Number:"}),Object(n.jsx)(p.a.Control,{required:!0,name:"dependentSocialId",onChange:a("dependentSocialId"),value:t.dependentSocialId,type:"text"})]}),Object(n.jsxs)(p.a.Group,{as:h.a,md:"4",controlId:"DependentBirth",children:[Object(n.jsx)(p.a.Label,{children:"Date of Birth:"}),Object(n.jsx)(p.a.Control,{required:!0,name:"dependentBirth",onChange:a("dependentBirth"),value:t.dependentBirth,type:"date"})]})]}),Object(n.jsx)(p.a.Row,{children:Object(n.jsxs)(p.a.Group,{children:[Object(n.jsx)(p.a.Label,{children:"Relationship to Taxpayer:"}),Object(n.jsxs)(p.a.Control,{as:"select",custom:!0,children:[Object(n.jsx)("option",{disabled:!0,selected:!0,children:"Choose an option"}),Object(n.jsx)("option",{children:"SON"}),Object(n.jsx)("option",{children:"DAUGHTER"}),Object(n.jsx)("option",{children:"STEP CHILD"}),Object(n.jsx)("option",{children:"FOSTER CHILD"}),Object(n.jsx)("option",{children:"GRANDCHILD"}),Object(n.jsx)("option",{children:"GRANDPARENT"}),Object(n.jsx)("option",{children:"PARENT OR IN-LAW"}),Object(n.jsx)("option",{children:"BROTHER"}),Object(n.jsx)("option",{children:"HALF BROTHER"}),Object(n.jsx)("option",{children:"STEPBROTHER"}),Object(n.jsx)("option",{children:"SISTER"}),Object(n.jsx)("option",{children:"HALF SISTER"}),Object(n.jsx)("option",{children:"STEPSISTER"}),Object(n.jsx)("option",{children:"UNCLE"}),Object(n.jsx)("option",{children:"AUNT"}),Object(n.jsx)("option",{children:"NEPHEW"}),Object(n.jsx)("option",{children:"NIECE"}),Object(n.jsx)("option",{children:"OTHER"})]})]})}),Object(n.jsx)("hr",{}),Object(n.jsx)(u.a,{className:"float-right",id:"nextBtn",type:"submit",children:"Save and Continue"}),Object(n.jsx)(u.a,{className:"float-left",id:"backBtn",onClick:this.back,children:"Cancel"})]})]})})}}]),a}(i.Component),I=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={Validated:!1},e.handleSubmit=function(t){var a=t.currentTarget;!1===a.checkValidity()&&(t.preventDefault(),t.stopPropagation()),!0===a.checkValidity()&&e.continue(t),e.setState({Validated:!0})},e.continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.inputChange;return Object(n.jsx)("div",{id:"infoDiv",className:"form-container",children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)("div",{id:"formLabel",className:"text-center",children:" Spouse Information "}),Object(n.jsx)("hr",{}),Object(n.jsxs)(p.a,{noValidate:!0,validated:this.state.Validated,onSubmit:this.handleSubmit,children:[Object(n.jsxs)(p.a.Row,{children:[Object(n.jsxs)(p.a.Group,{as:h.a,md:"5",controlId:"spouseFirstName",children:[Object(n.jsx)(p.a.Label,{children:"First name:"}),Object(n.jsx)(p.a.Control,{required:!0,name:"spouseFirstName",onChange:a("spouseFirstName"),value:t.spouseFirstName,type:"text"})]}),Object(n.jsxs)(p.a.Group,{as:h.a,md:"4",controlId:"spouseMiddleInitial",children:[Object(n.jsx)(p.a.Label,{children:"Middle Initial:"}),Object(n.jsx)(p.a.Control,{name:"spouseMiddleInitial",onChange:a("spouseMiddleInitial"),value:t.spouseMiddleInitial,type:"text"})]})]}),Object(n.jsxs)(p.a.Row,{children:[Object(n.jsxs)(p.a.Group,{as:h.a,md:"5",controlId:"spouseLastName",children:[Object(n.jsx)(p.a.Label,{children:"Last name:"}),Object(n.jsx)(p.a.Control,{required:!0,name:"spouseLastName",onChange:a("spouseLastName"),value:t.spouseLastName,type:"text"})]}),Object(n.jsxs)(p.a.Group,{as:h.a,md:"4",children:[Object(n.jsx)(p.a.Label,{children:"Jr., Sr., III:"}),Object(n.jsxs)(p.a.Control,{as:"select",custom:!0,children:[Object(n.jsx)("option",{disabled:!0,selected:!0,children:"Choose an option"}),Object(n.jsx)("option",{children:"JR"}),Object(n.jsx)("option",{children:"SR"}),Object(n.jsx)("option",{children:"II"}),Object(n.jsx)("option",{children:"III"}),Object(n.jsx)("option",{children:"IV"}),Object(n.jsx)("option",{children:"V"}),Object(n.jsx)("option",{children:"VI"})]})]})]}),Object(n.jsxs)(p.a.Row,{children:[Object(n.jsxs)(p.a.Group,{as:h.a,md:"5",controlId:"spouseSocialId",children:[Object(n.jsx)(p.a.Label,{children:"Social Security Number:"}),Object(n.jsx)(p.a.Control,{required:!0,name:"spouseSocialId",onChange:a("spouseSocialId"),value:t.spouseSocialId,type:"text"})]}),Object(n.jsxs)(p.a.Group,{as:h.a,md:"4",controlId:"spouseBirth",children:[Object(n.jsx)(p.a.Label,{children:"Date of Birth:"}),Object(n.jsx)(p.a.Control,{required:!0,name:"spouseBirth",onChange:a("spouseBirth"),value:t.spouseBirth,type:"date"})]})]}),Object(n.jsx)("hr",{}),Object(n.jsx)(p.a.Check,{type:"switch",id:"switch1",label:"Can a parent (or somebody else) claim you as a dependent on their tax return?"}),Object(n.jsx)(p.a.Check,{type:"switch",id:"switch2",label:"Do you want to contribute $3 to the Presidential Election Campaign Fund?"}),Object(n.jsx)(p.a.Check,{type:"switch",id:"switch3",label:"Is this person legally blind?"}),Object(n.jsx)(p.a.Check,{type:"switch",id:"switch4",label:"Has this person passed away before the filing of this tax return?"}),Object(n.jsx)(p.a.Check,{type:"switch",id:"switch5",label:"Were you impacted by a qualified disaster in 2019?"}),Object(n.jsx)("hr",{}),Object(n.jsx)(u.a,{className:"float-right",id:"nextBtn",type:"submit",children:"Save and Continue"}),Object(n.jsx)(u.a,{className:"float-left",id:"backBtn",onClick:this.back,children:"Cancel"})]})]})})}}]),a}(i.Component),S=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={step:1,firstName:"",lastName:"",middleInitial:"",occupation:"",socialId:"",birth:"",streetAddress:"",aptNo:"",city:"",state:"",zip:"",filingStatus:"",dependentFirstName:"",dependentLastName:"",dependentMiddleInitial:"",dependentSocialId:"",dependentBirth:"",spouseFirstName:"",spouseLastName:"",spouseMiddleInitial:"",spouseSocialId:"",spouseBirth:""},e.confirmPage=function(){e.setState({step:7})},e.doubleStep=function(){var t=e.state.step;e.setState({step:t+2})},e.nextStep=function(){var t=e.state.step;e.setState({step:t+1})},e.prevStep=function(){var t=e.state.step;e.setState({step:t-1})},e.inputChange=function(t){return function(a){e.setState(Object(O.a)({},t,a.target.value))}},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.step,t=this.state,a={firstName:t.firstName,lastName:t.lastName,middleInitial:t.middleInitial,occupation:t.occupation,socialId:t.socialId,birth:t.birth,streetAddress:t.streetAddress,aptNo:t.aptNo,city:t.city,state:t.state,zip:t.zip,filingStatus:t.filingStatus,dependentFirstName:t.dependentFirstName,dependentLastName:t.dependentLastName,dependentMiddleInitial:t.dependentMiddleInitial,dependentSocialId:t.dependentSocialId,dependentBirth:t.dependentBirth,spouseFirstName:t.spouseFirstName,spouseLastName:t.spouseLastName,spouseMiddleInitial:t.spouseMiddleInitial,spouseSocialId:t.spouseSocialId,spouseBirth:t.spouseBirth};switch(e){case 1:return Object(n.jsx)(f,{confirmPage:this.confirmPage,nextStep:this.nextStep});case 2:return Object(n.jsx)(x,{nextStep:this.nextStep,prevStep:this.prevStep,inputChange:this.inputChange,values:a});case 3:return Object(n.jsx)(m,{nextStep:this.nextStep,prevStep:this.prevStep,doubleStep:this.doubleStep,inputChange:this.inputChange,values:a});case 4:return Object(n.jsx)(I,{nextStep:this.nextStep,prevStep:this.prevStep,inputChange:this.inputChange,values:a});case 5:return Object(n.jsx)(v,{nextStep:this.nextStep,prevStep:this.prevStep,confirmPage:this.confirmPage,values:a});case 6:return Object(n.jsx)(N,{nextStep:this.nextStep,prevStep:this.prevStep,inputChange:this.inputChange,values:a});case 7:return Object(n.jsx)(y,{nextStep:this.nextStep,prevStep:this.prevStep,values:a});case 8:return Object(n.jsx)(g,{})}}}]),a}(i.Component);var C=function(){return Object(n.jsx)(b.a,{className:"p-4",children:Object(n.jsx)(S,{})})};l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.ee80bbdb.chunk.js.map