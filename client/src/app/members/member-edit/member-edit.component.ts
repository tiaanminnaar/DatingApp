import { Component, HostListener, OnInit, ViewChild, inject } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { Member } from '../../_models/member';
import { MembersService } from '../../_services/members.service';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-member-edit',
  standalone: true,
  imports: [TabsModule],
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css'
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editform') editForm?: NgForm;
  @HostListener('window:beforeunload', ['$event']) notify($event: any) {
    if (this.editForm?.dirty) {
      $event.returnValue = true;
    }
  }
  member?: Member;
  private accountService = inject(AccountService);
  private memberService = inject(MembersService);
  private toastr = inject(ToastrService);

  ngOnInit() {
    this.loadMember()
  }

  loadMember() {
    const user = this.accountService.currentUser();
    if (!user) return;
    this.memberService.getMember(user.username).subscribe({
      next: member => this.member = member
    })
  }

  updateMember() {
    this.memberService.updateMember(this.editForm?.value).subscribe({
      next: _ => {
        this.toastr.success('Profile updated successfully');
        this.editForm?.reset(this.member);
      }
    })
  }
}
