import { Component, OnInit, inject } from '@angular/core';
import { MembersService } from '../../_services/members.service';
import { Member } from '../../_models/member';

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements OnInit {
  memberService = inject(MembersService);
  

  ngOnInit() {
    if (this.memberService.members().length === 0) this.loadMembers();
  }

  loadMembers() {
    this.memberService.getMembers()
  }
}
