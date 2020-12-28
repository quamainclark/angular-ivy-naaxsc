import { Component, OnInit } from "@angular/core";
import { Item } from "../../shared/models/item";

@Component({
  selector: "video-room",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.css"]
})
export class VideoComponent implements OnInit {
  links: Array<Item> = [
    {
      isClicked: false,
      link: "https://www.youtube.com/embed/BBVCq86p0qI"
    },
    {
      isClicked: false,
      link: "https://www.youtube.com/embed/hlVIS2qAGrA"
    },
    {
      isClicked: false,
      link: "https://www.youtube.com/embed/KXU_1A2m4O0"
    },
    {
      isClicked: false,
      link: "https://www.youtube.com/embed/v_OMFIx5Da8"
    },
    {
      isClicked: false,
      link: "https://www.youtube.com/embed/Wzc6-cvHJys"
    },
    {
      isClicked: false,
      link: "https://www.youtube.com/embed/lpvFxCdvSjk"
    }
  ];

  len: number;

  ngOnInit(): void {
    this.len = this.links.length;
  }

  popup(index: number): void {
    const newLinks = [
      ...this.links.slice(0, index),
      {
        isClicked: !this.links[index].isClicked,
        link: this.links[index].link
      },
      ...this.links.slice(index + 1, this.len)
    ];
    this.links = newLinks;
  }
}
