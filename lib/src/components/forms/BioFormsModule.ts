import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputFileConfig, InputFileModule} from 'ngx-input-file';
import {ErrorsListComponent} from './ErrorsListComponent';
import {AutocompleteInputComponent} from './fields/AutocompleteInputComponent';
import {CheckboxInputComponent} from './fields/CheckboxInputComponent';
import {ChipsInputComponent} from './fields/ChipsInputComponent';
import {DatePickerInputComponent} from './fields/DatePickerInputComponent';
import {SelectInputComponent} from './fields/SelectInputComponent';
import {TextAreaInputComponent} from './fields/TextAreaInputComponent';
import {TextInputComponent} from './fields/TextInputComponent';
import {UploadInputComponent} from './fields/UploadInputComponent';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {BioCommonModule} from "../BioCommonModule";

const config: InputFileConfig = {};

@NgModule({
    declarations: [
        ErrorsListComponent,
        TextInputComponent,
        TextAreaInputComponent,
        UploadInputComponent,
        CheckboxInputComponent,
        SelectInputComponent,
        ChipsInputComponent,
        AutocompleteInputComponent,
        DatePickerInputComponent,
    ],
    exports: [
        BioCommonModule,
        FormsModule,
        ReactiveFormsModule,
        ErrorsListComponent,
        TextInputComponent,
        TextAreaInputComponent,
        SelectInputComponent,
        UploadInputComponent,
        CheckboxInputComponent,
        ChipsInputComponent,
        AutocompleteInputComponent,
        DatePickerInputComponent
    ],
    providers: [],
    imports: [
        BioCommonModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSelectModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        InputFileModule.forRoot(config)
    ]
})
export class BioFormsModule {
}
