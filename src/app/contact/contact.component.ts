import { Component } from "@angular/core";
import { ContactFormService } from "./contact-form.service";
import { ContactMessage } from "./contact-message.model";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html'
})

export class ContactComponent{
    constructor(private contactFormService: ContactFormService){}

    onSendMessage(messageData: ContactMessage){
        this.contactFormService.createAndStoreMessage(messageData.email, messageData.message);
    }
}