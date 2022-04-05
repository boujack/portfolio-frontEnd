import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {

  constructor(private elementRef:ElementRef) { 
    let logged:boolean=false;
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.getElementById("login-button").addEventListener('click',(e:Event)=>{
      let menu = document.querySelector(".primary-navbar");
		  if(!logged){
			  this.showModal(".login-modal-bg");		
			  menu.setAttribute("data-visible","false");
		  }
		  else{
			  this.logout();
		  }
    })
  }
  showModal(modal:string)
  {
	  let modalBg:Element = document.querySelector(modal);
	  modalBg.setAttribute("data-visible","true");
  }

  logout()
  {
	  let edit_b = document.querySelectorAll(".edit");
    let add_b = document.querySelectorAll(".add");
	  let rm_b = document.querySelectorAll(".rm");
	  for(i=0;i<edit_b.length;i++){
        edit_b[i].hidden=true;
      }
      for(i=0;i<add_b.length;i++){
        add_b[i].hidden=true;
      }
	  for(i=0;i<rm_b.length;i++){
        rm_b[i].hidden=true;
      }
  }

}
