(this["webpackJsonpmulti-form"]=this["webpackJsonpmulti-form"]||[]).push([[0],{12:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a(1),n=a.n(i),c=a(18),l=a.n(c),r=(a(25),a(26),a(11)),d=a(6),o=a(7),j=a(9),b=a(8),h=(a(12),a(31)),p=a(32),x=a(19),u=a(33),O=(a(13),function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={Validated:!1,radio1:0,radio2:0,radio3:0,radio4:0,radio5:0},e.onCheck1=function(t){return function(){e.setState(Object(r.a)({},t,1))}},e.onCheck2=function(t){return function(){e.setState(Object(r.a)({},t,0))}},e.handleSubmit=function(t){var a=t.currentTarget;!1===a.checkValidity()&&(t.preventDefault(),t.stopPropagation()),!0===a.checkValidity()&&e.continue(t),e.setState({Validated:!0})},e.continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.inputChange;return Object(s.jsx)("div",{id:"infoDiv",className:"form-container",children:Object(s.jsxs)(h.a,{children:[Object(s.jsx)("div",{id:"formLabel",className:"text-center",children:" Taxpayer Information "}),Object(s.jsx)("hr",{}),Object(s.jsxs)(p.a,{noValidate:!0,validated:this.state.Validated,onSubmit:this.handleSubmit,children:[Object(s.jsxs)(p.a.Row,{children:[Object(s.jsxs)(p.a.Group,{className:"taxInput",as:x.a,md:"5",controlId:"FirstName",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"First name:"}),Object(s.jsx)(p.a.Control,{required:!0,name:"firstName",onChange:a("firstName"),value:t.firstName,type:"text",className:"taxInput3"})]}),Object(s.jsxs)(p.a.Group,{className:"taxInput",as:x.a,md:"4",controlId:"MiddleInitial",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Middle Initial:"}),Object(s.jsx)(p.a.Control,{className:"taxInput3",name:"middleInitial",onChange:a("middleInitial"),value:t.middleInitial,type:"text"})]})]}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsxs)(p.a.Group,{className:"taxInput",as:x.a,md:"5",controlId:"LastName",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Last name:"}),Object(s.jsx)(p.a.Control,{required:!0,className:"taxInput3",name:"lastName",onChange:a("lastName"),value:t.lastName,type:"text"})]}),Object(s.jsxs)(p.a.Group,{className:"taxInput",as:x.a,md:"4",controlId:"Occupation",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Occupation:"}),Object(s.jsx)(p.a.Control,{required:!0,className:"taxInput3",name:"occupation",onChange:a("occupation"),value:t.occupation,type:"text"})]})]}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsxs)(p.a.Group,{className:"taxInput",as:x.a,md:"5",controlId:"SocialId",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Social Security Number:"}),Object(s.jsx)(p.a.Control,{required:!0,className:"taxInput3",name:"socialId",onChange:a("socialId"),value:t.socialId,type:"text"})]}),Object(s.jsxs)(p.a.Group,{className:"taxInput",as:x.a,md:"4",controlId:"Birth",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Date of Birth:"}),Object(s.jsx)(p.a.Control,{required:!0,className:"taxInput3",name:"birth",onChange:a("birth"),value:t.birth,type:"date"})]})]}),Object(s.jsxs)(p.a.Group,{className:"taxInput2",controlId:"exampleForm.SelectCustom",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Jr., Sr., III:"}),Object(s.jsxs)(p.a.Control,{as:"select",custom:!0,children:[Object(s.jsx)("option",{disabled:!0,selected:!0}),Object(s.jsx)("option",{children:"JR"}),Object(s.jsx)("option",{children:"SR"}),Object(s.jsx)("option",{children:"II"}),Object(s.jsx)("option",{children:"III"}),Object(s.jsx)("option",{children:"IV"}),Object(s.jsx)("option",{children:"V"}),Object(s.jsx)("option",{children:"VI"})]})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsxs)(p.a.Group,{className:"taxInput",as:x.a,md:"5",controlId:"streetAddress",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Street Address:"}),Object(s.jsx)(p.a.Control,{type:"text",className:"taxInput3",required:!0,name:"streetAddress",onChange:a("streetAddress"),value:t.streetAddress})]}),Object(s.jsxs)(p.a.Group,{className:"taxInput",as:x.a,md:"4",controlId:"Aptno",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Apt No:"}),Object(s.jsx)(p.a.Control,{type:"number",name:"aptNo",className:"taxInput3",onChange:a("aptNo"),value:t.aptNo})]})]}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsxs)(p.a.Group,{className:"taxInput",as:x.a,md:"4",controlId:"City",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"City:"}),Object(s.jsx)(p.a.Control,{type:"text",className:"taxInput3",required:!0,name:"city",onChange:a("city"),value:t.city})]}),Object(s.jsxs)(p.a.Group,{className:"taxInput",as:x.a,md:"3",controlId:"State",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"State:"}),Object(s.jsx)(p.a.Control,{type:"text",required:!0,className:"taxInput3",name:"state",onChange:a("state"),value:t.state})]}),Object(s.jsxs)(p.a.Group,{className:"taxInput",as:x.a,md:"2",controlId:"Zip",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Zip:"}),Object(s.jsx)(p.a.Control,{type:"text",required:!0,className:"taxInput3",name:"zip",onChange:a("zip"),value:t.zip})]})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("div",{id:"checkLabel",children:"Can a parent (or somebody else) claim you as a dependent on their tax return?"}),Object(s.jsxs)("div",{id:"checkLabelTop",children:[Object(s.jsxs)("label",{id:"yesNo",children:[Object(s.jsx)("input",{type:"radio",id:"yes",onClick:this.onCheck1("radio1"),checked:1===this.state.radio1}),"Yes"]}),Object(s.jsxs)("label",{id:"yesNo",children:[Object(s.jsx)("input",{type:"radio",id:"no",onClick:this.onCheck2("radio1"),checked:0===this.state.radio1}),"No"]})]})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("div",{id:"checkLabel",children:"Do you want to contribute $3 to the Presidential Election Campaign Fund?"}),Object(s.jsxs)("div",{id:"checkLabelTop",children:[Object(s.jsxs)("label",{id:"yesNo",children:[Object(s.jsx)("input",{type:"radio",id:"yes",onClick:this.onCheck1("radio2"),checked:1===this.state.radio2}),"Yes"]}),Object(s.jsxs)("label",{id:"yesNo",children:[Object(s.jsx)("input",{type:"radio",id:"no",onClick:this.onCheck2("radio2"),checked:0===this.state.radio2}),"No"]})]})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("div",{id:"checkLabel",children:"Is this person legally blind?"}),Object(s.jsxs)("div",{id:"checkLabelTop",children:[Object(s.jsxs)("label",{id:"yesNo",children:[Object(s.jsx)("input",{type:"radio",id:"yes",onClick:this.onCheck1("radio3"),checked:1===this.state.radio3}),"Yes"]}),Object(s.jsxs)("label",{id:"yesNo",children:[Object(s.jsx)("input",{type:"radio",id:"no",onClick:this.onCheck2("radio3"),checked:0===this.state.radio3}),"No"]})]})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("div",{id:"checkLabel",children:"Has this person passed away before the filing of this tax return?"}),Object(s.jsxs)("div",{id:"checkLabelTop",children:[Object(s.jsxs)("label",{id:"yesNo",children:[Object(s.jsx)("input",{type:"radio",id:"yes",onClick:this.onCheck1("radio4"),checked:1===this.state.radio4}),"Yes"]}),Object(s.jsxs)("label",{id:"yesNo",children:[Object(s.jsx)("input",{type:"radio",id:"no",onClick:this.onCheck2("radio4"),checked:0===this.state.radio4}),"No"]})]})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("div",{id:"checkLabel",children:"Were you impacted by a qualified disaster in 2019?"}),Object(s.jsxs)("div",{id:"checkLabelTop",children:[Object(s.jsxs)("label",{id:"yesNo",children:[Object(s.jsx)("input",{type:"radio",id:"yes",onClick:this.onCheck1("radio5"),checked:1===this.state.radio5}),"Yes"]}),Object(s.jsxs)("label",{id:"yesNo",children:[Object(s.jsx)("input",{type:"radio",id:"no",onClick:this.onCheck2("radio5"),checked:0===this.state.radio5}),"No"]})]})]}),Object(s.jsx)("hr",{}),Object(s.jsx)(p.a.Row,{children:Object(s.jsx)("div",{id:"checkLabelTop2",children:Object(s.jsxs)("label",{id:"agreeCheckboxLabel",children:[Object(s.jsx)("input",{type:"checkbox",id:"agreeCheckbox"}),"Agree to terms and conditions"]})})}),Object(s.jsx)(u.a,{id:"nextBtn",type:"submit",children:"Save and Continue"}),Object(s.jsx)(u.a,{id:"backBtn",onClick:this.back,children:"Previous Page"})]})]})})}}]),a}(i.Component)),m=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={radio:0},e.onCheck=function(t){return function(){e.setState({radio:t})}},e.continue=function(t){2==e.state.radio||3==e.state.radio?(t.preventDefault(),e.props.nextStep()):e.props.doubleStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=(e.values,e.inputChange);return Object(s.jsx)("div",{id:"filingStatusMainDiv",className:"form-container",children:Object(s.jsxs)(h.a,{children:[Object(s.jsx)("div",{id:"formLabel",className:"text-center",children:"Filing Status"}),Object(s.jsx)("hr",{}),Object(s.jsxs)(p.a,{children:[Object(s.jsx)("label",{id:"filingLabel",children:"Choose your filing status."}),Object(s.jsx)("div",{className:"radio  p-2",children:Object(s.jsxs)("label",{id:"filingStatusRadioLabels",children:[Object(s.jsx)("input",{onClick:this.onCheck(1),onChange:t("filingStatus"),value:"Single",checked:1===this.state.radio,type:"radio",id:"Single"}),"Single"]})}),Object(s.jsx)("div",{className:"radio   p-2",children:Object(s.jsxs)("label",{id:"filingStatusRadioLabels",children:[Object(s.jsx)("input",{onClick:this.onCheck(2),onChange:t("filingStatus"),value:"Married Filing Jointly",checked:2===this.state.radio,type:"radio",id:"MarriedJointly"}),"Married Filing Jointly"]})}),Object(s.jsx)("div",{className:"radio   p-2",children:Object(s.jsxs)("label",{id:"filingStatusRadioLabels",children:[Object(s.jsx)("input",{onClick:this.onCheck(3),onChange:t("filingStatus"),value:"Married Filing Separately",checked:3===this.state.radio,type:"radio",id:"MarriedSeparately"}),"Married Filing Separately"]})}),Object(s.jsx)("div",{className:"radio  p-2",children:Object(s.jsxs)("label",{id:"filingStatusRadioLabels",children:[Object(s.jsx)("input",{onClick:this.onCheck(4),onChange:t("filingStatus"),value:"Head of Household",checked:4===this.state.radio,type:"radio",id:"HeadofHousehold"}),"Head of Household"]})}),Object(s.jsx)("div",{className:"radio   p-2",children:Object(s.jsxs)("label",{id:"filingStatusRadioLabels",children:[Object(s.jsx)("input",{onClick:this.onCheck(5),onChange:t("filingStatus"),value:"Qualifying Widow(er)",checked:5===this.state.radio,type:"radio",id:"Qualifyingwidow"}),"Qualifying Widow(er)"]})}),Object(s.jsx)("hr",{}),Object(s.jsx)(u.a,{id:"nextBtn",onClick:this.continue,children:"Save and Continue"}),Object(s.jsx)(u.a,{id:"backBtn",onClick:this.back,children:"Previous Page"})]})]})})}}]),a}(i.Component),N=function(e){var t=n.a.useRef(null);return Object(s.jsx)("div",{id:"chooseDiv",className:"form-container",children:Object(s.jsxs)(h.a,{style:{width:"100%"},children:[Object(s.jsx)("div",{id:"formLabel",className:"text-center",children:"Identification"}),Object(s.jsx)("hr",{}),Object(s.jsxs)(p.a,{children:[Object(s.jsxs)(p.a.Group,{children:[Object(s.jsx)("label",{className:"chooseLabels",children:"Upload last year PDF file:"}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)(u.a,{className:"float-right",id:"manuallyBtn",onClick:function(e){t.current.click()},children:"Upload a file"}),Object(s.jsx)("input",{type:"file",ref:t,onChange:function(t){e.fileUpload()},style:{display:"none"}})]})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)(p.a.Group,{children:[Object(s.jsx)("label",{style:{width:"100%"},className:"chooseLabels",children:"Or you can manually fill out your info:"}),Object(s.jsx)(u.a,{id:"manuallyBtn",onClick:function(t){e.nextStep()},children:"Fill your information manually"})]})]})]})})},f=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.values,t=e.firstName,a=e.lastName,i=e.middleInitial,n=e.occupation,c=e.socialId,l=e.birth,r=e.streetAddress,d=e.aptNo,o=e.city,j=e.state,b=e.zip,x=e.filingStatus,O=e.dependentFirstName,m=e.dependentLastName,N=e.dependentMiddleInitial,f=e.dependentSocialId,y=e.dependentBirth,I=e.spouseFirstName,v=e.spouseLastName,C=e.spouseMiddleInitial,S=e.spouseSocialId,k=e.spouseBirth;return Object(s.jsx)("div",{id:"confirmDiv",className:"form-container",children:Object(s.jsxs)(h.a,{children:[Object(s.jsx)("div",{id:"formLabel",className:"text-center",children:"Personal Information Summary"}),Object(s.jsx)("hr",{}),Object(s.jsx)("label",{id:"confirmLabels",children:"Let's make sure your personal information is correct."}),Object(s.jsxs)(p.a,{children:[Object(s.jsx)(p.a.Row,{children:Object(s.jsx)("div",{id:"confirmlb",children:"YOUR INFORMATION"})}),Object(s.jsx)("hr",{id:"heavyHr"}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("label",{className:"confirmIdLabels",children:"Name : "}),Object(s.jsxs)("label",{className:"confirmIdLabelsAnswer",style:{textTransform:"uppercase"},children:[" ",t," ",i," ",a," "]})]}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("label",{className:"confirmIdLabels",children:"Occupation : "}),Object(s.jsxs)("label",{className:"confirmIdLabelsAnswer",children:[" ",n," "]})]}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("label",{className:"confirmIdLabels",children:"Social Security Number: "}),Object(s.jsxs)("label",{className:"confirmIdLabelsAnswer",children:[" ",c," "]})]}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("label",{className:"confirmIdLabels",children:"Date Of Birth: "}),Object(s.jsxs)("label",{className:"confirmIdLabelsAnswer",children:[" ",l," "]})]}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("label",{className:"confirmIdLabels",children:"Address: "}),Object(s.jsxs)("label",{className:"confirmIdLabelsAnswer",children:[" ",r,"  ",d,"   ",o,"  ",j," ",b]})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("label",{className:"confirmIdLabels",children:"Filing Status: "}),Object(s.jsxs)("label",{className:"confirmIdLabelsAnswer",children:[" ",x," "]})]}),O?Object(s.jsxs)("div",{children:[Object(s.jsx)("hr",{}),Object(s.jsx)(p.a.Row,{children:Object(s.jsxs)("div",{id:"confirmlb",children:[O," Information"]})}),Object(s.jsx)("hr",{id:"heavyHr"}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("label",{className:"confirmIdLabels",children:"Name : "}),Object(s.jsxs)("label",{className:"confirmIdLabelsAnswer",style:{textTransform:"uppercase"},children:[" ",O," ",N," ",m," "]})]}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("label",{className:"confirmIdLabels",children:"Social Security Number: "}),Object(s.jsxs)("label",{className:"confirmIdLabelsAnswer",children:[" ",f," "]})]}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("label",{className:"confirmIdLabels",children:"Date Of Birth: "}),Object(s.jsxs)("label",{className:"confirmIdLabelsAnswer",children:[" ",y," "]})]})]}):null,I?Object(s.jsxs)("div",{children:[Object(s.jsx)("hr",{}),Object(s.jsx)(p.a.Row,{children:Object(s.jsxs)("div",{id:"confirmlb",children:[I," Information"]})}),Object(s.jsx)("hr",{id:"heavyHr"}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("label",{className:"confirmIdLabels",children:"Name : "}),Object(s.jsxs)("label",{className:"confirmIdLabelsAnswer",style:{textTransform:"uppercase"},children:[" ",I," ",C," ",v," "]})]}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("label",{className:"confirmIdLabels",children:"Social Security Number: "}),Object(s.jsxs)("label",{className:"confirmIdLabelsAnswer",children:[" ",S," "]})]}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("label",{className:"confirmIdLabels",children:"Date Of Birth: "}),Object(s.jsxs)("label",{className:"confirmIdLabelsAnswer",children:[" ",k," "]})]})]}):null,Object(s.jsx)("hr",{}),Object(s.jsx)(u.a,{id:"confirmBtn",onClick:this.continue,children:"Confirm"}),Object(s.jsx)(u.a,{id:"backBtn",onClick:this.back,children:"Previous Page"})]})]})})}}]),a}(i.Component),y=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(s.jsx)(h.a,{className:"form-container",children:Object(s.jsx)(p.a,{children:Object(s.jsx)("h1",{children:"Successfull Page!"})})})}}]),a}(i.Component),I=function(e){return Object(s.jsx)("div",{id:"dependentDivAsk",className:"form-container",children:Object(s.jsxs)(h.a,{children:[Object(s.jsx)("div",{id:"formLabel",className:"text-center",children:"Dependents and Qualifying Children"}),Object(s.jsx)("hr",{}),Object(s.jsxs)(p.a,{children:[Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("div",{style:{width:"100%"},children:Object(s.jsx)("label",{children:"Do you have any dependents or qualifying children?"})}),Object(s.jsx)("label",{style:{fontSize:"small",color:"gray"},children:"If you aren't sure if someone qualifies, answer Yes and we'll help you figure it out."})]}),Object(s.jsx)("hr",{}),Object(s.jsx)(u.a,{id:"nextBtn",onClick:function(t){e.confirmPage()},type:"submit",children:"No, Continue"}),Object(s.jsx)(u.a,{id:"yesBtn",onClick:function(t){t.preventDefault(),e.nextStep()},children:"Yes"}),Object(s.jsx)(u.a,{id:"backBtn",onClick:function(t){t.preventDefault(),e.prevStep()},children:"Previous Page"})]})]})})},v=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={Validated:!1},e.handleSubmit=function(t){var a=t.currentTarget;!1===a.checkValidity()&&(t.preventDefault(),t.stopPropagation()),!0===a.checkValidity()&&e.continue(t),e.setState({Validated:!0})},e.continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.inputChange;return Object(s.jsx)("div",{id:"dependentDiv",className:"form-container",children:Object(s.jsxs)(h.a,{children:[Object(s.jsx)("div",{id:"formLabel",className:"text-center",children:" Dependent Information "}),Object(s.jsx)("hr",{}),Object(s.jsxs)(p.a,{noValidate:!0,validated:this.state.Validated,onSubmit:this.handleSubmit,children:[Object(s.jsxs)(p.a.Row,{children:[Object(s.jsxs)(p.a.Group,{className:"taxInput",as:x.a,md:"5",controlId:"DependentFirstName",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"First name:"}),Object(s.jsx)(p.a.Control,{required:!0,className:"taxInput3",name:"dependentFirstName",onChange:a("dependentFirstName"),value:t.dependentFirstName,type:"text"})]}),Object(s.jsxs)(p.a.Group,{className:"taxInput",as:x.a,md:"4",controlId:"DependentMiddleInitial",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Middle Initial:"}),Object(s.jsx)(p.a.Control,{className:"taxInput3",name:"dependentMiddleInitial",onChange:a("dependentMiddleInitial"),value:t.dependentMiddleInitial,type:"text"})]})]}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsxs)(p.a.Group,{className:"taxInput",as:x.a,md:"5",controlId:"DependentLastName",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Last name:"}),Object(s.jsx)(p.a.Control,{required:!0,className:"taxInput3",name:"dependentLastName",onChange:a("dependentLastName"),value:t.dependentLastName,type:"text"})]}),Object(s.jsxs)(p.a.Group,{className:"taxInput",as:x.a,md:"4",controlId:"DependentBirth",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Date of Birth:"}),Object(s.jsx)(p.a.Control,{required:!0,className:"taxInput3",name:"dependentBirth",onChange:a("dependentBirth"),value:t.dependentBirth,type:"date"})]})]}),Object(s.jsx)(p.a.Row,{children:Object(s.jsxs)(p.a.Group,{className:"taxInput",as:x.a,md:"5",controlId:"DependentSocialId",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Social Security Number:"}),Object(s.jsx)(p.a.Control,{className:"taxInput3",required:!0,name:"dependentSocialId",onChange:a("dependentSocialId"),value:t.dependentSocialId,type:"text"})]})}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsxs)(p.a.Group,{className:"taxInput2",as:x.a,md:"4",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Jr., Sr., III:"}),Object(s.jsxs)(p.a.Control,{as:"select",custom:!0,children:[Object(s.jsx)("option",{disabled:!0,selected:!0,children:"Choose an option"}),Object(s.jsx)("option",{children:"JR"}),Object(s.jsx)("option",{children:"SR"}),Object(s.jsx)("option",{children:"II"}),Object(s.jsx)("option",{children:"III"}),Object(s.jsx)("option",{children:"IV"}),Object(s.jsx)("option",{children:"V"}),Object(s.jsx)("option",{children:"VI"})]})]}),Object(s.jsxs)(p.a.Group,{className:"taxInput2",as:x.a,md:"4",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Relationship to Taxpayer:"}),Object(s.jsxs)(p.a.Control,{as:"select",custom:!0,children:[Object(s.jsx)("option",{disabled:!0,selected:!0,children:"Choose an option"}),Object(s.jsx)("option",{children:"SON"}),Object(s.jsx)("option",{children:"DAUGHTER"}),Object(s.jsx)("option",{children:"STEP CHILD"}),Object(s.jsx)("option",{children:"FOSTER CHILD"}),Object(s.jsx)("option",{children:"GRANDCHILD"}),Object(s.jsx)("option",{children:"GRANDPARENT"}),Object(s.jsx)("option",{children:"PARENT OR IN-LAW"}),Object(s.jsx)("option",{children:"BROTHER"}),Object(s.jsx)("option",{children:"HALF BROTHER"}),Object(s.jsx)("option",{children:"STEPBROTHER"}),Object(s.jsx)("option",{children:"SISTER"}),Object(s.jsx)("option",{children:"HALF SISTER"}),Object(s.jsx)("option",{children:"STEPSISTER"}),Object(s.jsx)("option",{children:"UNCLE"}),Object(s.jsx)("option",{children:"AUNT"}),Object(s.jsx)("option",{children:"NEPHEW"}),Object(s.jsx)("option",{children:"NIECE"}),Object(s.jsx)("option",{children:"OTHER"})]})]})]}),Object(s.jsx)("hr",{}),Object(s.jsx)(u.a,{id:"nextBtn",type:"submit",children:"Save and Continue"}),Object(s.jsx)(u.a,{id:"backBtn",onClick:this.back,children:"Cancel"})]})]})})}}]),a}(i.Component),C=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={Validated:!1,radio1:0,radio2:0,radio3:0,radio4:0,radio5:0},e.onCheck1=function(t){return function(){e.setState(Object(r.a)({},t,1))}},e.onCheck2=function(t){return function(){e.setState(Object(r.a)({},t,0))}},e.handleSubmit=function(t){var a=t.currentTarget;!1===a.checkValidity()&&(t.preventDefault(),t.stopPropagation()),!0===a.checkValidity()&&e.continue(t),e.setState({Validated:!0})},e.continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.inputChange;return Object(s.jsx)("div",{id:"spouseDiv",className:"form-container",children:Object(s.jsxs)(h.a,{children:[Object(s.jsx)("div",{id:"formLabel",className:"text-center",children:" Spouse Information "}),Object(s.jsx)("hr",{}),Object(s.jsxs)(p.a,{noValidate:!0,validated:this.state.Validated,onSubmit:this.handleSubmit,children:[Object(s.jsxs)(p.a.Row,{children:[Object(s.jsxs)(p.a.Group,{className:"taxInput",as:x.a,md:"5",controlId:"spouseFirstName",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"First name:"}),Object(s.jsx)(p.a.Control,{required:!0,className:"taxInput3",name:"spouseFirstName",onChange:a("spouseFirstName"),value:t.spouseFirstName,type:"text"})]}),Object(s.jsxs)(p.a.Group,{className:"taxInput",as:x.a,md:"4",controlId:"spouseMiddleInitial",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Middle Initial:"}),Object(s.jsx)(p.a.Control,{className:"taxInput3",name:"spouseMiddleInitial",onChange:a("spouseMiddleInitial"),value:t.spouseMiddleInitial,type:"text"})]})]}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsxs)(p.a.Group,{className:"taxInput",as:x.a,md:"5",controlId:"spouseLastName",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Last name:"}),Object(s.jsx)(p.a.Control,{required:!0,name:"spouseLastName",onChange:a("spouseLastName"),value:t.spouseLastName,type:"text",className:"taxInput3"})]}),Object(s.jsxs)(p.a.Group,{className:"taxInput",as:x.a,md:"4",controlId:"spouseBirth",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Date of Birth:"}),Object(s.jsx)(p.a.Control,{required:!0,name:"spouseBirth",onChange:a("spouseBirth"),value:t.spouseBirth,type:"date",className:"taxInput3"})]})]}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsxs)(p.a.Group,{className:"taxInput",as:x.a,md:"5",controlId:"spouseSocialId",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Social Security Number:"}),Object(s.jsx)(p.a.Control,{required:!0,name:"spouseSocialId",onChange:a("spouseSocialId"),value:t.spouseSocialId,type:"text",className:"taxInput3"})]}),Object(s.jsxs)(p.a.Group,{className:"taxInput2",as:x.a,md:"4",children:[Object(s.jsx)(p.a.Label,{className:"taxPayerLabels",children:"Jr., Sr., III:"}),Object(s.jsxs)(p.a.Control,{as:"select",custom:!0,children:[Object(s.jsx)("option",{disabled:!0,selected:!0,children:"Choose an option"}),Object(s.jsx)("option",{children:"JR"}),Object(s.jsx)("option",{children:"SR"}),Object(s.jsx)("option",{children:"II"}),Object(s.jsx)("option",{children:"III"}),Object(s.jsx)("option",{children:"IV"}),Object(s.jsx)("option",{children:"V"}),Object(s.jsx)("option",{children:"VI"})]})]})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("div",{id:"checkLabel",children:"Can a parent (or somebody else) claim you as a dependent on their tax return?"}),Object(s.jsxs)("div",{id:"checkLabelTop",children:[Object(s.jsxs)("label",{id:"yesNo",children:[Object(s.jsx)("input",{type:"radio",id:"yes",onClick:this.onCheck1("radio1"),checked:1===this.state.radio1}),"Yes"]}),Object(s.jsxs)("label",{id:"yesNo",children:[Object(s.jsx)("input",{type:"radio",id:"no",onClick:this.onCheck2("radio1"),checked:0===this.state.radio1}),"No"]})]})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("div",{id:"checkLabel",children:"Do you want to contribute $3 to the Presidential Election Campaign Fund?"}),Object(s.jsxs)("div",{id:"checkLabelTop",children:[Object(s.jsxs)("label",{id:"yesNo",children:[Object(s.jsx)("input",{type:"radio",id:"yes",onClick:this.onCheck1("radio2"),checked:1===this.state.radio2}),"Yes"]}),Object(s.jsxs)("label",{id:"yesNo",children:[Object(s.jsx)("input",{type:"radio",id:"no",onClick:this.onCheck2("radio2"),checked:0===this.state.radio2}),"No"]})]})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("div",{id:"checkLabel",children:"Is this person legally blind?"}),Object(s.jsxs)("div",{id:"checkLabelTop",children:[Object(s.jsxs)("label",{id:"yesNo",children:[Object(s.jsx)("input",{type:"radio",id:"yes",onClick:this.onCheck1("radio3"),checked:1===this.state.radio3}),"Yes"]}),Object(s.jsxs)("label",{id:"yesNo",children:[Object(s.jsx)("input",{type:"radio",id:"no",onClick:this.onCheck2("radio3"),checked:0===this.state.radio3}),"No"]})]})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("div",{id:"checkLabel",children:"Has this person passed away before the filing of this tax return?"}),Object(s.jsxs)("div",{id:"checkLabelTop",children:[Object(s.jsxs)("label",{id:"yesNo",children:[Object(s.jsx)("input",{type:"radio",id:"yes",onClick:this.onCheck1("radio4"),checked:1===this.state.radio4}),"Yes"]}),Object(s.jsxs)("label",{id:"yesNo",children:[Object(s.jsx)("input",{type:"radio",id:"no",onClick:this.onCheck2("radio4"),checked:0===this.state.radio4}),"No"]})]})]}),Object(s.jsx)("hr",{}),Object(s.jsxs)(p.a.Row,{children:[Object(s.jsx)("div",{id:"checkLabel",children:"Were you impacted by a qualified disaster in 2019?"}),Object(s.jsxs)("div",{id:"checkLabelTop",children:[Object(s.jsxs)("label",{id:"yesNo",children:[Object(s.jsx)("input",{type:"radio",id:"yes",onClick:this.onCheck1("radio5"),checked:1===this.state.radio5}),"Yes"]}),Object(s.jsxs)("label",{id:"yesNo",children:[Object(s.jsx)("input",{type:"radio",id:"no",onClick:this.onCheck2("radio5"),checked:0===this.state.radio5}),"No"]})]})]}),Object(s.jsx)("hr",{}),Object(s.jsx)(u.a,{id:"nextBtn",type:"submit",children:"Save and Continue"}),Object(s.jsx)(u.a,{id:"backBtn",onClick:this.back,children:"Cancel"})]})]})})}}]),a}(i.Component),S=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={step:1,firstName:"",lastName:"",middleInitial:"",occupation:"",socialId:"",birth:"",streetAddress:"",aptNo:"",city:"",state:"",zip:"",filingStatus:"",dependentFirstName:"",dependentLastName:"",dependentMiddleInitial:"",dependentSocialId:"",dependentBirth:"",spouseFirstName:"",spouseLastName:"",spouseMiddleInitial:"",spouseSocialId:"",spouseBirth:""},e.fileUpload=function(){e.setState({step:2}),e.setState({firstName:"John",lastName:"Smith",middleInitial:"M",occupation:"Actor",socialId:"3166952",birth:"09/17/1979",streetAddress:"Brooklyn",aptNo:"18",city:"New York",state:"New York",zip:"100501",filingStatus:"Single",dependentFirstName:"Ken",dependentLastName:"Smith",dependentMiddleInitial:"M",dependentSocialId:"3166953"})},e.confirmPage=function(){e.setState({step:7})},e.doubleStep=function(){var t=e.state.step;e.setState({step:t+2})},e.nextStep=function(){var t=e.state.step;e.setState({step:t+1})},e.prevStep=function(){var t=e.state.step;e.setState({step:t-1})},e.inputChange=function(t){return function(a){e.setState(Object(r.a)({},t,a.target.value))}},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.step,t=this.state,a={firstName:t.firstName,lastName:t.lastName,middleInitial:t.middleInitial,occupation:t.occupation,socialId:t.socialId,birth:t.birth,streetAddress:t.streetAddress,aptNo:t.aptNo,city:t.city,state:t.state,zip:t.zip,filingStatus:t.filingStatus,dependentFirstName:t.dependentFirstName,dependentLastName:t.dependentLastName,dependentMiddleInitial:t.dependentMiddleInitial,dependentSocialId:t.dependentSocialId,dependentBirth:t.dependentBirth,spouseFirstName:t.spouseFirstName,spouseLastName:t.spouseLastName,spouseMiddleInitial:t.spouseMiddleInitial,spouseSocialId:t.spouseSocialId,spouseBirth:t.spouseBirth};switch(e){case 1:return Object(s.jsx)(N,{fileUpload:this.fileUpload,nextStep:this.nextStep});case 2:return Object(s.jsx)(O,{nextStep:this.nextStep,prevStep:this.prevStep,inputChange:this.inputChange,values:a});case 3:return Object(s.jsx)(m,{nextStep:this.nextStep,prevStep:this.prevStep,doubleStep:this.doubleStep,inputChange:this.inputChange,values:a});case 4:return Object(s.jsx)(C,{nextStep:this.nextStep,prevStep:this.prevStep,inputChange:this.inputChange,values:a});case 5:return Object(s.jsx)(I,{nextStep:this.nextStep,prevStep:this.prevStep,confirmPage:this.confirmPage,values:a});case 6:return Object(s.jsx)(v,{nextStep:this.nextStep,prevStep:this.prevStep,inputChange:this.inputChange,values:a});case 7:return Object(s.jsx)(f,{nextStep:this.nextStep,prevStep:this.prevStep,values:a});case 8:return Object(s.jsx)(y,{})}}}]),a}(i.Component);var k=function(){return Object(s.jsx)(h.a,{className:"p-4",children:Object(s.jsx)(S,{})})};l.a.render(Object(s.jsx)("div",{id:"MainDiv",children:Object(s.jsx)(k,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.4f6faefa.chunk.js.map