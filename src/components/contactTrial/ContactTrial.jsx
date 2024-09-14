import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const ContactTrial = () => {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm('service_7tq78kk', 'template_hno68zu', form.current, {
				publicKey: 'NL_T6BRlNrL5wq_FD'
			})
			.then(
				() => {
					console.log('SUCCESS!');
				},
				error => {
					console.log('FAILED...', error.text);
				}
			);
	};
	return (
		<form ref={form} onSubmit={sendEmail}>
			<label>Name</label>
			<input type='text' name='user_name' />
			<label>Email</label>
			<input type='email' name='user_email' />
			<label>Message</label>
			<textarea name='message' />
			<input type='submit' value='Send' />
		</form>
	);
};
export default ContactTrial;
