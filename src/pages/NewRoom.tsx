import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg'; 

import { Button } from '../components/Button';

import { database } from '../services/firebase';

import '../styles/auth.scss';

export function NewRoom() {
    // Usuário que está logado na aplicação
    const { user } = useAuth();

    // Redirecionar usando o useHistory
    const history = useHistory();

    // Estado da nova sala que está sendo criada
    const [newRoom, setNewRoom] = useState('');

    // Estado da url do background da sala
    const [backgroundRoom, setBackgroundRoom] = useState('');

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        console.log(backgroundRoom);
        if(newRoom.trim() === '') { //trim() => remove espaços em branco da string
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom, 
            authorId: user?.id, 
            background: backgroundRoom
        });

        history.push(`/admin/rooms/${firebaseRoom.key}`);
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas e Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <input
                            type="text"
                            placeholder="(Opcional) Link do Background da Sala"
                            onChange={event => setBackgroundRoom(event.target.value)}
                            value={backgroundRoom}
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">Clique Aqui!</Link ></p>
                </div>
            </main>
        </div>
    );
};