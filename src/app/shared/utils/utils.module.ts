import { NgModule } from '@angular/core';
import { PasswordComplexityValidator } from './validation/password-complexity-validator.directive';
import { MinValueValidator } from './validation/min-value-validator.directive';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/Observable';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        
    ],
    declarations: [
        PasswordComplexityValidator,
        MinValueValidator
    ],
    exports: [
        PasswordComplexityValidator,
        MinValueValidator
    ]
})
export class UtilsModule { }
