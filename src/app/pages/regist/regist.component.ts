import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-regist',
    templateUrl: './regist.component.html',
    styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {

    public registForm: FormGroup;
    public password : FormControl;
    
    public passwordHide = true;
    
    
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {

    this.registForm = this.formBuilder.group({
        terms : ['', [
            <any> Validators.required
        ]],
        id : ['', [
            <any> Validators.required,
            <any> Validators.minLength(3),
            <any> Validators.maxLength(20),
            <any> Validators.pattern(/^[a-z0-9+]*$/),
        ]],
        password : ['', [
            <any> Validators.required,
            <any> Validators.minLength(6),
            <any> Validators.maxLength(20)
        ]],
        password_check : ['', [
            <any> Validators.required,
            this.matchOtherValidator('password')
        ]],
    });

    }

    matchOtherValidator (otherControlName: string) {
        
        let thisControl: FormControl;
        let otherControl: FormControl;

        return function matchOtherValidate (control: FormControl) {

        if (!control.parent) return null;

        if (!thisControl) {
            thisControl = control;
            otherControl = control.parent.get(otherControlName) as FormControl;
            if (!otherControl) {
            throw new Error('matchOtherValidator(): other control is not found in parent group');
            }
            otherControl.valueChanges.subscribe(() => {
            thisControl.updateValueAndValidity();
            });
        }

        if (!otherControl) return null;    
        if (otherControl.value !== thisControl.value) return { matchOther: true };
        return null;
        }
    }

    regist(model: Object, isValid: boolean){

        if(isValid)alert(JSON.stringify(model));

    }

}
