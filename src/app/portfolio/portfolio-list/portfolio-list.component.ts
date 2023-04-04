import { Component } from "@angular/core";
import { PortfolioVideo } from "../portfolio-video.model";
import { PortfolioService } from "../portfolio.service";

@Component({
    selector:'app-portfolio-list',
    templateUrl: './portfolio-list.component.html',
    styleUrls: ['./portfolio-list.component.css']
})

export class PortfolioListComponent {
    // portfolio holds an array of PortfolioVideo objects
    portfolio: PortfolioVideo[]

    constructor(private portfolioService: PortfolioService){}

    ngOnInit() {
        this.portfolio = this.portfolioService.getPortfolio()
    }
}