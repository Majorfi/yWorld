import	React, {ReactElement}	from	'react';
import	{AppProps}				from	'next/app';
import	{WithYearn}				from	'@yearn-finance/web-lib/contexts';
import	AppWrapper				from	'components/common/AppWrapper';

import	'../style.css';

function	MyApp(props: AppProps): ReactElement {
	return (
		<WithYearn
			options={{
				ui: {shouldUseThemes: false},
				web3: {shouldUseWallets: false}
			}}>
			<AppWrapper {...props} />
		</WithYearn>
	);
}

export default MyApp;
