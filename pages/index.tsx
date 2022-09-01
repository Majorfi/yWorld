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
	['https://yearn.finance', ['Yield Farming']],
	['https://next.yearn.watch', ['Data analytics']],
	['https://buyback.yearn.finance', ['Yield Farming']],
	['https://ape.tax', ['Experimental Defi']],
	['https://brand.yearn.finance', ['Design', 'Communication']],
	['https://vaults.yearn.finance', ['Communication']],
	['https://sync.yearn.farm', ['Data analytics']],
	['https://blog.yearn.finance', ['Communication']],
	['https://hack.yearn.farm', ['Other']],
	['https://nftreasury.click', ['NFT', 'Yield Farming']],
	['https://macarena.finance', ['Yield Farming']],
	['https://web.ycorpo.com', ['Other']],
	['https://bowswap.finance/', ['Yield Farming']],
	['https://docs.yearn.finance/', ['Other'], {title: 'Yearn.finance Docs'}],
	['https://yearn.love', ['Communication']],
	['https://yearn.vision', ['Data analytics'], {title: 'Yearn Vision'}]
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
