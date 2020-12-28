import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
// import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
// import { ResizedEvent } from "angular-resize-event";

@Component({
  selector: "subwindow",
  templateUrl: "./subwindow.component.html",
  styleUrls: ["./subwindow.component.css"]
})
export class SubWindowComponent {
  frame = {
    translate: [0, 0]
  };
  onResizeStart({ setOrigin, dragStart }) {
    setOrigin(["%", "%"]);
    dragStart && dragStart.set(this.frame.translate);
  }
  onResize({ target, width, height, drag }) {
    const beforeTranslate = drag.beforeTranslate;
    target.style.width = `${width}px`;
    target.style.height = `${height}px`;
    target.style.transform = `translate(${beforeTranslate[0]}px, ${
      beforeTranslate[1]
    }px)`;
  }
  onResizeEnd({ lastEvent }) {
    if (lastEvent) {
      this.frame.translate = lastEvent.drag.beforeTranslate;
    }
  }

  onDragStart({ set }) {
    console.log("========");
    set(this.frame.translate);
  }
  onDrag({ target, beforeTranslate }) {
    target.style.transform = `translate(${beforeTranslate[0]}px, ${
      beforeTranslate[1]
    }px)`;
  }
  onDragEnd({ lastEvent }) {
    if (lastEvent) {
      this.frame.translate = lastEvent.beforeTranslate;
    }
  }
}
