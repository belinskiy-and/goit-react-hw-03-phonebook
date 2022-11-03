import { Component } from "react";
import Box from "components/Box";
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Label, Input, InputError } from "./ContactForm.styled";

const initialValues = {
    name: '',
    number: '',  
}

const schema = yup.object().shape({
    name: yup.string().min(3).required(),
    number: yup.string().min(5).max(13).required(),
});

class ContactForm extends Component {

    onSubmit = (values, {resetForm}) => {
        this.props.onSubmit(values);
        resetForm();
    }

    render(){

        return(
            <>
                
                <Box 
                    width="full" 
                    border="normal"
                    p={4}
                    display="flex"
                >
                    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={this.onSubmit}>
                        <Form>
                            <Label htmlFor="name">
                                Name
                                <Input type="text" name="name" />
                                <InputError name="name" component="div" />                        
                            </Label>
                            <Label htmlFor="number">
                                Number
                                <Input type="tel" name="number" />
                                <InputError name="number" component="div" />
                            </Label>

                            <button type="submit">Add contact</button>
                        </Form>
                    </Formik>
                </Box>
            </>
        );
    }
}

export default ContactForm;