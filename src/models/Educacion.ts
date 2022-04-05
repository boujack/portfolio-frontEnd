import { Desarrollo } from "./Desarrollo";
export class Educacion extends Desarrollo
{
	constructor(i:string,t:string,fi:string,fe:string)
	{
		super(i,t,fi,fe);
		this.labelDate_2.textContent="Fecha de Egreso:";
		this.labelDate_1.textContent="Fecha de Ingreso:";
		this.labelText_2.textContent="Titulo:";
	}
}