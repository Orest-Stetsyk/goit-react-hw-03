import Contact from "../Contact/Contact"


export default function ContactList({ lists,onDelete }) {
    return (
        <ul>
            {lists.map((list) => {
                return (
                        <li key={list.id}>
                            <Contact data={list} onDelete={onDelete} />
                        </li>
                )
            })}
        </ul>
    )
}