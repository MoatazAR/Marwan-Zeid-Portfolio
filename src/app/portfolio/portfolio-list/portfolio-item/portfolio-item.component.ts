import { Component, Input } from "@angular/core";
import { PortfolioVideo } from "../../portfolio-video.model";

@Component({
    selector:'app-portfolio-item',
    templateUrl: './portfolio-item.component.html',
    styleUrls: ['./portfolio-item.component.css']
})

export class PortfolioItemComponent{
    @Input() portfolioItem: PortfolioVideo
}