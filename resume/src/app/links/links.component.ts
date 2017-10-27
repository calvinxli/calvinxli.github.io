import { Component, OnInit } from '@angular/core';
import { ILink } from '../../types/ILink';
import { links } from '../../api/links';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
    links: ILink[] = links;

    constructor() { }

    ngOnInit() {
    }

}
