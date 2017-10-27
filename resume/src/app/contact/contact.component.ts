import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    location = 'Portland, OR 97266';
    phone = '(503) 980-5816';
    email = 'calvin.xuan.li@gmail.com';
    
    constructor() { }

    ngOnInit() {
    }

}
