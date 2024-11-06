import * as React from "react";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { FormPages, FormProps, } from "../types";
import PageNavigation from "./PageNavigation";
import { handleChange, initialValues } from "../helper";

export default function PersonalInfo({updatePage, updateData, formData}: FormProps) {
    
    const isError = () => {
        const { firstName, lastName, email, contact } = initialValues;
        const fieldsToValidate = {firstName, lastName, email, contact };
    
        return Object.keys(fieldsToValidate)
                    .some(field => (formData[field].required && !formData[field].value) || formData[field].error);
    }
    return (
        <Grid container spacing={2}>
            <Grid size={12}>
                <TextField fullWidth 
                required
                name="firstName" 
                id="firstName" 
                label="First Name" 
                defaultValue={formData.firstName.value}
                onChange={(e) => handleChange(e, formData, updateData)}
                error={formData.firstName.error}
                helperText={(formData.firstName.error)? formData.firstName.helperText: ""}
                ></TextField>
            </Grid>  
            <Grid size={12}>
                <TextField fullWidth 
                    required
                    name="lastName" 
                    label="Last Name" 
                    defaultValue={formData.lastName.value}
                    onChange={(e) => handleChange(e, formData, updateData)}
                    error={formData.lastName.error}
                    helperText={(formData.lastName.error)? formData.lastName.helperText: ""}
                ></TextField>
            </Grid>
            <Grid size={12}>
            <TextField fullWidth 
                required
                name="email" 
                label="Email" 
                type="email"
                defaultValue={formData.email.value}
                onChange={(e) => handleChange(e, formData, updateData)}
                error={formData.email.error}
                helperText={(formData.email.error)? formData.email.helperText: ""}
                ></TextField>                
            </Grid>
            <Grid size={12}>
            <TextField fullWidth 
                name="contact" 
                label="Contact Number"
                defaultValue={formData.contact.value}
                onChange={(e) => handleChange(e, formData, updateData)}></TextField>                
            </Grid>
            <PageNavigation 
                nextPage={FormPages.SALARY} 
                updateFn={updatePage} 
                pageError={isError()}/>
        </Grid>
    
    )
        
}