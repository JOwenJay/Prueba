const validarEmail = require('./validadorEmail');

test(' validar un email válido', () => {
    const emailValido = 'ejemplo@email.com';
    expect(validarEmail(emailValido)).toBe(true);
});

test(' validar un email inválido', () => {
    const emailInvalido = 'correo_invalido.com';
    expect(validarEmail(emailInvalido)).toBe(false);
});