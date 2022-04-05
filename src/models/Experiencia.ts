import { Desarrollo } from "./Desarrollo";
export class Experiencia extends Desarrollo
{
	constructor(e:string,p:string,fi:string,fe:string)
	{
		super(e,p,fi,fe);
		this.labelDate_2.textContent="Fecha de Egreso:";
		this.labelDate_1.textContent="Fecha de Ingreso:";
		this.labelText_2.textContent="Titulo:";
	}
}