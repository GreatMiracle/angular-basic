import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges,ContentChild, ViewChild , ElementRef, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked , AfterViewInit, AfterViewChecked, OnDestroy{



  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('kienWrapper') content!: ElementRef;



  @Input() userName = ''; //biến này được truyền từ bên ngoài

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChange nezzzzz", changes);

    if(!changes['userName'].isFirstChange()){
      console.log("1st=====>", changes['userName']);
      if(changes['userName'].currentValue ==='react'){
        this.userName = 'Hello ' +this.userName;
      }
      else{
        this.userName = changes['userName'].previousValue;
      }
    }
  }

  ngOnInit(): void {
    console.log("ddaay laf Onit CHILD ae ei...");
  }

  ngDoCheck(): void {
    console.log("Do CHeck...");
  }

  ngAfterContentInit(): void {
    console.log("kienWrapper", this.content);
    console.log("wrapper", this.wrapper);
  }

  ngAfterContentChecked(): void {
    console.log("After content check");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit", this.wrapper);
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy ========<<<<");
  }


}


