
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from 'nanoid'
import * as Yup from "yup";

export default function ContactForm({ onAdd }) {
    
    const Validator = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().required("Required"),
    })
    
    const nameFieldId = nanoid();
    const numberFieldId = nanoid();


    const initialValues = {
        name: "",
        number: "",
    };

    const handleSubmit = (values, actions) => {
        onAdd({
            id: nanoid(),
            name: values.name,
            number: values.number,
        });
        console.log(values);
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Validator}
            onSubmit={handleSubmit}>
            <Form>
                <div>
                    <label htmlFor={nameFieldId} >Name</label>
                    <Field type="text" name="name" id={nameFieldId}></Field>

                    <ErrorMessage name="name" component="span" />
                </div>
                <div>
                    <label htmlFor={numberFieldId} >Number</label>
                    <Field type="text" name="number" id={numberFieldId}></Field>

                    <ErrorMessage name="number" component="span" />
                </div>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}