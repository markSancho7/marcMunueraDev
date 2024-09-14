import styled from 'styled-components';

const StyledTitle = styled.p`
	font-family: 'Mukta', sans-serif;
	margin-top: 80px;
	color: #9e9b00;
	font-weight: bold;
	font-size: 50px;
	text-align: center;
	display: block;
	margin-inline: auto;
	width: 300px;
	padding-top: 0px;
`;
const StyledContainerLabelInput = styled.div`
	display: flex;
	flex-direction: column;
`;
const StyledLabel = styled.label`
	font-family: 'Mukta', sans-serif;
	color: #9e9b00;
	font-weight: bold;
	font-size: 20px;
	text-align: center;
`;
const StyledInput = styled.input`
	background-color: transparent;
	color: white;
	border-radius: 5px;
	border: 2px solid white;
	height: 30px;
	width: 250px;
`;
const StyledTextArea = styled.textarea`
	background-color: transparent;
	color: white;
	border-radius: 5px;
	border: 2px solid white;
	height: 70px;
	width: 250px;
`;
const StyledForm = styled.form`
	color: white;
	width: 1200px;
	height: 350px;
	margin-inline: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;
const StyledButton = styled.input`
	font-family: 'Mukta', sans-serif;
	color: #9e9b00;
	font-weight: bold;
	font-size: 20px;
	text-align: center;
	background-color: transparent;
	width: 100px;
	border-radius: 5px;
	border: 4px solid #9e9b00;
`;
export {
	StyledTitle,
	StyledForm,
	StyledLabel,
	StyledInput,
	StyledContainerLabelInput,
	StyledTextArea,
	StyledButton
};
