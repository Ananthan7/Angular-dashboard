import { Component, OnInit } from '@angular/core';
interface fiteredItems{
  category:string
  desc: any[]
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
   fruitslist:any = [];
  constructor() { }

  ngOnInit(): void {
    this.fruitslist = [
      {cat: "Banana", desc: "item desc1"},
      {cat: "Orange", desc: "item desc2"},
      {cat: "Orange", desc: "item desc4"},
      {cat: "Apple", desc: "item desc1"},
      {cat: "Mango", desc: "item desc2"},
      {cat: "Mango", desc: "item desc3"},
    ]
    // Creates an array of objects with unique "name" property values.
    let uniqueObjArray = [
      ...new Map(this.fruitslist.map((item:any) => {
        return [item["cat"], item]
      })).values(),
    ];

    let values = this.fruitslist.map((item:any) =>  [item["cat"], [item.desc]])
    
    const groupByCategory = this.fruitslist.group(({item}:any) => {
      return item.cat;
    });
    
    
    console.log(groupByCategory);
    
    console.log("uniqueObjArray", uniqueObjArray);

  }

}
