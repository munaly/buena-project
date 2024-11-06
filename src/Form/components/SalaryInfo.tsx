import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PageNavigation from "./PageNavigation";
import { FormPages, FormProps } from "../types";
import { handleChange, SalaryRange } from "../helper";

export default function SalaryInfo({updatePage, updateData, formData}: FormProps) {
    return (
        <Grid container spacing={2} sx={{pt: 4}}>
            <Grid size={12}>
                <FormControl>
                    <FormLabel>Salary Range</FormLabel>
                    <RadioGroup
                        defaultValue={formData.salary.value}
                        name="salary"
                        onChange={(e) => handleChange(e, formData, updateData)}
                    >
                        {
                            SalaryRange.map(val => (
                                <FormControlLabel
                                    key={val.range} 
                                    label={val.range} 
                                    value={val.range} 
                                    control={<Radio />}
                                />
                            ) )
                        }
                    </RadioGroup>
                </FormControl>
            </Grid>
            <PageNavigation 
                prevPage={FormPages.PERSONALINFO}
                nextPage={FormPages.CONFIRM}
                updateFn={updatePage}/>
        </Grid>

    )
}