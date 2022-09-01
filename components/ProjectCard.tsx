import	React, {ReactElement}							from	'react';
import	axios											from	'axios';
import	useSWR											from	'swr';
import	type {TMetadata, TGithubReleases, TOverwrite}	from	'types/metadata.d';

const fetcher = async (path: string, url: string): Promise<TMetadata> => axios.get(path, {params: {url}}).then((res): any => res.data).catch((e): void => console.log(e));
const fetcherSimple = async (url: string): Promise<TGithubReleases[]> => axios.get(url).then((res): any => res.data).catch((e): void => console.log(e));

const	tagClassNames: any = {
	'Yield Farming': 'bg-up-only-green-600 text-white',
	'Data analytics': 'bg-metaverse-sunset-600 text-white',
	'Experimental Defi': 'bg-up-only-green-600 text-white',
	'Design': 'bg-tokyo-party-400 text-white',
	'Communication': 'bg-disco-salmon-600 text-white',
	'NFT': 'bg-tokyo-party-400 text-white',
	'Other': 'bg-neutral-400 text-white'
};

function	ProjectCard({
	url,
	tags,
	overwrite
}: {url: string, tags: string[], overwrite: TOverwrite}): ReactElement {
	const	{data: metadata} = useSWR(['/api/metadata', url], fetcher);
	const	{data: releases} = useSWR(
		metadata?.['git-url'] ? `https://api.github.com/repos/${metadata?.['git-url'].replaceAll('https://github.com/', '')}/releases` : undefined,
		fetcherSimple
	);

	return (
		<div className={'w-full'}>
			<a target={'_blank'} href={metadata?.url} className={'cursor-pointer'} rel={'noreferrer'}>
				<div className={'flex aspect-video w-full items-center justify-center bg-yearn-blue px-4'}>
					<h3 className={'text-center text-3xl font-bold text-neutral-0'}>
						{overwrite?.title ? overwrite?.title : metadata?.title || ''}
					</h3>
				</div>
			</a>
			<div className={'flex w-full flex-col p-6 pt-4'}>
				<div className={'flex flex-row gap-4 pb-4'}>
					{tags.map((tag): ReactElement => (
						<div key={tag} className={`py-1 px-2 text-xs font-bold ${tagClassNames[tag] as string}`}>
							{tag}
						</div>
					))}
				</div>
				<p className={'pb-4 text-neutral-500'}>{metadata?.description}</p>
				<div>
					<p className={'pb-2 font-mono text-xs text-neutral-500'}>
						{'url: '}&nbsp;
						<a target={'_blank'} href={metadata?.url} className={'cursor-pointer font-mono text-xs text-yearn-blue'} rel={'noreferrer'}>
							{(metadata?.url || '').replaceAll('https://', '').replace(/\/+$/, '')}
						</a>
					</p>
					<p className={'pb-2 font-mono text-xs text-neutral-500'}>
						{'git: '}&nbsp;
						<a target={'_blank'} href={overwrite?.['git-url'] ? overwrite?.['git-url'] : metadata?.['git-url']} className={'cursor-pointer font-mono text-xs text-yearn-blue'} rel={'noreferrer'}>
							{(overwrite?.['git-url'] ? overwrite['git-url'] : (metadata?.['git-url'] || '-')).replaceAll('https://', '').replace(/\/+$/, '')}
						</a>
					</p>
					<p className={'break-all font-mono text-xs text-neutral-500 '}>
						{'ipfs: '}
						<a target={'_blank'} href={`ipfs://${releases?.[0]?.name}`} className={'cursor-pointer font-mono text-xs text-yearn-blue'} rel={'noreferrer'}>
							{`${releases?.[0]?.name || '-'}`}
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}


export default ProjectCard;