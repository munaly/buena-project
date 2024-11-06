import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Box, Divider, Typography } from "@mui/material";
import { handleClick } from "../helper";
import { BaseFormProps, FormPages } from "../types";
import { useState } from "react";

export default function ConfirmDetails({updatePage, formData }: BaseFormProps) {
    const { firstName, lastName, email, contact, salary  } = formData;
    const [formSubmitting, setFormSubmitting] = useState(false);

    const Success = () => {
      return (
        <>
          <Typography variant="h2" align="center" sx={{ py: 4 }}> Yay! You are successfully registered!
          </Typography>
      
        </>
      )
    }
    const handleSubmit= (e:any) => {
        e.preventDefault();
        let formValues = {};
        Object.keys(formData).map((field) => {
          formValues = {
            ...formValues,
            [field]: formData[field].value
          };
          return formValues;
        });
        console.log(formValues, "formData");
        setFormSubmitting(true);
    }
    
    return (
        <> 
            {!formSubmitting && (
              <>
              <List disablePadding>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName.value}/>
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName.value}/>
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText primary="Email" secondary={email.value}/>
              </ListItem>
              <Divider component="li" />
              <ListItem>
                <ListItemText primary="Contact Number" secondary={contact.value}/>
              </ListItem>
              <Divider component="li" />
              <ListItem><ListItemText primary="Salary Range" secondary={salary.value}/></ListItem>   
            </List>

            <Box component="div" sx={{p: "10px 0 0"}}>
                <Button size="medium"
                        onClick={() => handleClick(FormPages.SALARY, updatePage)} 
                        variant="outlined">Back</Button>
                    <Button 
                        type="submit"
                        onClick={handleSubmit} 
                        variant="contained">Register</Button>
            </Box>
            </>
            )}
            
            
            {formSubmitting && <Success/>}
        </> 
        
    )
}