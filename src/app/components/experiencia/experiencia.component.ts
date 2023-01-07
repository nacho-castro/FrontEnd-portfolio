import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaList: any;

  constructor(private datosPortfolio:PortfolioService){}
 
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.experienciaList=data.experiencie;
    })
 }
}
