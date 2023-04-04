import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('youTubeDemo') youTubePlayer: ElementRef<HTMLDivElement>;
  videoHeight: number;
  videoWidth: number;
  apiLoaded = false;

  videoId = 'MoaUuZQjLNg';

  ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize(): void {
    this.videoWidth= this.youTubePlayer.nativeElement.clientWidth
    this.videoHeight=this.videoWidth * 0.6
  }

}
