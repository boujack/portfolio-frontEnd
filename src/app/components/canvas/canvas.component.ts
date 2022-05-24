import { Component, ElementRef, Input, OnInit, ViewChild, HostListener } from '@angular/core';
import { Habilidad } from 'src/models/Habilidad';
import { SkModel } from 'src/models/SkModel';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  @ViewChild('habCanvas')canvas: ElementRef; 
  canvasEl:HTMLCanvasElement; 
  private ctx:any;
  @Input() skills:SkModel[];
  @Input() ancho:number;
  @Input() alto:number;

  constructor() {
    
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.canvasEl=this.canvas.nativeElement;
    this.ctx = this.canvasEl.getContext('2d');
    this.ctx.canvas.width=this.ancho;
    this.ctx.canvas.height=this.alto;
    
    this.drawCanvas()
  }

  @HostListener('window:resize', ['$event'])
    onResize(event:any) {      
      let size = Math.min(this.ancho,this.alto);
      this.ctx.canvas.width=this.ancho;
      this.ctx.canvas.height=this.alto;
      this.drawCanvas();
  }

  drawCanvas(){
    return new Promise<boolean>((resolve)=>{
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    let x_center = this.ctx.canvas.width / 2;
    let y_center = this.ctx.canvas.height / 2;
    const graphModule = (Math.min(this.ctx.canvas.width, this.ctx.canvas.height) - 150) / 2;
    let escala = graphModule / 100;
    let fontSize = this.ctx.canvas.height / 25;
    let fontWidth = fontSize / 2;
    this.ctx.font = fontSize + "px 'GlitchInside'";
    
    let hab = [];
	
    // Fill with gradient
    for(let i=0;i<this.skills.length;i++){
      hab.push(new Habilidad(this.skills[i].nombre, Math.round(this.skills[i].valor * escala), hab.length));
    }
    for (let n of hab) {
      n.setAttribs(hab.length);
    }

    //Dibujar la figura
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(hab[hab.length - 1].x + x_center, hab[hab.length - 1].y + y_center);
    for (let i = 0; i < hab.length; i++) {
      this.ctx.lineTo(hab[i].x + x_center, hab[i].y + y_center);
    }
    this.ctx.stroke();
    this.ctx.closePath();
    var grd = this.ctx.createLinearGradient(0, this.ctx.canvas.height, this.ctx.canvas.width, this.ctx.canvas.height);
    grd.addColorStop(0.6, "cyan");
    grd.addColorStop(0.4, "magenta");
    this.ctx.fillStyle = grd;
    this.ctx.fill();

    //Dibuja la guia
    this.ctx.beginPath();
    this.ctx.strokeStyle = "rgba(21, 255, 0,0.8)";
    this.ctx.lineWidth = 1;
    for (let i = 0; i < hab.length; i++) {
      let x = Math.round(graphModule * Math.cos(Math.PI * hab[i].angulo / 180)) + x_center;
      let y = Math.round(graphModule * Math.sin(Math.PI * hab[i].angulo / 180)) + y_center;
      this.ctx.moveTo(x_center, y_center);
      this.ctx.lineTo(x, y);
    }
    for (let i = 1; i <= 5; i++) {
      let auxModule = graphModule * i / 5;
      let x = Math.round(auxModule * Math.cos(Math.PI * hab[hab.length - 1].angulo / 180)) + x_center;
      let y = Math.round(auxModule * Math.sin(Math.PI * hab[hab.length - 1].angulo / 180)) + y_center;
      this.ctx.moveTo(x, y);
      for (let j = 0; j < hab.length; j++) {
        x = Math.round(auxModule * Math.cos(Math.PI * hab[j].angulo / 180)) + x_center;
        y = Math.round(auxModule * Math.sin(Math.PI * hab[j].angulo / 180)) + y_center;
        this.ctx.lineTo(x, y);
      }
    }
    this.ctx.stroke();

    //Añade las etiquetas
    this.ctx.fillStyle = "rgba(255,255,255,1)";
    for (let i = 0; i < hab.length; i++) {
      let text = hab[i].name + " (" + Math.round(hab[i].modulo / escala) + ")";
      let x_text = Math.round(graphModule * Math.cos(Math.PI * hab[i].angulo / 180)) + x_center;
      let y_text = Math.round(graphModule * Math.sin(Math.PI * hab[i].angulo / 180)) + y_center;
      let x_offset = -(text.length * fontWidth / 2);
      let y_offset = 0;
      if (x_text < x_center) {
        x_offset = -(text.length * fontWidth);
      }
      else {
        if (x_text > x_center) {
          x_offset = fontWidth;
        }
      }
      if (y_text > y_center) {
        y_offset = fontSize * 1.5;
      }
      else {
        y_offset = -fontSize * 0.5;
      }
      this.ctx.fillText(text, x_text + x_offset, y_text + y_offset);
    }
    resolve(true);
    })
  }
}
