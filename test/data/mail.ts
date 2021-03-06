import Mail from '@/interfaces/Mail';

const mail: Mail = {
	from: 'sender@test.test',
	to: 'receiver@test.test',
	replyTo: 'reply@domain.tld',
	subject: 'Test Subject',
	text: 'Test Plaintext',
	html: '<html>Test HTML</html>',
};

export default mail;
