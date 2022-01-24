import {ITimeLineItem} from "../models"

export default function compare( a:ITimeLineItem, b:ITimeLineItem ) {
    if ( a.date < b.date ){
      return -1;
    }
    if ( a.date > b.date ){
      return 1;
    }
    return 0;
  }