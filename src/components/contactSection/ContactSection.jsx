import { useForm } from 'react-hook-form';
import {
	StyledButton,
	StyledContainerLabelInput,
	StyledForm,
	StyledInput,
	StyledLabel,
	StyledTextArea,
	StyledTitle
} from './styles';
import { FORM_VALIDATION } from '../../constants/form_validation';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
	const form = useRef(); // Referencia al formulario para emailjs
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm();

	// Función para enviar el formulario
	const onSubmit = data => {
		emailjs
			.sendForm('service_7tq78kk', 'template_hno68zu', form.current, {
				publicKey: 'NL_T6BRlNrL5wq_FD'
			})
			.then(
				() => {
					console.log('SUCCESS!');
					alert('Email sent successfully!');
				},
				error => {
					console.log('FAILED...', error.text);
				}
			);
	};

	return (
		<>
			<StyledTitle id='contact'>[ CONTACT ]</StyledTitle>
			<StyledForm ref={form} onSubmit={handleSubmit(onSubmit)}>
				<StyledContainerLabelInput>
					<StyledLabel htmlFor='name'>Name</StyledLabel>
					<StyledInput
						type='text'
						id='user_name'
						name='user_name'
						{...register('user_name', FORM_VALIDATION.NAME)}
					/>
					{errors && errors.user_name && (
						<span>{errors.user_name.message}</span>
					)}
				</StyledContainerLabelInput>
				<StyledContainerLabelInput>
					<StyledLabel htmlFor='email'>Email</StyledLabel>
					<StyledInput
						type='text'
						id='user_email'
						name='user_email'
						{...register('user_email', FORM_VALIDATION.EMAIL)}
					/>
					{errors && errors.user_email && (
						<span>{errors.user_email.message}</span>
					)}
				</StyledContainerLabelInput>
				<StyledContainerLabelInput>
					<StyledLabel htmlFor='message'>Write your questions</StyledLabel>
					<StyledTextArea
						id='message'
						name='message'
						{...register('message', { required: 'Message is required' })}
					></StyledTextArea>
					{errors && errors.message && <span>{errors.message.message}</span>}
				</StyledContainerLabelInput>
				<StyledButton type='submit' value='SEND' />
			</StyledForm>
		</>
	);
};

export default ContactSection;
