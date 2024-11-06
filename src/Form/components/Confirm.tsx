import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Box, Divider } from "@mui/material";
import { handleClick } from "../helper";
import { BaseFormProps, FormPages } from "../types";

interface ConfirmDetailsProps extends BaseFormProps {
    submitForm: (e: any) => void; 
}

export default function ConfirmDetails({ updatePage, formData, submitForm }: ConfirmDetailsProps) {
  const { firstName, lastName, email, contact, salary } = formData;

  return (
      <>
          <List disablePadding sx={{pt: 4}}>
              <ListItem>
                  <ListItemText primary="First Name" secondary={firstName.value} />
              </ListItem>
              <Divider component="li" />

              <ListItem>
                  <ListItemText primary="Last Name" secondary={lastName.value} />
              </ListItem>
              <Divider component="li" />

              <ListItem>
                  <ListItemText primary="Email" secondary={email.value} />
              </ListItem>
              <Divider component="li" />

              <ListItem>
                  <ListItemText primary="Contact Number" secondary={contact.value} />
              </ListItem>
              <Divider component="li" />

              <ListItem>
                    <ListItemText primary="Salary Range" secondary={salary.value} />
              </ListItem>
          </List>

      <Box component="div" sx={{ p: "10px 0 0" }}>
        <Button size="medium"
          onClick={() => handleClick(FormPages.SALARY, updatePage)}
          variant="outlined">Back</Button>
        <Button
          type="submit"
          onClick={submitForm}
          variant="contained">Register</Button>
      </Box>
    </>
  )
}