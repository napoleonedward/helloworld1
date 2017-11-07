import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { StudentPage } from '../student/student';
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

 aboutPage = AboutPage;
 contactPage = ContactPage;
 studentPage = StudentPage;

}
