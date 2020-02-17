import 'mocha';
import { expect } from 'chai';
import nodeMailer from 'nodemailer';
import MailService from '@/services/MailService';
import mail from '@test/data/mail';
import message from '@test/data/message';

describe('MailService.send', () => {

	// Instantiate the service
	const mailService: MailService = new MailService();
	let messageInfo: any;

	before('should send an mail.', async () => {
		// Create ethereal mail account
		const account: any = await nodeMailer.createTestAccount();
		// console.log({ smpt: account.smtp, user: account.user, pass: account.pass });
		const { host, port, secure } = account.smtp;
		const transporter = nodeMailer.createTransport({
			host,
			port,
			secure,
			auth: {
				user: account.user,
				pass: account.pass
			}
		});

		// Add the custom transporter
		(mailService as any).transporters.push({
			platformId: message.platform,
			transporter,
		});

		// Send a mail
		messageInfo = await mailService.directSend(message.platform, mail, mail.to, 'noId');
	});

	it('should send an mail, accepted by the receiver.', async () => {
		expect(messageInfo.accepted)
			.to.be.an('array')
			.to.have.lengthOf(1)
			.to.include(mail.to);

		expect(messageInfo.rejected)
			.to.be.an('array')
			.that.is.empty
			.to.not.include(mail.to);
	});

	it('should send an mail, from the given sender.', async () => {
		expect(messageInfo.envelope)
			.to.have.property('from', mail.from);
	});

});
