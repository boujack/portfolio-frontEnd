export class Desarrollo extends DocumentFragment
{
    inputText_1:HTMLInputElement=document.createElement("input");
	rmB:HTMLButtonElement=document.createElement("button");
	labelText_2:HTMLLabelElement=document.createElement("label");
	inputText_2:HTMLInputElement=document.createElement("input");
	labelDate_1:HTMLLabelElement=document.createElement("label");
	inputDate_1:HTMLInputElement=document.createElement("input");
	labelDate_2:HTMLLabelElement=document.createElement("label");
	inputDate_2:HTMLInputElement=document.createElement("input");
	constructor(t1:string,t2:string,d1:string,d2:string)
	{
		super();		
		this.inputText_1.setAttribute("class","h1-skill");
		this.rmB.setAttribute("class","rm button-or");
		this.rmB.textContent="X";
		this.inputDate_1.type="date";
		this.inputDate_2.type="date";
		this.inputText_1.type="text";
		this.inputText_2.type="text";
		this.inputText_1.value=t1;
		this.inputText_2.value=t2;
		this.inputDate_1.value=d1;
		this.inputDate_2.value=d2;
		this.appendChild(this.inputText_1);
		this.appendChild(this.rmB);
		this.appendChild(this.labelText_2);
		this.appendChild(this.inputText_2);
		this.appendChild(this.labelDate_1);
		this.appendChild(this.inputDate_1);
		this.appendChild(this.labelDate_2);
		this.appendChild(this.inputDate_2);
	}
	disableEdit()
	{
		this.inputText_1.disabled=true;
		this.inputText_2.disabled=true;
		this.inputDate_1.disabled=true;
		this.inputDate_2.disabled=true;		
	}
}