import Image from 'next/image';
import	React, {ReactElement}							from	'react';

function	SocialCard({
	url,
	name,
	logo,
	bgColor,
	textColor,
	width = 48
}: {url: string, name: string, logo: string, bgColor: string, textColor: string, width: number}): ReactElement {

	return (
		<div className={'w-full'}>
			<a target={'_blank'} href={url} className={'cursor-pointer'} rel={'noreferrer'}>
				<div className={'flex aspect-video w-full flex-col items-center justify-center px-4'} style={{backgroundColor: bgColor}}>
					<Image src={logo} width={width} height={48} />
					<h3 className={'mt-8 text-center text-2xl font-bold'} style={{color: textColor}}>
						{name}
					</h3>
				</div>
			</a>
		</div>
	);
}


export default SocialCard;