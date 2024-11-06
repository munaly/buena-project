import { FormPages, FormSchema, SalaryRangeType } from "./types";

export const SalaryRange:SalaryRangeType[] = [
    {range: "0-1000"},
    {range: "2000-3000",},
    {range: "3000-4000"},
    {range:  "> 4000"}
]


export const initialValues:FormSchema = {
    firstName: {
      value: '',
      error: false,
      required: true,
      validate: 'text',
      helperText: ''
    },
    lastName: {
      value: '',
      error: false,
      required: true,
      validate: 'text',
      helperText: ''
    },
    email: {
      value: '',
      error: false,
      required: true,
      validate: 'email',
      helperText: ''
    },
    contact: {
        value: '',
        error: false,
        validate: 'phone',
        helperText: ''
    },
    salary: {
      value: SalaryRange[0].range,
      error: false,
      required: true,
      helperText: ''
    }
  }
  

export const handleClick = (page:FormPages, fn:(page:FormPages) => void) => {
    fn(page);
}

export const handleChange= (e:any, formData:FormSchema, fn:(data: any) => void) => {
    const field = e.target.name;
    const error = !e.target.validity.valid;
    const helperText = getErrorMsg(e);
    const value = e.target.value;

    fn({[field]: {...formData[field], value, error, helperText}});    
}
    
export const getErrorMsg = (e:any) => {
    let errorMsg = '';
    const {valid, valueMissing, typeMismatch} = e.target.validity;
    if(!valid) {
        if(valueMissing) errorMsg = `${e.target.name} is required`;
        if(typeMismatch) errorMsg = `${e.target.name} is not valid`;
    }
    return errorMsg;
        
}
