import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FormPages } from "../types";
import { handleClick } from "../helper";

interface PageNavigationProps {
    prevPage?: FormPages,
    nextPage: FormPages,
    updateFn:(page:FormPages) => void,
    pageError?: boolean
}
export default function PageNavigation ({prevPage, nextPage, updateFn, pageError=false}: PageNavigationProps) {
    const isDisabled = pageError ? true: false;
    
    return (
        <Box component="div" sx={{width: "100%"}}>
            { prevPage !== undefined && (
                <Button 
                size="medium"
                onClick={() => handleClick(prevPage, updateFn)} 
                variant="outlined">Back</Button>
            )}
            <Button 
                disabled={isDisabled}
                size="medium"
                onClick={() => handleClick(nextPage, updateFn)} 
                variant="contained">Next</Button>
        </Box>
    )
}