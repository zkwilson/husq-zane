import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {TimelineComponent} from "./timeline/timeline.component";
import {FriendsListComponent} from "./friends-list/friends-list.component";

const routes: Routes = [

  {path: '', component: TimelineComponent, pathMatch: 'full'},
  {path: 'friends', component: FriendsListComponent, pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent, pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
