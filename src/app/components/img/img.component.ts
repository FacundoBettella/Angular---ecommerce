import {
   Component,
   Input,
   Output,
   EventEmitter,
   OnInit,
   OnChanges,
   AfterViewInit,
   OnDestroy,
   SimpleChanges
} from '@angular/core';

@Component({
   selector: 'app-img',
   templateUrl: './img.component.html',
   styleUrls: ['./img.component.css'],
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

   @Input() imgSrc: string = '';

   @Output() loaded = new EventEmitter<string>();
   imageDefault = '../../../assets/images/default.png';

   // counter = 0;
   // counterFn: number | undefined;

   constructor() {
      // Before render - run once time when we init an instance the component
      // console.log('constructor, imgValue => ', this.imgSrc);
   }

   ngOnChanges(changes: SimpleChanges) {
      // Before render
      // detect changes on inputs
      // console.log('ngOnChanges', changes);
   }

   ngOnInit() {
      // Before render - run once time
      // For async - promises functions and fetch calls
      // this.counterFn = window.setInterval(()=> {
      //    this.counter += 1;
      //    console.log('ngOnInit')
      // }, 1000)
   }

   ngAfterViewInit() {
      // After render - run once time
      // console.log('ngAfterViewInit');
   }

   ngOnDestroy(){
      // Delete - unmount component.
      console.log("ngOnDetroy");

      // window.clearInterval(this.counterFn);
   }

   imgError() {
      this.imgSrc = this.imageDefault;
   }

   imgLoaded() {
      // console.log('Child loaded..');
      this.loaded.emit(this.imgSrc);
   }
}
