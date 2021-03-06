import RequestMessage from '@/interfaces/RequestMessage';
import mongoose from 'mongoose';

const message: RequestMessage = {
	platform: 'testplatform',
	template: 'global-announcement',
	sender: {
		name: 'Test Sender',
		mail: 'sender@test.test',
	},
	payload: {
		title: 'Test Title',
		url: 'http://example.com',
	},
	languagePayloads: [
		{
			language: 'en',
			payload: {
				description: 'Test Description',
			},
		},
	],
	receivers: [
		{
			name: 'Test Receiver',
			mail: 'receiver@test.test',
			userId: mongoose.Types.ObjectId('4ede40c86362e0fb12000003'),
			payload: {
				name: 'Test Receiver',
			},
			language: 'en',
			preferences: {
				push: true,
				mail: true,
			},
		},
		{
			name: 'Test Receiver 2',
			mail: 'receiver2@test.test',
			userId: mongoose.Types.ObjectId('4ede40c86362e0fb12000002'),
			payload: {
				name: 'Test Receiver 2',
			},
			language: 'en',
			preferences: {
				push: true,
				mail: true,
			},
		},
	],
	seenCallback: [],
};

export default message;
