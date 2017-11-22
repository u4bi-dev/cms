import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
selector: 'app-admin-member',
templateUrl: './admin-member.component.html',
styleUrls: ['./admin-member.component.css']
})
export class AdminMemberComponent implements OnInit {
    
    rows = [];
    temp = [];

    columns = [
        { prop: 'name' },
        { name: 'Rate' },
        { name: 'Datetime' }
    ];
    
    @ViewChild('table') table: any;

    constructor() {
        for(let i = 40; i--;)this.rows.push({
            name    : '홍길동' + i,
            rate    : 200 + i,
            datetime : '11/13'
        });

        this.temp = [...this.rows];
        
    }
    
    ngOnInit() {
    }

    updateFilter(event) {
        const val = event.target.value.toLowerCase();
        const temp = this.temp.filter( (d) => {

            let check = (data) => data.indexOf(val) !== -1 || !val;
            return check(d.name.toLowerCase()) || check(d.rate.toString().toLowerCase()) || check(d.datetime.toLowerCase());
            
        });

        this.rows = temp;
        this.table.offset = 0;
    }

}
