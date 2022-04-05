import { Desarrollo } from "./Desarrollo";
export class Proyecto extends Desarrollo
{
	constructor(p:string,d:string,fi:string,ff:string)
	{
		super(p,d,fi,ff);
		this.labelDate_2.textContent="Fecha de Egreso:";
		this.labelDate_1.textContent="Fecha de Ingreso:";
		this.labelText_2.textContent="Titulo:";
	}
}