import{g,h as M,r as j,c as m,o as u,b as e,a as h,i as p,t as c,v as y,n as $,j as V,d as f,k as w,u as l,e as S,f as P,l as N,F as z}from"./index-nQMBxgBc.js";import{_ as D}from"./generalNav-dw_CUji2.js";const U={class:"bg-gray-100 rounded-full w-10 h-10 text-center shadow-xl"},A={class:"w-full h-full flex flex-col justify-center items-center gap-2 pt-28"},W={class:"flex flex-col gap-6 justify-center items-center w-full"},L={class:"bg-gray-100 w-4/5 h-32 mt-5 shadow-xl rounded-xl flex justify-center items-center flex-col"},q={class:"text-center mt-4 text-md"},E={class:"bg-gray-100 flex flex-col justify-center items-center w-4/5 h-32 rounded-xl lg:mt-5"},O={class:"text-center mt-2"},R={class:"w-screen rounded-md h-20 flex flex-col justify-center items-center"},T={class:"border border-black w-1/6 max-md:w-3/5 h-10 flex items-center rounded-lg"},G={class:"ml-1 lg:text-lg text-white"},H=.3,J={__name:"loanCalculator",props:{navOpen:Boolean},emits:["close"],setup(C){const n=g(500),s=g(1),a=M(()=>{if(s.value<=0)return n.value;{const b=parseFloat(n.value)*H,r=parseFloat(n.value)+b;return Math.floor(r/s.value)}});return(b,r)=>{const v=j("font-awesome-icon");return u(),m("div",{class:$(["calculator-nav absolute left-0 top-8 w-96 max-md:w-full",C.navOpen?"translate-x-0 transition-all":"-translate-x-full transition-all"])},[e("div",{class:"absolute rounded-full top-10 md:left-80 max-md:right-3 z-10",onClick:r[0]||(r[0]=x=>b.$emit("close"))},[e("button",U,[h(v,{icon:"arrow-left",class:"text-blue-600 text-xl"})])]),e("div",A,[e("div",W,[e("div",L,[e("p",q," Loan Amount: N$"+c(n.value),1),p(e("input",{type:"range",min:"500",max:"3000",step:"50","onUpdate:modelValue":r[1]||(r[1]=x=>n.value=x),class:"slider1 w-4/5 mt-12 appearance-none h-2 bg-gray-300 rounded-lg outline-none"},null,512),[[y,n.value]])]),e("div",E,[e("div",null,[r[3]||(r[3]=e("p",{class:"text-center mt-4 text-lg"}," Repayment terms: ",-1)),e("p",O,c(s.value)+" Month/s ",1)]),p(e("input",{type:"range",min:"1",max:"5",step:"1","onUpdate:modelValue":r[2]||(r[2]=x=>s.value=x),class:"slider2 w-4/5 mt-5 appearance-none h-2 bg-gray-300 rounded-lg outline-none"},null,512),[[y,s.value]])])]),e("div",R,[r[4]||(r[4]=e("p",{class:"ml-1 text-white"},"Monthly Installments",-1)),e("div",T,[e("p",G,"N$ "+c(a.value),1)])]),r[5]||(r[5]=e("div",{class:"flex flex-row"},[e("p",{class:"text-white text-center w-full px-3"},"*Please note, this amount might change once your loan is approved")],-1))])],2)}}},K={class:"apply w-full h-screen flex justify-center items-center"},Q={class:"form-container h-4/5 w-3/5 max-md:w-4/5 rounded-2xl"},X={action:"",class:"apply-form border overflow-x-hidden shadow-xl w-full h-full flex flex-row justify-center items-center rounded-2xl"},Y={class:"apply-general flex flex-col gap-5 w-3/5 max-md:w-4/5 pb-9 transition-all"},Z={class:"flex flex-col"},ee={key:0,class:"text-red-500 text-sm text-center"},te={class:"flex flex-col"},le={key:0,class:"text-red-500 text-sm text-center"},se={class:"flex flex-col"},ne={key:0,class:"text-red-500 text-sm text-center"},ae={class:"flex flex-col"},oe={key:0,class:"text-red-500 text-sm text-center"},ie={class:"flex flex-col"},re={key:0,class:"text-red-500 text-sm text-center"},de={class:"apply-files flex flex-col gap-5 w-3/5"},me={class:"inputDivfile"},ue={for:"id",class:"border border-white rounded text-center h-8 max-md:h-6 flex flex-row gap-3 justify-center items-center text-white"},pe={key:0,class:"text-red-500 text-sm text-center"},ce={class:"inputDivfile"},xe={for:"bankStatement",class:"border border-white rounded text-center h-8 max-md:h-6 flex flex-row gap-3 justify-center items-center text-white"},fe={key:0,class:"text-red-500 text-sm text-center"},be={class:"inputDivfile"},we={for:"payslip",class:"border border-white rounded text-center h-8 max-md:h-6 flex flex-row gap-3 justify-center items-center text-white"},he={key:0,class:"text-red-500 text-sm text-center"},ge={key:0,class:"form-loader flex flex-row gap-28"},ye={class:""},ve={class:"apply-control absolute w-2/5 max-md:w-4/5 px-9 flex flex-row justify-between items-center"},ke={class:"flex flex-row gap-5 max-md:gap-2"},_e={class:"w-40 flex flex-row max-md:flex-col justify-between max-md:items-end max-md:px-4 max-md:gap-2"},Ne={class:"bg-white rounded-full w-10 h-10 max-md:w-7 max-md:h-7 text-center shadow-xl"},Ce={__name:"Apply",setup(C){let n=V({name:"",email:"",mobileNumber:"",amount:"",installments:"",id:"",bankStatement:"",payslip:""}),s=V({name:"",email:"",mobileNumber:"",amount:"",installments:"",id:"",bankStatement:"",payslip:""}),a=g("general"),b=g("Id Copy"),r=g("Bankstatement"),v=g("Payslip"),x=g(!1);function F(){let i=!0;return n.name?s.name="":(s.name="Field required",i=!1),n.mobileNumber?I(n.mobileNumber)?s.mobileNumber="":(s.mobileNumber="Invalid mobile number.",i=!1):(s.mobileNumber="Field required",i=!1),n.email&&!B(n.email)?(s.email="Invalid email address.",i=!1):s.email="",n.amount?n.amount>3e3||n.amount<500?(s.amount="Amount must be between 500 and 3000",i=!1):s.amount="":(s.amount="Field required",i=!1),n.installments?n.installments>5||n.installments<0?(s.installments="Installments between 1 and 5",i=!1):s.installments="":(s.installments="Field required",i=!1),i===!0&&(a.value="files"),i}const _=(i,t)=>{const d=i.target.files[0],o=2*1024*1024;if(d)if(d.type==="application/pdf"&&d.size<=o)switch(t){case"id":n.id=d,b.value=d.name,s.id="";break;case"bankStatement":n.bankStatement=d,r.value=d.name,s.bankStatement="";break;case"payslip":n.payslip=d,v.value=d.name,s.payslip="";break}else{let k="";switch(d.type!=="application/pdf"?k="*File not in PDF format.":d.size>o&&(k="File size exceeds 2MB."),t){case"id":n.id=null,b.value="Id copy",s.id=k;break;case"bankStatement":n.bankStatement=null,r.value="Bankstatement",s.bankStatement=k;break;case"payslip":n.payslip=null,v.value="Payslip",s.payslip=k;break}}else switch(t){case"id":s.id="Please upload your id copy";break;case"bankStatement":s.bankStatement="Please upload your bankstatement";break;case"payslip":s.payslip="Please upload your payslip";break}},I=i=>{i.startsWith("+")&&(i=i.substring(1));const t=i.replace(/\D/g,"");return t.length===10&&t.startsWith("081")||t.length===13&&t.startsWith("26481")||t.length===10&&t.startsWith("085")||t.length===13&&t.startsWith("26485")},B=i=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(i).toLowerCase());return(i,t)=>{const d=j("font-awesome-icon");return u(),m(z,null,[h(D),e("div",K,[e("div",Q,[e("form",X,[p(e("div",Y,[e("div",Z,[t[12]||(t[12]=e("label",{for:"",class:"text-white max-md:text-sm"},"Name",-1)),p(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>l(n).name=o),type:"text",class:"h-8 max-md:h-6 bg-white rounded-lg max-md:rounded outline-none p-2"},null,512),[[y,l(n).name]]),l(s).name?(u(),m("p",ee,"*"+c(l(s).name),1)):f("",!0)]),e("div",te,[t[13]||(t[13]=e("label",{for:"",class:"text-white max-md:text-sm"},"Email",-1)),p(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>l(n).email=o),type:"text",class:"h-8 max-md:h-6 bg-white rounded-lg max-md:rounded outline-none p-2",placeholder:"example@gmail.com"},null,512),[[y,l(n).email]]),l(s).email?(u(),m("p",le,"*"+c(l(s).email),1)):f("",!0)]),e("div",se,[t[14]||(t[14]=e("label",{for:"",class:"text-white max-md:text-sm"},"Mobile Number",-1)),p(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>l(n).mobileNumber=o),type:"text",class:"h-8 max-md:h-6 bg-white rounded-lg max-md:rounded outline-none p-2",placeholder:"081 / 264 81"},null,512),[[y,l(n).mobileNumber]]),l(s).mobileNumber?(u(),m("p",ne,"*"+c(l(s).mobileNumber),1)):f("",!0)]),e("div",ae,[t[15]||(t[15]=e("label",{for:"",class:"text-white max-md:text-sm"},"Amount",-1)),p(e("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>l(n).amount=o),type:"number",class:"h-8 max-md:h-6 bg-white rounded-lg max-md:rounded outline-none p-2",placeholder:"N$ 500-3000"},null,512),[[y,l(n).amount]]),l(s).amount?(u(),m("p",oe,"*"+c(l(s).amount),1)):f("",!0)]),e("div",ie,[t[16]||(t[16]=e("label",{for:"",class:"text-white max-md:text-sm"},"Installments",-1)),p(e("input",{"onUpdate:modelValue":t[4]||(t[4]=o=>l(n).installments=o),type:"number",class:"h-8 max-md:h-6 bg-white rounded-lg max-md:rounded outline-none p-2",placeholder:"1-5 Months"},null,512),[[y,l(n).installments]]),l(s).installments?(u(),m("p",re,"*"+c(l(s).installments),1)):f("",!0)])],512),[[w,l(a)==="general"]]),p(e("div",de,[e("div",me,[e("label",ue,[h(d,{icon:"upload",class:"text-blue-600"}),S(" "+c(l(b)),1)]),e("input",{class:"w-full h-full opacity-0 cursor-pointer",type:"file",id:"id",onChange:t[5]||(t[5]=o=>_(o,"id"))},null,32),l(s).id?(u(),m("p",pe,c(l(s).id),1)):f("",!0)]),e("div",ce,[e("label",xe,[h(d,{icon:"upload",class:"text-blue-600"}),S(" "+c(l(r)),1)]),e("input",{class:"w-full opacity-0 cursor-pointer",type:"file",id:"bankStatement",onChange:t[6]||(t[6]=o=>_(o,"bankStatement"))},null,32),l(s).bankStatement?(u(),m("p",fe,c(l(s).bankStatement),1)):f("",!0)]),e("div",be,[e("label",we,[h(d,{icon:"upload",class:"text-blue-600"}),S(" "+c(l(v)),1)]),e("input",{class:"w-full h-full opacity-0 cursor-pointer",type:"file",id:"payslip",onChange:t[7]||(t[7]=o=>_(o,"payslip"))},null,32),l(s).payslip?(u(),m("p",he,c(l(s).payslip),1)):f("",!0)])],512),[[w,l(a)==="files"]]),l(a)==="loading"?(u(),m("div",ge,t[17]||(t[17]=[e("div",{class:"circle1 w-16 h-16 rounded-full border-2 border-white"},null,-1),e("div",{class:"circle2 w-16 h-16 rounded-full border-2 border-white"},null,-1),e("div",{class:"circle3 w-16 h-16 rounded-full border-2 border-white"},null,-1)]))):f("",!0),p(e("div",ye,t[18]||(t[18]=[P('<p class="flex flex-col justify-center items-center"><span class="text-xl">Thank you for applying for a loan with us</span> We will contact you within 48 hours, and feel free to send us an email: <span class="text-blue-900">greenline@gmail.com <span class="text-black">or dail our number:</span> 081 866 9984 <span class="text-black">if you need any help</span></span></p>',1)]),512),[[w,l(a)==="message"]])])]),e("div",ve,[p(e("div",ke,[e("div",{class:$(["general-ind w-6 h-6 max-md:w-4 max-md:h-4 rounded-full border-2 border-blue-500",l(a)==="general"?"bg-blue-500":""])},null,2),e("div",{class:$(["files-ind w-6 h-6 max-md:w-4 max-md:h-4 rounded-full border-2 border-blue-500",l(a)==="files"?"bg-blue-500":""])},null,2)],512),[[w,l(a)==="general"||l(a)==="files"]]),p(e("div",null,[p(e("button",{class:"w-40 max-md:w-20 cursor-pointer bg-blue-500 text-white rounded",onClick:F},"Next",512),[[w,l(a)==="general"]]),p(e("div",_e,[l(a)==="files"?(u(),m("button",{key:0,class:"w-16 max-md:w-28 cursor-pointer bg-blue-500 text-white rounded",onClick:t[8]||(t[8]=o=>N(a)?a.value="general":a="general")},"Prev")):f("",!0),l(a)==="files"?(u(),m("button",{key:1,class:"w-16 max-md:w-28 cursor-pointer bg-green-500 text-white rounded",onClick:_},"Apply")):f("",!0),l(a)==="message"?(u(),m("button",{key:2,class:"w-full cursor-pointer bg-green-500 text-white rounded",onClick:t[9]||(t[9]=o=>N(a)?a.value="general":a="general")},"Re-apply")):f("",!0)],512),[[w,l(a)==="files"||l(a)==="message"]])],512),[[w,l(a)==="general"||l(a)==="files"||l(a)==="message"]])]),l(x)?f("",!0):(u(),m("div",{key:0,class:"absolute calc-openBtn top-20 left-20 z-10",onClick:t[10]||(t[10]=o=>N(x)?x.value=!0:x=!0)},[e("button",Ne,[h(d,{icon:"calculator",class:"text-blue-600 text-xl max-md:text-sm"})])])),h(J,{navOpen:l(x),onClose:t[11]||(t[11]=o=>N(x)?x.value=!1:x=!1)},null,8,["navOpen"])])],64)}}};export{Ce as default};
