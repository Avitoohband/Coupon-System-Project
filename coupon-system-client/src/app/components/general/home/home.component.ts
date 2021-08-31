import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    // public imagesSrcs: String[] = [
    //     "assets\images\products-bg.png",
    //     "assets\images\products-bg2.png",
    //     "assets\images\products-bg3.png"
    // ];
    // public currentImage = Math.floor(Math.random() * 3);

    public imageWidth = 300;
    public today = new Date();
    public discountOf = Math.floor(Math.random() * 16);
    public applyColors = true;
    public isWinter?: boolean;
    public listProducts: String[] = ["Banana", "Apple", "Avocado", "Pineapple"];
    public h1DisStyleColor = this.discountOf >= 10 ? "red" : "white";
    public h1DisStyleFontSize = this.discountOf >= 10 ? "32px" : "22px";

    public headingDisStyle = {
        fontStyle: this.discountOf >= 10 ? "italic" : "normal",
        color: this.discountOf >= 10 ? "red" : "white",
        fontSize: this.discountOf >= 10 ? "32px" : "22px"
    }
    // DI of title service
    constructor(private titleService:Title) {
    }
    ngOnInit(): void {
        let month = this.today.getMonth() + 1;
        this.isWinter = month >= 11 || month <= 3;
        this.titleService.setTitle("Home");
    }
    public increaceWidth(): void {
        this.imageWidth += 10;
    }
    public deacreseWidth(): void {
        this.imageWidth -= 10;
    }
    public resetWidth(): void {
        this.imageWidth = 300;
    }

}
