import	React, {ReactElement}				from	'react';
import	{motion, Variants}					from	'framer-motion';
import	SocialCard							from	'components/SocialCard';

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

const networks = [
	['https://twitter.com/yearnfi', '@yearnfi', '/social-twitter.svg', '#1DA1F2', '#FFFFFF'],
	['https://github.com/yearn', 'yearn', '/social-github.png?1', '#000000', '#FFFFFF'],
	['https://medium.com/iearn', 'iearn', '/social-medium.png?1', '#F3F3F3', '#000000', 200],
	['https://gov.yearn.finance/', 'Governance', '/social-yearn.svg', '#FA3AA7', '#FFFFFF'],
	['https://discord.yearn.finance/', 'discord.yearn.finance', '/social-discord.svg', '#5865F2', '#FFFFFF'],
	['https://www.lensfrens.xyz/yearn.lens', '@yearn.lens', '/social-lens.svg', '#ABFE2C', '#00501E']
];


function	Index(): ReactElement {
	return (
		<main>
			<section className={'mb-28 flex flex-row items-center md:mb-50'}>
				<div className={'w-full'}>
					<div>
						<h2 className={'mb-10 text-3xl font-bold text-neutral-900'}>
							{'Social media'}
						</h2>
					</div>
					<div className={'grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'}>
						{networks?.map((project, i: number): ReactElement => (
							<motion.div
								key={project[0] as string}
								custom={i % 3}
								initial={'initial'}
								whileInView={'enter'}
								className={'flex flex-col justify-between bg-neutral-100'}
								variants={variants as Variants}>
								<SocialCard
									url={project[0] as string}
									name={project[1] as string}
									logo={project[2] as string}
									bgColor={project[3] as string}
									textColor={project[4] as string}
									width={(project[5] || 48) as number} />
							</motion.div>	
						))}
					</div>
				</div>
			</section>
		</main>
	);
}

export default Index;
