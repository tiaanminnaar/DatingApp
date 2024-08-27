import { Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
/*import { Member } from '../../_models/member';*/
import { TabDirective, TabsModule, TabsetComponent } from 'ngx-bootstrap/tabs';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { TimeagoModule } from 'ngx-timeago';
import { DatePipe } from '@angular/common';
import { Member } from '../../Models/member';
import { MembersService } from '../../_services/members.service';
import { MemberMessagesComponent } from "../member-messages/member-messages.component";
import { Message } from '../../_models/message';
import { MessageService } from '../../_services/message.service';
import { PresenceService } from '../../_services/presence.service';
import { AccountService } from '../../_services/account.service';
import { HubConnectionState } from '@microsoft/signalr';

@Component({
  selector: 'app-member-detial',
  standalone: true,
  imports: [TabsModule, GalleryModule, TimeagoModule, DatePipe , MemberMessagesComponent],
  templateUrl: './member-detial.component.html',
  styleUrl: './member-detial.component.css'
})
export class MemberDetialComponent implements OnInit {
  @ViewChild('memberTabs', { static: true }) memberTabs?: TabsetComponent;
  private memberService = inject(MembersService);
  private route = inject(ActivatedRoute);
  member: Member = {} as Member;
  images: GalleryItem[] = [];
  activeTab?: TabDirective;

  ngOnInit() {
    this.loadMember()
  }

  loadMember() {
    const username = this.route.snapshot.paramMap.get('username');
    if (!username) return;
    this.memberService.getMember(username).subscribe({
      next: member => {
        this.member = member;
        member.photos.map(p => {
          this.images.push(new ImageItem({src: p.url, thumb: p.url}))
        })
      }
    })
  }

}
