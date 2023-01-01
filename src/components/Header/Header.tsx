import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import styles from './Header.module.css'
import logo from '../../assets/Logo.svg'

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
    const [title, setTitle] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onAddTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    function handleNewSendInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    const isNewTaskEmpty = title.length === 0;

    return (
        <header className={styles.header}>
            <img src={logo} alt="" />

            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input 
                    placeholder="Adcione uma nova tarefa" 
                    onChange={onChangeTitle} 
                    onInvalid={handleNewSendInvalid}
                    value={title}
                    required />
                <button type="submit" disabled={isNewTaskEmpty}>
                    Criar
                    <PlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}
