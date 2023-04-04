import { Component } from "@angular/core";
import { PortfolioService } from "./portfolio.service";

@Component({
    selector:'app-portfolio',
    templateUrl:'./portfolio.component.html',
    providers: [PortfolioService]
})

export class PortfolioComponent{
    constructor(private portfolioService: PortfolioService){}
}