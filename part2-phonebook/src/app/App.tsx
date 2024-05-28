import { ChangeEvent, FormEvent, useState } from 'react';

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    ]);
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setNewName(event.target.value);
    };
    const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setNewPhone(event.target.value);
    };
    const handleAddNew = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newObject = {
            name: newName,
            number: newPhone,
            id: persons.length + 1,
        };
        setPersons(persons.concat(newObject));
        setNewName('');
        setNewPhone('');
    };

    return (
        <div>
            <h2 style={{ fontSize: '20px' }}>Phonebook</h2>
            <hr />
            <form onSubmit={handleAddNew}>
                <div>
                    name:{' '}
                    <input
                        value={newName}
                        style={{ border: '1px solid' }}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    number:{' '}
                    <input
                        value={newPhone}
                        style={{ border: '1px solid' }}
                        onChange={handlePhoneChange}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        style={{ border: '1px solid', cursor: 'pointer', padding: '2px 5px' }}
                    >
                        add
                    </button>
                </div>
            </form>
            <hr />
            <h2 style={{ fontSize: '20px' }}>Numbers</h2>
            <div>
                {persons.map((item) => (
                    <li key={item.name}>{`${item.name} ${item.number}`}</li>
                ))}
            </div>
        </div>
    );
};

export default App;
