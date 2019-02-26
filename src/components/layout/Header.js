import React from 'react';

function Header() {
	return (
		<header id="header">
			<div className="navbar navbar-dark bg-dark shadow-sm">
				<div className="container d-flex justify-content-between">
					<a href="/smartsharing" className="navbar-brand d-flex align-items-center mr-auto">
						<strong>SmartSharing</strong>
						<span className="ml-1 badge badge-light">prototype</span>
					</a>
				</div>
			</div>
		</header>
	)
}

export default Header;
