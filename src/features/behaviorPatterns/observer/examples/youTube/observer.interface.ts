export interface Observer {
  update(videoTitle: string): void;
}

export interface Subject {
  observers: Observer[];
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(videoTitle: string): void;
}
