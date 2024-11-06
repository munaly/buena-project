import { Component } from "react";
import Box from "@mui/material/Box";
import { Divider, Step, StepLabel, Stepper, Typography } from "@mui/material";
import PersonalInfo from "./PersonalInfo";
import SalaryInfo from "./SalaryInfo";
import ConfirmDetails from "./Confirm";
import { FormPages, FormSchema } from "../types";
import { initialValues } from "../helper";

interface IProps {
}

interface IState {
    currentPage: FormPages,
    formData: FormSchema,
    isFormSubmitting: boolean
}

const formSteps = ["Personal Information", "Salary Information", "Confirmation"];

const Success = () => {
    return (
        <>
            <Typography variant="h6" align="center" sx={{py:4}} color="success">
                Yay! You are successfully registered.
            </Typography>
        </>
    )
}

class RegistrationForm extends Component<IProps, IState> {

    constructor(props:any) {
        super(props);
        this.state = {
            currentPage : FormPages.PERSONALINFO,
            formData: initialValues,
            isFormSubmitting: false
        }
    }

    handlePageChange = (page:FormPages) => {
        this.setState({currentPage: page});
    }

    handleDataChange = (data: any) => {
        
        this.setState(prevData => ({
            formData: {
              ...prevData.formData,
              ...data
            }
          }));
          
    }

    handleSubmit = (e:any) => {
        const { formData } = this.state;
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
        this.setState({isFormSubmitting: true});
    }
    
    render() {
        const { currentPage, isFormSubmitting } = this.state;
        
        return (
            <>
            {!isFormSubmitting && (
                <>
                    <Box>
                        <Typography align="left" variant="h6" color="info">Registration Form</Typography>
                    </Box>
                    <Stepper activeStep={currentPage} sx={{ py: 3}} alternativeLabel>
                    {
                        formSteps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                    ))}
                    
                    </Stepper> 
                    <Divider component="div" />
                </>
            )}
            {isFormSubmitting && (
                <Success />
            )}
            
                {currentPage == FormPages.PERSONALINFO && (
                        <PersonalInfo 
                        updatePage={this.handlePageChange} 
                        updateData={this.handleDataChange}
                        formData={this.state.formData}/>
                )}
                {currentPage == FormPages.SALARY && (
                        <SalaryInfo 
                        updatePage={this.handlePageChange} 
                        updateData={this.handleDataChange}
                        formData={this.state.formData}/>
                )}
                {currentPage == FormPages.CONFIRM && !isFormSubmitting &&(
                        <ConfirmDetails 
                        updatePage={this.handlePageChange}
                        submitForm={this.handleSubmit} 
                        formData={this.state.formData}/>
                )}
            </> 
        )
    }
}

export default RegistrationForm;