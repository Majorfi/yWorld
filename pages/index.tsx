import	React, {ReactElement}				from	'react';
import	{motion, Variants}					from	'framer-motion';
import	type {TOverwrite}					from	'types/metadata.d';
import	ProjectCard							from	'components/ProjectCard';

const variants = {
	enter: (i: number): unknown => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: i * 0.1,
			duration: 0.5,
			ease: 'linear'
		}
	}),
	initial: {
		y: 60,
		opacity: 0
	}
};


const projectList = [
	['https://yearn.finance', ['Yield Farming'], {title: 'Yearn Finance', 'git-url': 'https://github.com/yearn/yearn-exporter'}],
	['https://y.finance', ['Yield Farming', 'New'], {title: 'yCRV', 'git-url': 'https://github.com/yearn/yCRV'}],
	['https://buyback.yearn.finance', ['Yield Farming'], {title: 'YFI Buyback', 'git-url': 'https://github.com/yearn/yBuyback'}],

	['https://nftreasury.click', ['Yield Farming', 'NFT'], {title: 'NFTreasury', 'git-url': 'https://github.com/yearn/NFTreasury'}],
	['https://macarena.finance', ['Yield Farming'], {title: 'Macarena Finance', 'git-url': 'https://github.com/yearn/macarena-finance'}],
	['https://bowswap.finance/', ['Yield Farming'], {title: 'Bowswap', 'git-url': 'https://github.com/Majorfi/bowswap_ui'}],

	['https://sync.yearn.farm', ['Data analytics'], {title: 'Yearn Sync', 'git-url': 'https://github.com/yearn/ySync'}],
	['https://yearn.watch', ['Data analytics'], {title: 'Yearn Watch', 'git-url': 'https://github.com/yearn/yearn-watch'}],
	['https://yearn.vision', ['Data analytics'], {title: 'Yearn Vision', 'git-url': 'https://github.com/yearn/yearn-exporter'}],

	['https://brand.yearn.finance', ['Communication', 'Design'], {title: 'Yearn Brand', 'git-url': 'https://github.com/yearn/yearn-press-kit'}],
	['https://vaults.yearn.finance', ['Communication']],
	['https://blog.yearn.finance', ['Communication']],
	['https://docs.yearn.finance/', ['Communication'], {title: 'Yearn.finance Docs'}],
	['https://yearn.love', ['Communication']],
	['https://ape.tax', ['Experimental Defi'], {title: 'ape.tax', 'git-url': 'github.com/saltyfacu/ape-tax'}],
	['https://hack.yearn.farm', ['Other']],
	['https://web.ycorpo.com', ['Other']]
];

function	Index(): ReactElement {
	return (
		<main>
			<section className={'mb-28 flex flex-row items-center md:mb-50'}>
				<div className={'w-full'}>
					<div>
						<h2 className={'mb-10 text-3xl font-bold text-neutral-900'}>
							{'Built on Yearn'}
						</h2>
					</div>
					<div className={'grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'}>
						{projectList?.map((project, i: number): ReactElement => (
							<motion.div
								key={project[0] as string}
								custom={i % 3}
								initial={'initial'}
								whileInView={'enter'}
								className={'flex flex-col justify-between bg-neutral-100'}
								variants={variants as Variants}>
								<ProjectCard
									url={project[0] as string}
									tags={project[1] as string[]}
									overwrite={(project[2] || {}) as TOverwrite} />
							</motion.div>	
						))}
					</div>
				</div>
			</section>
		</main>
	);
}

export default Index;
