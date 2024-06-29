import { Observer, Subject } from "./observer.interface";

class YouTubeChannel implements Subject {
  observers: Observer[] = [];
  public name: string = "";
  private videoTitle: string = "";

  constructor(name: string) {
    this.name = name;
  }

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((sub) => sub !== observer);
  }

  notify(videoTitle: string): void {
    this.videoTitle = videoTitle;
    this.observers.forEach((observer) => observer.update(this.videoTitle));
  }

  uploadVideo(title: string): void {
    this.notify(title);
  }
}

export default YouTubeChannel;
