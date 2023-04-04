import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ContactMessage } from "./contact-message.model";

@Injectable({providedIn: 'root'})
export class ContactFormService {
    constructor(private http: HttpClient){}

    createAndStoreMessage(userEmail: string, userMessage: string){
        const userData: ContactMessage = {email: userEmail, message: userMessage}
        this.http.post('https://ng-complete-guide-2cdf7-default-rtdb.firebaseio.com/contacts.json', userData).subscribe(responseData => {
            console.log(responseData)
        })
    }

}