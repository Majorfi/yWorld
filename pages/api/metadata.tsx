import	urlMetadata				from	'url-metadata';

export default async function handler(req: any, res: any): Promise<void> {
	const	{url} = req.query;
	const	metadata = await urlMetadata(url);
	res.status(200).json(metadata);
	return;
}
