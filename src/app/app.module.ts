import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { VideoComponent } from "./views/video/video.component";
import { SubWindowComponent } from "./shared/components/subWindow/subwindow.component";

import { NgxMoveableModule } from "ngx-moveable";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxMoveableModule
  ],
  declarations: [
    AppComponent,
    VideoComponent,
    SubWindowComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
