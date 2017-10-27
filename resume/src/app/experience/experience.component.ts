import { Component, OnInit } from '@angular/core';
import { IWorkExperience } from '../../types/IWorkExperience';
import { experiences } from '../../api/experiences';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
    experiences: IWorkExperience[] = experiences;

    constructor() { }

    ngOnInit() {
    }

}
