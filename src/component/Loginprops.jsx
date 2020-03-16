import React from 'react';

const Loginprops = ({loadingKlik}) => {
	if (loadingKlik) {
		return (
				<div>
				<button className="btn disabled">
						Loading ...
					</button>
				</div>
			)
	}
	return (
				<div>
					<button type="submit" className="btn waves-effect weves-ligth blue">
						Login
					</button>
				</div>
		)
}

export default Loginprops;