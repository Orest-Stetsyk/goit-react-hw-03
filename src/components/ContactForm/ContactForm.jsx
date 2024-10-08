
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from 'nanoid'
import * as Yup from "yup";
import css from './ContactForm.module.css'

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
            <Form className={css.form}>
                <div className={css.container}>
                    <label className={css.label} htmlFor={nameFieldId} >Name</label>
                    <Field className={css.field} type="text" name="name" id={nameFieldId}></Field>

                    <ErrorMessage name="name" component="span" />
                </div>
                <div>
                    <label className={css.label} htmlFor={numberFieldId} >Number</label>
                    <Field className={css.field} type="text" name="number" id={numberFieldId}></Field>

                    <ErrorMessage name="number" component="span" />
                </div>
                
                <button className={css.btn} type="submit">Add contact</button>
                
            </Form>
        </Formik>
    )
}