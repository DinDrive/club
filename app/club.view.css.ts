namespace $.$$ {
	$mol_style_define($club, {
		font: {
			family: `"Ubuntu", Helvetica, Verdana, sans-serif`,
			size: '15px',
		},
		lineHeight: '1.42',

		Head: {
			padding: {
				left: '20px',
				right: '20px',
			},
		},

		Logo: {
			display: 'flex',
			flex: {
				direction: 'row',
			},
			align: {
				items: 'center',
			},
			gap: '0.5rem',
			textDecoration: 'none',
		},

		Logo_img: {
			width: '2rem',
			height: '2rem',
		},

		Logo_text: {
			font: {
				size: '1.3rem',
				weight: 'bold',
			},
		},

		Main: {
			display: 'grid',
			gridTemplateColumns: '250px auto',
			maxWidth: '1000px',
			margin: {
				left: 'auto',
				right: 'auto',
			},
			padding: {
				top: '10px',
				left: '20px',
				right: '20px',
				bottom: '50px',
			},
		},

		Sidebar: {
			boxShadow: 'none',
			background: {
				color: 'transparent',
			},
		},

		Content: {
			minWidth: '0px',
		},
	})
}
