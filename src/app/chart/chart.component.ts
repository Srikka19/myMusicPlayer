import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

/**
 * @title Music Chart
 */
@Component({
  selector: 'app-chart',
  styleUrls: ['chart.component.css'],
  templateUrl: 'chart.component.html',
})
export class ChartComponent {
  highlightedRow = [];
  selectedRow = [];
  displayedColumns = ['Title', 'Artist', 'Album', 'Duration'];
  dataSource = new MatTableDataSource<Song>(SONG_DATA);
  doubleClicked = false;


  onDblClick(currentRow) {
    this.doubleClicked = true;
    this.selectedRow = [];
    this.highlightedRow = [];
    this.selectedRow.push(currentRow);

  }
  onClick(currentRow) {
    this.doubleClicked = false;
    this.selectedRow = [];
    this.highlightedRow = [];
    this.highlightedRow.push(currentRow);

  }
  onHover(currentRow){
    if (this.doubleClicked != true) {
      this.onClick(currentRow);
    } 
  }
}

export interface Song {
  Title: string;
  Artist: string;
  Album: string;
  Duration: string;

}

const SONG_DATA: Song[] = [
  {Title: 'a song title0', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title1', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title2', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title3', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title4', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title5', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title6', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title7', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title8', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title9', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title10', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title11', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title12', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title13', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title14', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title15', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title16', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title17', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title18', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title19', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title20', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title21', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title22', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title23', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title24', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title25', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title26', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title27', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title28', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title29', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title30', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title31', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title32', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title33', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title34', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title35', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title36', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title37', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title38', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
  {Title: 'a song title39', Artist: 'an artist', Album: 'an album', Duration: "5:00"},
];


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */