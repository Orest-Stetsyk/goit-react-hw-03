import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from './Contact.module.css'

export default function Contact({ data: { name, number, id}, onDelete }) {
    return (
        <div className={css.container}>
            <div className={css.wraper}>
                <p><IoPersonSharp className={css.icon} />{name}</p>
                <p><FaPhone className={css.icon} />{number}</p>
            </div>
             <button className={css.btn} onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}