import { useForm } from 'react-hook-form';
import { StyledTitle } from './styles';

const ContactSection = () => {
	const { handleSubmit, register } = useForm();
	return (
		<>
			<StyledTitle id='contact'>[CONTACT]</StyledTitle>
			<form onSubmit={handleSubmit(formSubmit)}>
				<div>
					<label htmlFor='name'>Name</label>
					<input type='text' id='name' name='name' {...register('name')} />
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='text' id='email' name='email' {...register('email')} />
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						name='password'
						{...register('password')}
					/>
				</div>
				<input type='submit' value='SEND' />
			</form>
		</>
	);
};

const formSubmit = (event, data) => {};
export default ContactSection;
