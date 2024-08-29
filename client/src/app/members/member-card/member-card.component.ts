import { Component } from '@angular/core';
import { Member } from '../../_models/member';
import { input } from '@angular/core';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [],
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css',
})
export class MemberCardComponent {
  member = input.required<Member>();

}
