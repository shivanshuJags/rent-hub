import { FormControl } from "@angular/forms";

export interface LoginFormType {
    email: FormControl<string | null>;
    password: FormControl<string | null>;
}

export interface RegisterFormType extends LoginFormType {
    name: FormControl<string | null>
}

export interface LoginForm {
    email: string;
    password: string;
}