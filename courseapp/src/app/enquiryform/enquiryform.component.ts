import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../services/enquiry.service';

@Component({
  selector: 'enquiryform',
  templateUrl: './enquiryform.component.html',
  styleUrls: ['./enquiryform.component.css']
})
export class EnquiryformComponent implements OnInit {

  name: string;
  email: string;
  message: string;
  errors: boolean = false;
  errorlist: string[];
  sending: boolean = false;
  filename: string;
  enquirymessage: string;
  constructor(private es: EnquiryService) { }

  ngOnInit() {
  }

  sendEnquiry() {
    var regex = /^[a-zA-Z][a-zA-Z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]{3,5}$/;
    this.errorlist = [];
    if (this.name == undefined || this.name.length == 0)
      this.errorlist.push("Name Required");
    if (this.email == undefined || this.email.length == 0)
      this.errorlist.push("Email Required");
    else if (!regex.test(this.email))
      this.errorlist.push("Invalid EMail");
    if (this.message == undefined || this.message.length == 0)
      this.errorlist.push("Messgae Required");
    if (this.errorlist.length > 0)
      this.errors = true;
    else {
      this.sending = true;
      this.filename = "loading.gif";
      this.enquirymessage = "Sending the enquiry";
      let temp = { name: this.name, email: this.email, message: this.message };

      this.es.sendEnquiry(temp).subscribe(
        (data) => {
          this.filename = "messageSent.png";
          this.enquirymessage = "Enquiry sent successfully";
          setTimeout(() => {
            this.sending = false;
            this.reset();
          }, 2000);
        },
        (error) => {
          alert("Message not sent");
          setTimeout(() => {
            this.sending = false;
          }, 2000);
        }
      )

      
    }
  }
  reset() {
    this.name = "";
    this.email = "";
    this.message = "";
    this.errorlist = [];
    this.errors = false;
  }

}
