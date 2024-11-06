export enum FormPages {
    PERSONALINFO,
    SALARY,
    CONFIRM, 
    SUCCESS
}

export type SalaryRangeType = {
    range: string
}

export type FormSchema = Record<
  string,
  {
    value?: any;
    error?: boolean;
    required?: boolean;
    validate?:
      | "text"
      | "email"
      | "phone"
      | "zip"
      | "checkbox"
      | "select";
    helperText?: string;
  }
>;

export interface BaseFormProps {
    updatePage: (page:FormPages) => void, 
    formData: FormSchema
}

export interface FormProps extends BaseFormProps {
    updateData: (data:any) => void, 
}

