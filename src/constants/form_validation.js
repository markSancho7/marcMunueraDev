const NAME = {
	required: 'El nombre es obligatorio',
	pattern: {
		value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ'-]+$/,
		message: 'el nombre no es valido'
	}
};

const EMAIL = {
	required: 'El email es obligatorio',
	pattern: {
		value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
		message: 'el email no es valido'
	}
};

const PASSWORD = {
	required: 'El password es obligatorio',
	pattern: {
		value: '',
		message: ''
	}
};

export const FORM_VALIDATION = { NAME, EMAIL, PASSWORD };
