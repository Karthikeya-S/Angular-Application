import {Component} from "@angular/core";
import {Students} from "./mockStudent";
@Component({
    selector: "app.welcome",
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent{
    message = "Welcome To Wiley Edge"

    student = Students;
}