import Contact from "../Contact/Contact"
import css from './ContactList.module.css'

export default function ContactList({ lists,onDelete }) {
    return (
        <ul className={css.list}>
            {lists.map((list) => {
                return (
                        <li className={css.item} key={list.id}>
                            <Contact data={list} onDelete={onDelete} />
                        </li>
                )
            })}
        </ul>
    )
}