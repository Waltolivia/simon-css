export function register(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    console.log('registering', email, password);
    localStorage.setItem('users', JSON.stringify([...users, { email, password }]))
}