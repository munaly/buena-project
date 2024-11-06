import { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import SalaryInfo from "./SalaryInfo";
import ConfirmDetails from "./Confirm";
import Box from "@mui/material/Box";
import { Step, StepLabel, Stepper, Typography } from "@mui/material";
import { FormPages, FormSchema } from "../types";
import { initialValues } from "../helper";

interface IProps {
}

interface IState {
    currentPage: FormPages
    formData: FormSchema
}

const formSteps = ["Personal Information", "Salary Information", "Confirmation"];

class RegistrationForm extends Component<IProps, IState> {

    constructor(props:any) {
        super(props);
        this.state = {
            currentPage : FormPages.PERSONALINFO,
            formData: initialValues
        }
    }

    handlePageChange = (page:FormPages) => {
        this.setState({currentPage: page});
    }

    handleDataChange = (data: any) => {
        console.log(data, "data");

        this.setState(prevData => ({
            formData: {
              ...prevData.formData,
              ...data
            }
          }));
          console.log('updated', this.state.formData);
    }
    
    render() {
        const page = this.state.currentPage;
        const currentStep = this.state.currentPage;
        
        return (
            <>
            <Box>
                <Typography align="left" variant="h5">Registration Form</Typography>
            </Box>
            <Stepper activeStep={currentStep} sx={{ py: 3 }} alternativeLabel>
            {
                formSteps.map((step) => (
                    <Step key={step}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
            ))}
          </Stepper>  
                {page == FormPages.PERSONALINFO && (
                        <PersonalInfo 
                        updatePage={this.handlePageChange} 
                        updateData={this.handleDataChange}
                        formData={this.state.formData}/>
                )}
                {page == FormPages.SALARY && (
                        <SalaryInfo 
                        updatePage={this.handlePageChange} 
                        updateData={this.handleDataChange}
                        formData={this.state.formData}/>
                )}
                {page == FormPages.CONFIRM && (
                        <ConfirmDetails 
                        updatePage={this.handlePageChange} 
                        formData={this.state.formData}/>
                )}
            </> 
        )
    }
}

export default RegistrationForm;